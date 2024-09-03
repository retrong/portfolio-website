"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const letterVariants = {
	hidden: { opacity: 0, y: 20, },
	visible: {
		opacity: 1,
		y: 0,
        transition: {
            duration: 0.2,
        }
	},
};

const AnimatedText = ({text, el: Wrapper = "p", className}) => {
	// const text = 'Software Developer';
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5, once: true})

	return (
        <Wrapper className={className}>
        <span className='sr-only'>{text}</span>
            <motion.span
                variants={textVariants}
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{staggerChildren: 0.1}}
                aria-hidden
                className=""
            >
                {text.split(" ").map((word) => (
                    <span key={word} className=' inline-block'>
                        {word.split('').map((char, index) => (
                            <motion.span key={index} variants={letterVariants} className=' inline-block'>
                                {char}
                            </motion.span>
                        ))}
                        <span className='inline-block'>&nbsp;</span>
                    </span>
                ))}
            </motion.span>
        </Wrapper>
	);
};

export default AnimatedText;
