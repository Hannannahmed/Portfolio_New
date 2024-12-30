import React from "react";
import Avatar from "../../assets/Images/Developer.png";
import { FaCloudDownloadAlt, FaLinkedin } from "react-icons/fa";

const Index: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center mt-5 pt-5">
        <div className="col-lg-5 col-md-12 mt-4">
          <div className="d-flex align-items-center gap-4">
            <div>
              <img src={Avatar} width={50} alt="" />
            </div>
            <div>
              <h3>Let's build it together.</h3>
            </div>
          </div>
          <div className="d-flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/abdul-hannan-ahmed"
              className="btn_Linkdin text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn <FaLinkedin size={20} />
            </a>

            <a
              href="/Hannan-Web-Developer.pdf"
              className="btn_Linkdin text-decoration-none"
              download="Abdul_Hannan_Ahmed_Resume.pdf"
            >
              Download Resume{" "}
              <span>
                <FaCloudDownloadAlt size={20} />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 mt-4">
          <div className="cardContact p-4 ">
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                <h4 className="text-white">Try me out, risk free!</h4>
                <span className="contactPara">
                  Let's build something great together
                </span>
              </div>
              <div className="col-md-4 mt-4">
                <a
                  href="tel:+923128955456"
                  className="Btn_Class text-decoration-none"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
