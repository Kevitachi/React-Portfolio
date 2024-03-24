import React from 'react'
import './ExperienceCard.css'
import react from '../../../images/react-logo.png'
import js from '../../../images/javascript-logo.png'
import css from '../../../images/css-logo.png'
import html from '../../../images/html5_logo.png'


function ExperienceCard({companyName, designation, statements, iconImages}) {
    const getIconImage =(iconName)=>{
        switch (iconName){
            case "html":
                return html;
            case "js":
                return js;
            case "react":
                return react;
            case "css":
                return css;
            default:
                return null;            
        }
    }
    return (

        <div className='ex_card_container'>
            <p className='ex_card_title'>{companyName}
            </p>
            <p className='ex_card_subtitle'>Designation: {designation}
            </p>
            {statements.map((value, index)=> (
                <p className='ex_card_sentence' key={index}>
                    {value}
                </p>
            ))}
            <p className='ex_card_tech_used_title'>Tech Stack Used</p>
            <div className='ex_card_icon_images_container'>
                {iconImages.map((iconName, index) => (
                    <img key={index} src={getIconImage(iconName)} alt={iconName}></img>
                    ))}
            </div>
        </div>
        
    )
    }

    export default ExperienceCard