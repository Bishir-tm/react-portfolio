import React from 'react'
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,  
} from 'react-tippy';


import {SiBootstrap, SiHtml5, SiGit, SiGithub, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiSass, SiPhp} from '@icons-pack/react-simple-icons'

const skillsData = [
    {
        skill: 'HTML',
        icon: <SiHtml5 color='#202143' size={55}  />,
    },
    {
        skill: 'CSS',
        icon: <SiCss3 color='#202143' size={55}  />,
    },
    {
        skill: 'Javascript',
        icon: <SiJavascript color='#202143' size={55}  />,
    },
    {
        skill: 'ReactJS',
        icon: <SiReact color='#202143' size={55}  />,
    },
    {
        skill: 'NodeJS',
        icon: <SiNodedotjs color='#202143' size={55}  />,
    },
    {
        skill: 'Sass',
        icon: <SiSass color='#202143' size={55}  />,
    },
    {
        skill: 'Git',
        icon: <SiGit color='#202143' size={55}  />,
    },
    {
        skill: 'Github',
        icon: <SiGithub color='#202143' size={55}  />,
    },
    {
        skill: 'Bootstrap',
        icon: <SiBootstrap color='#202143' size={55}  />,
    },
    {
        skill: 'Php',
        icon: <SiPhp color='#202143' size={55}  />,
    },
]


const SkillItems = skillsData.map((skillData) => {
    return (
      <div key={skillData.skill} className="m-2 m-lg-5">
        <Tooltip
          title=''
        >
          <div className="badge rounded-circle bg-light border border-3 d-flex align-items-center flex-wrap justify-content-center border-primary shadow-lg">
            {skillData.icon} {/* Use the variable to render the component */}
          </div>
          <p className="text-light text-center">{skillData.skill}</p>
        </Tooltip>
      </div>
    );
  });

const Skills = () => {
  return (
    <section className="container-fluid mb-5"  >
    <div  className='skills has-raduis' id="skills">
      <div className="d-flex flex-wrap flex-column bg-oxford has-raduis m-auto has-blur py-5 pt-3">
        <h3 className="text-center text-light m-5 bg-primary p-3 has-raduis">
          Skills
        </h3>
        <div className="d-flex align-items-center flex-wrap justify-content-center align-content-center">
          {SkillItems}
        </div>
      </div>
    </div>

  </section>
  )
}

export default Skills