import React from 'react';
import '../Plans/Plans.css';
import Whitetick from '../../asset/white-check.png'
import { PlansData } from './PlanData';

const Plans = () => {
    return (
        <div className='plans-container' id='plan'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            <div className='plans'>
                {PlansData.map((plan, id) => (
                    <div className='plan' key={id}>
                        <img src={plan.icon} />
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, id) => (
                                <div className='feature'>
                                    <img src={Whitetick} className='whitetick' />
                                    <span key={id}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))
                }
            </div>
        </div>


    )
}

export default Plans;