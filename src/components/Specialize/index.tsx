import React from "react";

import Skills from "../Skill";

const Index: React.FC = () => {
  return (
    <div className="container">
      <div className="row    justify-content-center align-items-center">
        <div className="col-lg-7 ">
          <section className="specialization-section">
            <h2 className="text-start mt-5">I specialize in</h2>
            <div className="card-container">
              <div className="card1">
                <h3>1</h3>
                <h4>Front-End Development</h4>
                <p>
                  Specializing in creating responsive, user-friendly, and
                  visually engaging interfaces using HTML, CSS, JavaScript
                  ,React js ,TypeScript . I turn complex designs into
                  functional, accessible websites that deliver seamless user
                  experiences
                </p>
              </div>
              <div className="card2">
                <h3>2</h3>
                <h4>React.js & TypeScript</h4>
                <p>
                  Building robust, scalable web applications with React.js and
                  TypeScript. I ensure type safety, maintainable code, and
                  smooth integrations for enterprise-grade solutions.
                </p>
              </div>
              <div className="card3">
                <h3>3</h3>
                <h4>React Native Development</h4>
                <p>
                  Developing cross-platform mobile apps with React Native,
                  offering a native experience for both iOS and Android users.
                  Focused on delivering smooth performance and user-friendly
                  mobile solutions.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-5   ">
          <div className="">
          <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
