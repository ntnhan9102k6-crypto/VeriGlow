/* ==========================================================================
   FILE: js/main.js - Xử lý Giỏ Hàng LocalStorage & Tìm Kiếm Toàn Trang
   ========================================================================== */

const CART_STORAGE_KEY = 'veriglow_cart_data';

// Lấy toàn bộ items để tìm kiếm (Gồm sản phẩm lẻ + Combo)
function getAllInventoryItems() {
    const products = window.productsData || [];
    const combos = window.combosData || [];
    return [...products, ...combos];
}

// 1. QUẢN LÝ LOCALSTORAGE GIỎ HÀNG
function getCartFromStorage() {
    const rawData = localStorage.getItem(CART_STORAGE_KEY);
    return rawData ? JSON.parse(rawData) : [];
}

function saveCartToStorage(cartArray) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartArray));
    updateCartUI();
}

// 2. THÊM SẢN PHẨM VÀO GIỎ HÀNG
window.addToCart = function(id, quantity = 1) {
    const allItems = getAllInventoryItems();
    const item = allItems.find(p => p.id === id);

    if (!item) {
        console.error("Không tìm thấy sản phẩm id:", id);
        return;
    }

    let cart = getCartFromStorage();
    const existingIndex = cart.findIndex(p => p.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            brand: item.brand,
            quantity: quantity
        });
    }

    saveCartToStorage(cart);
    showToastNotification(`Đã thêm "${item.name}" vào giỏ hàng!`);
};

// 3. THAY ĐỔI SỐ LƯỢNG / XÓA SẢN PHẨM
window.updateCartQuantity = function(id, delta) {
    let cart = getCartFromStorage();
    const index = cart.findIndex(p => p.id === id);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCartToStorage(cart);
    }
};

window.removeFromCart = function(id) {
    let cart = getCartFromStorage();
    cart = cart.filter(p => p.id !== id);
    saveCartToStorage(cart);
};

// 4. CẬP NHẬT GIAO DIỆN GIỎ HÀNG (BADGE, MODAL, TỔNG TIỀN)
function updateCartUI() {
    const cart = getCartFromStorage();

    // Cập nhật Badge trên Navbar
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badgeEl = document.getElementById('cart-badge');
    const countHeaderEl = document.getElementById('cart-count-header');
    
    if (badgeEl) badgeEl.innerText = totalCount;
    if (countHeaderEl) countHeaderEl.innerText = totalCount;

    // Cập nhật danh sách trong Modal Cart
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');

    if (cartBody) {
        if (cart.length === 0) {
            cartBody.innerHTML = `
                <div class="text-center text-muted my-5">
                    <i class="fas fa-shopping-bag fs-1 mb-3 text-pink-main"></i>
                    <p class="mb-0 fw-bold">Giỏ hàng của bạn đang trống.</p>
                </div>`;
        } else {
            let html = '<div class="d-flex flex-column gap-3">';
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                html += `
                    <div class="d-flex align-items-center justify-content-between p-2 border-bottom">
                        <img src="${item.image}" alt="${item.name}" style="width: 55px; height: 55px; object-fit: contain;" class="rounded border p-1">
                        <div class="flex-grow-1 ms-3 me-2">
                            <h6 class="mb-0 text-truncate" style="max-width: 170px; font-size: 0.85rem;" title="${item.name}">${item.name}</h6>
                            <small class="text-pink-dark fw-bold">${itemTotal.toLocaleString('vi-VN')}đ</small>
                            <div class="d-flex align-items-center mt-1 gap-2">
                                <button class="btn btn-sm btn-light border px-2 py-0 fw-bold" onclick="window.updateCartQuantity(${item.id}, -1)">-</button>
                                <span class="small fw-bold">${item.quantity}</span>
                                <button class="btn btn-sm btn-light border px-2 py-0 fw-bold" onclick="window.updateCartQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="btn btn-sm text-danger border-0" onclick="window.removeFromCart(${item.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                `;
            });
            html += '</div>';
            cartBody.innerHTML = html;
        }
    }

    // Cập nhật tổng tiền
    if (cartTotal) {
        const totalMoney = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.innerText = totalMoney.toLocaleString('vi-VN') + 'đ';
    }
}

// 5. THANH TOÁN
window.checkout = function() {
    const cart = getCartFromStorage();
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("Cảm ơn bạn đã đặt hàng tại VeriGlow! Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.");
    localStorage.removeItem(CART_STORAGE_KEY);
    updateCartUI();

    const cartModalEl = document.getElementById('cartModal');
    if (cartModalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(cartModalEl);
        modal.hide();
    }
};

// 6. THÔNG BÁO TOAST
function showToastNotification(msg) {
    const toastEl = document.getElementById('cartToast');
    const msgEl = document.getElementById('toast-msg');
    if (toastEl && msgEl) {
        msgEl.innerText = msg;
        const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
        toast.show();
    }
}

// 7. XỬ LÝ TÌM KIẾM TRÊN NAVBAR (Chuyển hướng sang products.html)
window.handleNavSearch = function(e) {
    e.preventDefault();
    const input = document.getElementById('nav-search-input');
    if (input) {
        const query = input.value.trim();
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    }
};

// Khởi tạo giao diện giỏ hàng khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});