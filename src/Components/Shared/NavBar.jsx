import "../../Css/structure.css";

const NavBar = () => {
  return (
    <div className="w-[90%] mx-auto">
      <header className="" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Akib Rahman
          </a>
          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list ">
              <li className="nav_item">
                <a href="#home" className="nav_link active_link">
                  <i className="uil uil-estate nav_icon"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav_icon"></i> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file-alt nav_icon"></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon"></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon"></i> Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-comment-message nav_icon"></i> Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav_close" id="nav-close"></i>
          </div>
          {/* <div className="nav_btns">
            <i className="uil uil-moon change_theme" id="theme-button"></i>
            <div className="nav_toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div> */}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
