import React from "react";

const Index: React.FC = () => {
  const faqs = [
    {
      question: "Do you specialize solely in web development?",
      answer: "Yes, my services are focused on web development, encompassing responsive designs and user-friendly interfaces tailored to meet clients' needs.",
    },
    {
      question: "Do you create custom websites?",
      answer: "Absolutely! I develop customized websites that cater to the specific requirements of each client, ensuring their unique vision is brought to life.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in Front-end development using React.js, Next.js, and TypeScript, along with experience in API integration and mobile app development using React Native.",
    },
    {
      question: "Can you help improve existing websites or apps?",
      answer: "Yes, I can help with improving the design, performance, and functionality of existing websites or apps. Whether it’s optimizing the user interface, adding new features, or resolving technical issues, I’m here to assist with enhancements.",
    },
    {
      question: "Do you offer SEO (Search Engine Optimization) services?",
      answer: "Yes, I focus on making websites SEO-friendly to enhance their online visibility and increase traffic, helping clients reach their target audience effectively.",
    },
  ];

  return (
    <div className="container mt-5"  id="Faqs">
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-lg-5 col-md-6">
          <p className="faqshead1">Faq</p>
          <h1 className="FaqsHEading">Frequently Asked</h1>
          <h1 className="questions">Questions</h1>
          <p className="FaqsPara">If you have any other questions, you can contact me by email</p>
          <a href="mailto:hannanahmed1563@gmail.com" className="text-decoration-none">
            <span className="EmailFqs">hannanahmed1563@gmail.com</span>
          </a>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
