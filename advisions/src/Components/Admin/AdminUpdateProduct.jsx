import React, { useCallback, useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'

import { updateProduct, getProduct } from "../../Store/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../../Store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators"


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function AdminUpdateProduct() {
  var [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    baseprice: 0,
    discount: 0,
    finalprice: 0,
    des: "This is Sample Product",
    pic: ""
  })
  var { id } = useParams()
  var dispatch = useDispatch()
  var navigate = useNavigate()
  var allproducts = useSelector((state) => state.ProductStateData)
  var allmaincategories = useSelector((state) => state.MaincategoryStateData)
  var allsubcategories = useSelector((state) => state.SubcategoryStateData)

  function getInputData(e) {
    var { name, value } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function getInputFile(e) {
    var { name, files } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    e.preventDefault()
    var fp = parseInt(data.baseprice) - parseInt(data.baseprice) * parseInt(data.discount) / 100
    dispatch(updateProduct({
      id: id,
      name: data.name,
      maincategory: data.maincategory,
      subcategory: data.subcategory,
      baseprice: parseInt(data.baseprice),
      discount: parseInt(data.discount),
      finalprice: fp,
      des: data.des,
      pic: data.pic
    }))
    return navigate("/admin-products")
  }
  const getAPIData = useCallback(() => {
    dispatch(getProduct())
    dispatch(getProduct())
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    if (allproducts.length) {
      var item = allproducts.find((x) => x.id === parseInt(id))
      if (item) {
        setData((old) => {
          return {
            ...old, ...item
          }
        })
      }
    }
  }, [dispatch, id, allproducts])
  useEffect(() => {
    getAPIData()
  }, [getAPIData])
  return (
    <>
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
                  <input type="text" name="name" required value={data.name} onChange={getInputData} id="name" placeholder='Enter Product : ' className="form-control" />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label>Maincategory</label>
                    <select name="maincategory" required value={data.maincategory} onChange={getInputData} className='form-control'>
                      {
                        allmaincategories.slice(1).map((item, index) => {
                          return <option key={index} value={item.name}>{item.name}</option>
                        })
                      }
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label>Subcategory</label>
                    <select name="subcategory" required value={data.subcategory} onChange={getInputData} className='form-control'>
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
                    <input type="number" name="baseprice" required value={data.baseprice} onChange={getInputData} className='form-control' placeholder='Enter Base Price : ' />
                  </div>
                  <div className="col-md-6">
                    <label>Discount</label>
                    <input type="number" name="discount" required value={data.discount} onChange={getInputData} className='form-control' placeholder='Enter Discount : ' />
                  </div>
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <textarea name="des" rows="5" required onChange={getInputData} className='form-control' value={data.des}></textarea>
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
