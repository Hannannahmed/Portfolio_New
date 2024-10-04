import React from "react";
import { FaHtml5, FaBootstrap, FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";

const Index: React.FC = () => {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 size={30} color="#E4552D" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={30} color="#0852E9" /> },
    { id: 3, name: "JavaScript", icon: <SiJavascript size={30} color="#F7E025" /> },
    { id: 4, name: "TypeScript", icon: <SiTypescript size={30 } color="#377CC8" /> },
    { id: 5, name: "React.js", icon: <FaReact size={30} color="#0BE1F3" />  },
    { id: 6, name: "React Native", icon: <SiReact size={30} color="#0BE1F3" /> },
    { id: 7, name: "Bootstrap", icon: <FaBootstrap size={30} color="#563D7C" /> },
    { id: 8, name: "GitHub", icon: <FaGithub size={30} /> },
  ];
  return (
    <div className="container mt-3" id="Skills">
      <div className="row justify-content-center">
        {skills.map((skill) => (
          <div key={skill.id} className="col-md-4 col-sm-4 col-6 mb-3">
            <div className="skill-btn btn d-flex flex-column align-items-center justify-content-center p-3">
              {skill.icon}
              <h6 className="mt-2">{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
