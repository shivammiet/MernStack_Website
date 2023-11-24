import React from 'react';
import shivpic from "../image/virat.jpeg"; // Correct import

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method=" ">
          <div className="row">
            <div className="col-md-4">
              <img src={shivpic} alt="shivam" />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Shivam Tiwari</h5>
                <h6>Web Developer</h6>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
