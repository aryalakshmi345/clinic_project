import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import API from '../lib/api';
import { saveToken } from '../lib/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('/api/users/login', { email, password });
    //   console.log(res);
      
      saveToken(res.data.token);
      navigate('/doctors');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className='d-flex align-items-center justify-content-center' style={{height:"100vh",width:"100%"}}>
     <div>
          <h2 >Login</h2>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input className='form-control mt-3 mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input className='form-control mb-3' value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
     </div>
    </div>
  );
}