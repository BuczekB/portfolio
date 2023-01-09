import React from 'react';
import './website.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import webBig from "./img/webBig.png"
import webSmall from "./img/webSmall.png"


function Website() {




    return (



        <div className='container'>

        <div className='back'>
            <Link to="/" >
                <span className='arrowBack'>
                    BACK
                </span>
            </Link>
        </div>

        <div className='workBox'>
        <div className='imageBox'>
                <motion.img 
                initial={{x:-500,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1.4, delay:0.2}}
                className='webBig' alt='' src={webBig}></motion.img>
                <motion.img  
                initial={{x:-500,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1.2}}
                className='webSmall' alt='' src={webSmall}></motion.img >
        </div>
            <div className='infoBox'>
                <motion.h3 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.2}}
                >Website</motion.h3>
                <motion.span 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.2, delay:0.2}}
                className='infoText'>Prosta strona (onepage) dla zakładu fryzjerskiego. Napisana przy użyciu JS oraz CSS</motion.span>
                <a href='https://buczekb.github.io/website-FRYZ/' target="_blank" rel="noreferrer">
                <motion.button 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.2, delay:0.3}}
                className='goTo'>More</motion.button>
                </a>
            </div>
        </div>


    </div >


    );
}


export default Website