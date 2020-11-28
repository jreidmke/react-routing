import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Donuts from './Donuts';
import FryBits from './FryBits';
import Pizza from './Pizza';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/donuts'>Donuts</Link>
        <br></br>
        <Link to='/frybits'>FryBits</Link>
        <br></br>
        <Link to='/pizza'>Pizza</Link>
        <br></br>
        <Route exact path="/donuts">
          <Donuts />
        </Route>
        <Route exact path="/frybits">
          <FryBits />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
