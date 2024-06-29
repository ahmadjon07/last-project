import React from 'react'
import './Advertisement.css'
import lox from '../../components/img/blocks (1).png'
import order from '../../components/img/btn (1).png'


function Advertisement() {
  return (
    <div className='Advertisement'>
          <div className="organic__vegetables">
            <img  src={lox} alt="" />
          </div>
              <img className='order' src={order} alt="" />
        
        
    </div>
  )
}

export default Advertisement