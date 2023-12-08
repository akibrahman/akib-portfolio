const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div className="">
            <h1 className="footer_title">Akib</h1>
            <span className="footer_subtitle">
              <span className="footer_auto_type"></span>
            </span>
          </div>
          <ul>
            <li>
              <a href="#services" className="footer_link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer_link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer_link">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer_socials">
            <a
              href="https://facebook.com/akib.rahmann"
              target="_akib"
              className="footer_social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
          </div>
        </div>
        <p className="footer_copy">
          &#169; Akib Rahman - All rights reserver 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
