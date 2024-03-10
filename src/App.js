import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Maininfo from './components/Maininfo/Maininfo';
import SliderComand from './components/SliderComand/SliderComand';
import SliderProjects from './components/SliderProjects/SliderProjects';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <div className='container header_container'>
          <Header/>
        </div>
        <Maininfo/>
        <SliderProjects/>
        <SliderComand/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
