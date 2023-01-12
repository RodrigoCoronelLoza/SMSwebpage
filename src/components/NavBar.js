// import { useState, useEffect } from "react";
// import { Navbar, Container } from "react-bootstrap";
// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a class="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNav">
//         <ul class="navbar-nav">
//           <li class="nav-item active">
//             <a class="nav-link" href="#">
//               Home <span class="sr-only">(current)</span>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">
//               Features
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">
//               Pricing
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link disabled" href="#">
//               Disabled
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import useSticky from "./useSticky";
// import { ReactComponent as Hamburger } from "./../images/iconos/svg-hamburger-icon-11.jpg";
import "./NavBar.css";
// function NavBar() {
// export const NavBar = () => {
//   return (
//     <>
//       <Navbar className="nav_principal">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="nav_bar">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <Nav.Link href="#pricing">other</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  //   const [navSize, setnavSize] = useState("10rem");
  //   const [navColor, setnavColor] = useState("transparent");
  //   const listenScrollEvent = () => {
  //     window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
  //     window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", listenScrollEvent);
  //     return () => {
  //       window.removeEventListener("scroll", listenScrollEvent);
  //     };
  //   }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <nav
        ref={stickyRef}
        // className="navbar"
        className={classNames("navfex", { sticky })}
        // style={{
        //   backgroundColor: navColor,
        //   height: navSize,
        //   transition: "all 1s",
        // }}
      >
        <div className="container">
          <div className="logo">
            <img
              src={require("./../images/iconos/LOGO FINAL Positivo.png")}
              width="90"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img
              src={require("./../images/iconos/svg-hamburger-icon-11.jpg")}
              width="90"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/projects">PROJECTS</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`,
          }}
        />
      )} */}
    </>
  );
};

// export default NavBar;
