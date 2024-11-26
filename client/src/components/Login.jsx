import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const newUser = { email, password };
      const loginRes = await axios.post("http://localhost:3001/login", newUser);
      if (loginRes.data.token) {
        navigate('/home');
      }
      localStorage.setItem("auth-token", loginRes.data.token);
    } catch (err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '10px' }}>
      <div>
        <input
          type="email"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', margin: '5px 0', width: '200px' }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPass(e.target.value)}
          style={{ padding: '10px', margin: '5px 0', width: '200px' }}
        />
      </div>
      <button onClick={handleSubmit} style={{ padding: '10px 20px', margin: '10px 0' }}>Login</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Login;