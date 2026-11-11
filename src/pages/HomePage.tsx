import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  fetchProducts, selectProducts, selectProductsError, selectProductsStatus,
} from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Tất cả');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  const categories = ['Tất cả', ...Array.from(new Set(products.map((p) => p.category)))];
  const filtered = products.filter(
    (p) =>
      (category === 'Tất cả' || p.category === category) &&
      p.title.toLowerCase().includes(keyword.trim().toLowerCase()),
  );

  return (
    <>
      <div className="banner">🔥 Siêu sale – Miễn phí vận chuyển cho đơn từ 500.000₫</div>
      <input
        className="search"
        placeholder="Tìm sản phẩm theo tên (VD: áo khoác, nhẫn, ổ cứng)..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="chips">
        {categories.map((c) => (
          <button key={c} className={c === category ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      {status === 'loading' && <p>Đang tải sản phẩm...</p>}
      {status === 'failed' && (
        <p className="error">
          {error} <button onClick={() => dispatch(fetchProducts())}>Thử lại</button>
        </p>
      )}
      {status === 'succeeded' && filtered.length === 0 && <p>Không tìm thấy sản phẩm phù hợp.</p>}
      <div className="grid">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}
