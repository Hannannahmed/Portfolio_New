import React from "react";
import logo from '../../assets/Images/logo.png'
const Index: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container p-2 ">
        <a
          className="navbar-brand"
          href="#"
          style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#583fbc" }}
        >
        <img src={logo} className="img_logo" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex gap-5 p-2 mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#Skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#Faqs">
                Faq's
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/923128955456"
            className="Btn_Class text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Index;
