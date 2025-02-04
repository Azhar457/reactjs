import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./components/profile";
import Project from "./components/project";
import Skill from "./components/skill";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Profile />
        <Project />
        <Skill />
        <Footer />
      </div>
    </>
  );
}

export default App;
