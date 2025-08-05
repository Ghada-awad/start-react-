import React from 'react'
import style from "./Navbar.module.css"
import '../../App.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className={ `${style.bg}  py-4 fixed-top `}>
          <div className='container  d-flex justify-content-between '>
            <h1><Link to="/" className='text-decoration-none text-white text-uppercase fs-2 fw-bolder'>Start Framework</Link></h1>
            <ul className='d-flex align-items-center gap-4 list-unstyled py-0 m-0' >
            <li className='py-0 my-0 '><NavLink className='text-decoration-none text-white text-uppercase fs-6 fw-bolder ' to="about">about</NavLink></li>
                <li className='py-0 my-0'><NavLink className='text-decoration-none text-white text-uppercase fs-6 fw-bolder ' to="portfolio">portfolio</NavLink></li>
                <li className='py-0 my-0'><NavLink className='text-decoration-none text-white text-uppercase fs-6 fw-bolder ' to="contact">contact</NavLink></li>
            </ul>
          </div>
    </div>
    </>
  )
}
