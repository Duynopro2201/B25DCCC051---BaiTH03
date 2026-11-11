import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface LocationState {
  from?: Location;
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState | null)?.from?.pathname ?? '/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (login(username, password)) navigate(from, { replace: true });
    else setError('Sai tên đăng nhập hoặc mật khẩu (mật khẩu đúng: 123456)');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Đăng nhập</h2>
      <input placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <button className="primary" type="submit">Đăng nhập</button>
    </form>
  );
}
