import React from 'react';
import '../Program/Program.css'
import { ProgramData } from '../Data/ProgramData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Program = () => {
  return (
    <div className='programs' id='programs'>
      <div className='programs-header'>
        <span className='stroke-text'>Eplore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>

      <div className='program-categories'>
        {ProgramData.map((program) => {
          return (
            <div className='category'>
              <img src={program.image}/>
              <span >{program.heading}</span>
              <span>{program.details}</span>

              <div className='join-now'>
                <span>Join Now</span>
               <ArrowForwardIcon/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Program;