import './App.css';
// import Comand from './components/Comand/Comand';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SliderComand from './components/SliderComand/SliderComand';
import SliderProjects from './components/SliderProjects/SliderProjects';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <div className='container header_container'>
          <Header/>
        </div>
        {/* <div className='container'>
            <Comand/>
        </div> */}
        <SliderComand/>  
        <SliderProjects/> 
        <Footer/>
        </div>
    </div>
  );
}

export default App;
