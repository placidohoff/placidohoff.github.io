import React, { useState } from 'react'
import './Header.css'
import '../Drawer/Drawer.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import Drawer from '../Drawer/Drawer';
import { scrollToSection } from '../../utils/scrollToSection'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer isOpen={open} onClose={() => setOpen(false)}>

        <div>
          <div className='drawer_head'>
            <h2>Placido's Porftolio</h2>

            <AiOutlineCloseSquare
              onClick={() => setOpen(false)}
              // color='white'
              fontSize='2.5em'
              className='drawer_exit'
              // style={{ color: 'white' }}
            />

          </div>
          <hr />
          <div className='drawer_nav'>
            <p className='drawer_nav_item' onClick={() => { scrollToSection('home'); setOpen(false) }}>Home</p>
            <p className='drawer_nav_item' onClick={() => { scrollToSection('projects'); setOpen(false) }}>Projects</p>
            <p className='drawer_nav_item' onClick={() => { scrollToSection('resume'); setOpen(false) }}>Resume</p>
            <p className='drawer_nav_item' onClick={() => { scrollToSection('contact'); setOpen(false) }}>Contact</p>
          </div>
        </div>

      </Drawer>
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
            onClick={() => { scrollToSection('home') }}
          >
            <p>Home</p>
          </div>
          <div className='header__right_navitem'
            onClick={() => { scrollToSection('projects') }}
          >
            <p>Projects</p>
          </div>
          <div className='header__right_navitem'
            onClick={() => { scrollToSection('resume') }}
          >
            <p>Resume</p>
          </div>
          <div className='header__right_navitem'
            onClick={() => { scrollToSection('contact') }}
          >
            <p>Contact</p>
          </div>
        </div>






      </div>
    </>
  )
}
