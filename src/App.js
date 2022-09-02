import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Details from './components/Details';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/:id" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
