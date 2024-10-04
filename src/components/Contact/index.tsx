import React from "react";

const Index: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mt-5 pt-5 ">
        <div className="col-lg-10 col-md-12 ">
          <div className="cardContact ">
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-md-9">
              <h1 className="text-white">Try me out, risk free!</h1>
              <span className="contactPara">
                If you’re not happy with the design after the first draft, I’ll
                refund your deposit, no questions asked
              </span>
            </div>
            <div className="col-md-3">
              <button className="Btn_Class">Contact</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
