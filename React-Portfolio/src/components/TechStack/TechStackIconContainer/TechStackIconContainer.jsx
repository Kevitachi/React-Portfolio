import React from 'react'
import './TechStackIconContainer.css'


function TechStackIconContainer({name,image,property}) {
  return (
    <div className='techstack_icons'>
        <img src={image} alt={property}/>
        {/* <p>{name}</p>   Useless */}
    </div>
  )
}

export default TechStackIconContainer