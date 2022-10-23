import React from 'react';
import './card.css'
import { Link } from 'react-router-dom'


import WebTest from './WebTest';

function Card({ text, bg }) {


    const card = `card ${bg}`

    console.log({ text });

    return (



        <div className={card} >
            <Link to={text} >
                <button >
                    {text}
                </button>
            </Link>
        </div >


    );
}


export default Card







