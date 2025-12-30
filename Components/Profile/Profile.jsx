import React from 'react'
import Photo from '../../src/assets/Photo.jpg'
// name written after import need not to be exact name of file
//its simply a variable which stores the rendered file
import './Profile.css'

const poem_left = [
  "In a world of noise, I seek the true,",
  "Not chasing fleeting scores, but wisdom’s deep hue",
  "I learn for growth and dreams accrued,",
  "No envy burns where effort leads,",
  "I sow my path with honest deeds.",
  "A quiet realm, not wide but wise,",
  "Where real hearts dwell and falsehood dies.",
]
// accrued : collected, accumulated

const poem_right = [
  "Each day I build, each step I climb,",
  "To sharpen soul, expand the mind.",
  "Dreaming, improving but never standing still,",
  "Learning fueled by steady will",
  // "I am Vamika Arya, a flame unshaken,",
  "Carrying a flame of faith, forever unshaken",
  "Englightened by virtue, by thought and", 
  "is forever awakened!"
]
const Profile = () => {
  return (
    <div className='profile' id='PROFILE'>
        <div className="poem-left">
        {
          poem_left.map((line,idx)=>(
            <div key={idx} className='poem-line'>{line}</div>
          ))
        }
      </div>
      <div className="poem-right">
        {
          poem_right.map((line,idx)=>(
            <div key={idx} className='poem-line'>{line}</div>
          ))
        }        
      </div>
      <img className='profile_img_slideshow' src={Photo} alt=""></img>
      <h1><span>Vamika Arya</span></h1>
      <p>Passionate Learner | Growing Developer</p>
      {/* <p>Short Intro</p> */}
      <div className="buttons">
        <a className="connect" href="#CONTACT"><div>Connect with Me</div></a>
        <a className="resume-link" href='https://drive.google.com/file/d/1XjATLEnCCps-UuP7oTJ0hOFsslB0mpqj/view?usp=sharing' target='_blank'><div className="resume">My Resume</div></a>
      </div>
    </div>
  )
}

export default Profile