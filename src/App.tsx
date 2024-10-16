import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./page/main";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
