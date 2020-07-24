import React from "react";
import ML from "../bg/wed.svg"
export default function DetailComponent() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <h2 className='font'>
            Why Choose Us
            </h2>
            <p className='para'>
            Life has helped thousands of Muslim singles find their match
            
            </p>
            <p class="center-align">
           
            <a
              href='/'
              className='btn btn-header white-text text-darken-4 teal accent-3'
            >
             Join Now
            </a>
            </p>
          </div>
          <div className='col s12 m6'>
            <img className='responsive-img' src={ML} alt="bg"/>
          </div>
        </div>
      </div>
    </div>
  
  );
}
