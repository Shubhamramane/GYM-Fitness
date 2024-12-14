import React, { useState } from 'react';
import './Testimonials.css';
import { TestimonialsData } from '../Data/TestimonialData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = TestimonialsData.length;

    const transition = { type: 'spring', duration: 3 }

    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>Say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {TestimonialsData[selected].review}
                </motion.span>

                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {TestimonialsData[selected].name}
                    </span>{" "}
                    - {TestimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                >
                </motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    src={TestimonialsData[selected].image} />

                <div className='arrows'>
                    <span>
                        <ArrowBackIcon onClick={() => selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1)} />
                        <ArrowForwardIcon onClick={() => selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials