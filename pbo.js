// NAVBAR MENU
const navbar = `<nav class="navbar">
      <h1 class="logo"  role="img" aria-label="logo">Warkamsi</h1>
      <div id="menu-icon" class="menu-icon">
        <i class="ph ph-list"></i>
      </div>
      <ul id="menu-list" class="hidden">
        <li><a href="home.html">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="order.html">Order</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </nav>
`
// LOAD NAVBAR
document.getElementById('navbar').innerHTML = navbar;

const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener("click",() => {
  menuList.classList.toggle('hidden');
});
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
