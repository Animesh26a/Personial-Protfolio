import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Headline from "./Components/Headline/Headline";
import Services from "./Components/Services/Services";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Plans from "./Components/Plans/Plans";
import Testimonial from "./Components/Testimonial/Testimonial";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Headline />
                <Services />
                <AboutMe />
                <Projects />
                <Headline />
                <Education />
                <Plans />
                <Headline />
                <Testimonial />
                <ContactMe />
                <Headline />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
                <Headline />
                <Plans />
              </>
            }
          />
          <Route
            path="/aboutme"
            element={
              <>
                <AboutMe />
                <Headline />
                <Education />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Projects />
              </>
            }
          />
          <Route
            path="/testimonial"
            element={
              <>
                <Testimonial />
              </>
            }
          />
          <Route
            path="/contactme"
            element={
              <>
                <ContactMe />
              </>
            }
          />
          {/* <Headline />
          <Services />
          <AboutMe />
          <Projects />
          <Headline />
          <Education />
          <Plans />
          <Headline />
          <Testimonial />
          <ContactMe />
          <Headline /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
