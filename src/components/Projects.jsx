import React from 'react'
import {SiGithub, SiInfoq} from '@icons-pack/react-simple-icons'

const projectsData = [
  {
      title: 'Viruseer',
      subtitle: '360° online file virus scanner',
      image: {path: './images/viruseer.png', width: '600', height: '', alt: 'Viruseer '},
      description: ['Viruseer is a robust multi-file type online virus scanner that allows you to scan files for viruses',
                    'It has Over 17 million virus and malware signatures',
                    'All file format support including Office, PDF, HTML etc.',
                    'Includes Zip support including .Zip, .Rar, .DMG, .Tar, and other archive formats',
                    'It\'s Powered by the Cloudmersive virus scan API'  
                  ],
      links: {github:'https://www.bishir-tm.github.io/viruseer', website: 'https://www.viruseer.web.app', },
      frontendTechnologies: ['HTML','CSS', 'Bootstrap', 'JavaScript','ReactJS','DropZone.JS', ],
      backendTechnologies: ['Javascript','NodeJS','ExpressJS','Render Cloud Services', 'Cloudmersve API',],

  },
  {
      title: 'Drug Basket',
      subtitle: 'Comprehensive Drug Information Search Engine',
      image: {path: './images/drug-basket.png', width: '', height: '', alt: 'Drug Basket '},
      description: ['Allows you to search and obtain information of over 4,000 drugs  ',
                    'Get safety alerts, warnings, of drugs you use everyday',
                    'Simple and minimal intuitive UI ',
                    ''  
                  ],
      links: {github:'https://www.bishir-tm.github.io/drug-basket', website: 'https://www.medicationalertsystem.web.app', },
      frontendTechnologies: ['HTML','CSS', 'Bootstrap', 'ReactJS', 'OpenFDA API','DropZone.JS', ],
  },
  {
      title: 'Credit & Debit Card Verification and Authentication API',
      subtitle: 'REST API for verification and authentication of Credit & Debit Cards ',
      image: {path: './images/drug-baske.png', width: '', height: '', alt: ' '},
      description: ['The API allows you to verify and authenticate "Verve", "Mastercard", and "Visa-Card" credit and debit cards',
                    'Based on the Representational State Transfer (REST) Protocol', 
                    'Enables the user to identify a card issuer/manufacturer based on card number',
                    'Endpoint to Validate and authenticate card number ',
                    'Endpoint to check and verify card expiry',
                  ],
      links: {github:'https://www.bishir-tm.github.io/drug-basket', website: 'https://www.medicationalertsystem.web.app', },
      backendTechnologies: ['JavaScript', 'NodeJS', 'REST Protocol' ],
  },
  {
      title: 'Bi-Bot CryptoCurrency Trading Bot',
      subtitle: '360° online file virus scanner',
      image: {path: './images/bi-bot.png', width: '', height: '', alt: 'Bi-Bot CryptoCurrency Trading Bot '},
      description: ['A robust and scalable cryptocurrency trading bot capable of executing buy and sell orders on various exchanges.',
                    'User-friendly interface for traders to configure trading strategies, manage assets, and set risk management parameters efficiently.',
                    'Advanced Features such as dynamic risk assessment, customizable trading strategies with backtesting, and multi-exchange compatibility.',
                    'Prioritizes security and reliability through the integration of state-of-the-art error handling mechanisms.',
                    'community involvement and collaboration by open-sourcing the code which allow traders to contribute to the bot\'s development and share trading insights.',
      ],
      links: {github:'https://www.bishir-tm.github.io/viruseer', website: 'https://www.viruseer.web.app', learnMore: '#'},
      frontendTechnologies: ['HTML','CSS', 'Bootstrap', 'ReactJS', 'Cloudmersve API','DropZone.JS', ],
  },
  {
      title: 'Bact-ID',
      subtitle: 'Bacteria Identifier',
      image: {path: './images/.png', width: '', height: '', alt: 'Bact-ID '},
      description: [
                    'Bact-ID is a state of the art software for finding information on any type of bacteria',
                    'Contains Biochemical tests on every bacteria on the system ' ,
                    'Includes Images, Mortility, Gram reaction etc. on all types of bacteria on the system' ,
                    'Also supports Auto-complete search functionality'  
                  ],
      links: {github:'https://www.bishir-tm.github.io/viruseer', website: 'https://www.viruseer.web.app', learnMore: '#'},
      frontendTechnologies: ['HTML','CSS', 'Bootstrap', 'ReactJS', 'Cloudmersve API','DropZone.JS', ],
  },
  {   
      title: 'Budgeteer',
      subtitle: 'budget App',
      image: {path: './images/Budgeteer-mobile.png', width: '300', height: '450', alt: 'Budgeteer '},
      description: [
                    'Built using HTML, CSS, JavaScript, and Bootstrap, the app is both functional and visually appealing.s',
                    'Add, edit, and delete budget items with ease, and calculate total expenses and balance in real-time.',
                    'User-friendly interface and intuitive design make managing your budget simple and stress-free.'  
                  ],
      links: {github:'https://www.bishir-tm.github.io/viruseer', website: 'https://www.viruseer.web.app', learnMore: '#'},
      frontendTechnologies: ['HTML','CSS', 'Bootstrap', 'ReactJS', 'Cloudmersve API','DropZone.JS', ],
  },
]

