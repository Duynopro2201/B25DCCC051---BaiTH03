# ShopMini – Bài thực hành 03

Ứng dụng cửa hàng mini (giao diện kiểu sàn TMĐT Việt Nam: giá VNĐ, COD/MoMo) bằng React + TypeScript (Vite), dùng Context API và Redux Toolkit.

## Chạy dự án
```bash
npm install
npm run dev
```
Đăng nhập giả lập: username bất kỳ, mật khẩu `123456`.

## Phân bổ dữ liệu: useState / Context / Redux

| Dữ liệu | Nơi lưu | Lý do |
|---|---|---|
| Từ khoá tìm kiếm (HomePage) | `useState` | Chỉ một component dùng, mất đi khi rời trang cũng không sao. |
| Form đăng nhập (username, password, error) | `useState` | Dữ liệu tạm, chỉ phục vụ một form. |
| Cờ `ordered` ở trang Thanh toán | `useState` | Chỉ để hiện thông báo thành công cục bộ. |
| Theme sáng/tối | Context (`ThemeContext`) | Dùng toàn app (Header, `<html>`), ít thay đổi, logic đơn giản, không cần Redux. |
| Người dùng đăng nhập (`user`, `login`, `logout`) | Context (`AuthContext`) | Cần ở Header, ProtectedRoute, LoginPage; ít thay đổi, là dữ liệu "môi trường". |
| Danh sách sản phẩm + trạng thái loading/succeeded/failed | Redux (`productsSlice`) | Dữ liệu bất đồng bộ từ API, nhiều trang dùng chung (Home, Detail); `createAsyncThunk` quản lý vòng đời request, tránh gọi lại API. |
| Giỏ hàng (items, tổng số lượng, tổng tiền) | Redux (`cartSlice`) | Nhiều component đọc/ghi (Card, Detail, Cart, Checkout, Header), có logic nghiệp vụ và dữ liệu dẫn xuất qua selector. |

## Nguồn dữ liệu
`productsSlice` dùng `createAsyncThunk` gọi `https://fakestoreapi.com/products`, sau đó:
- giữ nguyên toàn bộ 20 sản phẩm của API, danh mục dịch sang tiếng Việt (Thời trang nam/nữ, Trang sức, Đồ điện tử);
- đổi giá USD sang VNĐ (1 USD = 25.000 ₫, làm tròn đến nghìn);
- `rating.rate` → số sao, `rating.count` → "Đã bán", giá gốc = giá × 1,2 để hiển thị % giảm giá.
- tên và mô tả sản phẩm được dịch sang tiếng Việt theo `id` trong `src/utils/viTranslations.ts` (sản phẩm nào chưa có bản dịch thì giữ nguyên nội dung từ API).
