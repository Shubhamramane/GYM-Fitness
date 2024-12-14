import React from 'react';
import '../Reason/Reason.css';
import image1 from '../../asset/image1.jpg';
import image2 from '../../asset/image2.jpg';
import image3 from '../../asset/image3.webp';
import image4 from '../../asset/image4.jpeg';
import Tick from '../../asset/tick.png';
import Reebok from '../../asset/reebok.png';
import Nike from '../../asset/nike.png';
import Adidas from '../../asset/adidas.png';

const Reason = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
        <img src={image3} alt="" />
        <img src={image1} alt="" />
        <img src={image4} alt="" />
        <img src={image2} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>

        <div>
          <span className='stroke-text'>Why</span>
          <span>Choose us?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={Tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>TRAIN SMARTERE AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ fontWeight: 'normal', color: 'var(--gray)' ,fontSize:'20px'}}>
          OUR PARTNERs
        </span>
        <div className="partners">
          <img src={Reebok} alt="" />
          <img src={Nike} alt="" />
          <img src={Adidas} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reason