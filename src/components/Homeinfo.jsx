import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../../src/assets/icons'

const InfoBox = ({text , link , btnText}) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn '>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
    </div>
  )
}

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Prerit</span>
        👋
        <br />
        an undergraduate B.Tech Computer Science engineering. 
      </h1>
    ),
    2:(
       <InfoBox
       text = "Learned many skills along the way. Want to know more? Click the button below."
       btnText='About Me'
       link = '/about'
       />
    ),
    3:(
        <InfoBox
       text = "Developed multiple projects using different technologies. Check them out by clicking the button below."
       btnText='Visit my Projects'
       link = '/projects'
       />
    ),
    4:(
        <InfoBox
       text = "Need a project done or looking for a dev? I'm just a few keystrokes away"
       btnText="Let's talk"
       link = '/contact'
       />
    )

}

const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
