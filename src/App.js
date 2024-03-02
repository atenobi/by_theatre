import './App.css';
// import Comand from './components/Comand/Comand';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container header_container'>
          <Header/>
        </div>
        {/* <div className='container'>
            <Comand/>
        </div> */}
        <Slider/>  
        <Footer/>
      </header>
    </div>
  );
}

export default App;
