import React from 'react'


const Contact = () => {
  return (
    <div className="container-fluid my-5 text-white" id="contact">
        <div
          id=""
          className="border-top skills bg-oxford has-raduis m-auto py-5 pt-3"
        >
          <script src="https://cdn.formspree.com/js/formbutton-v1.min.js" defer></script>
          <h3 className="text-center text-light m-3 mx-5 bg-primary p-3 has-raduis">
            Contact Me
          </h3>
          <div className=" mx-3 px-3">
          <form className="" action="https://formspree.io/f/xdovwbqr" method="POST">
            <div className="row mt-5">
              <div className="col-12 col-md-6 col-sm-12">
                {/* <label for="" className="form-label">Email:</label> */}
                <input
                type="email" name="email"
                  className="rounded-pill form-control form-control-lg"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 col-md-6 col-sm-12">
              {/* <label for="username" className="form-label">Email:</label> */}
              <input
              type="text" name="username"
                className="rounded-pill form-control form-control-lg"
                id="inputEmail4"
                placeholder="Name"
                />
                </div>
              </div>
           
            {/* <div className=" mt-4 ">
              <label for="" className="mt-5 form-label">Your Message:</label>
            </div> */}
            <div className="row">
              <textarea
              name="message"
                id=""
                rows="4"
                className="rounded-3 p-3 col-12 my-4 "
                placeholder='write here...'
              ></textarea>
            </div>
            <input
              type="submit"
              className="rounded-pill btn-lg col-3 btn btn-primary ms-auto"
              value="Send"
            />
          </form>
          </div>
        </div>
      </div>
  )
}

export default Contact