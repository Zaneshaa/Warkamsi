// NAVBAR MENU
const navbar = `<nav class="navbar">
      <h1 class="logo"  role="img" aria-label="logo">Warkamsi</h1>
      <div id="menu-icon" class="menu-icon">
        <i class="ph ph-list"></i>
      </div>
      <ul id="menu-list" class="hidden">
        <li><a href="home.html">Home</a></li>
        <li><a href="order.html">Order</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="promo.html">Promo</a></li>
        <li><a href="login.html" onclick="logout()">Log Out</a></li>
      </ul>
    </nav>
`
// LOAD NAVBAR
document.getElementById('navbar').innerHTML = navbar;

const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener("click",(e) => {
  e.stopPropagation();
  menuList.classList.toggle('hidden');
});

document.addEventListener("click",(e) => {
  if(!menuList.contains(e.target) && !menuIcon.contains(e.target)) {
    menuList.classList.add('hidden');
  }
});

// FOOTER MENU 
const footer = `
 <footer class="footer">
    <div class="footcont">
      <div class="container">
        <div id="promo">
          <h3>Promo</h3>
        </div>
        <div id="contentpromo" class="hidden">
          <p>🔴⚪⚫ Promo Fans King <span style="color: crimson;">EMYU</span></p>
          <p>🎓 Diskon Pelajar</p>
          <p>🌶️ Promo Tantangan</p>
        </div>
      </div>
      <div class="container">
        <div id="lokjo">
          <h3>Lokasi & Jam Operasional</h3>
        </div>
        <div id="contentlokjo" class="hidden">
          <p><b>Alamat</b>: Jl. Sudirman No. 45, Belakang Kampus</p>
          <p><b>Jam Operasional</b>: Senin-Minggu: 16:00 - 02:00<br>
          Khusus Match King <span style="color: crimson;">EMYU</span>: Fleksibel</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="sosmed-grid">
        <div class="sosmed-card">
          <i class="ph ph-whatsapp-logo"><a href=""></a></i>
        </div>
        <div class="sosmed-card">
          <i class="ph ph-instagram-logo"><a href=""></a></i>
        </div>
        <div class="sosmed-card">
          <i class="ph ph-tiktok-logo"></i>
        </div>
        <div class="sosmed-card">
          <i class="ph ph-x-logo"></i>
        </div>
        
      </div>
    </div>
    <div class="footcpr">
      &copy; 2025 Warkamsi. Semua hak cipta dilindungi.
      <p>Dilarang menggoda kasir kami, hatinya udah punya abang.</p>
    </div>
  </footer>
`
// LOAD FOOTER
document.getElementById('footer').innerHTML = footer;

const promo = document.getElementById('promo');
const contentpromo = document.getElementById('contentpromo');

promo.addEventListener("click", (e) => {
  e.stopPropagation();
  contentpromo.classList.toggle('hidden');
});

const lokjo = document.getElementById('lokjo');
const contentlokjo = document.getElementById('contentlokjo');

lokjo.addEventListener("click", (e) => {
  contentlokjo.classList.toggle('hidden');
})
// ABOUT

// FORM
const makanan = document.getElementById('makanan');
const minuman = document.getElementById('minuman');
const jumlahMakanan = document.getElementById('jumlahMakanan');
const jumlahMinuman = document.getElementById('jumlahMinuman');
  
function hitungTotal() {
  const hargaMakanan = parseInt(makanan.value);
  const hargaMinuman = parseInt(minuman.value);
  const qtyMakanan = parseInt(jumlahMakanan.value);
  const qtyMinuman = parseInt(jumlahMinuman.value);
  
  const total = (hargaMakanan * qtyMakanan) + (hargaMinuman * qtyMinuman);
  totalharga.textContent = "Rp" + total.toLocaleString('id-ID');
  }
  
  [makanan, minuman, jumlahMakanan, jumlahMinuman]
  .forEach(el => {
    el.addEventListener('input', hitungTotal);
  });
    
  // Set awal
  hitungTotal();
  
  // ORDER BUTTON
  function toggleOrder() {
    alert('BAKEKOK');
  };
