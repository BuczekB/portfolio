import React from 'react';
import { Button, Link } from 'react-scroll';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
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
                <img  className='imageHero' width='730px' height='940px' alt='profilowe3.png' src={heroImage}></img>
              </div> 
              <div className='circle'></div>
            </div >
            <div className='right'>
              <div className='mainInfo'>
                <motion.h1 
                initial={{x:'100vw', opacity:0}}
                animate={{x:0, opacity:1}}
                
                >Witam jestem 
                <motion.span 
                initial={{x:'100vw', opacity:0}}
                animate={{x:0, opacity:1}}
                className='orangeSpan'> Jakub! </motion.span>
                </motion.h1>
                <motion.h3 
                initial={{x:'100vw', opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay: 0.3}}
                className='juniorH3'>Junior Frontend Developer</motion.h3>
               
                
              </div>
              <div>
               
                  <Link activeClass="active" to="more" spy={true} smooth={true} offset={-100} duration={500}>
                  <motion.button 
                  initial={{x:'100vw', opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{delay: 0.65}}
                  className='moreButton' type='button'>More</motion.button>
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
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.2, delay:0.2}}>
                  Cześć! Jestem Jakub i mój aktualny poziom w zakresie umiejętności IT to Junior Fronted/JavaScript Developer. Właśnie znajdujesz się na stronie na której przedstawiam moje  najciekawsze projekty. Sam/a możesz dzięki temu określić poziom moich aktualnych umiejętności.
            </motion.p>
           <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.2, delay:0.2}}>
            Przygodę z programowaniem zacząłem 3 lata temu i od pierwszego momentu pochłonęło mnie to całkowicie. W pracy tej najbardziej lubię to że na bieżąco mogę uczyć się nowych rzeczy, dzięki temu że technologia wciąż idzie do przodu. Ponadto nadwyraz polubiłem to uczucie  satysfakcji gdy po długiej batali z kodem w końcu udaje się rozwiązać ten nurtujący problem.  Od tego momentu ciągle pogłębiam swoją wiedzę w tym zakresie. Swoją naukę zacząłem od c++ oraz pythona, jednak najwięcej swojego czasu poświęciłem na JavaScript i frameWork z nim zwiazany- React. Poznając oczywiście po drodze wiele narzędzi pomocnych w tworzeniu stron i aplikacji webowych. Fakt, nie jestem studentem informatyki ani kierowników pobocznych. Od początku ambitnie podchodzę do zadania i  uczę się sam. Wyłącznie rzeczy które uważam za istotne i które rokują potencjalnie na przyszłe lata. Uważam że od papierka ważniejsze są posiadane umiejętności i motywacja do działania.</motion.p>

          </div>
          <div className="laptop">
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.2, delay:0.2}}
            className='stack'>
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
            </motion.div>
            <motion.div 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:1.2, delay:0.15}}
            className='contact'>
              <h3>Contact</h3>
              
              <ul >
                <li>E-mail: buczynskijakub10@gmail.com</li>
                <li>GitHub: https://github.com/BuczekB</li>
                <li>Phone Number: +48 735 157 016</li>
              </ul>
              
            </motion.div>
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

        <ArrowUp/>
        <div className='mobileVersion'>
        <span>Mobile Version</span>
        <span>coming soon</span>

        </div>
      </div>
    </Router>
  );
}

export default App;
