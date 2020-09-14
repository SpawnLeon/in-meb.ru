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

  // products slider
  new Swiper('.products-slider__container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      prevEl: '.products-slider__btn--prev',
      nextEl: '.products-slider__btn--next',
    },
  });
});




