import PageDesktop from "./pages/desktop";
import PageMobile from "./pages/mobile";
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <div className="Desktop">
        <PageDesktop />
      </div>
      <div className="Mobile">
        <PageMobile />
      </div>
    </div>
  );
}

export default App;
