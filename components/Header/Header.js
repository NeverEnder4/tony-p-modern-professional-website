import Link from 'next/link';
import './Header.scss';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav__menu-list">
        <li>
          <Link href="/about">
            <a className="nav__link">about</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a className="nav__link">work</a>
          </Link>
        </li>
        <li>
          <a href="#" className="nav__link">
            linkedin
          </a>
        </li>
        <li>
          <a href="#" className="nav__link">
            github
          </a>
        </li>
        <li>
          <a href="mailto:apettigrew.wsdev@gmail.com" className="nav__link">
            @me
          </a>
        </li>
      </ul>
      <a href="/" className="header__brand">
        <img
          src="/static/logo.svg"
          alt="Website logo"
          className="header__logo"
        />
        <div className="header__name">
          <h1>
            Tony Pettigrew <span>Full Stack Web Developer</span>
          </h1>
        </div>
      </a>
    </nav>
  </header>
);

export default Header;
