window.document.addEventListener('DOMContentLoaded', function() {

  //Add box-shadow to the fixed header on scroll
  window.addEventListener('scroll', function(){
    let headerNode = window.document.getElementsByTagName('HEADER')[0];
    if(window.pageYOffset > 0) {
      headerNode.classList.add('header-fixed');
    } else {
      headerNode.classList.remove('header-fixed');
    }
  });


  //Switch between .member-cards-toggle list items
  (function(){
    let liNodes = document.querySelectorAll('.member-cards-toggle li'),
        activeLiNode = document.getElementsByClassName('toggle-active');
    for (let cnt = 0; cnt < liNodes.length; cnt++) {
      liNodes[cnt].addEventListener('click', function() {
        activeLiNode[0].classList.remove('toggle-active');
        liNodes[cnt].classList.toggle('toggle-active');
      });
    }
  })();


  //Coaches section slider
  let buttonNodes = document.querySelectorAll('.coaches-slider-controls button'),
      sliderCounterNode = document.querySelector('.slider-counter'),
      currentSlideIndexNode = document.querySelector('.current-slide'),
      nextSlideIndexNode = document.querySelector('.remaining-slide'),
      descSlides = document.querySelectorAll('.coaches-desc'),
      bioSlides = document.querySelectorAll('.coaches-bio'),
      defaultSlide = 1,
      currentIndex = document.createTextNode(defaultSlide),
      remainingIndex = document.createTextNode(descSlides.length);

  if(descSlides.length === bioSlides.length) {
    currentSlideIndexNode.appendChild(currentIndex);
    nextSlideIndexNode.appendChild(remainingIndex);
  } else if(descSlides.length > bioSlides.length) {
    sliderCounterNode.style.display = 'none';
    console.error("There are more '.coaches-desc' elements than '.coaches-bio'!");
  } else if(descSlides.length < bioSlides.length) {
    sliderCounterNode.style.display = 'none';
    console.error("There are more '.coaches-bio' elements than '.coaches-desc'!");
  }

  function showNextSlide(index) {
    let currentDescSlide = document.querySelector('.coaches-slide .slide-active'),
        currentBioSlide = document.querySelector('.coaches-bio-slide .slide-active');

    if(!(currentIndex.nodeValue === remainingIndex.nodeValue)) {
      currentIndex.nodeValue = '';
      currentIndex = document.createTextNode(defaultSlide += index);
      currentSlideIndexNode.appendChild(currentIndex);
    } else {
      defaultSlide = 1;
      currentIndex.nodeValue = '';
      currentIndex.nodeValue = defaultSlide;
      currentSlideIndexNode.appendChild(currentIndex);
    }
    
    if (currentDescSlide.nextElementSibling) {
      currentDescSlide.classList.replace('slide-active', 'slide-inactive');
      currentDescSlide.nextElementSibling.classList.replace('slide-inactive', 'slide-active');
    } else {
      currentDescSlide.parentElement.firstElementChild.classList.replace('slide-inactive', 'slide-active');
      currentDescSlide.parentElement.lastElementChild.classList.replace('slide-active', 'slide-inactive');
    }

    if (currentBioSlide.nextElementSibling) {
      currentBioSlide.classList.replace('slide-active', 'slide-inactive');
      currentBioSlide.nextElementSibling.classList.replace('slide-inactive', 'slide-active');
    } else {
      currentBioSlide.parentElement.firstElementChild.classList.replace('slide-inactive', 'slide-active');
      currentBioSlide.parentElement.lastElementChild.classList.replace('slide-active', 'slide-inactive');
    }
  }

  function showPrevSlide(index) {
    let currentDescSlide = document.querySelector('.coaches-slide .slide-active'),
        currentBioSlide = document.querySelector('.coaches-bio-slide .slide-active');
    
    if(currentIndex.nodeValue > 1) {
      currentIndex.nodeValue = '';
      currentIndex = document.createTextNode(defaultSlide -= index);
      currentSlideIndexNode.appendChild(currentIndex);
    } else {
      defaultSlide = remainingIndex.nodeValue;
      currentIndex.nodeValue = '';
      currentIndex.nodeValue = defaultSlide;
      currentSlideIndexNode.appendChild(currentIndex);
    }
    
    if (currentDescSlide.previousElementSibling) {
      currentDescSlide.classList.replace('slide-active', 'slide-inactive');
      currentDescSlide.previousElementSibling.classList.replace('slide-inactive', 'slide-active');
    } else {
      currentDescSlide.parentElement.lastElementChild.classList.replace('slide-inactive', 'slide-active');
      currentDescSlide.parentElement.firstElementChild.classList.replace('slide-active', 'slide-inactive');
    }

    if (currentBioSlide.previousElementSibling) {
      currentBioSlide.classList.replace('slide-active', 'slide-inactive');
      currentBioSlide.previousElementSibling.classList.replace('slide-inactive', 'slide-active');
    } else {
      currentBioSlide.parentElement.lastElementChild.classList.replace('slide-inactive', 'slide-active');
      currentBioSlide.parentElement.firstElementChild.classList.replace('slide-active', 'slide-inactive');
    }
  }

  for(let cnt = 0; cnt < buttonNodes.length; cnt++) {
    buttonNodes[cnt].addEventListener('click', function(){
      if(buttonNodes[cnt].classList.contains('next-slide')) {
        showNextSlide(1);
      } else {
        showPrevSlide(1);
      }
    });
  }

}, false);