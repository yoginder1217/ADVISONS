import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNavbar() {
  return (
    <>
      <div className="conatiner-fluid py-3">
        <div className="container py-3">
          <div className="row g-5 align-item-center">
          <div className="list-group d-flex flex-column justify-content-center">
            <Link to="/admin-home" className="list-group-item list-group-item-action active" aria-current="true">
            <i className='bx bxs-user-account'></i><span className="link_name"> Admin</span>
            </Link>
            <Link to="/admin-frontends" className="list-group-item list-group-item-action"><i className='bx bx-user'></i><span className="link_name"> Front-End</span></Link>
            <Link to="/admin-users" className="list-group-item list-group-item-action"><i className='bx bx-user'></i><span className="link_name"> User</span></Link>
            <Link to="/admin-maincategory" className="list-group-item list-group-item-action"><i className='bx bx-category'></i><span className="link_name"> Maincategory</span></Link>
            <Link to="/admin-subcategory" className="list-group-item list-group-item-action"><i className='bx bx-category-alt' ></i><span className="link_name"> Subcategory</span></Link>
            <Link to="/admin-products" className="list-group-item list-group-item-action"><i className='bx bx-package'></i><span className="link_name"> Products</span></Link>
            <Link to="/admin-services" className="list-group-item list-group-item-action"><i className='bx bx-package'></i><span className="link_name"> Student Details</span></Link>
            <Link to="/admin-services" className="list-group-item list-group-item-action"><i className='bx bx-package'></i><span className="link_name"> Teacher Details</span></Link>
            <Link to="/admin-contacts" className="list-group-item list-group-item-action"><i className='bx bxs-contact'></i><span className="link_name"> Contact Us</span></Link>
            <Link to="/admin-checkouts" className="list-group-item list-group-item-action"><i className='bx bx-check-square'></i><span className="link_name"> Checkouts</span></Link>
            <Link to="/admin-newsletters" className="list-group-item list-group-item-action"><i className='bx bx-news'></i><span className="link_name"> Newsletters</span></Link>
             </div>
          </div>    
        </div>
      </div>
    </>
  )
}
