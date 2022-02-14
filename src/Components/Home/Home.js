import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { DiReact, DiJavascript1, DiBootstrap, DiNodejs, DiMongodb, DiGit } from 'react-icons/di'
import { FaDatabase } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { RiHtml5Fill } from 'react-icons/ri'
import { FaCss3Alt } from 'react-icons/fa'

export default function Home() {

  const navigate = useNavigate()

  return (
    <div className='home'>
      <div className='home__herobox'>
        <div className='herobox_head'>
          <h1>Placido Hoff</h1>
          <h4>Web Developer</h4>
          <hr />
        </div>
        <div className='herobox_icons_box'>
          <DiReact
            className='hero_icon'
          />
          <DiJavascript1
            className='hero_icon'
          />
          <RiHtml5Fill
            className='hero_icon'
          />
          <DiBootstrap
            className='hero_icon'
          />
          <DiNodejs
            className='hero_icon'
          />
          <DiMongodb
            className='hero_icon'
          />
          {/* <SiFirebase
              color="white"
              fontSize="5.5em"
            /> */}
          <FaCss3Alt
            className='hero_icon'
            style={{ fontSize: '3em', alignSelf: 'center' }}
          />
          <DiGit
            className='hero_icon'
          />
          <FaDatabase
            className='hero_icon'
            style={{ fontSize: '2.5em', alignSelf: 'center' }}
          />
        </div>
      </div>
      <div className='home_action_contain'>
        <></>
        <div className='home_action_bn'
          onClick={() => navigate('/projects')}
        >
          See My Projects
        </div>
        <></>
      </div>
    </div>
  )
}
