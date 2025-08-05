import React from 'react'
import style from "./Home.module.css"
import avatar from "../../assets/images/avataaars.svg"
export default function Home() {
  return (
    <>
      <div className={`${style.hight} ${style.mt} bg-green `}>
        <div className="content d-flex justify-content-center ">
          <div className='w-75 text-center mx-auto'>
            <img src={avatar} alt="" className='w-25' />
            <h1 className='text-uppercase fw-bolder text-white mt-4'>start Framework</h1>
            <div className='start-line-light'><i class="fa-solid fa-star"></i> </div>
            <p className='text-white mt-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
      </div>
    </>
  )
}
