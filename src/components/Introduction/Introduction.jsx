import React from 'react'
import './Introduction.css'
import green from '../../components/img/img vegetables.png'
import block from '../../components/img/blocks.png'
import baby from '../../components/img/img girl.png'
import blocks from '../../components/img/block (1).png'
import blockss from '../../components/img/block (2).png'

function Introduction() {
  return (
    <div className='Introduction'>
        <div className="cabbage">
          <div className="left">
            <h1 className='order'>TO ORDER YOUR VEGETABLE BUSKET, SIMPLY FOLLOW THESE EASY STEPS </h1>
            <div className="info__our">
            <p className='our'>Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home. </p>
            <p className='our'>Whether you're looking for a healthy  <br /> brsnack or a thoughtful gift, our fruit <br /> baskets are the perfect choice.</p>
            </div>
            </div>
            <div className="right">
              <img   src={green} alt="" />
            </div>
        </div>


        
            <div className="next">
              <img src={block} alt="" />
              <img className='baby' src={baby} alt="" />
              <h3   className='g-power'>3 EASY STEPS FOR BUYING <br />FRESH VEGETABLES</h3>
            </div>

            <div className="boss">
          <div className="pic">
            <img src={blocks} alt="" />
          </div>
          <div className="picc">
            <img src={blockss} alt="" />
          </div>
            </div>

    </div>
  )
}

export default Introduction