/* ==========================================================================
   FILE: js/data.js - Dữ liệu trung tâm (50 Sản Phẩm & 9 Combo)
   ========================================================================== */

// 1. MẢNG 50 SẢN PHẨM LẺ
window.productsData = [
    {
        id: 1, brand: "La Roche-Posay", name: "Anthelios UVmune 400 Oil Control Gel-Cream",
        category: "Kem chống nắng", capacity: "50ml", price: 489000, priceStr: "489.000 VNĐ",
        image: "img/Gemini_Generated_Image_b7goe0b7goe0b7go.png",
        desc: "Kem chống nắng dạng gel-cream giúp bảo vệ da trước tia UV, hỗ trợ kiểm soát dầu và hạn chế bóng nhờn.",
        usage: "Bảo vệ da khỏi tia UV, kiểm soát dầu thừa.", target: "Da dầu, da hỗn hợp thiên dầu.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "Mexoryl 400, Airlicium.",
        howtouse: "Thoa đều trước khi ra nắng 15-20 phút. Thoa lại sau 2-3 giờ."
    },
    {
        id: 2, brand: "La Roche-Posay", name: "Cicaplast Baume B5+",
        category: "Kem dưỡng", capacity: "40ml", price: 359000, priceStr: "359.000 VNĐ",
        image: "img/Gemini_Generated_Image_8an5bb8an5bb8an5.png",
        desc: "Kem dưỡng phục hồi đa năng giúp làm dịu, nuôi dưỡng và bảo vệ làn da khô, nhạy cảm hoặc kích ứng.",
        usage: "Làm dịu da kích ứng, phục hồi hàng rào bảo vệ da.", target: "Mọi lứa tuổi, da khô, da nhạy cảm.",
        skintype: "Da khô, da tổn thương, da nhạy cảm.", ingredients: "Panthenol 5% (B5), Madecassoside, Tribioma.",
        howtouse: "Thoa 2 lần/ngày lên vùng da sạch và khô."
    },
    {
        id: 3, brand: "La Roche-Posay", name: "Effaclar Purifying Foaming Gel",
        category: "Sữa rửa mặt", capacity: "200ml", price: 419000, priceStr: "419.000 VNĐ",
        image: "img/Gemini_Generated_Image_hpkuughpkuughpku.png",
        desc: "Gel rửa mặt tạo bọt giúp làm sạch bụi bẩn, dầu thừa dịu nhẹ mà không gây khô căng da.",
        usage: "Làm sạch sâu bã nhờn, thông thoáng lỗ chân lông.", target: "Da dầu, da mụn.",
        skintype: "Da dầu mụn, da nhạy cảm.", ingredients: "Kẽm PCA, Nước khoáng La Roche-Posay.",
        howtouse: "Làm ướt mặt, tạo bọt massage nhẹ nhàng rồi rửa sạch."
    },
    {
        id: 4, brand: "La Roche-Posay", name: "Effaclar Ultra Concentrated Serum",
        category: "Tinh chất mờ mụn", capacity: "30ml", price: 889000, priceStr: "889.000 VNĐ",
        image: "img/Gemini_Generated_Image_2cq8102cq8102cq8.png",
        desc: "Serum giảm mụn chuyên sâu, cải thiện bề mặt da và hỗ trợ làm mờ thâm sau mụn.",
        usage: "Giảm mụn, mờ thâm, thu nhỏ lỗ chân lông.", target: "Làn da bị mụn ẩn, mụn viêm, thâm.",
        skintype: "Da dầu mụn.", ingredients: "Salicylic Acid (BHA), Glycolic Acid (AHA), LHA, Niacinamide.",
        howtouse: "Sử dụng 1 lần/ngày vào buổi tối sau bước toner."
    },
    {
        id: 5, brand: "La Roche-Posay", name: "Micellar Water Ultra Reactive Skin",
        category: "Nước tẩy trang", capacity: "400ml", price: 469000, priceStr: "469.000 VNĐ",
        image: "img/Gemini_Generated_Image_erjhbterjhbterjh.png",
        desc: "Nước tẩy trang làm sạch dịu nhẹ bụi bẩn, tạp chất và lớp trang điểm cho da siêu nhạy cảm.",
        usage: "Tẩy trang dịu nhẹ, cân bằng độ ẩm.", target: "Da nhạy cảm, mẩn đỏ.",
        skintype: "Da nhạy cảm, da khô.", ingredients: "Công nghệ Micellar, Nước khoáng làm dịu.",
        howtouse: "Thấm vào bông tẩy trang, lau nhẹ nhàng toàn mặt."
    },
    {
        id: 6, brand: "L’Oréal Paris", name: "Micellar Water 3-in-1 Deep Cleansing",
        category: "Nước tẩy trang", capacity: "400ml", price: 199000, priceStr: "199.000 VNĐ",
        image: "img/Gemini_Generated_Image_vs5go1vs5go1vs5g.png",
        desc: "Tẩy trang 2 lớp dầu-nước giúp làm sạch sâu lớp trang điểm chống nước bền màu.",
        usage: "Sạch sâu lớp trang điểm cứng đầu.", target: "Người hay trang điểm đậm.",
        skintype: "Mọi loại da.", ingredients: "Công nghệ Micellar kép, Nước khoáng.",
        howtouse: "Lắc đều trước khi dùng, lau sạch nhẹ nhàng bằng bông."
    },
    {
        id: 7, brand: "L’Oréal Paris", name: "Revitalift Pure Hyaluronic Acid 1.5%",
        category: "Tinh chất cấp ẩm", capacity: "30ml", price: 399000, priceStr: "399.000 VNĐ",
        image: "img/Gemini_Generated_Image_ydngx1ydngx1ydng.png",
        desc: "Serum cấp ẩm đa tầng, hỗ trợ làm căng bóng mịn màng và giảm nếp nhăn nông.",
        usage: "Cấp nước tức thì, căng bóng da.", target: "Da khô thiếu nước, da chớm lão hóa.",
        skintype: "Mọi loại da.", ingredients: "1.5% Hyaluronic Acid (Macro + Micro HA).",
        howtouse: "Thoa 4-5 giọt lên da ẩm mỗi sáng và tối."
    },
    {
        id: 8, brand: "L’Oréal Paris", name: "Glycolic Bright Instant Glowing Serum",
        category: "Tinh chất dưỡng sáng", capacity: "30ml", price: 389000, priceStr: "389.000 VNĐ",
        image: "img/Glycolic Bright Instant Glowing Serum_2.jpg",
        desc: "Serum chứa Glycolic Acid giúp giảm thâm nám, dưỡng sáng và làm đều màu da.",
        usage: "Mờ thâm mụn, dưỡng da sáng rạng rỡ.", target: "Da xỉn màu, có đốm nâu.",
        skintype: "Da thường, da dầu, da không đều màu.", ingredients: "Glycolic Acid (AHA), Niacinamide, Vitamin C.",
        howtouse: "Dùng hằng ngày trước kem dưỡng ẩm."
    },
    {
        id: 9, brand: "L’Oréal Paris", name: "UV Defender Matte & Fresh SPF50+",
        category: "Kem chống nắng", capacity: "50ml", price: 289000, priceStr: "289.000 VNĐ",
        image: "img/Gemini_Generated_Image_ye9yvlye9yvlye9y.png",
        desc: "Kem chống nắng kiềm dầu với lớp nền mịn lì khô thoáng, bảo vệ da trước tia UV.",
        usage: "Chống nắng, kiềm dầu, chống bụi mịn.", target: "Da dầu mụn, da sống ở đô thị.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "Màng lọc Mexoryl SX/XL, Airlicium.",
        howtouse: "Thoa đều mặt và cổ mỗi buổi sáng."
    },
    {
        id: 10, brand: "L’Oréal Paris", name: "Elseve Extraordinary Oil Serum",
        category: "Dầu dưỡng tóc", capacity: "100ml", price: 269000, priceStr: "269.000 VNĐ",
        image: "img/Gemini_Generated_Image_w9dbd6w9dbd6w9db.png",
        desc: "Dầu dưỡng tóc chiết xuất 6 loại hoa tự nhiên giúp nuôi dưỡng tóc mềm mượt bóng khỏe.",
        usage: "Dưỡng ẩm tóc, giảm xơ rối, tăng độ bóng.", target: "Tóc khô xơ, hư tổn.",
        skintype: "Mọi loại tóc.", ingredients: "Chiết xuất 6 loại hoa tự nhiên.",
        howtouse: "Thoa 2-3 giọt lên thân và ngọn tóc ẩm hoặc khô."
    },
    {
        id: 11, brand: "Cocoon", name: "Cà phê Đắk Lắk làm sạch da chết cơ thể",
        category: "Tẩy tế bào chết", capacity: "200ml", price: 139000, priceStr: "139.000 VNĐ",
        image: "img/cafe làm sạch da chết _2.jpg",
        desc: "Tẩy tế bào chết toàn thân từ cà phê Đắk Lắk và bơ ca cao giúp da mịn màng, sáng khỏe.",
        usage: "Làm sạch da chết cơ thể, sáng da.", target: "Người muốn chăm sóc da cơ thể mịn màng.",
        skintype: "Mọi loại da cơ thể.", ingredients: "Cà phê Đắk Lắk nguyên chất, Bơ ca cao Tiền Giang.",
        howtouse: "Thoa lên da ướt, massage 5-10 phút rồi xả sạch. Dùng 2-3 lần/tuần."
    },
    {
        id: 12, brand: "Cocoon", name: "Nước dưỡng tóc tinh dầu bưởi",
        category: "Chăm sóc tóc", capacity: "140ml", price: 159000, priceStr: "159.000 VNĐ",
        image: "img/image9.png",
        desc: "Dưỡng tóc chứa tinh dầu vỏ bưởi nguyên chất giúp giảm gãy rụng và kích thích mọc tóc.",
        usage: "Giảm gãy rụng, hỗ trợ mọc tóc dày mượt.", target: "Tóc thưa mỏng, tóc dễ gãy rụng.",
        skintype: "Mọi loại da đầu.", ingredients: "Tinh dầu vỏ bưởi, Vitamin B5, Xylishine.",
        howtouse: "Lắc đều, xịt trực tiếp lên da đầu khô hoặc ẩm, massage nhẹ."
    },
    {
        id: 13, brand: "Cocoon", name: "Nước hoa hồng Nghệ Hưng Yên",
        category: "Nước cân bằng", capacity: "140ml", price: 189000, priceStr: "189.000 VNĐ",
        image: "img/image10.png",
        desc: "Toner chiết xuất nghệ Hưng Yên giúp làm sáng da, mờ thâm và cấp ẩm dịu nhẹ.",
        usage: "Cân bằng độ pH, sáng da, mờ thâm.", target: "Da xỉn màu, có vết thâm mụn.",
        skintype: "Mọi loại da.", ingredients: "Chiết xuất nghệ Hưng Yên, AHA 5%, Betaine.",
        howtouse: "Thoa đều lên mặt bằng tay hoặc bông tẩy trang sau rửa mặt."
    },
    {
        id: 14, brand: "Cocoon", name: "Thạch hoa hồng dưỡng ẩm ẩm mượt da",
        category: "Kem dưỡng", capacity: "30ml", price: 179000, priceStr: "179.000 VNĐ",
        image: "img/image11.png",
        desc: "Kem dưỡng kết cấu dạng thạch mọng nước nuôi dưỡng làn da ẩm mượt suốt 24H.",
        usage: "Cấp ẩm, khóa ẩm, làm mềm da.", target: "Da thiếu nước, da thô ráp.",
        skintype: "Da khô, da hỗn hợp.", ingredients: "Nước hoa hồng hữu cơ, Pentavitin, HA.",
        howtouse: "Thoa đều một lượng vừa đủ lên mặt mỗi sáng và tối."
    },
    {
        id: 15, brand: "Cocoon", name: "Sữa chống nắng Bí Đao",
        category: "Kem chống nắng", capacity: "50ml", price: 329000, priceStr: "329.000 VNĐ",
        image: "img/image12.png",
        desc: "Chống nắng quang phổ rộng ráo mịn không vệt trắng, chuyên biệt cho da dầu mụn.",
        usage: "Bảo vệ da trước UV, kiềm dầu.", target: "Da dầu, da mụn nhạy cảm.",
        skintype: "Da dầu mụn.", ingredients: "Chiết xuất bí đao, Màng lọc UV thế hệ mới, Vitamin E.",
        howtouse: "Thoa 1/4 thìa cà phê cho toàn mặt trước khi ra ngoài."
    },
    {
        id: 16, brand: "Anessa", name: "Perfect UV Sunscreen Skincare Milk N SPF50+",
        category: "Kem chống nắng", capacity: "60ml", price: 619000, priceStr: "619.000 VNĐ",
        image: "img/image13.png",
        desc: "Sữa chống nắng kiềm dầu vi diệu với công nghệ Auto Booster chống nước & mồ hôi.",
        usage: "Chống nắng tối ưu, chống trôi nước.", target: "Người hay hoạt động ngoài trời, đi biển.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "Công nghệ Auto Booster, Super HA, Collagen.",
        howtouse: "Lắc kỹ trước khi dùng. Thoa đều khắp mặt và cổ."
    },
    {
        id: 17, brand: "Anessa", name: "Perfect UV Sunscreen Skincare Gel N SPF50+",
        category: "Kem chống nắng", capacity: "90g", price: 529000, priceStr: "529.000 VNĐ",
        image: "img/image14.png",
        desc: "Gel chống nắng dưỡng ẩm mát lạnh mang đến làn da ẩm mượt mọng nước.",
        usage: "Bảo vệ da, dưỡng ẩm sâu.", target: "Da khô, da thiếu ẩm cần chống nắng.",
        skintype: "Da khô, da thường.", ingredients: "Trà xanh, Hoa hồng Tormentilla, Glycerin.",
        howtouse: "Thoa một lượng gel vừa đủ lên da sau dưỡng ẩm."
    },
    {
        id: 18, brand: "Anessa", name: "Moisture UV Sunscreen Mild Milk SPF35",
        category: "Kem chống nắng", capacity: "60ml", price: 619000, priceStr: "619.000 VNĐ",
        image: "img/image15.png",
        desc: "Sữa chống nắng siêu dịu nhẹ không cồn, không mùi, an toàn cho da nhạy cảm & trẻ em.",
        usage: "Chống nắng dịu nhẹ, dưỡng ẩm.", target: "Da cực kỳ nhạy cảm, trẻ nhỏ.",
        skintype: "Da nhạy cảm.", ingredients: "Công thức 5 không, Chiết xuất mầm trà xanh.",
        howtouse: "Lắc đều và thoa nhẹ nhàng lên da."
    },
    {
        id: 19, brand: "Anessa", name: "Perfect UV Sunscreen Skincare Spray SPF50+",
        category: "Xịt chống nắng", capacity: "60g", price: 419000, priceStr: "419.000 VNĐ",
        image: "img/image16.png",
        desc: "Xịt chống nắng tiện lợi cho cả mặt, toàn thân và tóc, dễ dàng dặm lại trong ngày.",
        usage: "Chống nắng tiện lợi, dặm lại nhanh.", target: "Người bận rộn, người di chuyển nhiều.",
        skintype: "Mọi loại da.", ingredients: "HA, Collagen, Chiết xuất lá trà xanh.",
        howtouse: "Xịt cách da 10-15cm, vỗ nhẹ cho thẩm thấu."
    },
    {
        id: 20, brand: "Anessa", name: "Day Serum SPF50+ PA++++",
        category: "Serum chống nắng", capacity: "30ml", price: 829000, priceStr: "829.000 VNĐ",
        image: "img/image17.png",
        desc: "Serum chống nắng nâng tông hồng ngọc trai kiêm tinh chất dưỡng sáng da ban ngày.",
        usage: "Chống nắng, nâng tông rạng rỡ, dưỡng sáng.", target: "Người thích lớp nền mỏng nhẹ tự nhiên.",
        skintype: "Mọi loại da.", ingredients: "Spirulina Energy Essence, HA, Collagen.",
        howtouse: "Dùng vào buổi sáng như bước cuối cùng dưỡng da."
    },
    {
        id: 21, brand: "CeraVe", name: "Foaming Facial Cleanser",
        category: "Sữa rửa mặt", capacity: "473ml", price: 429000, priceStr: "429.000 VNĐ",
        image: "img/image18.png",
        desc: "Sữa rửa mặt tạo bọt làm sạch dầu thừa dịu nhẹ và củng cố hàng rào bảo vệ da.",
        usage: "Làm sạch bã nhờn, kiềm dầu.", target: "Da dầu, da hỗn hợp.",
        skintype: "Da dầu, da thường.", ingredients: "3 Ceramides thiết yếu, Niacinamide, HA.",
        howtouse: "Tạo bọt rửa mặt mỗi sáng và tối."
    },
    {
        id: 22, brand: "CeraVe", name: "Hydrating Facial Cleanser",
        category: "Sữa rửa mặt", capacity: "473ml", price: 429000, priceStr: "429.000 VNĐ",
        image: "img/image19.png",
        desc: "Sữa rửa mặt dạng kem không tạo bọt giúp giữ ẩm hoàn hảo cho da khô.",
        usage: "Làm sạch dịu nhẹ, duy trì độ ẩm.", target: "Da khô, da yếu cần phục hồi.",
        skintype: "Da khô, da nhạy cảm.", ingredients: "Ceramides 1, 3, 6-II, Hyaluronic Acid.",
        howtouse: "Massage nhẹ nhàng trên da ướt rồi xả sạch."
    },
    {
        id: 23, brand: "CeraVe", name: "Blemish Control Cleanser",
        category: "Sữa rửa mặt", capacity: "236ml", price: 389000, priceStr: "389.000 VNĐ",
        image: "img/image20.png",
        desc: "Sữa rửa mặt giảm mụn chứa 2% BHA & Đất sét giúp thông thoáng lỗ chân lông.",
        usage: "Giảm mụn, kiềm dầu, tẩy da chết.", target: "Làn da đang gặp vấn đề về mụn.",
        skintype: "Da dầu mụn.", ingredients: "2% Salicylic Acid (BHA), Đất sét Hectorite, Niacinamide.",
        howtouse: "Dùng 1-2 lần/ngày, tránh vùng mắt."
    },
    {
        id: 24, brand: "CeraVe", name: "Moisturizing Cream",
        category: "Kem dưỡng", capacity: "340g", price: 429000, priceStr: "429.000 VNĐ",
        image: "img/image21.png",
        desc: "Kem dưỡng ẩm chuyên sâu cho mặt & cơ thể, hỗ trợ phục hồi màng bảo vệ da bị tổn thương.",
        usage: "Dưỡng ẩm sâu, giảm khô nẻ.", target: "Da rất khô, da chàm nẻ.",
        skintype: "Da khô, da nhạy cảm.", ingredients: "Công nghệ MVE khóa ẩm 24H, Ceramides.",
        howtouse: "Thoa lên các vùng da khô bất cứ khi nào cần."
    },
    {
        id: 25, brand: "CeraVe", name: "AM Facial Moisturizing Lotion SPF30",
        category: "Sữa dưỡng ban ngày", capacity: "52ml", price: 409000, priceStr: "409.000 VNĐ",
        image: "img/image22.png",
        desc: "Sữa dưỡng da tích hợp chỉ số chống nắng SPF30 bảo vệ da ban ngày tiện lợi.",
        usage: "Dưỡng ẩm, chống nắng cơ bản.", target: "Dân văn phòng ít tiếp xúc nắng gắt.",
        skintype: "Da thường, da khô.", ingredients: "Zinc Oxide, Ceramides, Niacinamide.",
        howtouse: "Thoa vào buổi sáng sau bước làm sạch."
    },
    {
        id: 26, brand: "Bioderma", name: "Sensibio H2O (Nắp hồng)",
        category: "Nước tẩy trang", capacity: "500ml", price: 420000, priceStr: "420.000 VNĐ",
        image: "img/image23.png",
        desc: "Nước tẩy trang huyền thoại dành cho da nhạy cảm, làm sạch 99% lớp trang điểm.",
        usage: "Tẩy trang, làm dịu da.", target: "Mọi tín đồ làm đẹp.",
        skintype: "Da nhạy cảm, mọi loại da.", ingredients: "Công nghệ Micellar, Phức hợp D.A.F.",
        howtouse: "Lau nhẹ bằng bông tẩy trang, không cần rửa lại."
    },
    {
        id: 27, brand: "Bioderma", name: "Sébium H2O (Nắp xanh)",
        category: "Nước tẩy trang", capacity: "500ml", price: 420000, priceStr: "420.000 VNĐ",
        image: "img/image24.png",
        desc: "Nước tẩy trang dành riêng cho da dầu mụn giúp làm sạch bụi bẩn và kiểm soát bã nhờn.",
        usage: "Tẩy trang, kiềm dầu, ngừa mụn.", target: "Da dầu mụn, da hỗn hợp.",
        skintype: "Da dầu mụn.", ingredients: "Phức hợp Fluidactiv, Kẽm Gluconate.",
        howtouse: "Lau sạch toàn mặt mỗi tối."
    },
    {
        id: 28, brand: "Bioderma", name: "Cicabio Crème",
        category: "Kem phục hồi", capacity: "40ml", price: 349000, priceStr: "349.000 VNĐ",
        image: "img/image25.png",
        desc: "Kem phục hồi da bị tổn thương, giảm ngứa rát sau nặn mụn hoặc sau liệu trình thẩm mỹ.",
        usage: "Phục hồi da, giảm ngứa rát.", target: "Da tổn thương, da sau trị liệu.",
        skintype: "Da tổn thương, da yếu.", ingredients: "Antalgicine, Resveratrol, Đồng & Kẽm.",
        howtouse: "Thoa lên vùng da cần phục hồi 2 lần/ngày."
    },
    {
        id: 29, brand: "Bioderma", name: "Sébium Gel Moussant",
        category: "Sữa rửa mặt", capacity: "200ml", price: 379000, priceStr: "379.000 VNĐ",
        image: "img/image26.png",
        desc: "Gel rửa mặt thanh lọc da dầu mụn, ngăn ngừa bít tắc lỗ chân lông dịu nhẹ.",
        usage: "Làm sạch bã nhờn, kháng khuẩn.", target: "Da nhờn mụn.",
        skintype: "Da dầu mụn.", ingredients: "Kẽm Sulfate, Đồng Sulfate.",
        howtouse: "Tạo bọt rửa mặt buổi sáng và tối."
    },
    {
        id: 30, brand: "Bioderma", name: "Sébium Pore Refiner",
        category: "Kem dưỡng", capacity: "30ml", price: 459000, priceStr: "459.000 VNĐ",
        image: "img/image27.png",
        desc: "Kem dưỡng se khít lỗ chân lông và làm mịn bề mặt da dầu hỗn hợp.",
        usage: "Thu nhỏ lỗ chân lông, kiềm dầu.", target: "Da có lỗ chân lông to, bóng dầu.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "Phức hợp Fluidactiv, Salicylic Acid.",
        howtouse: "Thoa tập trung vùng chữ T trước bước kem trang điểm."
    },
    {
        id: 31, brand: "Paula’s Choice", name: "Skin Perfecting 2% BHA Liquid Exfoliant",
        category: "Đặc trị", capacity: "118ml", price: 859000, priceStr: "859.000 VNĐ",
        image: "img/image28.png",
        desc: "Dung dịch tẩy da chết hóa học loại bỏ mụn ẩn, mụn đầu đen và làm sạch sâu lỗ chân lông.",
        usage: "Tẩy tế bào chết, giảm mụn ẩn.", target: "Da mụn đầu đen, bít tắc lỗ chân lông.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "2% Salicylic Acid, Chiết xuất Trà xanh.",
        howtouse: "Đổ ra bông vỗ nhẹ lên mặt sau bước toner."
    },
    {
        id: 32, brand: "Paula’s Choice", name: "Clinical 20% Niacinamide Treatment",
        category: "Đặc trị", capacity: "20ml", price: 1729000, priceStr: "1.729.000 VNĐ",
        image: "img/image29.png",
        desc: "Tinh chất Niacinamide nồng độ cao 20% giúp thu nhỏ lỗ chân lông sần sùi và mờ thâm.",
        usage: "Se khít lỗ chân lông, mờ thâm đậm màu.", target: "Da lỗ chân lông to, bề mặt thô ráp.",
        skintype: "Mọi loại da.", ingredients: "20% Niacinamide, Chiết xuất Rau sam.",
        howtouse: "Dùng 2-3 giọt mỗi ngày kết hợp kem dưỡng."
    },
    {
        id: 33, brand: "Paula’s Choice", name: "Clinical 1% Retinol Treatment",
        category: "Đặc trị", capacity: "30ml", price: 1800000, priceStr: "1.800.000 VNĐ",
        image: "img/image30.png",
        desc: "Tinh chất Retinol 1% giúp tái tạo da, mờ nếp nhăn và trẻ hóa làn da vượt trội.",
        usage: "Chống lão hóa, mờ nếp nhăn, phẳng mịn da.", target: "Da lão hóa, da xuất hiện nếp nhăn.",
        skintype: "Da thường, da lão hóa.", ingredients: "1% Retinol, Peptides, Vitamin C.",
        howtouse: "Dùng 2-3 lần/tuần vào buổi tối."
    },
    {
        id: 34, brand: "Paula’s Choice", name: "Resist Super-Light Daily Wrinkle Defense SPF30",
        category: "Kem chống nắng", capacity: "60ml", price: 889000, priceStr: "889.000 VNĐ",
        image: "img/image31.png",
        desc: "Kem chống nắng khoáng chất nâng tông kiềm dầu dịu nhẹ cho da hỗn hợp thiên dầu.",
        usage: "Chống nắng, nâng tông tự nhiên, kiềm dầu.", target: "Da dầu nhạy cảm.",
        skintype: "Da dầu, da nhạy cảm.", ingredients: "Zinc Oxide 13%, Chiết xuất Vỏ cây liễu.",
        howtouse: "Thoa đều toàn mặt trước khi ra ngoài."
    },
    {
        id: 35, brand: "Paula’s Choice", name: "Resist Perfectly Balanced Foaming Cleanser",
        category: "Sữa rửa mặt", capacity: "190ml", price: 709000, priceStr: "709.000 VNĐ",
        image: "img/image32.png",
        desc: "Sữa rửa mặt tạo bọt dịu nhẹ giúp phục hồi độ cân bằng và làm sạch da dầu lão hóa.",
        usage: "Làm sạch, cân bằng độ ẩm.", target: "Da dầu có dấu hiệu lão hóa.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "Ceramides, Hyaluronic Acid, Sunflower Oil.",
        howtouse: "Tạo bọt rửa mặt 2 lần/ngày."
    },
    {
        id: 36, brand: "Innisfree", name: "No Sebum Mineral Powder",
        category: "Trang điểm", capacity: "5g", price: 149000, priceStr: "149.000 VNĐ",
        image: "img/image33.png",
        desc: "Phấn phủ dạng bột khoáng kiểm soát dầu thừa hiệu quả cho lớp nền khô thoáng.",
        usage: "Kiềm dầu, hút bã nhờn, định hình lớp nền.", target: "Da dầu hay đổ mồ hôi.",
        skintype: "Da dầu mụn.", ingredients: "Khoáng chất tự nhiên Jeju, Bạc hà.",
        howtouse: "Dùng bông dặm nhẹ lên vùng da bóng dầu."
    },
    {
        id: 37, brand: "Innisfree", name: "Super Volcanic Pore Clay Mask 2X",
        category: "Mặt nạ", capacity: "100ml", price: 329000, priceStr: "329.000 VNĐ",
        image: "img/image34.png",
        desc: "Mặt nạ đất sét đá núi lửa hút sạch bã nhờn và tẩy tế bào chết sâu lỗ chân lông.",
        usage: "Hút dầu thừa, thu nhỏ lỗ chân lông.", target: "Da nhiều mụn đầu đen.",
        skintype: "Da dầu mụn.", ingredients: "Đá núi lửa Jeju 2X, AHA.",
        howtouse: "Thoa 10-15 phút rồi rửa sạch với nước ấm. Dùng 1-2 lần/tuần."
    },
    {
        id: 38, brand: "Innisfree", name: "Green Tea Seed Hyaluronic Serum",
        category: "Tinh chất cấp ẩm", capacity: "80ml", price: 629000, priceStr: "629.000 VNĐ",
        image: "img/image35.png",
        desc: "Serum trà xanh cấp nước quốc dân giúp da ẩm mịn và củng cố màng giữ ẩm.",
        usage: "Cấp nước sâu, phục hồi da thiếu ẩm.", target: "Da khô ráp, thiếu sức sống.",
        skintype: "Mọi loại da.", ingredients: "Mầm trà xanh Jeju, 5 loại Hyaluronic Acid.",
        howtouse: "Dùng ngay sau bước rửa mặt."
    },
    {
        id: 39, brand: "Innisfree", name: "Tone Up No Sebum Sunscreen EX SPF50+",
        category: "Kem chống nắng", capacity: "50ml", price: 319000, priceStr: "319.000 VNĐ",
        image: "img/image36.png",
        desc: "Kem chống nắng kiềm dầu nâng tông trắng hồng tự nhiên cho da rạng rỡ.",
        usage: "Chống nắng, nâng tông da trắng hồng.", target: "Học sinh, sinh viên thích nâng tông nhẹ.",
        skintype: "Da dầu.", ingredients: "Bộ lọc khoáng chất, Bột xốp kiềm dầu.",
        howtouse: "Thoa đều trước khi ra ngoài 15 phút."
    },
    {
        id: 40, brand: "Innisfree", name: "Jeju Volcanic Pore BHA Cleansing Foam",
        category: "Sữa rửa mặt", capacity: "150g", price: 239000, priceStr: "239.000 VNĐ",
        image: "img/image37.png",
        desc: "Sữa rửa mặt tạo bọt mịn chứa đá núi lửa và BHA hỗ trợ sạch sâu lỗ chân lông.",
        usage: "Sạch sâu bã nhờn, ngừa mụn.", target: "Da nhờn mụn.",
        skintype: "Da dầu.", ingredients: "Tro núi lửa Jeju, BHA.",
        howtouse: "Tạo bọt và massage nhẹ toàn mặt."
    },
    {
        id: 41, brand: "Maybelline", name: "Lash Sensational Sky High Mascara",
        category: "Trang điểm", capacity: "6ml", price: 249000, priceStr: "249.000 VNĐ",
        image: "img/image38.png",
        desc: "Mascara tơi mi, tơi dài và cong vút suốt 24H không lo lem trôi.",
        usage: "Làm dài mi, cong mi chống nước.", target: "Tín đồ trang điểm mắt.",
        skintype: "Mọi loại mi.", ingredients: "Chiết xuất tre, Sợi micro-fiber.",
        howtouse: "Chuốt ziczac từ chân mi đến ngọn mi."
    },
    {
        id: 42, brand: "Maybelline", name: "Fit Me Matte + Poreless Foundation",
        category: "Trang điểm", capacity: "30ml", price: 239000, priceStr: "239.000 VNĐ",
        image: "img/image39.png",
        desc: "Kem nền kiềm dầu mịn lì tự nhiên che phủ khuyết điểm hoàn hảo.",
        usage: "Che khuyết điểm, kiềm dầu.", target: "Người cần lớp nền lâu trôi.",
        skintype: "Da dầu, da hỗn hợp.", ingredients: "Hạt phấn micro-powders siêu mịn.",
        howtouse: "Tán đều bằng mút hoặc cọ trang điểm."
    },
    {
        id: 43, brand: "Maybelline", name: "Superstay Vinyl Ink Longwear Liquid Lipstick",
        category: "Trang điểm", capacity: "4.2ml", price: 279000, priceStr: "279.000 VNĐ",
        image: "img/image40.png",
        desc: "Son bóng bền màu khóa chặt 16H không lem không trôi bóng mượt quyến rũ.",
        usage: "Trang điểm môi căng bóng bền màu.", target: "Mọi đối tượng.",
        skintype: "Mọi loại môi.", ingredients: "Công nghệ Color Lock giữ màu.",
        howtouse: "Lắc đều 5 giây trước khi thoa lên môi."
    },
    {
        id: 44, brand: "Maybelline", name: "Instant Age Rewind Eraser Concealer",
        category: "Trang điểm", capacity: "6ml", price: 219000, priceStr: "219.000 VNĐ",
        image: "img/image41.png",
        desc: "Kem che khuyết điểm đầu mút cushion xóa mờ quầng thâm mắt tức thì.",
        usage: "Che quầng thâm, mụn thâm.", target: "Người có quầng thâm mắt.",
        skintype: "Mọi loại da.", ingredients: "Quả kỷ tử Haloxyl.",
        howtouse: "Xoay đầu mút và dặm nhẹ vùng quầng thâm."
    },
    {
        id: 45, brand: "Maybelline", name: "Hyper Easy Liquid Eyeliner",
        category: "Trang điểm", capacity: "0.5g", price: 199000, priceStr: "199.000 VNĐ",
        image: "img/image42.png",
        desc: "Bút kẻ mắt nước đầu cọ đệm cực dễ vẽ không đứt nét.",
        usage: "Kẻ mắt nước sắc nét chống trôi.", target: "Người mới tập kẻ mắt.",
        skintype: "Mọi loại da.", ingredients: "Mực xăm đen tuyền chống nước.",
        howtouse: "Vẽ sát chân mi từ khóe mắt ra đuôi."
    },
    {
        id: 46, brand: "Dear, Klairs", name: "Supple Preparation Unscented Toner",
        category: "Nước cân bằng", capacity: "180ml", price: 309000, priceStr: "309.000 VNĐ",
        image: "img/image43.png",
        desc: "Toner không mùi dịu nhẹ cấp ẩm sâu làm dịu da nhạy cảm cực đỉnh.",
        usage: "Cấp ẩm, làm dịu da, cân bằng pH.", target: "Da nhạy cảm, da thiếu ẩm.",
        skintype: "Da nhạy cảm, da khô.", ingredients: "HA, Rau má, Phyto-Oligo.",
        howtouse: "Vỗ trực tiếp lên mặt sau rửa mặt."
    },
    {
        id: 47, brand: "Dear, Klairs", name: "Freshly Juiced Vitamin Drop",
        category: "Tinh chất dưỡng sáng", capacity: "35ml", price: 349000, priceStr: "349.000 VNĐ",
        image: "img/image44.png",
        desc: "Serum Vitamin C tươi 5% làm sáng da mờ thâm dịu nhẹ cho cả da nhạy cảm.",
        usage: "Mờ thâm mụn, làm sáng da.", target: "Da có thâm sau mụn.",
        skintype: "Da nhạy cảm, da thường.", ingredients: "5% Vitamin C tươi, Rau má.",
        howtouse: "Thoa 3-4 giọt mỗi tối."
    },
    {
        id: 48, brand: "Dear, Klairs", name: "Midnight Blue Calming Cream",
        category: "Kem phục hồi", capacity: "30ml", price: 369000, priceStr: "369.000 VNĐ",
        image: "img/image45.png",
        desc: "Kem làm dịu phục hồi da màu xanh mây giúp giảm sưng viêm mẩn đỏ tức thì.",
        usage: "Làm dịu da rát đỏ, phục hồi tổn thương.", target: "Da sau nặn mụn, da dị ứng.",
        skintype: "Da nhạy cảm, da mụn.", ingredients: "Guaiazulene (Hoa cúc), Rau má.",
        howtouse: "Thoa lên vùng da bị mẩn đỏ hoặc tổn thương."
    },
    {
        id: 49, brand: "Dear, Klairs", name: "Gentle Black Deep Cleansing Oil",
        category: "Dầu tẩy trang", capacity: "150ml", price: 369000, priceStr: "369.000 VNĐ",
        image: "img/image46.png",
        desc: "Dầu tẩy trang làm sạch sâu bụi bẩn bã nhờn mà vẫn giữ da ẩm mịn.",
        usage: "Sạch sâu bã nhờn, tẩy trang mắt môi.", target: "Người muốn sạch sâu lỗ chân lông.",
        skintype: "Da khô, da hỗn hợp.", ingredients: "Dầu đậu đen, Dầu mè đen, Jojoba.",
        howtouse: "Massage mặt khô, nhũ hóa với nước ấm rồi rửa sạch."
    },
    {
        id: 50, brand: "Dear, Klairs", name: "Rich Moist Soothing Cream",
        category: "Kem dưỡng", capacity: "80ml", price: 299000, priceStr: "299.000 VNĐ",
        image: "img/image.png",
        desc: "Kem dưỡng ẩm chuyên sâu xoa dịu làn da thô ráp thiếu nước bẩm sinh.",
        usage: "Cấp ẩm sâu, làm mềm da.", target: "Da khô quanh năm, da bong tróc.",
        skintype: "Da khô, da nhạy cảm.", ingredients: "Ceramide NP, Bơ hạt mỡ, HA.",
        howtouse: "Dùng làm bước cuối khóa ẩm mỗi tối."
    }
];

