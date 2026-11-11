import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts, selectProducts, selectProductsStatus } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { discountPercent, formatSold, formatVND } from '../utils/format';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectProductsStatus);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  if (status === 'idle' || status === 'loading') return <p>Đang tải...</p>;
  if (status === 'failed') return <p className="error">Không tải được dữ liệu.</p>;

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <p>Không tìm thấy sản phẩm. <Link to="/">Về trang chủ</Link></p>;
  }
  return (
    <div className="detail">
      <img src={product.image} alt={product.title} />
      <div>
        <Link to="/">← Quay lại</Link>
        <h2>{product.title}</h2>
        <p className="muted">Danh mục: {product.category} · ⭐ {product.rating} · Đã bán {formatSold(product.sold)}</p>
        <div className="pricebox">
          <span className="price big">{formatVND(product.price)}</span>
          <span className="old">{formatVND(product.oldPrice)}</span>
          <span className="badge static">-{discountPercent(product)}%</span>
        </div>
        <p>{product.description}</p>
        <p className="muted">🚚 Giao hàng toàn quốc · 🛡️ Bảo hành chính hãng · 🔄 Đổi trả trong 7 ngày</p>
        <button className="primary" onClick={() => dispatch(addToCart(product))}>
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
