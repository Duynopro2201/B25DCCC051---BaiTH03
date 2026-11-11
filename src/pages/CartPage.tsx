import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  clearCart, removeFromCart, selectCartItems, selectCartTotal, updateQuantity,
} from '../features/cart/cartSlice';
import { formatVND } from '../utils/format';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  if (items.length === 0) {
    return <p>Giỏ hàng của bạn đang trống. <Link to="/">Tiếp tục mua sắm</Link></p>;
  }
  return (
    <>
      <h2>Giỏ hàng</h2>
      {items.map((item) => (
        <div key={item.id} className="row">
          <img src={item.image} alt={item.title} className="thumb" />
          <div className="grow">
            <Link to={`/products/${item.id}`}>{item.title}</Link>
            <div className="price">{formatVND(item.price)}</div>
          </div>
          <div className="qty">
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          </div>
          <b>{formatVND(item.price * item.quantity)}</b>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Xoá</button>
        </div>
      ))}
      <h3>Tạm tính: {formatVND(total)}</h3>
      <button onClick={() => dispatch(clearCart())}>Xoá giỏ hàng</button>{' '}
      <Link to="/checkout"><button className="primary">Mua hàng</button></Link>
    </>
  );
}
