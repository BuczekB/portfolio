import React from 'react';
import './BJGame.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import bigBJ from "./img/bjBig.png"
import smallBJ from "./img/bjSmall.png"



function BJGame() {




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
                        className='bigBJ' alt='' src={bigBJ}></motion.img>
                        <motion.img 
                        initial={{x:-500,opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        className='smallBJ' alt='' src={smallBJ}></motion.img>
                
                </div>
            
                <div className='infoBox'>
                    <motion.h3
                     initial={{opacity:0}}
                     whileInView={{opacity:1}}
                     transition={{duration:1.2}}
                    >BJ Game</motion.h3>
                    <motion.span
                     initial={{opacity:0}}
                     whileInView={{opacity:1}}
                     transition={{duration:1.2, delay:0.2}}
                    className='infoText'>Przeglądarkowa gra karciana BlackJack. Aplikacja jest na etapie w którym można już prowadzić rozgrywke lecz jest dalej rozwijana. Została napisana przy użyciu Reacta.</motion.span>
                    <a href='https://buczekb.github.io/game-bj' target="_blank" rel="noreferrer">
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


export default BJGame