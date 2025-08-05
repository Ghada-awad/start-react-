import React from 'react'
import image1 from "../../assets/images/poert1.png"
import image2 from "../../assets/images/port2.png"
import image3 from "../../assets/images/port3.png"
import style from "./portfolio.module.css"
export default function Portfolio() {

  return (
    <div className='mt-5'>
      
      <div className="container p-5 mt-5">
        <h2 className='mt-5 text-center text-uppercase h1 fw-bolder color-blue '>Portfolio component</h2>
        <div className='start-line-dark mb-3'><i className="fa-solid fa-star"></i> </div>
            <div className="row gy-3">
        <div className="col-md-4">
            <div className="item">
              <div className= {`${style.hover} position-relative`}> 
                <img  src={image1} alt="" className='w-100 rounded-2 ' />
                <div className={`${style.layer}`}></div>
                <div className={`${style.outlayer}`}>
                  <img src={image1} alt="" className={ `${style.outlayerImage}` } />
                </div>
                </div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="item">
              <div className= {`${style.hover} position-relative`}> 
                <img src={image2} alt="" className='w-100 rounded-2 ' />
                <div className= {`${style.layer}`}></div>
                </div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="item">
              <div className= {`${style.hover} position-relative`}> 
                <img src={image3} alt="" className='w-100 rounded-2 ' />
                <div className={`${style.layer}`}></div>
                </div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="item">
              <div className= {`${style.hover} position-relative`}> 
                <img src={image1} alt="" className='w-100 rounded-2 ' />
                <div className= {`${style.layer}`}></div>
                </div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="item">
              <div className= {`${style.hover} position-relative`}> 
                <img src={image2} alt="" className='w-100 rounded-2 ' />
                <div className= {`${style.layer}`}></div>
                </div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="item">
              <div className= {`${style.hover} position-relative`}> 
                <img src={image3} alt="" className='w-100 rounded-2 ' />
                <div className= {`${style.layer}`}></div>
                </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
