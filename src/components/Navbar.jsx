const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar({ menuOpen, setMenuOpen, onNavigate }) {
  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 md:px-10"
      onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
    >
      <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.035)] backdrop-blur-xl">
        <a href="#top" onClick={onNavigate} className="wordmark" aria-label="ITZFIZZ home">
          ITZFIZZ<span aria-hidden="true">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
          <a href="#contact" className="nav-cta">Let’s Talk <span aria-hidden="true">↗</span></a>
        </div>

        <button
          type="button"
          className="menu-toggle md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`menu-bar menu-bar-top ${menuOpen ? "is-open" : ""}`} />
          <span className={`menu-bar menu-bar-bottom ${menuOpen ? "is-open" : ""}`} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-menu md:hidden ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={onNavigate}>{label}<span aria-hidden="true">↗</span></a>
        ))}
        <a className="mobile-menu-cta" href="#contact" onClick={onNavigate}>Let’s Talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
