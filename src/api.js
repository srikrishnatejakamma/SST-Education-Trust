const config = {
  baseUrl: import.meta.env.VITE_HEADLESS_API_URL || "",
  programsPath: import.meta.env.VITE_PROGRAMS_API_PATH || "/api/programs",
  inquiriesPath: import.meta.env.VITE_INQUIRIES_API_PATH || "/api/inquiries",
  publicToken: import.meta.env.VITE_HEADLESS_PUBLIC_TOKEN || "",
  timeoutMs: 8000,
};

function getEndpoint(path) {
  if (!config.baseUrl) return "";
  return new URL(path, config.baseUrl.endsWith("/") ? config.baseUrl : `${config.baseUrl}/`).toString();
}

async function request(url, options = {}) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), config.timeoutMs);
  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");
  if (config.publicToken) headers.set("Authorization", `Bearer ${config.publicToken}`);

  try {
    const response = await fetch(url, { ...options, headers, signal: controller.signal });
    if (!response.ok) throw new Error(`Headless API returned ${response.status}`);
    if (response.status === 204) return null;
    return response.json();
  } finally {
    window.clearTimeout(timer);
  }
}

function asCollection(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) {
    return payload.data.map((item) => item?.attributes ? { id: item.id, ...item.attributes } : item);
  }
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
}

export const headlessApi = {
  isConfigured: Boolean(config.baseUrl),

  async getPrograms() {
    const url = getEndpoint(config.programsPath);
    if (!url) return null;
    return asCollection(await request(url));
  },

  async submitInquiry(inquiry) {
    const url = getEndpoint(config.inquiriesPath);
    if (!url) throw new Error("Inquiry API is not configured.");
    return request(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: inquiry }),
    });
  },
};
