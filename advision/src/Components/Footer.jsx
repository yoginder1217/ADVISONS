import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="*index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  <span className="text-primary">AD</span>VISIONS
                </h1>
              </a>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>27,STPI,  Botanical Garden,
                Noida, India
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 8810316395
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 7078054645
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>officials@advisions-ard.com

              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="*">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="*">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="mailto:advisions.ard@gmail.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-google"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="http://www.google.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="http://www.linkedin.com/in/advisions-research-and-development-private-limited-advisions-ard-832a43193" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href="*">
                About Us
              </a>
              <a className="btn btn-link" href="*">
                Contact Us
              </a>
              <a className="btn btn-link" href="*">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="*">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="*">
                Career
              </a>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <a className="btn btn-link" href="*">
                Robotic Automation
              </a>
              <a className="btn btn-link" href="*">
                Machine learning
              </a>
              <a className="btn btn-link" href="*">
                Predictive Analysis
              </a>
              <a className="btn btn-link" href="*">
                Data Science
              </a>
              <a className="btn btn-link" href="*">
                Robot Technology
              </a>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="*#">
                  Advisions
                </a>
                , All Right Reserved.
                {/* <!-- This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. --> */}
                Designed By{" "}
                <a className="border-bottom" href="*">
                  Advisions Pvt Ltd.
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="*">Home</a>
                  <a href="*">Cookies</a>
                  <a href="*">Help</a>
                  <a href="*">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a
        href="/"
        className="btn btn-primary back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
