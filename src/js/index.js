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
      clickable: true,
    },
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
        loop: false,
        watchSlidesVisibility: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          prevEl,
          nextEl,
        },
      });
    });

  //reviews block slider
  new Swiper('.reviews-block__container', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
      prevEl: '.reviews-block__btn--prev',
      nextEl: '.reviews-block__btn--next',
    },
  });

  // product slider
  const galleryThumbs = new Swiper('.images-product-thumbs__container', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  const galleryTop = new Swiper('.images-product__container', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  //banner slider
  new Swiper('.banner-slider__container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.banner-slider___pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.banner-slider__btn--prev',
      nextEl: '.banner-slider__btn--next',
    },
  });

  const toggleBigCatalogMenuBtn = document.querySelector(
    '[ data-js="toggle-big-catalog-menu"]');
  if (toggleBigCatalogMenuBtn) {
    toggleBigCatalogMenuBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-sale-btn--show');

      const bigCatalogMenu = document.querySelector(
        '[data-js="big-catalog-menu"]');
      if (bigCatalogMenu) {
        bigCatalogMenu.classList.toggle('show');
      }
    });
  }

  //custom tabs
  document.querySelectorAll('[data-is-tab]').forEach((tab) => {
    tab.querySelectorAll('[data-tab-target]').forEach((el, i) => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        tab.querySelectorAll('[data-tab]').forEach((el, i) => {
          el.hidden = true;
        });
        tab.querySelectorAll('[data-tab-target]').forEach((el, i) => {
          el.classList.remove('active');
        });
        this.classList.add('active');

        const target = this.dataset.tabTarget;
        const targetTab = tab.querySelector(`[data-tab="${target}"]`);
        if (targetTab) {
          targetTab.hidden = false;
        }
      });
    });
  });

  document.querySelectorAll('[data-js-catalog-menu-btn]').forEach(function(el) {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-sidebar__btn--open');
    });
  });

});




