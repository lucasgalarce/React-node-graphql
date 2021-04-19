import './App.css';

// Components
import Login from './components/Login';
import Grid from './components/Grid';
import UserForm from './components/UserForm.jsx'

function App() {
  return (
    <div className="App">
      <Login/>
      <Grid/>
      <UserForm/>
    </div>
  );
}

export default App;
