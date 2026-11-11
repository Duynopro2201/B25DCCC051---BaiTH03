interface ViText {
  title: string;
  description: string;
}

// Bản dịch tiếng Việt cho 20 sản phẩm của fakestoreapi (theo id)
export const VI_TEXT: Record<number, ViText> = {
  1: { title: 'Ba lô Fjallraven Foldsack No. 1 (vừa laptop 15 inch)', description: 'Ba lô gọn nhẹ hằng ngày, có ngăn chống sốc đựng vừa laptop 15 inch. Chất liệu bền, quai đeo êm vai, phù hợp đi học, đi làm và dạo phố.' },
  2: { title: 'Áo thun nam cổ tròn dáng ôm cao cấp (3 chiếc)', description: 'Dáng ôm vừa vặn, tay raglan ngắn, cổ tròn. Chất cotton mềm mịn, thoáng mát, giặt máy thoải mái, mặc đi làm hay đi chơi đều đẹp.' },
  3: { title: 'Áo khoác cotton nam', description: 'Áo khoác ấm áp cho mùa thu đông, phù hợp đi làm, đi chơi, leo núi hay cắm trại. Là món quà ý nghĩa cho gia đình và bạn bè.' },
  4: { title: 'Áo nam dáng ôm phối màu', description: 'Áo dáng ôm với thiết kế phối màu, bo tay và cổ chắc chắn. Chất vải thoải mái, giữ form tốt sau nhiều lần giặt.' },
  5: { title: 'Lắc tay John Hardy Legends Naga bạc mạ vàng hình rồng', description: 'Từ bộ sưu tập Legends của John Hardy, lấy cảm hứng từ rồng Naga huyền thoại bảo vệ ngọc trai. Lắc tay xích bạc kết hợp vàng, khoá cài dạng cò.' },
  6: { title: 'Nhẫn vàng đặc đính đá Micropave', description: 'Nhẫn vàng đặc thiết kế tinh xảo, đính đá nhỏ đều tay. Chính sách đổi trả trong 30 ngày, mang lại sự yên tâm khi mua sắm.' },
  7: { title: 'Nhẫn công chúa mạ vàng trắng', description: 'Nhẫn đính hôn kiểu công chúa mạ vàng trắng, dành tặng người yêu dịp lễ tình nhân, kỷ niệm hay sinh nhật. Thiết kế sang trọng, nổi bật.' },
  8: { title: 'Khuyên tai ống vàng hồng inox hình đôi', description: 'Khuyên tai dạng ống mạ vàng hồng, chất liệu thép không gỉ bền màu, không gây kích ứng da. Phù hợp đeo hằng ngày.' },
  9: { title: 'Ổ cứng di động WD Elements 2TB USB 3.0', description: 'Ổ cứng di động dung lượng 2TB, chuẩn USB 3.0 truyền dữ liệu nhanh, tương thích USB 2.0. Dễ dàng sao lưu và lưu trữ dữ liệu, cắm là chạy. Bảo hành 3 năm.' },
  10: { title: 'Ổ cứng SSD SanDisk SSD PLUS 1TB SATA III', description: 'Dễ dàng nâng cấp để khởi động máy nhanh hơn, mở ứng dụng nhanh hơn và tăng hiệu suất tổng thể. Tốc độ đọc đến 535MB/s, ghi đến 450MB/s, bền bỉ và tiết kiệm điện năng.' },
  11: { title: 'Ổ cứng SSD Silicon Power 256GB 3D NAND A55 SATA III 2.5 inch', description: 'Công nghệ 3D NAND cho hiệu năng và độ bền cao, bộ đệm SLC tăng tốc ghi dữ liệu. Tốc độ đọc/ghi lên đến 560/530MB/s, nhẹ, chống sốc và hoạt động êm.' },
  12: { title: 'Ổ cứng di động WD Gaming Drive 4TB dùng cho PlayStation 4', description: 'Mở rộng dung lượng chơi game cho PS4 lên đến 4TB. Cắm vào là dùng được ngay, không cần cài đặt phần mềm. Thiết kế nhỏ gọn, bền bỉ, dễ dàng mang theo.' },
  13: { title: 'Màn hình Acer SB220Q bi 21.5 inch Full HD IPS siêu mỏng', description: 'Màn hình 21.5 inch Full HD (1920 x 1080) tấm nền IPS, góc nhìn rộng, thiết kế siêu mỏng không viền. Công nghệ AMD Radeon FreeSync, tốc độ làm tươi 75Hz, thời gian phản hồi 4ms.' },
  14: { title: 'Màn hình cong Samsung CHG90 49 inch 144Hz QLED siêu rộng', description: 'Màn hình gaming cong 49 inch tỉ lệ siêu rộng 32:9 tương đương hai màn hình 27 inch đặt cạnh nhau. Tấm nền QLED, tần số quét 144Hz, hỗ trợ AMD FreeSync 2 và HDR.' },
  15: { title: 'Áo khoác trượt tuyết nữ 3 trong 1 BIYLACLESEN', description: 'Áo khoác 3 trong 1 gồm lớp ngoài chống gió và lớp lót ấm tháo rời, cổ cao chắn gió, có mũ. Giữ ấm tốt trong mùa đông và khi vận động ngoài trời.' },
  16: { title: 'Áo khoác da PU nữ kiểu biker Lock and Love có mũ tháo rời', description: 'Áo khoác da PU phong cách biker, mũ có thể tháo rời, khoá kéo phía trước, hai túi hai bên. Chất liệu mềm, ấm áp, dễ phối đồ.' },
  17: { title: 'Áo khoác gió nữ kẻ sọc chống mưa', description: 'Áo khoác chống thấm nước, nhẹ, có mũ trùm, lớp lót thoáng khí. Phù hợp đi du lịch, leo núi và hoạt động ngoài trời trong ngày mưa.' },
  18: { title: 'Áo nữ MBJ tay ngắn cổ thuyền chữ V màu trơn', description: 'Áo cổ thuyền chữ V tay ngắn, màu trơn dễ phối. Chất vải mềm mại, co giãn nhẹ, thoải mái khi mặc hằng ngày.' },
  19: { title: 'Áo thể thao nữ Opna tay ngắn thấm hút mồ hôi', description: 'Áo tay ngắn dùng vải thấm hút mồ hôi, nhanh khô, nhẹ và thoáng. Phù hợp tập luyện, chạy bộ và mặc thường ngày.' },
  20: { title: 'Áo thun nữ DANVOUY cotton tay ngắn phong cách thường ngày', description: 'Áo thun cotton mềm mại, tay ngắn, in hoạ tiết trẻ trung. Mặc thoải mái, dễ kết hợp với quần jeans hoặc chân váy.' },
};
