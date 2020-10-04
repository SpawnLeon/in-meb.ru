'use strict';

// import Vue from 'vue';
// window.Vue = Vue;

const jquery = require('jquery');
const $ = require('jquery');
const jQuery = require('jquery');
window.jQuery = $;
const fancybox = require('@fancyapps/fancybox');

import Swiper from 'swiper';

function showMenu() {
  document.body.classList.add('has-menu-slide');
  document.querySelector('.mobile-menu-block').
    classList.add('mobile-menu-block--show');
}

function hideMenu() {
  document.body.classList.remove('has-menu-slide');
  document.querySelector('.mobile-menu-block').
    classList.
    remove('mobile-menu-block--show');
}


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

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 560px
          560: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1140: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }

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
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1140: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
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


  // mobile menu

  const menuSlideOpen = document.querySelector('[data-js="menu-slide-open"]');
  if (menuSlideOpen) {
    menuSlideOpen.addEventListener('click', function(event) {

      event.preventDefault();
      showMenu();
    });
  }
  const menuslideClose = document.querySelector('[data-js="menu-slide-close"]');
  if (menuslideClose) {
    menuslideClose.addEventListener('click', function(event) {
      event.preventDefault();
      hideMenu();
    });
  }

});