// 2. MẢNG 9 COMBO ƯU ĐÃI
window.combosData = [
    {
        id: 101, brand: "Cocoon", promoText: "TẶNG 165K", promoType: "gift",
        name: "Bộ Ba Dưỡng Tóc Bưởi Mềm Mượt & Giảm Gãy Rụng (Cocoon x VeriGlow)",
        price: 469000, priceStr: "469.000 VNĐ", image: "img/image0.png",
        ingredients: "Tinh dầu bưởi nguyên chất, Vitamin B5, Baicapil",
        includes: ["Dầu gội bưởi Cocoon (310ml)", "Dầu xả bưởi Cocoon (310ml)", "Nước dưỡng tóc tinh dầu bưởi (140ml)"],
        desc: "Bộ giải pháp toàn diện hỗ trợ giảm gãy rụng và nuôi dưỡng tóc chắc khỏe từ gốc đến ngọn."
    },
    {
        id: 102, brand: "Cocoon", promoText: "MUA 1 TẶNG 1", promoType: "promo",
        name: "Bộ Làm Sạch Chuyên Sâu & Phục Hồi Đa Nhiệm",
        price: 529000, priceStr: "529.000 VNĐ", image: "img/image1.png",
        ingredients: "Chiết xuất Nghệ Hưng Yên, Bí Đao, Sen Hậu Giang",
        includes: ["Sữa rửa mặt nghệ", "Nước tẩy trang bí đao", "Gel bí đao rửa mặt", "Dầu dưỡng cà phê"],
        desc: "Giúp loại bỏ bụi bẩn, dầu thừa, hỗ trợ phục hồi và nuôi dưỡng làn da xỉn màu."
    },
    {
        id: 103, brand: "Cocoon", promoText: "MUA 1 TẶNG 1", promoType: "promo",
        name: "Bộ Sản Phẩm Làm Sạch Mụn & Kiểm Soát Dầu Từ Bí Đao",
        price: 599000, priceStr: "599.000 VNĐ", image: "img/image2.png",
        ingredients: "Chiết xuất Bí đao, Rau má & Tràm trà",
        includes: ["Nước bí đao cân bằng da (280ml)", "Tinh chất bí đao (30ml)", "Mặt nạ bí đao (30ml)"],
        desc: "Cân bằng lượng dầu thừa, giảm vi khuẩn gây mụn và làm dịu các nốt mụn sưng đỏ."
    },
    {
        id: 104, brand: "La Roche-Posay", promoText: "QUÀ 105K", promoType: "gift",
        name: "Bộ Sản Phẩm Làm Sạch Sâu, Kiềm Dầu & Tẩy Tế Bào Chết Effaclar",
        price: 859000, priceStr: "859.000 VNĐ", image: "img/image3.png",
        ingredients: "Kẽm PCA, Salicylic Acid (BHA), LHA",
        includes: ["Gel rửa mặt Effaclar Gel Moussant (400ml)", "Nước tẩy trang kiềm dầu (200ml)", "Quà tặng: Gel rửa mặt vi tẩy da chết (50g)"],
        desc: "Chu trình làm sạch chuẩn da liễu giúp kiềm dầu, giảm bã nhờn và ngừa mụn hiệu quả."
    },
    {
        id: 105, brand: "La Roche-Posay", promoText: "QUÀ 500K", promoType: "gift",
        name: "Bộ Phục Hồi Da, Làm Dịu Kích Ứng Cicaplast Baume B5+",
        price: 729000, priceStr: "729.000 VNĐ", image: "img/image4.png",
        ingredients: "Panthenol 5% (B5), Madecassoside, Tribioma",
        includes: ["Kem dưỡng Cicaplast Baume B5+", "Quà tặng: Nước tẩy trang kiềm dầu (50ml x 3)", "Quà tặng: Kem giảm mụn Duo(+) (3ml)"],
        desc: "Phục hồi hàng rào bảo vệ da bị tổn thương, xoa dịu rát đỏ kích ứng nhanh chóng."
    },
    {
        id: 106, brand: "La Roche-Posay", promoText: "HOT COMBO", promoType: "promo",
        name: "Bộ Bảo Vệ Da Tối Ưu Anthelios & Effaclar",
        price: 959000, priceStr: "959.000 VNĐ", image: "img/image5.png",
        ingredients: "Mexoryl 400, Kẽm PCA, Airlicium",
        includes: ["Kem chống nắng Anthelios UVmune 400 Oil Control (50ml)", "Gel rửa mặt Effaclar (50ml)"],
        desc: "Bảo vệ da trước tia UV dài và bụi mịn, kiểm soát bóng nhờn suốt cả ngày."
    },
    {
        id: 107, brand: "L'Oréal Paris", promoText: "GIÁ ĐẶC BIỆT", promoType: "promo",
        name: "Bộ Đôi Tinh Chất Cấp Ẩm, Phục Hồi & Căng Bóng Revitalift",
        price: 799000, priceStr: "799.000 VNĐ", image: "img/image6.png",
        ingredients: "Macro & Micro Hyaluronic Acid, Vegan PDRN+",
        includes: ["Serum Revitalift Hyaluron PDRN (30ml)", "Serum 1.5% Hyaluronic Acid (30ml)"],
        desc: "Cấp ẩm sâu đa tầng, kích thích tăng sinh độ đàn hồi cho da căng mọng rạng rỡ."
    },
    {
        id: 108, brand: "L'Oréal Paris", promoText: "SÁNG DA MỜ THÂM", promoType: "promo",
        name: "Bộ Dưỡng Sáng Da, Giảm Thâm Nám Glycolic-Bright",
        price: 829000, priceStr: "829.000 VNĐ", image: "img/image7.png",
        ingredients: "Glycolic Acid (AHA), Melasyl™, Niacinamide",
        includes: ["Serum Glycolic-Bright 8% Melasyl (30ml)", "Kem dưỡng sáng da ban ngày Day Cream SPF17 (2 hũ mini)"],
        desc: "Ức chế sản sinh melanin, cải thiện vết thâm mụn và dưỡng sáng da đều màu."
    },
    {
        id: 109, brand: "L'Oréal Paris", promoText: "TOÀN DIỆN 5 MÓN", promoType: "gift",
        name: "Bộ Chăm Sóc Da & Tóc Toàn Diện L'Oréal Paris",
        price: 1159000, priceStr: "1159.000 VNĐ", image: "img/image8.png",
        ingredients: "Hyaluronic Acid, Glycolic Acid, 6 loại dầu hoa",
        includes: ["Serum HA 1.5%", "Serum Glycolic-Bright", "Dầu dưỡng tóc Elseve Oil", "Nước tẩy trang 400ml", "Kem chống nắng UV Defender"],
        desc: "Giải pháp chăm sóc toàn diện từ làm sạch, dưỡng ẩm, chống nắng đến nuôi dưỡng mái tóc."
    }
];