const Project = projectsData.map((project)=>{return(
  <div class="project row flex-lg-row-reverse align-items-center my-5 rounded-5 justify-content-center ">
            <div className="col-10 col-sm-12 col-lg-6 d-flex justify-content-center p-0 px-lg-4  ">
                <img className="rounded-5 has-radius d-block mx-lg-auto img-fluid shadow shadow-lg border" src={project.image.path} alt={project.image.alt}  loading="lazy" />
            </div>
            <div class=" col-lg-6 mb-5 mt-3">
                <h4 className="text-center display-6 fw-bolder text-info card-title">{project.title}</h4>
                <h5 className="text-center fw-normal">{project.subtitle}</h5>
                <ul className='card-text'> 
                  {project.description.map((descriptionItem)=> {
                    return (<li>{descriptionItem}</li>)
                  })}
                </ul>
                <div className="m-3 fs-3 p-2  border border-primary border-2 rounded-5 row">
                    <h5 className="m-0 my-2  text-center text-primary ">Technologies Used:</h5>
                  {project.frontendTechnologies &&
                    <div className="col rounded rounded-5 my-2 p-2 mx-2">
                      <h6 className="m-0 ms-2  text-primary">Frontend</h6>
                      {project.frontendTechnologies.map((technology)=>{
                        return ( 
                        <span className="badge m-1 bg-secondary fw-light p-1 rounded-pill p-2"
                          >{technology}</span>
                      )
                      })}
                    </div>
                  }
                  {/* <div className='vr my-3 ' style={{width: '3px !important'}}></div> */}
                  {project.backendTechnologies && 
                    <div className="col rounded rounded-5 my-2 p-2 mx-2 ">
                      <h6 className="m-0 ms-2  text-primary">Backend</h6>
                      { project.backendTechnologies.map((technology)=>{
                        return ( 
                        <span className="m-1 badge bg-secondary fw-light p-1 rounded-pill p-2"
                          >{technology}</span>
                      )
                      })}
                    </div>
                  }
                </div>
                <div className="btn-group shadow rounded-pill w-100 m-auto d-flex justify-content-center px-4 w-100">
                  {project.links.learnMore && <a
                    className="btn btn-outline-primary border rounded-pill border-primary m-1"
                    href={project.links.learnMore}
                    target="_blank"
                    >Learn More</a>}
                  <a
                    className="btn btn-outline-primary border rounded-pill border-primary m-1"
                    href={project.links.github}
                    target="_blank"
                    ><span><SiGithub /> </span> GitHub</a>
                  <a
                    className="btn btn-outline-primary border rounded-pill border-primary m-1"
                    href={project.links.website}
                    target="_blank"
                    ><span></span>Live Demo</a>
                </div>
              </div>
          </div>
)})

const Projects = () => {

  return (
    <div className="container-fluid m-auto " id="projects">
        <div
          className="container-fluid w-100 m-auto bg-oxford has-raduis py-4 my-5">
          <h3 className="text-center text-light m-3 bg-primary p-3 has-raduis">
            Recent Projects
          </h3>
             
        <div  className="container mb-3 px-4  text-white rounded-5">
          {/* <div class="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
            <div className="col-10 col-sm-12 col-lg-6 d-flex justify-content-center">
                <img className=" has-radius d-block mx-lg-auto" src="./images/Budgeteer-mobile.png" alt="..." width="300" height="550" loading="lazy" />
            </div>
            <div class=" col-lg-6">
                <h4 className="display-6 fw-bolder text-primary card-title">Drug Basket</h4>
                <h5 className="fw-normal">Budget App</h5>
                  
                <ul className='card-text'> 
                  <li>Built using HTML, CSS, JavaScript, and Bootstrap, the app is both functional and visually appealing.</li>
                  <li>Add, edit, and delete budget items with ease, and calculate total expenses and balance in real-time.</li>
                  <li>User-friendly interface and intuitive design make managing your budget simple and stress-free</li>
                </ul>
                
                <div className="m-3 fs-3">
                  <p className="m-0 ms-2">Technologies Used:</p> 
                  <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                    >HTML</span>
                  <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                    >CSS</span>
                  <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                    >JavaScript-ES6</span>
                  <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                    >Bootstrap</span>
                </div>
                <div className="btn-group shadow rounded-pill w-100 m-auto d-flex justify-content-center px-4 w-100">
                  <a
                    className="btn btn-outline-primary border rounded-pill border-primary m-1"
                    href="./projects/budgeteer.html"
                    target="_blank"
                    >Learn More</a>
                  <a
                    className="btn btn-outline-primary border rounded-pill border-primary m-1"
                    href="https://www.bishir-tm.github.io/Budgeteer/"
                    target="_blank"
                    ><span><SiGithub /> </span> GitHub</a>
                  <a
                    className="btn btn-outline-primary border rounded-pill border-primary m-1"
                    href="https://www.bishir-tm.github.io/Budgeteer/"
                    target="_blank"
                    ><span></span>Live Demo</a>
                </div>
              </div>
          </div> */}
          {Project}
        </div>
      </div>
    </div>
  )
}

export default Projects