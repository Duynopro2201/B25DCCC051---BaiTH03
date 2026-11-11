import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearCart, selectCartItems, selectCartTotal } from '../features/cart/cartSlice';
import { FREE_SHIP_FROM, SHIP_FEE, formatVND } from '../utils/format';

type Payment = 'cod' | 'momo' | 'bank';

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const [ordered, setOrdered] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState<Payment>('cod');
  const [error, setError] = useState('');

  const ship = total >= FREE_SHIP_FROM ? 0 : SHIP_FEE;

  const handleOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !address.trim()) return setError('Vui lòng nhập đầy đủ họ tên và địa chỉ.');
    if (!/^(0|\+84)\d{9}$/.test(phone.trim())) return setError('Số điện thoại không hợp lệ (VD: 0912345678).');
    dispatch(clearCart());
    setOrdered(true);
  };

  if (ordered) {
    return (
      <div className="success">
        ✅ Đặt hàng thành công! Cảm ơn {name}, đơn hàng sẽ được giao đến {address}.{' '}
        <Link to="/">Tiếp tục mua sắm</Link>
      </div>
    );
  }
  if (items.length === 0) return <p>Giỏ hàng trống. <Link to="/">Về trang chủ</Link></p>;

  return (
    <form onSubmit={handleOrder}>
      <h2>Thanh toán</h2>
      <div className="form wide">
        <input placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="Địa chỉ nhận hàng (số nhà, phường/xã, quận/huyện, tỉnh/thành)" value={address} onChange={(e) => setAddress(e.target.value)} />
        <div className="pay">
          <label><input type="radio" checked={payment === 'cod'} onChange={() => setPayment('cod')} /> Thanh toán khi nhận hàng (COD)</label>
          <label><input type="radio" checked={payment === 'momo'} onChange={() => setPayment('momo')} /> Ví MoMo</label>
          <label><input type="radio" checked={payment === 'bank'} onChange={() => setPayment('bank')} /> Chuyển khoản ngân hàng</label>
        </div>
      </div>
      {items.map((i) => (
        <div key={i.id} className="row">
          <span className="grow">{i.title} × {i.quantity}</span>
          <b>{formatVND(i.price * i.quantity)}</b>
        </div>
      ))}
      <p>Tạm tính: {formatVND(total)}</p>
      <p>Phí vận chuyển: {ship === 0 ? 'Miễn phí' : formatVND(ship)}</p>
      <h3>Tổng thanh toán: {formatVND(total + ship)}</h3>
      {error && <p className="error">{error}</p>}
      <button className="primary" type="submit">Đặt hàng</button>
    </form>
  );
}
