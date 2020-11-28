import logo from './logo.svg';
import './App.css';

import Donuts from './Donuts';
import FryBits from './FryBits'
import Pizza from './Pizza';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Link to='/'>Home</Link>
        <Link to='/eat'>Eat</Link>
        <Link to='/drink'>Drink</Link>
        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/eat">
          <Eat />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
