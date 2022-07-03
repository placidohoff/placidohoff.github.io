import { useState } from "react"

export default function ListProject({ project }) {
    
    const [isZoom, setIsZoom] = useState(false)

    return (
      <div className='listproject'>
        <div className='list_left'>
          <p className='list_left_title'>{project.name}</p>
          
          <img
            className='list_left_img'
            src={project.image}
            alt={project.name}
          />
          {/* {
            isZoom &&
            <img
              className='img_zoom'
              src={project.image}
              alt={project.name}
            />
          } */}
        </div>
        <div className='list_right'>
          <p className='list_right_title'>{project.name}</p>
          <p className='list_right_description'>{project.description}</p>
          <div className='list_button_contain'>
            <div className='button_video list_button'>
              Video Example
            </div>
            <div className='button_live list_button'>
              See It Live
            </div>
          </div>
        </div>
  
      </div>
    )
  }