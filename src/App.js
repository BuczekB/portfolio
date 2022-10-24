import React from 'react';
import { Button, Link } from 'react-scroll'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Cube from './Cube';
import Card from './Card';
import WorkBox from './WorkBox';
import WebTest from './WebTest';
import ArrowUp from './ArrowUp';
import WeatherApp from './WeatherApp';
import BJGame from './BJGame';
import Website from './Website';

import heroImage from "./img/profilowe3.png";

function App() {




  return (
    <Router>
      <div className="App" >

        <div id='backToUp'></div>

        <div className='main' >
          <nav>
            <div className='logo' id='logo'>
              <h2 >Jakub</h2>
            </div>
            <div className='navigation'>

              <span >
                <Link activeClass="active" className='navigationParagraph' to="about" spy={true} smooth={true} offset={-100} duration={500}>
                  About
                </Link>
              </span>
              <span>
                <Link activeClass="active" className='navigationParagraph' to="works" spy={true} smooth={true}  duration={500}>
                  Works
                </Link>
              </span>



            </div>
          </nav>
          <div className='hero'>

            <div className='left'>
            
              <div className='heroImage'>
                <img className='imageHero' alt='profilowe3.png' src={heroImage}></img>
              </div> 
              <div className='circle'></div>
            </div >
            <div className='right'>
              <div className='mainInfo'>
                <h1>Witam jestem 
                <span className='orangeSpan'> Jakub! </span>
                </h1>
                <h3 className='juniorH3'>Junior Frontend Developer</h3>
               
                
              </div>
              <div>
               
                  <Link activeClass="active" to="more" spy={true} smooth={true} offset={-100} duration={500}>
                  <button className='moreButton' type='button'>More</button>
                </Link>
                
              </div>
              <div className='cubeBox'>

                <Cube bg={'js'}></Cube>
                <Cube bg={'html'}></Cube>
                <Cube bg={'css'}></Cube>
                <Cube bg={'react'}></Cube>


              </div >
            </div>
          </div >
        </div >
        <div className='about' id='about'>
          <div className="aboutMe" id='more'>
            <h3>
              <span className='orangeSpan'> About </span>
              Me</h3>
            <p>
              Witam nazywam się Jakub i jestem Junior Frontend/JavaScript Developerem. Aktualnie znajdujesz się na stronie, która przedstawia w skrócie moje najciekawsze projekty na których podstawie mozna określić moje umiejętnośći.
            </p>
           <p>Programować zacząłem 3 lata temu wsiąkłem od razu w ten świat  gryż lubie nauke nowych rzeczy co w programowaniu jest nieuniknione ze względu na ciągły rozwój wszystkich technologi oraz spodobało mi sie to uczucie gdy po długiej batalii z kodem ostatecznie udaje nam sie rozwiazac dreczacy nas problem.  Od tego momentu w wolnych chwilach staram sie pogłębiać swoja wiedze w tym zakresie. Nauke zaczynałem od C++ orac Pythona jednak ostatecznie najwiecej swojego czasu poświeciłem na JavaScript i framework z nim zwiozany czyli React poznając po drodze inne narzedzia pomagające w tworzeniu stron i aplikacji webowych. Nie jestem studentem informatyki ani kierunków pobocznych jednak myslę, iż nie powinno to w niczym przeszkadzać, ponieważ ostatecznie liczął sie umiejętnośći.</p>

          </div>
          <div className="laptop">
            <div className='stack'>
              <h3>Stack</h3>
              <div className='stackList'>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Html</li>
                <li>CSS</li>
              </ul>
              <ul>
                <li>GIT</li>
                <li>API</li>
                <li>RWD</li>
                <li>SASS</li>
              </ul>
              </div>
            </div>
            <div className='contact'>
              <h3>Contact</h3>
              
              <ul >
                <li>E-mail: buczynskijakub10@gmail.com</li>
                <li>GitHub: https://github.com/BuczekB</li>
                <li>Phone Number: +48 735 157 016</li>
              </ul>
              
            </div>
          </div>
        </div>
        <div className='works' id='works'>



          <Switch>
            <Route path='/' exact component={WorkBox} />
            <Route path='/BJ Game' component={BJGame} />
            <Route path='/Website' component={Website} />
            <Route path='/Weather App' component={WeatherApp} />
            <Route path='/WebTest' component={WebTest} />
          </Switch>






        </div>

        <ArrowUp />

      </div>
    </Router>
  );
}

export default App;
