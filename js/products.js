/* ==========================================================================
   FILE: js/products.js - Logic Xử Lý Riêng Cho Trang products.html
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('all-products-grid');
    const countEl = document.getElementById('product-count');
    const products = window.productsData || [];

    let currentBrand = 'all';
    let currentSearchQuery = '';

    // Lấy tham số tìm kiếm từ URL (nếu người dùng tìm kiếm từ Navbar trang khác)
    const urlParams = new URLSearchParams(window.location.search);
    const searchFromUrl = urlParams.get('search');
    if (searchFromUrl) {
        currentSearchQuery = searchFromUrl.trim();
    }

    // Hàm render danh sách sản phẩm
    function renderFilteredProducts() {
        if (!grid) return;

        const filtered = products.filter(p => {
            const matchBrand = (currentBrand === 'all' || p.brand.toLowerCase() === currentBrand.toLowerCase());
            const matchQuery = !currentSearchQuery || 
                p.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                p.brand.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return matchBrand && matchQuery;
        });

        if (countEl) countEl.innerText = filtered.length;

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search-minus text-pink-main fs-1 mb-3"></i>
                    <h5 class="fw-bold">Không tìm thấy sản phẩm phù hợp</h5>
                    <p class="text-muted small">Hãy thử tìm kiếm với từ khóa hoặc thương hiệu khác.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(p => `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4 animate__animated animate__fadeIn">
                <div class="card product-card h-100 rounded-4 overflow-hidden border-0 shadow-sm">
                    <img src="${p.image}" class="card-img-top p-3 bg-white" style="height: 230px; object-fit: contain;" alt="${p.name}">
                    <div class="card-body d-flex flex-column bg-light">
                        <span class="badge bg-pink-lightest text-pink-dark mb-2 align-self-start fw-bold">${p.brand}</span>
                        <h5 class="card-title fw-bold text-dark fs-6 mb-2 text-truncate" title="${p.name}">${p.name}</h5>
                        <p class="text-muted small mb-3">${p.category} | ${p.capacity}</p>
                        <h6 class="text-pink-main fw-bold mt-auto mb-3 fs-5">${p.priceStr}</h6>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-veriglow w-100 rounded-pill small" onclick="window.showProductDetail(${p.id})">
                                <i class="fas fa-search me-1"></i> Chi tiết
                            </button>
                            <button class="btn btn-veriglow rounded-circle p-2" style="width: 42px; height: 42px;" onclick="window.addToCart(${p.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Lọc theo thương hiệu
    window.filterByBrand = function(brand, btnElement) {
        const buttons = document.querySelectorAll("#brandFilterContainer button");
        buttons.forEach(btn => btn.classList.remove("active", "text-white", "bg-pink-main"));
        
        if (btnElement) {
            btnElement.classList.add("active", "text-white", "bg-pink-main");
        }

        currentBrand = brand;
        renderFilteredProducts();
    };

    // Xem Chi Tiết Sản Phẩm (Modal)
    window.showProductDetail = function(id) {
        const p = products.find(item => item.id === id);
        if (!p) return;

        document.getElementById("detail-title").innerText = p.name;
        document.getElementById("detail-img").src = p.image;
        document.getElementById("detail-price").innerText = p.priceStr;
        document.getElementById("detail-brand").innerText = p.brand;
        document.getElementById("detail-category").innerText = p.category;
        document.getElementById("detail-capacity").innerText = p.capacity;
        document.getElementById("detail-desc").innerText = p.desc;
        document.getElementById("detail-usage").innerText = p.usage;
        document.getElementById("detail-target").innerText = p.target;
        document.getElementById("detail-skintype").innerText = p.skintype;
        document.getElementById("detail-ingredients").innerText = p.ingredients;
        document.getElementById("detail-howtouse").innerText = p.howtouse;

        const btnAdd = document.getElementById("detail-add-cart-btn");
        if (btnAdd) {
            btnAdd.onclick = () => window.addToCart(id);
        }

        const modalEl = document.getElementById('productDetailModal');
        if (modalEl) {
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.show();
        }
    };

    // Lần đầu tải dữ liệu
    renderFilteredProducts();
});
/* ==========================================================================
   FILE: js/products.js - Logic Xử Lý Cho Trang products.html & Popup Chi Tiết
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('all-products-grid');
    const countEl = document.getElementById('product-count');
    const products = window.productsData || [];

    let currentBrand = 'all';
    let currentSearchQuery = '';
    let currentModalQty = 1;

    // Kiểm tra từ khóa tìm kiếm trên URL (Nếu có)
    const urlParams = new URLSearchParams(window.location.search);
    const searchFromUrl = urlParams.get('search');
    if (searchFromUrl) {
        currentSearchQuery = searchFromUrl.trim();
    }

    // Render danh sách sản phẩm
    function renderFilteredProducts() {
        if (!grid) return;

        const filtered = products.filter(p => {
            const matchBrand = (currentBrand === 'all' || p.brand.toLowerCase() === currentBrand.toLowerCase());
            const matchQuery = !currentSearchQuery || 
                p.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                p.brand.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return matchBrand && matchQuery;
        });

        if (countEl) countEl.innerText = filtered.length;

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search-minus text-pink-main fs-1 mb-3"></i>
                    <h5 class="fw-bold">Không tìm thấy sản phẩm phù hợp</h5>
                    <p class="text-muted small">Hãy thử tìm kiếm với từ khóa hoặc thương hiệu khác.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(p => `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4 animate__animated animate__fadeIn">
                <div class="card product-card h-100 rounded-4 overflow-hidden border-0 shadow-sm">
                    <img src="${p.image}" class="card-img-top p-3 bg-white" style="height: 230px; object-fit: contain;" alt="${p.name}">
                    <div class="card-body d-flex flex-column bg-light">
                        <span class="badge bg-pink-lightest text-pink-dark mb-2 align-self-start fw-bold">${p.brand}</span>
                        <h5 class="card-title fw-bold text-dark fs-6 mb-2 text-truncate" title="${p.name}">${p.name}</h5>
                        <p class="text-muted small mb-3">${p.category} | ${p.capacity}</p>
                        <h6 class="text-pink-main fw-bold mt-auto mb-3 fs-5">${p.priceStr}</h6>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-veriglow w-100 rounded-pill small" onclick="window.showProductDetail(${p.id})">
                                <i class="fas fa-search me-1"></i> Chi tiết
                            </button>
                            <button class="btn btn-veriglow rounded-circle p-2" style="width: 42px; height: 42px;" onclick="window.addToCart(${p.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Lọc theo thương hiệu
    window.filterByBrand = function(brand, btnElement) {
        const buttons = document.querySelectorAll("#brandFilterContainer button");
        buttons.forEach(btn => btn.classList.remove("active", "text-white", "bg-pink-main"));
        
        if (btnElement) {
            btnElement.classList.add("active", "text-white", "bg-pink-main");
        }

        currentBrand = brand;
        renderFilteredProducts();
    };

    // Hàm điều chỉnh số lượng trong Modal Popup
    window.adjustDetailQty = function(delta) {
        currentModalQty += delta;
        if (currentModalQty < 1) currentModalQty = 1;
        const qtyInput = document.getElementById('detail-qty-input');
        if (qtyInput) qtyInput.value = currentModalQty;
    };

    // Hàm Mở & Đổ Dữ Liệu Vào Popup Chi Tiết
    window.showProductDetail = function(id) {
        const p = products.find(item => item.id === id);
        if (!p) return;

        // Reset số lượng về 1
        currentModalQty = 1;
        const qtyInput = document.getElementById('detail-qty-input');
        if (qtyInput) qtyInput.value = 1;

        // Đổ thông tin vào các thẻ HTML
        document.getElementById("detail-title").innerText = p.name;
        document.getElementById("detail-img").src = p.image;
        document.getElementById("detail-price").innerText = p.priceStr;
        document.getElementById("detail-brand").innerText = p.brand;
        document.getElementById("detail-category").innerText = p.category;
        document.getElementById("detail-capacity").innerText = p.capacity;
        document.getElementById("detail-desc").innerText = p.desc;
        document.getElementById("detail-usage").innerText = p.usage;
        document.getElementById("detail-target").innerText = p.target;
        document.getElementById("detail-skintype").innerText = p.skintype;
        document.getElementById("detail-ingredients").innerText = p.ingredients;
        document.getElementById("detail-howtouse").innerText = p.howtouse;

        // Gán sự kiện Thêm vào giỏ với số lượng đã chọn
        const btnAdd = document.getElementById("detail-add-cart-btn");
        if (btnAdd) {
            btnAdd.onclick = () => {
                window.addToCart(id, currentModalQty);
                const modalEl = document.getElementById('productDetailModal');
                if (modalEl) {
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                }
            };
        }

        // Mở Modal an toàn
        const modalEl = document.getElementById('productDetailModal');
        if (modalEl) {
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.show();
        }
    };

    // Lần đầu tải dữ liệu
    renderFilteredProducts();
});