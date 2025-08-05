import React from 'react'
import style from "./About.module.css"
export default function About() {
  return (
    <>
      <div className={`bg-green ${style.content} d-flex align-items-center `}>
      <div className="container text-white ">
          <h1 className='text-center p-2 text-uppercase fw-bolder'>about component</h1>
          <div className="start-line-light"><i className="fa-solid fa-star"></i></div>
        <div className="row px-5 py-2  ">
          <div className="col-md-6 ps-5">
              <div className="item">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
            </div>
          </div>
          <div className="col-md-6 pe-5">
              <div className="item">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
