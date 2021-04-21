import './App.css';

// Components
import Login from './components/Login';
import Home from './components/Home'
import UserForm from './components/UserForm.jsx'

function App() {
  return (
    <div className="App">
      <Login/>
      <Home/>
      <UserForm/>
    </div>
  );
}

export default App;
