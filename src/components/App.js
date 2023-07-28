import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import homeBackground from '../images/space.png';
import stars from '../images/stars.png'


function App() {
  return (
    <div className="App">
      <Parallax pages={4}>

        <ParallaxLayer
          sticky={{start: 0, end:4}} 
        >
        <Navbar />
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${homeBackground})`,
            backgroundSize: 'cover',
            opacity: "20%",
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer offset={0}>
        
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
