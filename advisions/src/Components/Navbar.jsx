import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  var navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, []); // Empty dependency array to run only once on component mount


  function logout() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid sticky-top bg-primary">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link to="/" className="navbar-brand">
              <h1 className="text-white">
                <span className="text-dark">AD</span>VISIONS
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Services
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="*#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Our Work
                  </a>
                  <div className="dropdown-menu bg-light mt-2">
                    <Link to="/courses" className="dropdown-item">
                      Courses
                    </Link>
                    <Link to="/project" className="dropdown-item">
                      Projects
                    </Link>
                    {/* <Link to="/features" className="dropdown-item">
                      Features
                    </Link> */}
                    <Link to="/team" className="dropdown-item">
                      Our Team
                    </Link>
                    <Link to="/faq" className="dropdown-item">
                      FAQs
                    </Link>
                    {/* <Link to="/testimonial" className="dropdown-item">
                      Testimonial
                    </Link> */}
                  </div>
                </div>
                {/* <Link to="/admin" className="nav-item nav-link">Admin</Link> */}
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                {
                  localStorage.getItem("login") ?
                    <div className="nav-item dropdown">
                      <a href="/" className="nav-link dropdown-toggle text-dark" data-toggle="dropdown">{localStorage.getItem("username")} <i className="fa fa-user-cirle-o mt-1" aria-hidden="true"></i></a>
                      <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                        <Link to="/profile" className="dropdown-item">Profile</Link>
                        <Link to="/cart" className="dropdown-item">Cart</Link>
                        <button className="dropdown-item" onClick={logout}>Logout</button>
                      </div>
                    </div> :
                    <Link to="/login" className="nav-item nav-link">Login</Link>
                }
              </div>
              <button
                type="button"
                className="btn text-white p-0 d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}
