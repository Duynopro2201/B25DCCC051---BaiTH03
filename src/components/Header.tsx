import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectCartCount } from '../features/cart/cartSlice';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const count = useAppSelector(selectCartCount);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <Link to="/" className="logo">🛍️ ShopMini</Link>
      <nav className="nav">
        <button onClick={toggleTheme} title="Đổi giao diện">
          {theme === 'light' ? '🌙 Tối' : '☀️ Sáng'}
        </button>
        <Link to="/cart">🛒 Giỏ hàng ({count})</Link>
        {user ? (
          <>
            <span>Xin chào, <b>{user.username}</b></span>
            <button onClick={logout}>Đăng xuất</button>
          </>
        ) : (
          <Link to="/login">Đăng nhập</Link>
        )}
      </nav>
    </header>
  );
}
