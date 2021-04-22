import './App.css';
import { Router } from '@reach/router';

// Components
import Login from './components/Login';
import { Home } from './pages/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Home path="/home" />
        <Login path="/login" />
      </Router>
        {/* */}
    </div>
  );
}

export default App;
