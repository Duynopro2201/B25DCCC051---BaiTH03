import { Link } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { addToCart } from '../features/cart/cartSlice';
import type { Product } from '../types';
import { discountPercent, formatSold, formatVND } from '../utils/format';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <div className="card">
      <span className="badge">-{discountPercent(product)}%</span>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3 className="clamp">{product.title}</h3>
      </Link>
      <div>
        <span className="price">{formatVND(product.price)}</span>
        <div className="old">{formatVND(product.oldPrice)}</div>
      </div>
      <div className="meta">⭐ {product.rating} · Đã bán {formatSold(product.sold)}</div>
      <button className="primary" onClick={() => dispatch(addToCart(product))}>
        Thêm vào giỏ
      </button>
    </div>
  );
}
