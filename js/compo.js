/* ==========================================================================
   FILE: js/compo.js - Logic Xử Lý Riêng Cho Trang compo.html
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('combo-grid');
    const combos = window.combosData || [];
    let currentBrand = 'All';

    // Render danh sách Combo
    function renderCombos(data) {
        if (!grid) return;
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h5 class="fw-bold text-muted">Không có combo khuyến mãi nào phù hợp.</h5>
                </div>
            `;
            return;
        }

        data.forEach(item => {
            const ribbonClass = item.promoType === 'gift' ? 'ribbon-gift' : '';
            grid.innerHTML += `
                <div class="col-lg-4 col-md-6 animate__animated animate__fadeIn">
                    <div class="combo-card">
                        <div class="combo-brand-badge">${item.brand}</div>
                        <div class="ribbon-promo ${ribbonClass}">${item.promoText}</div>
                        <div class="combo-img-wrapper" onclick="window.viewComboDetail(${item.id})">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="combo-content">
                            <h3 class="combo-title" title="${item.name}" onclick="window.viewComboDetail(${item.id})">${item.name}</h3>
                            <div class="combo-includes">
                                <p class="mb-1 text-dark fw-bold">Gồm:</p>
                                <ul>
                                    <li>${item.includes[0]}</li>
                                    ${item.includes[1] ? `<li>${item.includes[1]}</li>` : ''}
                                    ${item.includes.length > 2 ? `<li class="text-pink-main fst-italic">+ ${item.includes.length - 2} sản phẩm khác...</li>` : ''}
                                </ul>
                            </div>
                            <div class="combo-price-row mt-3">
                                <div class="combo-price">${item.priceStr}</div>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-outline-veriglow rounded-circle p-0" style="width: 42px; height: 42px;" onclick="window.viewComboDetail(${item.id})" title="Xem chi tiết">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button class="btn btn-veriglow rounded-circle p-0" style="width: 42px; height: 42px;" onclick="window.addToCart(${item.id})" title="Thêm vào giỏ">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Lọc Combo theo Thương hiệu
    window.filterCombos = function(brand, btnElement) {
        const buttons = document.querySelectorAll('#filter-buttons button');
        buttons.forEach(btn => btn.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');

        currentBrand = brand;
        if (brand === 'All') {
            renderCombos(combos);
        } else {
            const filtered = combos.filter(item => item.brand === brand);
            renderCombos(filtered);
        }
    };

    // Xem Chi Tiết Combo (Modal)
    window.viewComboDetail = function(id) {
        const item = combos.find(c => c.id === id);
        if (!item) return;

        document.getElementById('modal-brand').innerText = item.brand;
        document.getElementById('modal-title').innerText = item.name;
        document.getElementById('modal-img').src = item.image;
        document.getElementById('modal-price').innerText = item.priceStr;

        const ribbon = document.getElementById('modal-ribbon');
        if (ribbon) {
            ribbon.innerText = item.promoText;
            ribbon.className = `ribbon-promo fs-6 px-4 py-2 ${item.promoType === 'gift' ? 'ribbon-gift' : ''}`;
        }

        const includesList = document.getElementById('modal-includes');
        if (includesList) {
            includesList.innerHTML = item.includes.map(inc => 
                `<li class="fw-semibold text-dark mb-2"><i class="fas fa-check text-pink-main me-2"></i>${inc}</li>`
            ).join('');
        }

        document.getElementById('modal-ingredients').innerText = item.ingredients;
        document.getElementById('modal-desc').innerText = item.desc;

        const btnAdd = document.getElementById('modal-add-cart-btn');
        if (btnAdd) {
            btnAdd.onclick = () => window.addToCart(item.id);
        }

        const modalEl = document.getElementById('comboDetailModal');
        if (modalEl) {
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.show();
        }
    };

    // Khởi tạo ban đầu
    renderCombos(combos);
});
/* ==========================================================================
   FILE: js/compo.js - Logic Xử Lý Riêng Cho Trang compo.html & Popup Chi Tiết
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('combo-grid');
    const combos = window.combosData || [];
    let currentBrand = 'All';
    let currentComboQty = 1;

    // Render danh sách Combo
    function renderCombos(data) {
        if (!grid) return;
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h5 class="fw-bold text-muted">Không có combo khuyến mãi nào phù hợp.</h5>
                </div>
            `;
            return;
        }

        data.forEach(item => {
            const ribbonClass = item.promoType === 'gift' ? 'ribbon-gift' : '';
            grid.innerHTML += `
                <div class="col-lg-4 col-md-6 animate__animated animate__fadeIn">
                    <div class="combo-card">
                        <div class="combo-brand-badge">${item.brand}</div>
                        <div class="ribbon-promo ${ribbonClass}">${item.promoText}</div>
                        <div class="combo-img-wrapper" onclick="window.viewComboDetail(${item.id})">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="combo-content">
                            <h3 class="combo-title" title="${item.name}" onclick="window.viewComboDetail(${item.id})">${item.name}</h3>
                            <div class="combo-includes">
                                <p class="mb-1 text-dark fw-bold">Gồm:</p>
                                <ul>
                                    <li>${item.includes[0]}</li>
                                    ${item.includes[1] ? `<li>${item.includes[1]}</li>` : ''}
                                    ${item.includes.length > 2 ? `<li class="text-pink-main fst-italic">+ ${item.includes.length - 2} sản phẩm khác...</li>` : ''}
                                </ul>
                            </div>
                            <div class="combo-price-row mt-3">
                                <div class="combo-price">${item.priceStr}</div>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-outline-veriglow rounded-circle p-0" style="width: 42px; height: 42px;" onclick="window.viewComboDetail(${item.id})" title="Xem chi tiết">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button class="btn btn-veriglow rounded-circle p-0" style="width: 42px; height: 42px;" onclick="window.addToCart(${item.id})" title="Thêm vào giỏ">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Lọc Combo theo Thương hiệu
    window.filterCombos = function(brand, btnElement) {
        const buttons = document.querySelectorAll('#filter-buttons button');
        buttons.forEach(btn => btn.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');

        currentBrand = brand;
        if (brand === 'All') {
            renderCombos(combos);
        } else {
            const filtered = combos.filter(item => item.brand === brand);
            renderCombos(filtered);
        }
    };

    // Điều chỉnh số lượng trong Modal Combo
    window.adjustComboQty = function(delta) {
        currentComboQty += delta;
        if (currentComboQty < 1) currentComboQty = 1;
        const input = document.getElementById('combo-qty-input');
        if (input) input.value = currentComboQty;
    };

    // Xem Chi Tiết Combo (Modal Nâng Cấp)
    window.viewComboDetail = function(id) {
        const item = combos.find(c => c.id === id);
        if (!item) return;

        // Reset số lượng về 1
        currentComboQty = 1;
        const qtyInput = document.getElementById('combo-qty-input');
        if (qtyInput) qtyInput.value = 1;

        document.getElementById('modal-brand').innerText = item.brand;
        document.getElementById('modal-title').innerText = item.name;
        document.getElementById('modal-img').src = item.image;
        document.getElementById('modal-price').innerText = item.priceStr;

        const ribbon = document.getElementById('modal-ribbon');
        if (ribbon) {
            ribbon.innerText = item.promoText;
            ribbon.className = `ribbon-promo ${item.promoType === 'gift' ? 'ribbon-gift' : ''}`;
        }

        const includesList = document.getElementById('modal-includes');
        if (includesList) {
            includesList.innerHTML = item.includes.map(inc => 
                `<li class="fw-semibold text-dark mb-1 small"><i class="fas fa-check-circle text-pink-main me-2"></i>${inc}</li>`
            ).join('');
        }

        document.getElementById('modal-ingredients').innerText = item.ingredients;
        document.getElementById('modal-desc').innerText = item.desc;

        // Gán sự kiện Thêm vào giỏ hàng kèm số lượng
        const btnAdd = document.getElementById('modal-add-cart-btn');
        if (btnAdd) {
            btnAdd.onclick = () => {
                window.addToCart(item.id, currentComboQty);
                const modalEl = document.getElementById('comboDetailModal');
                if (modalEl) {
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                }
            };
        }

        const modalEl = document.getElementById('comboDetailModal');
        if (modalEl) {
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.show();
        }
    };

    // Khởi tạo ban đầu
    renderCombos(combos);
});