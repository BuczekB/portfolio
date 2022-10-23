import React from 'react';
import './website.css'
import { Link } from 'react-router-dom'
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
                <img className='webBIg' alt='' src={webBig}></img>
                <img className='webSmall' alt='' src={webSmall}></img>
        </div>
            <div className='infoBox'>
                <h3 >Website</h3>
                <span className='infoText'>Prosta strona (onepage) dla zakładu fryzjerskiego. Napisana przy użyciu JS oraz CSS</span>
                <button className='goTo'><a href='https://buczekb.github.io/website-FRYZ/' target="_blank">More</a></button>
            </div>
        </div>


    </div >


    );
}


export default Website