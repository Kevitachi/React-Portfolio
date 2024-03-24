import React from 'react';
import './ProjectBox.css';

 
function ProjectBox({ title, image, sentences, link }) {
  return (
    <div className='project_box_container'>
        <div className='project_box_image_container'>
            <img src={image}/>
        </div>
        <div className='project_box_description_container'>
            <p className='project_box_title'>{title}</p>
        </div>
        <div className='project_box_sentences_container'>
            {sentences.map((value,index)=>(
                <p key={index}>{value}</p>
            ))}
        </div>
        <p className='project_box_link'>
            <span>Link: </span>
            <a href={link} target='_blank'>
              {link}
            </a>
        </p>
    </div>
  )
}

export default ProjectBox;