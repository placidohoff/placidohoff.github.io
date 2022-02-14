import React from 'react'
import './Contact.css'
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'




export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact_form'>
        <div className='contact_form_control'>
          <label className='contact_label'>Name:</label>
          <input type='text' className='contact_input'></input>
        </div>
        <div className='contact_form_control'>
          <label className='contact_label'>Email:</label>
          <input type='text' className='contact_input'></input>
        </div>
        <div className='contact_form_control'>
          <label className='contact_label'>Message:</label>
          <textarea rows='15' className='contact_textarea'></textarea>
        </div>
        <div className='contact_form_control'>
          <div className='contact_send_bn'>Send Message</div>
        </div>
      </div>


      <div className='contact_icons'>
        <div className='contact_icon_control'>
          <AiOutlineMail
            className='contact_icon'
          />
          <div className='contact_icon_label'>
            placido.hoff@gmail.com
          </div>
        </div>
        <div className='contact_icon_control'>
          <AiOutlinePhone
            className='contact_icon'
          />
          <div className='contact_icon_label'>
            401-405-6301
          </div>
        </div>
        <div className='contact_icon_control'>
          <GoLocation
            className='contact_icon'
          />
          <div className='contact_icon_label'>
            Providence, RI, 02907
          </div>
        </div>
        <div className='contact_socials'>
          <AiFillFacebook
            className='contact_social_icon'
          />
          <AiFillTwitterSquare
            className='contact_social_icon'
          />
          <AiOutlineInstagram
            className='contact_social_icon'
          />
          <AiFillLinkedin
            className='contact_social_icon'
          />
          <AiFillYoutube
            className='contact_social_icon'
          />
        </div>
      </div>
    </div>
  )
}
