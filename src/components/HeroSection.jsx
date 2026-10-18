function HeroArt() {
  return (
    <div className="hero-art" role="img" aria-label="Illustration of an open book and growing ideas">
      <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><div className="art-label label-top">IDEAS INTO ACTION</div>
      <svg className="book-illustration" viewBox="0 0 560 440" aria-hidden="true">
        <path className="plant-stem" d="M389 325c7-48 4-86-13-124m14 75c27-23 43-42 54-70m-58 45c-25-11-43-27-57-51"/><path className="leaf leaf-a" d="M369 223c-2-27 10-44 35-51 2 27-10 44-35 51Z"/><path className="leaf leaf-b" d="M392 260c17-24 37-31 62-22-14 23-34 31-62 22Z"/><path className="leaf leaf-c" d="M373 254c-24-17-32-37-24-62 24 14 32 34 24 62Z"/>
        <path className="book-shadow" d="m104 313 165 62 183-59-163-72-185 69Z"/><path className="book-left" d="m93 194 172 62v122L93 315V194Z"/><path className="book-right" d="m265 256 188-65v124l-188 63V256Z"/><path className="book-page-left" d="m117 216 123 45m-123-23 123 44m-123-22 123 44"/><path className="book-page-right" d="m290 264 132-45m-132 69 132-45m-132 69 132-45"/><path className="book-spine" d="M265 256v122"/>
        <circle className="spark spark-a" cx="125" cy="106" r="7"/><circle className="spark spark-b" cx="432" cy="113" r="5"/><path className="spark-line" d="M158 81v21m-10-10h20m238 30v18m-9-9h18"/><rect className="floating-card" x="334" y="88" width="71" height="54" rx="9"/><path className="card-lines" d="M350 106h38m-38 12h27"/><circle className="card-dot" cx="390" cy="127" r="4"/>
      </svg>
      <div className="art-label label-bottom">LEARN · BUILD · GROW</div><div className="art-sticker">A future<br/>you can build<span>✳</span></div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero section-pad relative" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/>Proposed education &amp; technology foundation</div>
          <h1 className="text-balance">Empowering communities through <em>opportunity.</em></h1>
          <p className="hero-lede">Sri Surya Teja Foundation for Education &amp; Technology aims to make practical technology education, mentorship, scholarships, and digital learning more accessible.</p>
          <div className="hero-actions"><a className="button button-dark" href="#programs">Explore programs <span>↗</span></a><a className="text-link" href="#partnerships">Partner with us <span>↓</span></a></div>
          <div className="hero-note"><span className="note-dot"/>Learn. Build. Innovate. Empower.</div>
        </div>
        <HeroArt />
      </div>
      <div className="container hero-bottom"><span>Curiosity is a great place to start.</span><span className="scroll-mark">SCROLL TO EXPLORE <b>↓</b></span></div>
    </section>
  );
}
