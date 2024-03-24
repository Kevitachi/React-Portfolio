import React from 'react'
import './Homepage.css'
import githubIcon from '../../images/github.png'
import linkedinIcon from '../../images/linkedinLogo.png'


function Homepage() {

  return (
    <div className='homepageContainer'> 
      <div id='about' className='homepage_left'>
          <p className='homepage_left_h1'> 
          <span className='textColor1'>Hi,</span>my name is
          </p>
          <p className='homepage_left_h2'>Kevin Rodriguez</p>
          <p className='homepage_left_h3'>
            Learning  <span className='textColor1'>Web Develompment</span>
          </p>
          <p className='homepage_left_description'>
          This is my portfolio, here you can find the projects i have worked, the tools i've learned along the time and a few things you may be insterested if you are here.
          </p>
          <p className='homepage_left_description'> You can find me on Github and also on Linkedin</p>
          <div className='iconsContainer'>
            <a href='https://github.com/kevitachi' target='_blank'>
              <img src={githubIcon} alt='Github icon' className='homepageLogo'/>  
            </a>
            <a href='https://www.linkedin.com/in/kevinrodriguezbecerra/' target='_blank'>
              <img src={linkedinIcon} alt='Linkedin icon' className='homepageLogo'/>  
            </a>
                 
          </div>
          
    <a className='mailReference' href='mailto:nomail@gmail.com'>
      <div className='homepage_left_button'>Send me a mail!</div>
    </a>
      </div>

      <div className='homepage_right'>
        <img src='src\images\ProgrammingGIF.gif' alt='GIF'/>
        </div>   
    </div>

  )
}

export default Homepage