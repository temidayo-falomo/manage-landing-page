import React from 'react'
import './Footer.css'
import {AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
        <div className="footer-container">

        <p className='copyright-1'>Copyright 2020. All Rights Reserved</p>

            <div className="left-footer">
                <img src='./images/logo.svg' alt='' />
                <ul className="social-media">
                    <li><a href="/"><AiFillFacebook /></a></li>
                    <li><a href="/"><AiFillYoutube /></a></li>
                    <li><a href="/"><AiOutlineTwitter /></a></li>
                    <li><a href="/"><BsPinterest /></a></li>
                    <li><a href="/"><AiOutlineInstagram /></a></li>
                </ul>
            </div>

            <div className="middle-footer">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
                <ul>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Community</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="right-footer">
                <form action="submit">
                <input type='email' name='email' placeholder='Updates in your inbox...'  required /> 
                <button className='circle-btn' type='submit'>Go</button>   
                </form>
                <p className='copyright-2'>Copyright 2020. All Rights Reserved</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer