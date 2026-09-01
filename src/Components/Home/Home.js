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
          <span className='hero_icon_wrap' title='React'>
            <DiReact className='hero_icon' />
            <span className='hero_icon_tooltip'>React</span>
          </span>
          <span className='hero_icon_wrap' title='JavaScript'>
            <DiJavascript1 className='hero_icon' />
            <span className='hero_icon_tooltip'>JavaScript</span>
          </span>
          <span className='hero_icon_wrap' title='HTML5'>
            <RiHtml5Fill className='hero_icon' />
            <span className='hero_icon_tooltip'>HTML5</span>
          </span>
          <span className='hero_icon_wrap' title='Bootstrap'>
            <DiBootstrap className='hero_icon' />
            <span className='hero_icon_tooltip'>Bootstrap</span>
          </span>
          <span className='hero_icon_wrap' title='Node.js'>
            <DiNodejs className='hero_icon' />
            <span className='hero_icon_tooltip'>Node.js</span>
          </span>
          <span className='hero_icon_wrap' title='MongoDB'>
            <DiMongodb className='hero_icon' />
            <span className='hero_icon_tooltip'>MongoDB</span>
          </span>
          {/* <SiFirebase
              color="white"
              fontSize="5.5em"
            /> */}
          <span className='hero_icon_wrap' title='CSS3'>
            <FaCss3Alt
              className='hero_icon'
              style={{ fontSize: '3em', alignSelf: 'center' }}
            />
            <span className='hero_icon_tooltip'>CSS3</span>
          </span>
          <span className='hero_icon_wrap' title='Git'>
            <DiGit className='hero_icon' />
            <span className='hero_icon_tooltip'>Git</span>
          </span>
          <span className='hero_icon_wrap' title='Database'>
            <FaDatabase
              className='hero_icon'
              style={{ fontSize: '2.5em', alignSelf: 'center' }}
            />
            <span className='hero_icon_tooltip'>Database</span>
          </span>
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
