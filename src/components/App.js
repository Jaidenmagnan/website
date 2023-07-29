import './App.css';
import React, {useRef, useEffect} from 'react';
import Navbar from './Navbar';
import Resume from './Resume';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import stars from '../images/stars.gif'
import rocket from '../images/rocket1.gif'
import book from '../images/reading.jpeg'
import profile from '../images/profile.jpeg'
import singapore from '../images/singapore.png'
import moon from '../images/endmoon.png'
import snorlax from '../images/asteroid.gif'
import Typewriter from './Typewriter';
import astro from '../images/astro.gif'
import fantasy from '../images/planet.gif';

function App() {
  const parallaxRef = useRef(null);

  const goToLayer = (layerIndex) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(layerIndex);
    }
  };

  const text = ` "As I fear not a child with a weapon he cannot lift, I will never fear the mind of a man who does not think." -Brandon Sanderson, Words of Radiance`;

  return (
    <div className="App">
      <Parallax ref={parallaxRef} pages={4}>

        <ParallaxLayer
          sticky={{start: 0, end:4}} 
        >
        <Navbar goToLayer={goToLayer}/>
        </ParallaxLayer>

        <ParallaxLayer
          factor = {4}
          style={({
            backgroundImage: `url(${stars})`,
            backgroundRepeat: 'repeat',
          })}
          >
        </ParallaxLayer>

        <ParallaxLayer speed={1}>
          <div className="firstPage">
            <div className="introduction">
              <p>Hello,</p>
              <p>I'm Jaiden Magnan</p>
            </div>
              <img className="rocket" src={rocket}></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.25}>
          <div className="intro">
            <h1>//about me</h1>
            <div className="aboutme">
              <div className="images">
                <div className="image-wrapper">
                  <img className="slideshow" src={profile}></img>
                  <p className="image-text">this is me</p>
                </div>
                
                <div className="image-wrapper">
                  <img className="slideshow" src={book}></img>
                  <p className="image-text">i like to read</p>
                </div>

                <div className="image-wrapper">
                  <img className="slideshow" src={singapore}></img>
                  <p className="image-text">i also like to travel (this is Singapore)</p>
                </div>
              </div>
              <div class="quote">
                <img src={fantasy}></img>
                <Typewriter text={text}/>
              </div>
            </div>
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={.25}>
          <div className="intro">
            <div className="header">
              <h1>//resume</h1>
            </div>
            <div className="resumestuff">
              <Resume />
              <img src={snorlax}className="snorlax"></img>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}
        >
          <div className="intro">
            <h1>//contact</h1>
            <img className="astro" src={astro}></img>
            <img className="moon" src={moon}></img>
            <div className="contact">
              <ol>
                <li> +1 772-577-8948</li>
                <li> jaidenmagnan@gmail.com</li>
                <button>linkedin</button>
              </ol>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
