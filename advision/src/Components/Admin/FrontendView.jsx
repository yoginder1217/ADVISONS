import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideNavbar from './SideNavbar'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { getFrontend, deleteFrontend } from "../../Store/ActionCreators/FrontendActionCreators"
import { useDispatch, useSelector } from 'react-redux';

export default function FrontendView() {
  var dispatch = useDispatch()
  var allfrontends = useSelector((state) => state.FrontendStateData)
  var navigate = useNavigate()
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'pic', headerName: 'Background Images', width: 130,renderCell: ({ row }) =>{
      return <img src={`/assets/img/${row.pic}`} style={{height:"100px",width:"100px"}} alt="" />
  }},
    { field: 'description', headerName: 'Description', width: 130 },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
        <Button onClick={() => {
          navigate("/admin-update-frontend/" + row.id)
        }}>
          <i className='fa fa-edit'></i>
        </Button>,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: ({ row }) =>
        <Button onClick={() => {
          dispatch(deleteFrontend({ id: row.id }))
        }}>
          <i className='fa fa-trash'></i>
        </Button>,
    }
  ];
  var rows = []
  if (allfrontends.length) {
    for (let item of allfrontends.slice(1, allfrontends.length))
      rows.push(item)
  }
  useEffect(() => {
    function getAPIData() {
      dispatch(getFrontend());
    }

    getAPIData();
  }, [dispatch]);

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
          <div className="col-md-9 col-12 py-4">
            <h5 className="bg-primary text-center p-2">Frontend Settings<Link to="/admin-add-frontend" className='text-dark'><span className='fa fa-plus float-end'></span></Link></h5>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
