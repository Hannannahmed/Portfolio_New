import React, { useState } from "react";
import Project1 from "../../assets/Images/DZCARS.png";
import Project2 from "../../assets/Images/Zoo.png";
import Project3 from "../../assets/Images/Shoe.png";
import Project4 from "../../assets/Images/Asronomy.png";
import Project5 from "../../assets/Images/MotoHub.png";
import Project6 from "../../assets/Images/migerant.png";
import Project7 from "../../assets/Images/MobileApp.png";
import { FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import PrivacyPolicyModal from "../PrivacyPolicyModal";

const Index: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [modalShow, setModalShow] = useState(false); // State for modal visibility

  const handleClose = () => setModalShow(false); // Close handler
  const handleShow = () => setModalShow(true); 
  const Portfolio_content = [
    {
      heading: "MotoHub ",
      button: {
        btn_1: <SiTypescript size={30} color="#377CC8" />,
        btn_2: <SiReact size={30} color="#0BE1F3" />,
        btn_3: <FaCss3Alt size={30} color="#0852E9" />,
        btn_4: <SiJavascript size={30} color="#F7E025" />,
        btn_5: <FaBootstrap size={30} color="#563D7C" />,
        btn_6: <FaHtml5 size={30} color="#E4552D" />,
      },
      description:
        "A dynamic e-commerce platform built using TypeScript, offering car, bike, and truck parts. The front-end integrates APIs to handle product data and supports multiple languages (Arabic, Finnish, English) using i18n for internationalization. The responsive design ensures an optimized shopping experience across different languages.",
      Tech_Stack: <FaHtml5 size={30} color="#E4552D" />,
      Live_Link: "https://laga.developer-ma.com/",
      Image: Project5,
      CaseStudy: "View Project",
    },
    {
      heading: "MotoHub - Mobile App ",
      button: {
        btn_1: <SiReact size={30} color="#0BE1F3" />,
        btn_2: <SiJavascript size={30} color="#F7E025" />,
      },
      description:
        "MotoHub is a React Native application designed to help users find and manage car, bike, and truck parts. The app provides a user-friendly interface with search and filter options, detailed product information, and a smooth user experience.",
      Tech_Stack: <FaHtml5 size={30} color="#E4552D" />,
    
      Image: Project7,
      CaseStudy: "View Project",
      onClick: handleShow, // Add the click handler
    },
    {
      heading: "Migerant Smart ",
      button: {
        btn_1: <SiReact size={30} color="#0BE1F3" />,
        btn_2: <FaCss3Alt size={30} color="#0852E9" />,
        btn_3: <SiJavascript size={30} color="#F7E025" />,
        btn_4: <FaBootstrap size={30} color="#563D7C" />,
        btn_5: <FaHtml5 size={30} color="#E4552D" />,
      },
      description:
        "A modern web application built using React.js, designed to offer a seamless user experience. Migerant focuses on delivering dynamic content and an intuitive interface, ensuring high performance and scalability.",
      Tech_Stack: <FaHtml5 size={30} color="#E4552D" />,
      Live_Link: "https://migrantsmart.developer-ma.com/",
      Image: Project6,
      CaseStudy: "View Project",
    },
    {
      heading: "DZ Car Landing Page ",
      button: {
        btn_1: <SiReact size={30} color="#0BE1F3" />,
        btn_2: <FaCss3Alt size={30} color="#0852E9" />,
        btn_3: <SiJavascript size={30} color="#F7E025" />,
        btn_4: <FaBootstrap size={30} color="#563D7C" />,
        btn_5: <FaHtml5 size={30} color="#E4552D" />,
      },
      description:
        "A responsive and modern landing page designed for DZ Cas. Built using React to ensure high performance and scalability. The design focuses on user engagement, offering a clean and smooth user experience.",
      Tech_Stack: <FaHtml5 size={30} color="#E4552D" />,
      Live_Link: "https://dzcars.vercel.app/",
      Image: Project1,
      CaseStudy: "View Project",
    },
    {
      heading: "Astronomy",
      button: {
        btn_1: <FaHtml5 size={30} color="#E4552D" />,
        btn_2: <FaCss3Alt size={30} color="#0852E9" />,
        btn_3: <SiJavascript size={30} color="#F7E025" />,
        btn_4: <FaBootstrap size={30} color="#563D7C" />,
      },
      description:
        "A visually stunning static website focused on astronomy, featuring interactive content about planets, stars, and galaxies. Built with HTML, CSS, and JavaScript to provide users with a seamless experience while exploring the wonders of space.",
      Tech_Stack: "HTML, CSS, JavaScript",
      Live_Link: "https://astronomy-nu.vercel.app/",
      Image: Project4,
      CaseStudy: "View Project",
    },
    {
      heading: "Zoo ",
      button: {
        btn_1: <FaHtml5 size={30} color="#E4552D" />,
        btn_2: <FaCss3Alt size={30} color="#0852E9" />,
        btn_3: <SiJavascript size={30} color="#F7E025" />,
        btn_4: <FaBootstrap size={30} color="#563D7C" />,
      },
      description:
        "A static website for a zoo, built to provide information about various animals and visitor services. Developed using HTML, CSS, and JavaScript to create a user-friendly and visually engaging experience for zoo visitors.",
      Tech_Stack: "HTML, CSS, JavaScript",
      Live_Link: "https://zoo-33862.web.app/index.html",
      Image: Project2,
      CaseStudy: "View Project",
    },
    {
      heading: "Shoe Store",
      button: {
        btn_1: <FaHtml5 size={30} color="#E4552D" />,
        btn_2: <FaCss3Alt size={30} color="#0852E9" />,
        btn_3: <SiJavascript size={30} color="#F7E025" />,
        btn_4: <FaBootstrap size={30} color="#563D7C" />,
      },
      description:
        "A dynamic landing page designed for a shoe brand. This project features a fully functional authentication system, allowing users to log in and sign up. Built using JavaScript for interactivity and secure user authentication.",
      Tech_Stack: "HTML, CSS, JavaScript",
      Live_Link: "https://shoe-44e63.web.app/",
      Image: Project3,
      CaseStudy: "View Project",
    },
  ];
  const visibleItems = showMore
    ? Portfolio_content
    : Portfolio_content.slice(0, 3);

  return (
    <div className="container mt-5" id="Portfolio">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 mt-5">
          
          <h1 className="text-center">Portfolio</h1>
        </div>
        {visibleItems?.map((item, index) => (
          <div className="col-lg-10 col-md-12 mt-5" key={index}>
            <div
              className={`card cardProject ${
                index % 2 === 0 ? "firstCard" : "secondCard"
              }`}
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3>{item.heading}</h3>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <div className="btn_portfolio">{item.button.btn_1}</div>
                    <div className="btn_portfolio">{item.button.btn_2}</div>
                    {index === 1 ? null : (
                      <>
                        <div className="btn_portfolio">{item.button.btn_3}</div>
                        <div className="btn_portfolio">{item.button.btn_4}</div>
                        {index === 0 && (
                          <>
                            <div className="btn_portfolio">
                              {item.button.btn_5}
                            </div>
                            <div className="btn_portfolio">
                              {item.button.btn_6}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <p className="paraportfolio">{item.description}</p>
                  <a
                    href={item.Live_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                 <button
                    onClick={item.onClick}
                    className="readCaseStudy"
                  >
                    {item.CaseStudy}
                  </button>
                  </a>
                </div>
                <div className="col-md-6 mt-5">
                  <img src={item.Image} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-12 text-center mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn_ShowMore"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <PrivacyPolicyModal show={modalShow} handleClose={handleClose} />
    </div>
  );
};

export default Index;
