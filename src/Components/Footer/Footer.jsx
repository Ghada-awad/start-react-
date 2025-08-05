import React from 'react'
import style from "./Footer.module.css"
export default function Footer() {
  return (
    <>
      <div className={`container-fluid text-white ${style.bgLightBlue}`}>
        <div className="row px-1 py-5 text-center">
          <div className="col-md-4  ">
            <div className="item py-4 ">
              <ul className='list-unstyled'>
                <li><h4>LOCATION</h4></li>
                <li>2215 John Daniel Drive</li>
                <li>Clark, MO 65243</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="item py-4">
                <h4>AROUND THE WEB</h4>
                  <ul className='list-unstyled d-flex justify-content-center gap-2  my-3'>
                    <li className='p-2 border border-1 border-white rounded-circle'><i className="fa-brands fa-facebook"></i></li>
                    <li className='p-2 border border-1 border-white rounded-circle'><i className="fa-brands fa-twitter"></i></li>
                    <li className='p-2 border border-1 border-white rounded-circle'><i className="fa-brands fa-linkedin-in"></i></li>
                    <li className='p-2 border border-1 border-white rounded-circle'><i className="fa-solid fa-globe"></i></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="item py-4">
              <h4>ABOUT FREELANCER</h4>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
    </div>
      <div className={`text-center ${style.bgDarkBlue }`}>
        <p className='py-3 mb-0 text-white'>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
