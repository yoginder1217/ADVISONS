import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFrontend } from '../Store/ActionCreators/FrontendActionCreators'

export default function About() { var [frontends, setFrontends] = useState([])
    var allfrontends = useSelector((state) => state.FrontendStateData)
    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFrontend())
    }, [dispatch]);

    useEffect(() => {
        console.log("Fetched Data:", allfrontends);
        if (allfrontends.length) {
            setFrontends(allfrontends.sort((x, y) => y._id - x._id).slice(0,1));
        }
        console.error();
    }, [allfrontends]);

    return (
        <>
            {/* <!-- Hero Start --> */}
            {
                frontends.map((item, index) =>{
                    console.log(item.des);
                    return <div key={index} className="container-fluid pt-5 bg-primary hero-header  mb-5" style={{background: `url(/assets/img/${item.pic})`, backgroundSize: "cover"}}>
                    <div className="container pt-5">
                        <div className="row g-5 pt-5">
                            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                                <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">AI.Tech</div>
                                <h1 className="display-4 text-white mb-4 animated slideInRight">{item.des}</h1>
                                <p className="text-white mb-4 animated slideInRight">Enhance Your Vision, Transform Your Life</p>
                                <a href="*" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">Read More</a>
                                <a href="*" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                            </div>
                            <div className="col-lg-6 align-self-end text-center text-lg-end">
                                <img className="img-fluid" src="assets/img/hero-img.png" alt="*" />
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Full Screen Search Start --> */}
            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: "rgba(20, 24, 62, 0.7)" }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: "600px" }}>
                                <input type="text" className="form-control bg-transparent border-light p-3"
                                    placeholder="Type search keyword" />
                                <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Full Screen Search End --> */}


    {/* <!-- About Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img">
                        <img className="img-fluid" src="assets/img/about-img.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                    <h1 className="mb-4">We Make Your Business Smarter with Artificial Intelligence</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                        labore lorem sit. Sanctus clita duo justo et tempor.</p>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                            <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                            <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <a className="btn btn-primary rounded-pill px-4 me-3" href="*">Read More</a>
                        <a className="btn btn-outline-primary btn-square me-3" href="*"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary btn-square me-3" href="*"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary btn-square me-3" href="*"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-primary btn-square" href="*"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Feature Start --> */}
    <div className="container-fluid bg-primary feature pt-5">
        <div className="container pt-5">
            <div className="row g-5">
                <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose Us</div>
                    <h1 className="text-white mb-4">We're Best in AI Industry with 10 Years of Experience</h1>
                    <p className="text-light mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed
                        stet no labore lorem sit. Sanctus clita duo justo et tempor</p>
                    <div className="d-flex align-items-center text-white mb-3">
                        <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check"></i>
                        </div>
                        <span>Diam dolor diam ipsum et tempor sit</span>
                    </div>
                    <div className="d-flex align-items-center text-white mb-3">
                        <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check"></i>
                        </div>
                        <span>Diam dolor diam ipsum et tempor sit</span>
                    </div>
                    <div className="d-flex align-items-center text-white mb-3">
                        <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check"></i>
                        </div>
                        <span>Diam dolor diam ipsum et tempor sit</span>
                    </div>
                    <div className="row g-4 pt-3">
                        <div className="col-sm-6">
                            <div className="d-flex rounded p-3" style={{background: "rgba(256, 256, 256, 0.1)"}}>
                                <i className="fa fa-home fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                    <p className="text-white mb-0">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex rounded p-3" style={{background: "rgba(256, 256, 256, 0.1)"}}>
                                <i className="fa fa-home fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                    <p className="text-white mb-0">Project Complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <img className="img-fluid" src="assets/img/feature.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-fluid bg-light py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Team</div>
                    <h1 className="mb-4">Meet Our Experienced Team Members</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <a className="btn btn-primary rounded-pill px-4" href="*">Read More</a>
                </div>
                <div className="col-lg-7">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="assets/img/team-1.jpg" alt=""/>
                                        <h5 className="mb-0">Boris Johnson</h5>
                                        <small>Founder & CEO</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="assets/img/team-2.jpg" alt=""/>
                                        <h5 className="mb-0">Adam Crew</h5>
                                        <small>Executive Manager</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-md-4">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="assets/img/team-3.jpg" alt=""/>
                                        <h5 className="mb-0">Kate Winslet</h5>
                                        <small>Co Founder</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="assets/img/team-4.jpg" alt=""/>
                                        <h5 className="mb-0">Cody Gardner</h5>
                                        <small>Project Manager</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="*"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


    {/* <!-- Newsletter Start --> */}
    <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid" src="assets/img/newsletter.png" alt=""/>
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
