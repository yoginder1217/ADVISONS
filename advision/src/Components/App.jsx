import React from 'react'
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
import Courses from './Courses'
import CoursePage from './CoursePage'
import AdminHome from './Admin/AdminHome'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Maincategory from './Admin/Maincategory'
import Subcategory from "./Admin/Subcategory"
import AddMaincategory from './Admin/AddMaincategory'
import AddSubcategory from "./Admin/AddSubcategory"
import UpdateMaincategory from './Admin/UpdateMaincategory'
import UpdateSubcategory from './Admin/UpdateSubcategory'
import Product from './Admin/Product'
import AddProduct from './Admin/AddProduct'
import UpdateProduct from './Admin/UpdateProduct'
import FrontendView from './Admin/FrontendView'
import AddFrontend from './Admin/AddFrontend'
import UpdateFrontend from './Admin/UpdateFrontend'
export default function App() {
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
        <Route path='/courses' element={<Courses />} />
        <Route path='/course-page' element={<CoursePage/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}/>

        {/* Admin Section */}
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin-maincategories' element={<Maincategory />} />
        <Route path='/admin-add-maincategory' element={<AddMaincategory/>}/>
        <Route path='/admin-update-maincategory/:id' element={<UpdateMaincategory/>}/>
        <Route path='/admin-subcategories' element={<Subcategory/>}/>
        <Route path='/admin-add-subcategory' element={<AddSubcategory/>}/>
        <Route path='/admin-update-subcategory/:id' element={<UpdateSubcategory/>}/>
        <Route path='/admin-products' element={<Product/>}/>
        <Route path='/admin-add-product' element={<AddProduct/>}/>
        <Route path='/admin-update-product/:id' element={<UpdateProduct/>}/>
        <Route path='/admin-frontends' element={<FrontendView/>}/>
        <Route path='/admin-add-frontend' element={<AddFrontend/>}/>
        <Route path='/admin-update-frontend/:id' element={<UpdateFrontend/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
