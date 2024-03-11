import React, { useEffect, useState } from 'react';
import SideNavbar from './SideNavbar';

import { addProduct, getProduct } from "../../Store/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        description: "This is Sample Product",
        pic: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allproducts = useSelector((state) => state.ProductStateData);
    const allmaincategories = useSelector((state) => state.MaincategoryStateData);
    const allsubcategories = useSelector((state) => state.SubcategoryStateData);

    function getInputData(e) {
        const { name, value } = e.target;
        setData((old) => ({
            ...old,
            [name]: value
        }));
    }

    function getInputFile(e) {
        const { name, files } = e.target;
        setData((old) => ({
            ...old,
            [name]: files[0].name
        }));
    }

    function postData(e) {
        e.preventDefault();
        const fp = parseInt(data.baseprice) - parseInt(data.baseprice) * parseInt(data.discount) / 100;
        dispatch(addProduct({
            name: data.name,
            maincategory: data.maincategory,
            subcategory: data.subcategory,
            baseprice: parseInt(data.baseprice),
            discount: parseInt(data.discount),
            finalprice: fp,
            description: data.description,
            pic: data.pic
        }));
        navigate("/admin-products");
    }

    function getAPIData() {
        dispatch(getProduct());
        dispatch(getMaincategory());
        dispatch(getSubcategory());
        if (allmaincategories.length && allsubcategories.length) {
            setData((old) => ({
                ...old,
                maincategory: allmaincategories[1].name,
                subcategory: allsubcategories[1].name
            }));
        }
    }

    useEffect(() => {
        getAPIData();
    }, [dispatch, allproducts.length, allmaincategories.length, allsubcategories.length]);

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
                        <h5 className='bg-primary text-center p-2'>Products</h5>
                        <div className=''>
                            <form onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" required onChange={getInputData} id="name" placeholder='Enter Product : ' className="form-control" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 col-12">
                                        <label>Maincategory</label>
                                        <select name="maincategory" required onChange={getInputData} className='form-control'>
                                            {
                                                allmaincategories.slice(1).map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <label>Subcategory</label>
                                        <select name="subcategory" required onChange={getInputData} className='form-control'>
                                            {
                                                allsubcategories.slice(1).map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Base Price</label>
                                        <input type="number" name="baseprice" required onChange={getInputData} className='form-control' placeholder='Enter Base Price : ' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Discount</label>
                                        <input type="number" name="discount" required onChange={getInputData} className='form-control' placeholder='Enter Discount : ' />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Description</label>
                                    <textarea name="description" rows="5" required onChange={getInputData} className='form-control' value={data.description}></textarea>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Pic</label>
                                        <input type="file" name="pic" required onChange={getInputFile} className='form-control' />
                                    </div>
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
