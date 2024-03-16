import React from 'react'
import {SiGithub, SiInfoq} from '@icons-pack/react-simple-icons'

const Projects = () => {
  return (
    <div className="container-fluid m-auto " id="projects">
        <div
          className="container-fluid w-100 m-auto bg-oxford has-raduis py-4 mb-5 my-5">
          <h3 className="text-center text-light m-3 bg-primary p-3 has-raduis">
            Recent Projects
          </h3>
          {/* <div
            className="position-relative overflow-hidden p-3 m-md-3 my-5 bg-light has-raduis row"
          >
            <div className="col-md-7">
              <h4 className="display-6 fw-bolder text-primary">Budgeteer</h4>
              <h4 className="fw-normal">Budget App</h4>
              <p className="lead fw-normal">
                
                <ul> 
                  <li> Budget App is a comprehensive tool for managing expenses and keeping track of your budget.</li>
                  <li>Built using HTML, CSS, JavaScript, and Bootstrap, the app is both functional and visually appealing.</li>
                  <li>Add, edit, and delete budget items with ease, and calculate total expenses and balance in real-time.</li>
                  <li>User-friendly interface and intuitive design make managing your budget simple and stress-free</li>
              </ul>
              </p>
              
              <div className="m-3 fs-3">
                <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                  >HTML</span
                >
                <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                  >CSS</span
                >
                <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                  >JavaScript-ES6</span
                >
                <span className="badge bg-secondary fw-light p-1 rounded-pill p-2"
                  >Bootstrap</span
                >
              </div>
              <div className="btn-group">
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="./projects/budgeteer.html"
                  target="_blank"
                  >Learn More</a
                >
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="https://bishir-tm.github.io/Budgeteer/"
                  target="_blank"
                  >Live Demo</a
                >
              </div>
            </div>
            <div className="col-md-5">
              <img
                className=""
                src="./images/Budgeteer-mobile.png"
                alt=""
                srcset=""
                width="70%"
                height="100%"
              />
            </div>
          </div> */}
   
      <div  className="card mb-3 border-primary rounded-5">
          <div className="row g-0 " >
            <div className="col-md-7 p-3 border-end">
              <div className="card-body">
              <h4 className="display-6 fw-bolder text-primary card-title">Budgeteer</h4>
              <h5 className="fw-normal">Budget App</h5>
                
                <ul className='card-text'> 
                  <li> Budget App is a comprehensive tool for managing expenses and keeping track of your budget.</li>
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
              <div className="btn-group shadow rounded-pill w-100 m-auto">
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="./projects/budgeteer.html"
                  target="_blank"
                  >Learn More</a>
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="https://bishir-tm.github.io/Budgeteer/"
                  target="_blank"
                  ><span><SiGithub /> </span> GitHub</a>
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="https://bishir-tm.github.io/Budgeteer/"
                  target="_blank"
                  ><span></span>Live Demo</a>
              </div>
            </div>
            </div>
            <div className="col-md-5 ">
              <img className="w-100 h-100 has-radius rounded-end-5 project-image" src="./images/Budgeteer-mobile.png"
                alt="..."/>
            </div>
          </div>
        </div>
      </div>
      <div  className="card mb-3 border-primary rounded-5">
          <div className="row g-0 " >
            <div className="col-md-7 p-3 border-end">
              <div className="card-body">
              <h4 className="display-6 fw-bolder text-primary card-title">Drug Basket</h4>
              <h5 className="fw-normal">Budget App</h5>
                
                <ul className='card-text'> 
                  <li> </li>
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
              <div className="btn-group shadow rounded-pill w-100 m-auto">
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="./projects/budgeteer.html"
                  target="_blank"
                  >Learn More</a>
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="https://bishir-tm.github.io/Budgeteer/"
                  target="_blank"
                  ><span><SiGithub /> </span> GitHub</a>
                <a
                  className="btn btn-outline-primary border rounded-pill border-primary m-2"
                  href="https://bishir-tm.github.io/Budgeteer/"
                  target="_blank"
                  ><span></span>Live Demo</a>
              </div>
            </div>
            </div>
            <div className="col-md-5 ">
              <img style={{width: "100%", height: "min-content"}} className=" has-radius rounded-end-5 projec-image" src="./images/Budgeteer-mobile.png"
                alt="..."/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects