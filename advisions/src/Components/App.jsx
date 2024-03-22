import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Features from './Features'
import Team from './Team'
import FAQs from './FAQs'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Blog from './Blog'
import SingleCoursePage from './SingleCoursePage'
import Login from './Login'
import Signup from './Signup'

import AdminHome from './Admin/AdminHome'


import AdminMaincategory from './Admin/AdminMaincategory'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import AdminSubcategory from "./Admin/AdminSubcategory"
import AdminAddSubcategory from "./Admin/AdminAddSubcategory"
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import AdminFrontend from './Admin/AdminFrontend'
import AdminAddFrontend from './Admin/AdminAddFrontend'
import AdminUpdateFrontend from './Admin/AdminUpdateFrontend'
import AdminUsers from "./Admin/AdminUsers"
import Profile from './Profile'
import Updateprofile from './UpdateProfile'
import Confirmation from './Confirmation'
import AdminNewsletters from './Admin/AdminNewsletter'
import AdminContactUs from './Admin/AdminContactUs'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminCheckout from './Admin/AdminCheckout'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'

import ForgetPassword1 from './ForgetPassword1'
import ForgetPassword2 from './ForgetPassword2'
import ForgetPassword3 from './ForgetPassword3'
import Payment from './Payment'
import Newsletter from './Newsletter'


export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, []); // Empty dependency array to run only once on component mount

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Web section */}

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/features' element={<Features />} />
        <Route path='/team' element={<Team />} />
        <Route path='/faq' element={<FAQs />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/single-course-page' element={<SingleCoursePage/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
        <Route path='/update-profile' element={<Updateprofile/>} />
          <Route path='/confirmation' element={<Confirmation/>} />
          <Route path='/forgetpassword-1' element={<ForgetPassword1/>} />
          <Route path='/forgetpassword-2' element={<ForgetPassword2/>} />
          <Route path='/forgetpassword-3' element={<ForgetPassword3/>} />
          <Route path='/payment/:_id' element={<Payment/>} />


        {/* Admin Section */}
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-maincategory' element={<AdminMaincategory />} />
        <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>}/>
        <Route path='/admin-update-maincategory/:_id' element={<AdminUpdateMaincategory/>}/>
        <Route path='/admin-subcategory' element={<AdminSubcategory/>}/>
        <Route path='/admin-add-subcategory' element={<AdminAddSubcategory/>}/>
        <Route path='/admin-update-subcategory/:_id' element={<AdminUpdateSubcategory/>}/>
        <Route path='/admin-products' element={<AdminProduct/>}/>
        <Route path='/admin-add-product' element={<AdminAddProduct/>}/>
        <Route path='/admin-update-product/:_id' element={<AdminUpdateProduct/>}/>
        <Route path='/admin-frontends' element={<AdminFrontend/>}/>
        <Route path='/admin-add-frontend' element={<AdminAddFrontend/>}/>
        <Route path='/admin-update-frontend/:_id' element={<AdminUpdateFrontend/>}/>
        <Route path='/admin-users' element={<AdminUsers/>} />
          <Route path='/admin-newsletters' element={<AdminNewsletters/>} />
          <Route path='/admin-contact' element={<AdminContactUs/>} />
          <Route path='/admin-single-contact/:_id' element={<AdminSingleContact/>} />
          <Route path='/admin-checkout' element={<AdminCheckout/>} />
          <Route path='/admin-single-checkout/:_id' element={<AdminSingleCheckout/>} />
        
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
