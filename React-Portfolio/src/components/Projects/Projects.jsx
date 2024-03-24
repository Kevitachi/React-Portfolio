import React, { useEffect, useState } from 'react'
import './Projects.css'
import ProjectBox from './ProjectBox/ProjectBox.jsx'


function Projects() {
  const [projectData, setProjectData] = useState([]);
  console.log(projectData)
  useEffect(()=>{
     fetch("projects.json")
     .then((response) => response.json())
     .then((data) => {
      setProjectData(data.projectData)
     })
     .catch((error)=>{
      console.error("Error fetching 'project data'", error);

     }) 
  },[])
  return (
    <div>
      <p className='projectsTitle'>Projects</p>
      <div id='projects' className='projects_box_container'>
        {projectData.map((value, index)=>(
          <ProjectBox
          key={index}
          title={value.title}
          image={value.image}
          sentences={value.sentences}
          link={value.link}
          />
        ))}
      </div>
      </div>
  )
}

export default Projects