import React from 'react'
import {Typewriter} from 'react-simple-typewriter'

const TypeWriterSc = () => {



  return (
    <div> 
        
        <h1>
          I'm {' '}
          <span>
          <Typewriter
            words={['a Programmer', 'a Coder', 'from India']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            // delaySpeed={1000}
            
          />
          </span>
        </h1>
        

    </div>
  )
}

export default TypeWriterSc