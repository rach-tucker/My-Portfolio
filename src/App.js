import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">     
    <Navigation/>
    <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>  
        <Route path='/projects' element={ <Projects /> }/>               
        <Route path='/contact' element={ <Contact /> }/>  
    </Routes>
</div>
  );
}

export default App;
