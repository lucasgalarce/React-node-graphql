import React, {useState} from 'react';

function Login() {
  const [candidates, setCandidates] = useState([]);

  // fetch.query.then( response => setCandidates(response))

  return (
    <form className="Login">
      <h1>Login</h1>
      <input type="text"/>
      <input type="password"/>
    </form>
  );
}

export default Login;
