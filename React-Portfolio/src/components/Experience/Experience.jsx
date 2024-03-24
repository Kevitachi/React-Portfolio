import './Experience.css';
import React, { useEffect} from 'react'
import { useState } from 'react';
import ExperienceCard from './Experience Card/ExperienceCard';



function Experience() {
  const [experienceData, setExperienceData] = useState([]);
  console.log(experienceData)

  useEffect(()=> {
    fetch("experience.json")
    .then((response ) => response.json())
    .then((data) => {
      setExperienceData(data.experienceData)
    })
    .catch((error) => {
      console.error("Error fetching experience data:", error)
    })
   },[])
  return (
    <div id='experience' className='experienceContainer'>
      <p className='experienceTitle'> Experience</p> 
      <div className='experienceCards_container'>{experienceData.map((experience, index) =>(
        <ExperienceCard
        key={experience.id}
        companyName={experience.companyName}
        designation={experience.designation}
        statements={experience.statements}
        iconImages={experience.iconImages}/>
      )
      
      )} </div>

    </div>
  )
}

export default Experience