const swiper = new Swiper('.mySwiper-1', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".order-btn");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Gracias por tu orden. Estamos preparando tu pizza!");
      });
    });
  });

  
let currentSlide = 0;
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider .slide');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

const swiper2 = new Swiper('.mySwiper-2', {
  loop: true,
  autoplay: {
    delay: 5000,  
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.querySelectorAll('.products-swiper').forEach(swiperElement => {
  new Swiper(swiperElement, {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
document.querySelectorAll('.product-card').forEach((card) => {
  const sizeDropdown = card.querySelector('.size-dropdown');
  const productPrice = card.querySelector('.product-price');
  const basePrice = productPrice.getAttribute('data-base-price');

  sizeDropdown.addEventListener('change', function () {
    const selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    const newPrice = selectedOption.getAttribute('data-price');
    if (newPrice) {
      productPrice.textContent = `S/${newPrice}`;
    } else {
      productPrice.textContent = `S/${basePrice}`; // Si no se selecciona nada, vuelve al precio base
    }
  });
});
