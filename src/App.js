import { useEffect, useState } from 'react';
import PageDesktop from "./pages/desktop";
import PageMobile from "./pages/mobile";
import './styles/app.css';

function getWindowDimentions() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return ({
      width,
      height
  })
}

function App() {
  const [windowDimensions, setWindowD] = useState(() => getWindowDimentions());

  useEffect(() => {
      function handleResize() {
          setWindowD(getWindowDimentions());
      }

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="App" id="App">
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
