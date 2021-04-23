import './App.css';
import { Router } from '@reach/router';

// Components
import { Home } from './pages/Home'
import Login from './components/Login';
import UserForm from './components/UserForm'
import Navbar from './components/NavigationBar'


function App() {
  return (
    <div className="App">
    <Navbar />
      <Router>
        <Home path="/" />
        <Home path="/home" />
        <Login path="/login" />
        <UserForm path="/form" />
      </Router>
    </div>
  );
}

export default App;
