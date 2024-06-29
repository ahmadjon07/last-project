import React from 'react'
import './Header.css'
import logo from '../../components/img/logo.png'
import cart from '../../components/img/shopping-cart.png'
import followers from '../../components/img/block.png'
import btn from '../../components/img/btn.png'
import girl from '../../components/img/image 1.png'
import block from '../../components/img/block (3).png'
import cabbage from '../img/cabbage.png'

function Header() {
  return (
    <div className='Header'>
      <div className="header__head">
      <ul className='links'>
        <li className='word'><a href="#">How It Works</a></li>
        <li className='word'><a href="#">Vegetables</a></li>
        <li className='word'><a href="#">Contacts</a></li>
      </ul>
      <div className="logo"><a href="#"><img src={logo} alt="" /></a></div>
      <div className="cart">
<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <img src={cart} alt="" />
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5 text-dark" id="exampleModalLabel">YOUR ORDER</h3>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
      <div className="wrap">
      <div className="header__left">
        <div className="followers"><img src={followers} alt="" /></div>
        <h1>ORGANIC VEGETABLES TO YOUR DIET TODAY!</h1>
        <p>Our expertly curated vegetable baskets are made with the freshest, highest quality vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality vegetables in expertly curated vegetable baskets delivered to you.</p>
        <div className="shop"><img src={btn} alt="" /></div>
        </div>
        <div className="header__right">
          <div className="girl"><img src={girl} alt="" /></div>
          <div className="block"><img src={block} alt="" /></div>
        </div>
    </div>
      </div>
  )
   
}

export default Header