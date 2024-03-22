import React from 'react'

export default function Services() {
  return (
    <>
    {/* <!-- Hero Start --> */}
    <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">Our Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Our Services</li>
                        </ol>
                    </nav>
                </div>
                {/* <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="assets/img/hero-img.png" alt="*" style={{maxHeight: "300px"}}/>
                </div> */}
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Full Screen Search Start --> */}
    <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: "rgba(20, 24, 62, 0.7)"}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxWidth: "600px"}}>
                        <input type="text" className="form-control bg-transparent border-light p-3"
                            placeholder="Type search keyword"/>
                        <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Full Screen Search End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-fluid bg-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                            <h1 className="mb-4">Our Innovative Solutions for Your Business</h1>
                            <p className="mb-4">Elevate your business with personalized solutions crafted to precisely align with your requirements, maximizing your potential for success.</p>
                            <a className="btn btn-primary rounded-pill px-4" href="*">Read More</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-brain fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Advanced Generative AI Development</h5>
                                                <p>Train your dataset to generate original outputs such as images, text, or music using state-of-the-art generative AI techniques.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-graduation-cap fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Corporate Trainings</h5>
                                                <p>Boost team expertise with customized Corporate Training Solutions for colleges and startups. Enhance learning, drive innovation, and thrive in today's competitive industry.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-code fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Custom Web Application Development</h5>
                                                <p>Leverage our tailor-made services to address your specific industry needs, cater to your target audience, and enhance operational efficiency.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-brain fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">STEM Programs & ATL Lab Setup</h5>
                                                <p>Transform education with Revolutionizing Education, featuring STEM Programs and AI-Robotics Labs, empowering students for future tech challenges.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


    {/* <!-- Testimonial Start --> */
    /* <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
                    <h1 className="mb-4">What Say Our Clients!</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <a className="btn btn-primary rounded-pill px-4" href="*">Read More</a>
                </div>
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                    <div className="owl-carousel testimonial-carousel border-start border-primary">
                        <div className="testimonial-item ps-5">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg"
                                  alt="*" style={{width: "60px", height: "60px"}}/>
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item ps-5">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg"
                                   alt="*" style={{width: "60px", height: "60px"}}/>
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item ps-5">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg"
                                  alt="*"  style={{width: "60px", height: "60px"}}/>
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial End --> */}


    {/* <!-- Newsletter Start --> */}
    <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid" src="assets/img/newsletter.png" alt="*"/>
                </div>
                <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                    <h1 className="text-white mb-4">Let's subscribe the newsletter</h1>
                    <div className="position-relative w-100 mt-3 mb-2">
                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                            placeholder="Enter Your Email" style={{height: "48px"}}/>
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div>
                    <small className="text-white-50">Diam sed sed dolor stet amet eirmod</small>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter End --> */}
    </>
  )
}
