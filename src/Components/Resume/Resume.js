import React, { useState } from 'react'
import './Resume.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { RESUME } from '../../data/RESUME'
import { Container, Row, Col } from 'react-bootstrap'

export default function Resume() {
  return (
    <div className='resume'>


      <div className='resume_head'>
        <p className='resume_title'>{RESUME.name}</p>
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
      </div>

      <div className='resume_summary'>
        <div className='summary_head_contain'>
          <hr className='section_divider' />
          <div className='resume_section_head'>Professional Summary</div>
          <hr className='section_divider' />
        </div>
        <div className='summary_body'>
          {RESUME.summary}
        </div>
      </div>

      <div className='resume_skills'>
        <div className='summary_head_contain'>
          <hr className='section_divider' />
          <div className='resume_section_head'>Skills</div>
          <hr className='section_divider' />
        </div>

        <div className='skills_body'>

          {RESUME.skills.map(skill => (<div className='skills_item'>{skill}</div>))}

        </div>
      </div>


      <div className='resume_work_history'>
        <div className='summary_head_contain'>
          <hr className='section_divider' />
          <div className='resume_section_head'>Work History</div>
          <hr className='section_divider' />
        </div>
        <div className=''>
          {RESUME.workHistory.map(work => (
            <WorkHistory
              work={work}
              key={Math.random()}
            />
          ))}
        </div>
      </div>

      <div className='resume_education'>
        <div className='summary_head_contain'>
          <hr className='section_divider' />
          <div className='resume_section_head'>Educaion</div>
          <hr className='section_divider' />
        </div>
        <div className='resume_education_container'>
          {
            RESUME.education.map(school => (
              <EducationItem
                school={school}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

function WorkHistory({ work }) {
  const [showMore, setShowMore] = useState(false)
  return (
    <div
      className='work_history'
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
    </div>
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
