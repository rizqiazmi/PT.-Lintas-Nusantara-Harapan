// Navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
// End Navigation

// Filter cards according to category
const filters_cat = document.querySelectorAll(".filter-btn");

let active_cards = document.querySelectorAll(
".project-slider .swiper-slide:not(.d-none)"
);

filters_cat.forEach((filter) => {
  filter.addEventListener("click", function () {
    filters_cat.forEach((filter) => {
      filter.classList.remove("btn-active");
    });
    this.classList.add("btn-active");
    const category = this.dataset.cat;
    const cards = document.querySelectorAll(".project-slider .swiper-slide");
    cards.forEach((card, index) => {
      card.classList.add("d-none");
    });
    let selectedcat;
    if (category === "all") {
      selectedcat = document.querySelectorAll(`.project-slider .swiper-slide`);
    } else {
      selectedcat = document.querySelectorAll(`[data-type="${category}"]`);
    }
    let numberItems;

    if (selectedcat.length >= 4){
      numberItems = 4;
    } else {
      numberItems = selectedcat.length;
    }

    for (let index = 0; index <= numberItems - 1; index++) {
      selectedcat[index].classList.remove("d-none");
    }
    // if number of cards is 0, show no result
    const cards_count = document.querySelectorAll(
      ".project-slider .swiper-slide:not(.d-none)"
    );
    if (cards_count.length === 0) {
      document.querySelector(".no-results").classList.remove("d-none");
    } else {
      document.querySelector(".no-results").classList.add("d-none");
    }
  })
})
// End Filter cards according to category

var swiper = new Swiper(".hero", {
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".hero .swiper-button-next",
        prevEl: ".hero .swiper-button-prev",
      },
    });
// End Swiper Slider 1

// Swiper Slider 2
var swiper = new Swiper(".project-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".project-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".project-slider .swiper-button-next",
      prevEl: ".project-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
  });
  // End Swiper Slider 2

function calculateExperience() {
  const startDate = new Date('2024-10-07');
  const currentDate = new Date();
  
  // Hitung selisih dalam milidetik
  const diffTime = Math.abs(currentDate - startDate);
  
  // Hitung hari
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Hitung tahun, bulan, hari
  let years = Math.floor(diffDays / 365);
  let remainingDays = diffDays % 365;
  let months = Math.floor(remainingDays / 30.44);
  let days = Math.floor(remainingDays % 30.44);
  
  // Format teks (tunggal/jamak)
  const yearText = years === 1 ? 'year' : 'years';
  const monthText = months === 1 ? 'month' : 'months';
  const dayText = days === 1 ? 'day' : 'days';
  
  return { years, months, days, yearText, monthText, dayText };
}

function updateExperience() {
  const result = calculateExperience();
  const experienceElement = document.getElementById('experience');
  
  if (experienceElement) {
    // FORMAT BARU: "X years Y months Z days experience"
    // "experience" sekarang berada di samping hari terakhir
    experienceElement.textContent = 
      `${result.years} ${result.yearText} ` +
      `${result.months} ${result.monthText} ` +
      `${result.days} ${result.dayText} experience`;
  }
}

// Jalankan pertama kali
updateExperience();

// Update setiap detik
setInterval(updateExperience, 1000);

// Debugging
setInterval(() => {
  const now = new Date();
  const result = calculateExperience();
  console.log(`[${now.toLocaleTimeString()}] ${result.years}y ${result.months}m ${result.days}d`);
}, 60000);

function calculateBusinessYears() {
  // Tanggal mulai perusahaan: 7 Oktober 2024
  const startDate = new Date('2024-10-07');
  const currentDate = new Date();
  
  // Hitung selisih dalam milidetik
  const diffTime = currentDate - startDate;
  
  // Hitung total hari
  const totalDays = diffTime / (1000 * 60 * 60 * 24);
  
  // Hitung tahun dengan desimal (tahun.bulan)
  const totalYears = totalDays / 365;
  
  // Format ke 1 angka desimal dengan koma
  return totalYears.toFixed(1).replace('.', ',');
}

