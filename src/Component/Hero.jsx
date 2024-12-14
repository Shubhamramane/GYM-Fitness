import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import Heart from '@mui/icons-material/Favorite';
import heroImg from '../asset/hero-gym.png';
import Calories from '../asset/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth<=768 ? true : false
    return (
        <div className='hero' id='home'>
            <div className="blur hero-blur"></div>
            <div className='left-h'>
                <Header />
                {/* Best ad */}
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span><NumberCounter start={100} end={140} delay='4' preFix='+'/></span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span><NumberCounter start={100} end={978} delay='4' preFix='+'/></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter start={0} end={50} delay='4' preFix='+'/></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero button */}
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    {/* <img src={Heart}/> */}
                    <Heart style={{ color: 'red' }} />
                    <span>Heart rate</span><span>116 bpm</span>
                </motion.div>

                {/* hero image */}
                <img src={heroImg} className='hero-img' />
                {/* <img src={}/> */}

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '48rem' }}
                    transition={transition}
                    className='calories'>
                    <img src={Calories} />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero