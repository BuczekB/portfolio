import React from 'react';
import './card.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Card(data) {
    const card = `card ${data.bg}`
    console.log(card);

    return (

       

        <motion.div 
        initial={{x:200,opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2, delay:0.1}}
        className={card} >
            <Link to={data.text} >
                <button >
                    {data.text}
                </button>
            </Link>
        </motion.div >


    );
}


export default Card