function updateExperience() {
  // 1. Update "Years in Business" (1,2)
  const businessYearsElement = document.getElementById('business-years');
  if (businessYearsElement) {
    businessYearsElement.textContent = calculateBusinessYears();
  }
  
  // 2. Update "X years Y months Z days experience"
  const startDate = new Date('2024-10-07');
  const currentDate = new Date();
  
  // Hitung selisih
  const diffTime = Math.abs(currentDate - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Hitung tahun, bulan, hari
  let years = Math.floor(diffDays / 365);
  let remainingDays = diffDays % 365;
  let months = Math.floor(remainingDays / 30.44);
  let days = Math.floor(remainingDays % 30.44);
  
  // Format teks
  const yearText = years === 1 ? 'year' : 'years';
  const monthText = months === 1 ? 'month' : 'months';
  const dayText = days === 1 ? 'day' : 'days';
  
  // Update element
  const experienceElement = document.getElementById('experience');
  if (experienceElement) {
    experienceElement.textContent = 
      `${years} ${yearText} ` +
      `${months} ${monthText} ` +
      `${days} ${dayText} experience`;
  }
}

// Jalankan pertama kali
updateExperience();

// Update setiap detik (akan terlihat perubahan)
setInterval(updateExperience, 1000);

// Fungsi untuk mendapatkan tahun saat ini
function updateCurrentYear() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('currentYear');
  
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
}

// Jalankan saat halaman dimuat
updateCurrentYear();

// Update setiap hari (86,400,000 ms) untuk memastikan tidak melewatkan pergantian tahun
setInterval(updateCurrentYear, 86400000);

// Atau update setiap jam (3,600,000 ms) untuk lebih aman
setInterval(updateCurrentYear, 3600000);

// Simple Image Modal
document.addEventListener('DOMContentLoaded', function() {
  // Buat modal
  const modalHTML = `
    <div class="image-modal">
      <span class="modal-close">&times;</span>
      <img class="modal-image" src="" alt="">
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modal = document.querySelector('.image-modal');
  const modalImage = modal.querySelector('.modal-image');
  const closeBtn = modal.querySelector('.modal-close');
  
  // Klik gambar
  document.querySelectorAll('.p-card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const img = this.querySelector('img');
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.classList.add('active');
    });
  });
  
  // Close modal
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
});

// Filter cards according to category
// const filters_cat = document.querySelectorAll(".filter-btn");

filters_cat.forEach((filter) => {
  filter.addEventListener("click", function () {
    // Reset active class
    filters_cat.forEach((filter) => {
      filter.classList.remove("btn-active");
    });
    this.classList.add("btn-active");
    
    const category = this.dataset.cat;
    const cards = document.querySelectorAll(".project-slider .swiper-slide");
    
    // Reset semua kartu ke hidden
    cards.forEach((card) => {
      card.classList.add("d-none");
    });
    
    let selectedcat;
    if (category === "all") {
      selectedcat = document.querySelectorAll(`.project-slider .swiper-slide`);
    } else {
      selectedcat = document.querySelectorAll(`[data-type="${category}"]`);
    }
    
    // TAMPILKAN SEMUA KARTU YANG TERPILIH (tanpa batasan)
    selectedcat.forEach((card) => {
      card.classList.remove("d-none");
    });
    
    // Update Swiper
    setTimeout(() => {
      if (typeof swiper !== 'undefined' && swiper.slidesPerView) {
        swiper.update();
        swiper.slideTo(0);
      }
    }, 100);
    
    // Check if no results
    const visibleCards = document.querySelectorAll(".project-slider .swiper-slide:not(.d-none)");
    if (visibleCards.length === 0) {
      document.querySelector(".no-results").classList.remove("d-none");
    } else {
      document.querySelector(".no-results").classList.add("d-none");
    }
  });
});

// Inisialisasi: tampilkan semua saat pertama kali load
document.addEventListener('DOMContentLoaded', function() {
  // Aktifkan tombol All
  const allBtn = document.querySelector('.filter-btn[data-cat="all"]');
  if (allBtn) {
    allBtn.classList.add('btn-active');
    
    // Tampilkan semua slide
    const allSlides = document.querySelectorAll('.project-slider .swiper-slide');
    allSlides.forEach(slide => {
      slide.classList.remove('d-none');
    });
    
    // Sembunyikan no-results
    document.querySelector('.no-results').classList.add('d-none');
  }
});