import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    var [data, setData] = useState({
        username: "",
        password: ""
    })
    var navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var response = await fetch("/user")
        response = await response.json()
        var item = response.find((x) => x.username === data.username && x.password === data.password)
        if (item) {
            localStorage.setItem("login", true)
            localStorage.setItem("username", item.username)
            localStorage.setItem("name", item.name)
            localStorage.setItem("userid", item.id)
            localStorage.setItem("role", item.role)
            if (item.role === "Admin")
                navigate("/admin")
            else
                navigate("/profile")
        }
        else
            alert("Invalid Username or Password!!!")
    }
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid pt-5 bg-primary hero-header">
                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Login</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                                    <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-lg-end">
                            <img className="img-fluid" src="assets/img/hero-img.png" alt="*" style={{ maxHeight: "300px" }} />
                        </div>
                    </div>
                </div>
            </div>
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
            {/* <!-- Login Start --> */}
            <section className="vh-100">
                <div className="container-fluid h-custom py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="*" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={postData}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                                        required onChange={getInputData} name="username" placeholder="Enter a valid username" />
                                    <label className="form-label" htmlFor="form3Example3">Username</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        required onChange={getInputData} name="password" placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="#" className="text-body">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Login Ends --> */}
        </>
    )
}
