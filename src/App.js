import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container element={<Header/>}/>
        <Container element={<Footer/>}/>
      </header>
    </div>
  );
}

export default App;
