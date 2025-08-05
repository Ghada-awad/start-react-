import React from 'react'
import style from "./Contact.module.css"


export default function Contact() {
  return (
    <>
      <div className="container contact-content">
        <h2 className='color-blue text-center p-2 fs-1 text-uppercase fw-bolder'>conatct section</h2>
        <div className="start-line-dark mb-5"><i className="fa-solid fa-star"></i></div>
        <div className=" container form   w-50 ">
          <input type="text" id="userName" className={ ` ${style.formcontrol} form-control border-0 border-bottom  w-100 bg-transparent border-none py-3 my-5` } placeholder='userName' />
          <input type="text" id="userAge" className={` ${style.formcontrol}  form-control border-0 border-bottom  w-100 bg-transparent border-none py-3 my-5`} placeholder='userAge' />
          <input type="email" id="userEmail" className= {` ${style.formcontrol}  form-control border-0 border-bottom  w-100 bg-transparent border-none py-3 my-5`}  placeholder='userEmail' />
          <input type="password" id="userPassword" className='form-control border-0 border-bottom  w-100 bg-transparent border-none py-3 my-5' placeholder='userPassword' />
          <button className={ `btn ${style.btn} ${ style.btncolor} ms-2 mb-5 rounded-2 px-2 py-1 text-white `}>Send Message</button>
        </div>
      </div>
    </>
  )
}
