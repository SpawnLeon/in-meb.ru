'use strict';

// import Vue from 'vue';
// window.Vue = Vue;

const jquery = require('jquery');
const $ = require('jquery');
const jQuery = require('jquery');
window.jQuery = $;
const fancybox = require('@fancyapps/fancybox');

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

  // main slider
  new Swiper('.main-slider__container', {
    loop: true,
    pagination: {
      el: '.main-slider__pagination',
    },
    // Navigation arrows
    navigation: {
      prevEl: '.main-slider__btn--prev',
      nextEl: '.main-slider__btn--next',
    },
  });

  // products sliders
  document.querySelectorAll('.products-slider__container').
    forEach(function(el) {

      const prevEl = el.closest('.products-slider').
        querySelector('.products-slider__btn--prev');
      const nextEl = el.closest('.products-slider').
        querySelector('.products-slider__btn--next');
      new Swiper(el, {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
          prevEl,
          nextEl,
        },
      });
    });

  const toggleSaleMenuBtn = document.querySelector(
    '[ data-js="toggle-sale-menu"]');
  if (toggleSaleMenuBtn) {
    toggleSaleMenuBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-sale-btn--show');
    });
  }

});




