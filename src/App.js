import { useEffect, useState } from 'react';
import PageDesktop from "./pages/desktop";
import PageMobile from "./pages/mobile";
import './styles/app.css';

function getWindowDimentions() {
  const { innerWidth: width, innerHeight: height } = window;
  return ({
      width,
      height
  })
}

function App() {
  const [windowDimensions, setWindowD] = useState(getWindowDimentions());

  useEffect(() => {
      function handleResize() {
          setWindowD(getWindowDimentions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className="App">
      {windowDimensions.width > 768 ? 
          <div className="Desktop">
            <PageDesktop />
          </div>
          :
          <div className="Mobile">
            <PageMobile dimensions={windowDimensions}/>
          </div>
        }
    </div>
  );
}

export default App;
