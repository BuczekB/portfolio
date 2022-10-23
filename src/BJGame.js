import React from 'react';
import './BJGame.css'
import { Link } from 'react-router-dom'



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
                    <div className='imageFirstBJ'></div>
                    <div className='imageSecoundBJ'></div>
                    <div className='imageThirdBJ'></div>
                </div>
                <div className='infoBox'>
                    <h3 >BJ Game</h3>
                    <span className='infoText'>Przeglądarkowa gra karciana BlackJack. Aplikacja jest na etapie w którym można już prowadzić rozgrywke lecz jest dalej rozwijana. Została napisana przy użyciu Reacta.</span>
                    <button className='goTo'><a href='https://buczekb.github.io/game-bj' target="_blank">More</a></button>
                </div>
            </div>
        </div >

    );
}


export default BJGame