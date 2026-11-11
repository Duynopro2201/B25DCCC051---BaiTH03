import type { Product } from '../types';

const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
export const formatVND = (n: number): string => vnd.format(n);
export const discountPercent = (p: Product): number =>
  Math.round((1 - p.price / p.oldPrice) * 100);
export const formatSold = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')}k` : String(n);
export const FREE_SHIP_FROM = 500000;
export const SHIP_FEE = 30000;
