import React from 'react';
import './BJGame.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import bigCrypto from "./img/bigCrypto.png"
import smallCrypto from "./img/smallCrypto.png"



function CryptoApp() {




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
                        className='bigBJ' alt='' src={bigCrypto}></motion.img>
                        <motion.img 
                        initial={{x:-500,opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        className='smallBJ' alt='' src={smallCrypto}></motion.img>
                
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
                    className='infoText'>Strona na której można sprawdzić najważniejsze informacje na temat każdej kryptowaluty. Została napisana przy użyciu Reacta, TypeScript, Redux oraz Material UI.</motion.span>
                    <a href='https://buczekb.github.io/crypto-app/' target="_blank" rel="noreferrer">
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


export default CryptoApp