import React from 'react';
import './weatherApp.css'
import { Link } from 'react-router-dom'
import mac from "./img/macWeather.png"



function WeatherApp() {




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
                <div className='imageFirst'></div>
                    <div className='imageSecound'></div>
                    <div className='imageThird'></div>
                    <div className='mac'>
                        <img className='macImage' alt='' src={mac}></img>
                    </div>
                    
                </div>
                <div className='infoBox'>
                    <h3 >Weather App</h3>
                    <span className='infoText'>Aplikacja umożliwia sprawdzenie aktualnch warunków pogodowych na całym świecie. Używa do tego darmowego ogólnodostępnego API. Napisane jest w czystym JavaScript, za warstwe wizualną odpowiada CSS. Żeby sprawdzić jej działanie wystarczy nacisnąć przycisk poniżej.</span>
                    <a  className='goToLink' href='https://buczekb.github.io/weatherApp-useApi/' target="_blank">
                    <button className='goTo' >
                    More
                    </button>
                    </a>
                </div>
            </div>


        </div >

    );
}


export default WeatherApp