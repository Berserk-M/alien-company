"use strict";



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let menuList = document.querySelector('.menu-header__menu');

document.querySelector( '.menu-header__icon' ).addEventListener( 'click', function ( e ) {
  e.preventDefault;
  //this.className = this.className === 'menu-header__icon' ? 'menu-header__icon active' : 'menu-header__icon';
  if (this.className === 'menu-header__icon') {
  	this.classList.add('active');
  	menuList.classList.add('active');
  }else{
  	this.classList.remove('active');
  	menuList.classList.remove('active');
  }
});