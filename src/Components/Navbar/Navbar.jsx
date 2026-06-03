// import React, { useEffect, useState } from "react";
// import { FiSun } from "react-icons/fi";
// import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
// import { IoMoonOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// const Navbar = () => {
//   const [isMenuActive, setIsMenuActive] = useState(false);
//   const [theme, setTheme] = useState("dark");
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };
//   const toggleMenu = () => {
//     setIsMenuActive(!isMenuActive);
//   };

//   return (
//     <header>
//       <nav className="flex between wrapper navbar">
//         <a href="" className="logo">
//           <span>AG</span>Animesh
//         </a>

//         {/* DESKTOP MENU */}
//         <ul className="flex gap-2 desktop-menu">
//           <li>
//             <a href="#" className="link">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="link">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#" className="link">
//               About Me
//             </a>
//           </li>
//           <li>
//             <a href="#" className="link">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#" className="link">
//               Testimonials
//             </a>
//           </li>
//           <li>
//             <a href="#" className="link">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//         <div className="flex gap-2 nav-action">
//           <a
//             href="#"
//             className="icon-container border-inverse"
//             onClick={toggleTheme}
//           >
//             {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
//           </a>
//           <a href="#" className="btn">
//             Let's Talk
//           </a>
//           <a href="#" className="hamburger" onClick={toggleMenu}>
//             {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
//           </a>
//         </div>

//         {/* MOBILE MENU */}
//         <ul
//           className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : null}`}
//         >
//           <li>
//             <Link to="/" className="link">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" className="link">
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/aboutme" className="link">
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className="link">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="testimonial" className="link">
//               Testimonials
//             </Link>
//           </li>
//           <li>
//             <Link to="/contactus" className="link">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <a href="#" className="btn">
//               Let's Talk
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header>
      <nav className="flex between wrapper navbar">
        {/* logo */}
        <Link to="/" className="logo">
          <span>AG</span>Animesh
        </Link>

        {/* DESKTOP MENU */}
        <ul className="flex gap-2 desktop-menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            
            <Link to="/services" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className="link">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contactme" className="link">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-2 nav-action">
          <button
            className="icon-container border-inverse"
            onClick={toggleTheme}
            style={{
              background: "none",
            }}
          >
            {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
          </button>

          <Link to="/contactme" className="btn">
            Let's Talk
          </Link>

          <button
            className="hamburger"
            onClick={toggleMenu}
          >
            {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul
          className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : ""}`}
        >
          
          <li>
            <Link to="/" className="link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="link" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className="link" onClick={closeMenu}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contactme" className="link" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn" onClick={closeMenu}>
              Let's Talk
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
