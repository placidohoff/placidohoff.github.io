import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useNavigate } from "react-router-dom";
import Drawer from '../Drawer/Drawer';

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const ShowDrawer = () => {
    return (
      <Drawer isOpen={open} onClose={() => setOpen(false)}>

        <div>
          <div className='drawer_head'>
            <h2>Placido's Porftolio</h2>

            <GrClose
              onClick={() => setOpen(false)}
              color='white'
              fontSize='2.5em'
              className='drawer_exit'
              style={{ background: 'white' }}
            />

          </div>
          <hr />
          <div className='drawer_nav'>
            <p className='drawer_nav_item' onClick={() => { navigate('/'); setOpen(false) }}>Home</p>
            <p className='drawer_nav_item' onClick={() => { navigate('/projects'); setOpen(false) }}>Projects</p>
            <p className='drawer_nav_item' onClick={() => { navigate('/resume'); setOpen(false) }}>Resume</p>
            <p className='drawer_nav_item' onClick={() => { navigate('/contact'); setOpen(false) }}>Contact</p>
          </div>
        </div>

      </Drawer>
    )
  }

  return (
    <>
      <ShowDrawer />
      <div className='header'>


        <div className='header__left'>
          <GiHamburgerMenu
            className='header__left_hamburger'
            color='white'
            fontSize='2.5em'
            onClick={() => setOpen(!open)}
          />
          <h2>Placido's Portfolio</h2>
        </div>
        <div className='header__right'>
          <div className='header__right_navitem'
            onClick={() => { navigate('/') }}
          >
            <p>Home</p>
          </div>
          <div className='header__right_navitem'
            onClick={() => { navigate('/projects') }}
          >
            <p>Projects</p>
          </div>
          <div className='header__right_navitem'
            onClick={() => { navigate('/resume') }}
          >
            <p>Resume</p>
          </div>
          <div className='header__right_navitem'
            onClick={() => { navigate('/contact') }}
          >
            <p>Contact</p>
          </div>
        </div>






      </div>
    </>
  )
}
