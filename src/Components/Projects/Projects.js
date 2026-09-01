import React from 'react'
import './Projects.css'
import { PROJECTS } from '../../data/PROJECTS'
import FadeInSection from '../FadeInSection/FadeInSection'
import { TECH_ICONS, DEFAULT_TECH_ICON } from './techIcons'

export default function Projects() {
  return (
    <div className='projects'>
      <FadeInSection as='h2' className='section_heading'>Projects</FadeInSection>
      {
        PROJECTS.map((project, index) => (
          <ListProject
            key={project.name}
            project={project}
            delay={index * 80}
          />
        ))
      }
    </div>
  )
}

function ListProject({ project, delay }) {

  return (
    <FadeInSection className='listproject' delay={delay}>
      <div className='list_left'>
        <p className='list_left_title'>{project.name}</p>

        <img
          className='list_left_img'
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className='list_right'>
        <p className='list_right_title'>{project.name}</p>
        <p className='list_right_description'>{project.description}</p>
        {
          project.technologies &&
          <div className='tech_icon_row'>
            {
              project.technologies.map(tech => {
                const Icon = TECH_ICONS[tech] || DEFAULT_TECH_ICON
                return (
                  <span className='tech_icon' key={tech} title={tech}>
                    <Icon />
                    <span className='tech_icon_tooltip'>{tech}</span>
                  </span>
                )
              })
            }
          </div>
        }
        <div className='list_button_contain'>
          <div className='button_video list_button'>
            Video Example
          </div>
          <div 
            className='button_live list_button'
            onClick={() => window.open(project.link)}
          >
            See It Live
          </div>
        </div>
      </div>

    </FadeInSection>
  )
}


