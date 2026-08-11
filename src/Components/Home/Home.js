import React from 'react'
import './Home.css'
import { DiReact, DiJavascript1, DiBootstrap, DiNodejs, DiMongodb, DiGit } from 'react-icons/di'
import { FaDatabase } from 'react-icons/fa'
import { RiHtml5Fill } from 'react-icons/ri'
import { FaCss3Alt } from 'react-icons/fa'
import FadeInSection from '../FadeInSection/FadeInSection'
import { scrollToSection } from '../../utils/scrollToSection'

export default function Home() {

  return (
    <div className='home'>
      <FadeInSection className='home__herobox'>
        <div className='herobox_head'>
          <h1>Placido Hoff</h1>
          <h2 className='herobox_tagline'>Web Developer</h2>
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
      </FadeInSection>
      <FadeInSection className='home_action_contain' delay={150}>
        <></>
        <div className='home_action_bn'
          onClick={() => scrollToSection('projects')}
        >
          See My Projects
        </div>
        <></>
      </FadeInSection>
    </div>
  )
}
