import './App.css';
import React, {useRef} from 'react';
import Navbar from './Navbar';
import Resume from './Resume';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import stars from '../images/stars.gif'
import rocket from '../images/rocket1.gif'
import book from '../images/reading.jpeg'
import profile from '../images/profile.jpeg'
import singapore from '../images/singapore.png'
import moon from '../images/endmoon.jpg'


function App() {
  const parallaxRef = useRef(null);

  const goToLayer = (layerIndex) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(layerIndex);
    }
  };

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

        <ParallaxLayer speed={.5}>
          <div className="firstPage">
            <div className="introduction">
              <p>Hello,</p>
              <p>I'm Jaiden Magnan</p>
            </div>
              <img className="rocket" src={rocket}></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.1}>
          <div className="intro">
            <h1>//about me</h1>
            <div className="aboutme">
              <div className="images">
                <img className="slideshow" src={profile}></img>
                <img className="slideshow" src={book}></img>
                <img className="slideshow" src={singapore}></img>

              </div>
            </div>
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <div className="intro">
            <h1>//resume</h1>
            <Resume />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3}
        >
          <div className="intro">
            <h1>//contact</h1>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
