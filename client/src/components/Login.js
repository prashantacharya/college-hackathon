import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { useAlert } from 'react-alert';

const Login = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const alert = useAlert();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!loading) {
      try {
        const response = await axios.post('http://localhost:3001/auth/login', {
          email,
          password,
        });

        authContext.handleTokenUpdate(response.data.token);
        alert.success('Logged In');

        if (response.data.token) history.push('/');
      } catch (error) {
        setLoading(false);
        alert.error('Log In Failed');
      }
    }
  };

  useEffect(() => {
    if (authContext.accessToken) history.push('/score');
  }, [history, authContext.accessToken]);

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="Email">Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-element">
          <label htmlFor="Password">Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-element">
          <button>
            {loading ? <span>Logging In</span> : <span>Log In</span>}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
