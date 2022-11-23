import React from 'react';
import './weatherApp.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import weatherBig from './img/weatherBig.png';
import weatherSmall from './img/weatherSmall.png';

function WeatherApp() {
  return (
    <div className="container">
      <div className="back">
        <Link to="/">
          <span className="arrowBack">BACK</span>
        </Link>
      </div>

      <div className="workBox">
        <div className="imageBox">
          <motion.img
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="weatherBig"
            alt=""
            src={weatherBig}
          ></motion.img>
          <motion.img
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="weatherSmall"
            alt=""
            src={weatherSmall}
          ></motion.img>
        </div>
        <div className="infoBox">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Weather App
          </motion.h3>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="infoText"
          >
            Aplikacja umożliwia sprawdzenie aktualnch warunków pogodowych na
            całym świecie. Używa do tego darmowego ogólnodostępnego API.
            Napisane jest w czystym JavaScript, za warstwe wizualną odpowiada
            CSS. Żeby sprawdzić jej działanie wystarczy nacisnąć przycisk
            poniżej.
          </motion.span>
          <a
            className="goToLink"
            href="https://buczekb.github.io/weatherApp-useApi/"
            target="blank"
          >
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="goTo"
            >
              More
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
