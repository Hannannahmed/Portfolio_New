import React from "react";

const Index: React.FC = () => {
  return (
    <div className="container mt-5 pt-5">
      <hr />
      <div className="row ">
        <div className="col-lg-6 col-md-12">
          <p className="footertext">Made with by me.</p>
        </div>
        <div className="col-lg-6 col-md-12 text-lg-end text-md-start">
          <p className="footertext ">
            Got a question?
            <a
              href="mailto:hannanahmed1563@gmail.com"
              className="text-decoration-none"
            >
              {" "}
              <span className="footeremail">hannanahmed1563@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
