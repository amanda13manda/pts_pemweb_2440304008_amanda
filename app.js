let productsData = [];
const API_URL = 'https://dummyjson.com/products';
const USD_TO_IDR = 16000; // Kurs asumsi konversi ke Rupiah

// Fungsi helper untuk format angka ke Rupiah (Contoh: Rp 1.500.000)
function formatRupiah(dollarPrice) {
    const idrPrice = Math.round(dollarPrice * USD_TO_IDR);
    return 'Rp ' + idrPrice.toLocaleString('id-ID');
}

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const loadingState = document.getElementById('loadingState');
    const errorState = document.getElementById('errorState');
    const errorText = document.getElementById('errorText');
    const retryBtn = document.getElementById('retryBtn');
    
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    
    const avgPriceDisplay = document.getElementById('avgPriceDisplay');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    const categoryCountDisplay = document.getElementById('categoryCountDisplay');
    
    const bakeryForm = document.getElementById('bakeryForm');
    const formFeedback = document.getElementById('formFeedback');
    
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // 1. LIGHT / DARK MODE (localStorage)
    const savedTheme = localStorage.getItem('dribbbleTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dribbbleTheme', isDark ? 'dark' : 'light');
        themeToggleBtn.textContent = isDark ? '☀️ Mode' : '🌙 Mode';
    });

    // 2. FETCH REST API DUMMYJSON 
    async function loadProductsData() {
        try {
            loadingState.style.display = 'block';
            errorState.style.display = 'none';
            productGrid.innerHTML = '';

            const response = await fetch(API_URL);
            
            if (!response.ok) {
                throw new Error(`HTTP Error Status: ${response.status}`);
            }

            const data = await response.json();
            productsData = data.products;

            loadingState.style.display = 'none';

            calculateStatistics(productsData);
            renderProducts(productsData);

        } catch (error) {
            loadingState.style.display = 'none';
            errorState.style.display = 'block';
            errorText.textContent = `Gagal memuat data: ${error.message}`;
        }
    }

    if (retryBtn) {
        retryBtn.addEventListener('click', loadProductsData);
    }

    // 3. ANALISIS DATA OTOMATIS (DALAM RUPIAH)
    function calculateStatistics(items) {
        if (!items || items.length === 0) return;

        const totalCost = items.reduce((sum, item) => sum + item.price, 0);
        const avgPriceDollar = totalCost / items.length;
        avgPriceDisplay.textContent = formatRupiah(avgPriceDollar);

        const mostExpensive = items.reduce((max, item) => item.price > max.price ? item : max, items[0]);
        maxPriceDisplay.textContent = `${mostExpensive.title} (${formatRupiah(mostExpensive.price)})`;

        const categories = new Set(items.map(item => item.category));
        categoryCountDisplay.textContent = `${categories.size} Kategori`;
    }

    // 4. RENDER CARD WITH RUPIAH PRICE
    function renderProducts(items) {
        productGrid.innerHTML = '';

        if (items.length === 0) {
            productGrid.innerHTML = '<p class="state-message">Tidak ada produk yang cocok dengan pencarian Anda.</p>';
            return;
        }

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'kartu-proyek';
            card.innerHTML = `
                <div class="kartu-image">
                    <img src="${product.thumbnail}" alt="${product.title}">
                </div>
                <div class="kartu-body">
                    <span class="kartu-category">${product.category}</span>
                    <h3 class="kartu-title">${product.title}</h3>
                    <p class="kartu-desc">${product.description.substring(0, 55)}...</p>
                    <div class="kartu-footer">
                        <span class="product-price">${formatRupiah(product.price)}</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="far fa-star"></i> ${product.rating}</span>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // 5. SEARCH REAL-TIME & SORTING
    function filterAndSortData() {
        let result = [...productsData];
        const keyword = searchInput.value.toLowerCase().trim();
        const sortValue = sortSelect.value;

        if (keyword) {
            result = result.filter(item => 
                item.title.toLowerCase().includes(keyword) || 
                item.category.toLowerCase().includes(keyword)
            );
        }

        if (sortValue === 'asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'desc') {
            result.sort((a, b) => b.price - a.price);
        }

        renderProducts(result);
    }

    searchInput.addEventListener('input', filterAndSortData);
    sortSelect.addEventListener('change', filterAndSortData);

    // 6. FORM & VALIDASI DIGIT Z = 8
    bakeryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('customerName').value.trim();
        const category = document.getElementById('cakeCategory').value;

        if (!category) {
            formFeedback.style.color = '#dc2626';
            formFeedback.textContent = '⚠️ Kesalahan: Anda wajib memilih minimal satu kategori produk!';
            return;
        }

        formFeedback.style.color = '#16a34a';
        formFeedback.textContent = `🎉 Terima kasih ${name}! Permintaan inventaris untuk kategori "${category}" telah berhasil dicatat.`;
        bakeryForm.reset();
    });

    loadProductsData();
});