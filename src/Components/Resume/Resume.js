import React, { useState } from 'react'
import './Resume.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { RESUME } from '../../data/RESUME'
import FadeInSection from '../FadeInSection/FadeInSection'

export default function Resume() {
  return (
    <>
      <FadeInSection as='h2' className='section_heading'>Resume</FadeInSection>

      <div className='resume mt-5'>

        <FadeInSection className='resume_head'>
          <h3 className='resume_title'>{RESUME.name}</h3>
          <div className='resume_head_box'>
            {
              RESUME.head.map(header => (
                <>
                  <div className='head_bullet'>
                    &bull;
                  </div>
                  <div className='head_item'>
                    {header}
                  </div>


                </>
              ))
            }
            <div className='head_bullet'>
              &bull;
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className='resume_summary' delay={80}>
          <div className='summary_head_contain'>
            <hr className='section_divider' />
            <h3 className='resume_section_head'>Professional Summary</h3>
            <hr className='section_divider' />
          </div>
          <div className='summary_body'>
            {RESUME.summary}
          </div>
        </FadeInSection>

        <FadeInSection className='resume_skills' delay={80}>
          <div className='summary_head_contain'>
            <hr className='section_divider' />
            <h3 className='resume_section_head'>Skills</h3>
            <hr className='section_divider' />
          </div>

          <div className='skills_body'>

            {RESUME.skills.map(skill => (<div className='skills_item' key={skill}>{skill}</div>))}

          </div>
        </FadeInSection>


        <FadeInSection className='resume_work_history' delay={80}>
          <div className='summary_head_contain'>
            <hr className='section_divider' />
            <h3 className='resume_section_head'>Work History</h3>
            <hr className='section_divider' />
          </div>
          <div className=''>
            {RESUME.workHistory.map((work, index) => (
              <WorkHistory
                work={work}
                key={`${work.name}-${work.dates}`}
                delay={index * 60}
              />
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className='resume_education' delay={80}>
          <div className='summary_head_contain'>
            <hr className='section_divider' />
            <h3 className='resume_section_head'>Educaion</h3>
            <hr className='section_divider' />
          </div>
          <div className='resume_education_container'>
            {
              RESUME.education.map(school => (
                <EducationItem
                  school={school}
                  key={school.school}
                />
              ))
            }
          </div>
        </FadeInSection>

      </div>
    </>
  )
}

function WorkHistory({ work, delay }) {
  const [showMore, setShowMore] = useState(false)
  return (
    <FadeInSection
      className='work_history'
      delay={delay}
      onClick={() => setShowMore(!showMore)}
    >
      <div className='work_history_head'>
        <p className='work_location'>{work.location}</p>
        <div className='work_head'>
          <p className='work_head_position'>{work.position}&nbsp;({work.name})</p><p>{work.dates}</p>
        </div>
      </div>
      <div className='work_history_body'>
        {
          showMore ?
            <>
              {
                work.roles.map(role => (
                  <div className='work_body_role'>
                    <div>&bull; &nbsp;</div><div>{role}</div>
                  </div>
                ))
              }
              <p style={{ marginTop: '20px' }}>Click to minimize...</p>
            </>


            :
            <p>Click to see more details...</p>

        }
      </div>
    </FadeInSection>
  )
}

function EducationItem({ school }) {
  return (
    <div className='education_item'>
      <div><span className='education_bullet'>&bull;&nbsp;</span>
        <span className='education_school_study'>
          <span className='education_text'>{school.school}</span>
          &nbsp;<span className='education_study'>({school.study})</span>
        </span>
      </div>
      <div className='education_text education_dates'>{school.dates}</div>
    </div>
  )
}
