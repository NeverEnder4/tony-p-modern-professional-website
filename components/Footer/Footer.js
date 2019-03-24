import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <h5>Let's talk about your next project!</h5>
    <div className="footer__icons-container">
      <a href="#">
        <img
          src="/static/linkedin.svg"
          alt="linkedin icon"
          className="footer__icon"
        />
      </a>
      <a href="#">
        <img
          src="/static/github.svg"
          alt="github icon"
          className="footer__icon"
        />
      </a>
      <a href="#">
        <img
          src="/static/email.svg"
          alt="email icon"
          className="footer__icon"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
