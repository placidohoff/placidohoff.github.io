import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_right'>
        <AiFillFacebook
          className='footer_icon'
        />
        <AiFillTwitterSquare
          className='footer_icon'
        />
        <AiOutlineInstagram
          className='footer_icon'
        />
        <AiFillLinkedin
          className='footer_icon'
        />
        <AiFillYoutube 
          className='footer_icon'
        />
      </div>

    </div>
  )
}
