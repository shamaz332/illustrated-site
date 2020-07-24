import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import HeaderComponent from "./Components/HeaderComponent";
import DetailComponent from "./Components/DetailComponent";
import AboutComponent from "./Components/AboutComponent";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className='App'>
      <NavbarComponent />
      <HeaderComponent />
      <DetailComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
