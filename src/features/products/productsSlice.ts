import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../types';
import type { RootState } from '../../app/store';
import { VI_TEXT } from '../../utils/viTranslations';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
interface ProductsState {
  items: Product[];
  status: Status;
  error: string | null;
}
const initialState: ProductsState = { items: [], status: 'idle', error: null };

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const USD_TO_VND = 25000;
const CATEGORY_VI: Record<string, string> = {
  "men's clothing": 'Thời trang nam',
  "women's clothing": 'Thời trang nữ',
  jewelery: 'Trang sức',
  electronics: 'Đồ điện tử',
};
const roundK = (n: number): number => Math.round(n / 1000) * 1000;

// Chuyển dữ liệu API (USD) sang Product hiển thị kiểu Việt Nam (VNĐ)
function toProduct(p: ApiProduct): Product {
  const price = roundK(p.price * USD_TO_VND);
  const vi = VI_TEXT[p.id];
  return {
    id: p.id,
    title: vi?.title ?? p.title,
    price,
    oldPrice: roundK(price * 1.2),
    description: vi?.description ?? p.description,
    category: CATEGORY_VI[p.category] ?? p.category,
    image: p.image,
    rating: p.rating.rate,
    sold: p.rating.count,
  };
}

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) return rejectWithValue(`Lỗi HTTP ${res.status}`);
      const data = (await res.json()) as ApiProduct[];
      return data.map(toProduct);
    } catch {
      return rejectWithValue('Không thể kết nối tới máy chủ');
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? action.error.message ?? 'Có lỗi xảy ra';
      });
  },
});

export const selectProducts = (s: RootState) => s.products.items;
export const selectProductsStatus = (s: RootState) => s.products.status;
export const selectProductsError = (s: RootState) => s.products.error;
export default productsSlice.reducer;
