const NavBar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a className="logo" href="#hero">
          © Igor MS
        </a>
        <nav className="desktop">
          <ul></ul>
        </nav>
        <a className="contact-btn group">
          <div className="inner">
            <span> Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};
export default NavBar;
