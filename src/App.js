import './styles/app.css';
import useWindowDimensions from './hooks/useWindowDimensions';
import PageDesktop from "./pages/desktop";
import PageMobile from "./pages/mobile";

function App() {
  const windowDimensions = useWindowDimensions();

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
