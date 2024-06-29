import React from 'react'
import './Vegetable.css'
import image from '../../components/img/image (10).png'

function Vegetable() {
  return (
    <div className='Vegetable'>
        <div className="image__file">
          <div className="ilets">
            <h1 className='seven'>FRESH HARVEST BOX HAS <br /> GOT YOU COVERED</h1>
            <p className='box'>Our boxes are packed with delicious, nutritious vegetables, perfect <br /> for anyone looking to eat healthier or support local farmers. Order <br /> your box today and start enjoying the best that nature has to offer!</p>
            <input type="text" className='veg__inp' placeholder='+380()'/>
            <button className='veg__btn'>Recall</button>
          </div>
          <div className="pic">
          <img src={image} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Vegetable