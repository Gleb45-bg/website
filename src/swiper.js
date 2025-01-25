import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '/src/swiper.css';
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },
    slidesPerView: 1,
    
  });