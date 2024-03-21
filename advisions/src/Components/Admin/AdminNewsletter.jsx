import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import SideNavbar from './SideNavbar';

import { getNewsletter, deleteNewsletter } from "../../Store/ActionCreators/NewsletterActionCreators"

export default function AdminNewsletters() {
    var Newsletter = useSelector((state) => state.NewsletterStateData)
    var dispatch = useDispatch()
    var columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        { field: 'email', headerName: 'Email', width: 300 },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
            <Button onClick={() => {
              if (window.confirm("Are Your Sure You Want to Delete that Item :")) {
                dispatch(deleteNewsletter({ _id: row._id }))
              }
            }}>
                <i className='fa fa-trash'></i>
              </Button>,
          }
    ];

    var rows = []
    for (let item of Newsletter) {
        rows.push(item)
    }

    useEffect(() => {
        function getAPIData() {
            dispatch(getNewsletter())
        }

        getAPIData();
    }, [Newsletter.length, dispatch]);
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Newsletter </h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                getRowId={(row) => row._id}
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            // checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
