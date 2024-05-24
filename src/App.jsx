import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
// import About from "./pages/about";
// import NavBar from "./components/navBar";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
