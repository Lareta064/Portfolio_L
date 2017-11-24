$(document).ready(function() {
	var navToggleButton = $('.navigation__toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navLink = $('.navigation__list a');

   //мобильная навигация
   //смена класса при клике по штриховке
   navToggleButton.on('click', function(e) {
   	e.preventDefault();
    navBlock.toggleClass('navigation__list--open');

    if(navToggleIcon.hasClass('fa-bars')){
	   navToggleIcon.removeClass('fa-bars');
	   navToggleIcon.addClass('fa-times');
    }else { 
    	navToggleIcon.removeClass('fa-times');
      navToggleIcon.addClass('fa-bars');
    } 

  })
   // сворачивание меню при клике по ссылке
    navLink.on('click', function(){
   navBlock.removeClass('navigation__list--open');

   if(navToggleIcon.hasClass('fa-bars')){
     navToggleIcon.removeClass('fa-bars');
     navToggleIcon.addClass('fa-times');
    }else { 
      navToggleIcon.removeClass('fa-times');
      navToggleIcon.addClass('fa-bars');
    } 

    });
  })

