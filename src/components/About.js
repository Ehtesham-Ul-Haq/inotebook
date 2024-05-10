import React, { useContext, useEffect } from 'react';

const About = (props) => {
 

  return (
    <div className='container' style={{color: props.mode=== 'dark'?'white':'#0f032d'}}>
      This is About page
    </div>
  )
}

export default About
