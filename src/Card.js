import React from 'react';
import './card.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


import WebTest from './WebTest';

function Card({ text, bg }) {


    const card = `card ${bg}`

    console.log({ text });

    return (



        <motion.div 
        initial={{x:300,opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2, delay:0.1, repeat: 0}}
        className={card} >
            <Link to={text} >
                <button >
                    {text}
                </button>
            </Link>
        </motion.div >


    );
}


export default Card







