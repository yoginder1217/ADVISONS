import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'

import { addSubcategory, getSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AddSubcategory() {
    var [data, setData] = useState({
        name: ""
    })
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var allSubcategories = useSelector((state) => state.SubcategoryStateData)
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var item = allSubcategories.find(x => x.name && x.name.toLowerCase() === data.name.toLowerCase())
        if (item) {
            alert("Subcategory is Already Exist!!!")
        }
        else {
            dispatch(addSubcategory({ name: data.name }))
            return navigate("/admin-subcategories")
        }
    }
    useEffect(() => {
        dispatch(getSubcategory())
    }, [dispatch])

    useEffect(() => {
        console.log(allSubcategories);
    }, [allSubcategories])
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid pt-5 bg-primary hero-header">
                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Admin</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                                    <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Admin</li>
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Subcategories</h5>
                        <div className=''>
                            <form onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" onChange={getInputData} id="name" placeholder='Enter Subcategory : ' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <button type='reset' className='btn btn-danger w-50'>Reset</button>
                                    <button className='btn btn-primary w-50' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
