import React from 'react'
import './TechStack.css'
import reactIcon from '../../images/react-logo.png'
import javascriptIcon from '../../images/javascript-logo.png'
import cssIcon from '../../images/css-logo.png'
import html5Icon from '../../images/html5_logo.png'
import javaIcon from '../../images/java-logo.png'
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer'

function TechStack() {

  let techstackObjects=[
    {
      iconName:'HTML5',
        iconImage: html5Icon,
        iconAltProperty:'HTML Icon'
    },
    {
      iconName:'CSS',
        iconImage: cssIcon,
        iconAltProperty:'CSS Icon'
    },
    {
      iconName:'JavaScript',
        iconImage:javascriptIcon,
        iconAltProperty:'JavaScript Icon'
    },
    {
      iconName:'React',
        iconImage:reactIcon,
        iconAltProperty:'React Icon'
    },
    {
      iconName:'Java',
        iconImage:javaIcon,
        iconAltProperty:'Java Icon'
    }
    
  ]


  return (
    
    <div id='tools' className='techstackContainer'>
    <p className='techstackTitle'>My tools</p>
    <div className='techstckItemContainer'>
      {techstackObjects.map((item,index)=>{
        return (
          <TechStackIconContainer
            key={index}
            image={item.iconImage}
            property={item.iconAltProperty}
            name={item.iconName}
          />
      
        )
      })}
    </div>
    </div>
  )
}

export default TechStack