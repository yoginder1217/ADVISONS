import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseSinglePage() {
  return (
    <>
      {/* <!-- Course Single Page Start --> */}
      <div className="container-fluid bg-light py-5">
      <div className='course-intro mx-auto grid'>
          <div className='course-img'>
            <img src="/assets/img/React.jpg" alt="*" />
          </div>
          <div className='course-details'>
            <div className='course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block'>Category</div>
            <div className='course-head'>
              <h5>Course name</h5>
            </div>
            <div className='course-body'>
              <p className='course-para fs-18'>Description</p>
              <div className='course-rating flex'>
                <span className='rating-star-val fw-8 fs-16'>rating_star</span>
                <span className='rating-count fw-5 fs-14'>rating_count</span>
                <span className='students-count fs-14'>students</span>
              </div>

              <ul className='course-info'>
                <li>
                  <span className='fs-14'>Created by <span className='fw-6 opacity-08'>creator</span></span>
                </li>
                <li className='flex'>
                  <span>MDinfo</span>
                  <span className='fs-14 course-info-txt fw-5'>Last updated updated_date</span>
                </li>
                <li className='flex'>
                  <span>MDinfo</span>
                  <span className='fs-14 course-info-txt fw-5'>lang</span>
                </li>
                <li className='flex'>
                  <span>MDinfo</span>
                  <span className='fs-14 course-info-txt fw-5'>lang Auto</span>
                </li>
              </ul>
            </div>

            <div className='course-foot'>
              <div className='course-price'>
                <span className='new-price fs-26 fw-8'>$discounted_price</span>
                <span className='old-price fs-26 fw-6'>$actual_price</span>
              </div>
            </div>

            <div className='course-btn'>
              <Link to="/cart" className='add-to-cart-btn d-inline-block fw-7 bg-purple'>Add to cart
              </Link>
            </div>
          </div>
        </div>

        <div className='course-full bg-white text-dark'>
          <div className='course-learn mx-auto'>
            <div className='course-sc-title'>What you'll learn</div>
            <ul className='course-learn-list grid'>
              <li>
                <span className='fs-14 fw-5 opacity-09'>learnItem</span>
              </li>
            </ul>
          </div>

          <div className='course-content mx-auto'>
            <div className='course-sc-title'>Course content</div>
            <ul className='course-content-list'>
              <li>
                <span>contentItem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
      )
}