/*Contents:
1.Box-shadow on scroll to header
2.List items toggle in '.member-cards' section
3.Slider in '.coaches' section
  3.1 Checks if number of slides is even and initializes slider counter
  3.2 Code for moving slideshow forward including incrementor for slider counter
  3.3 Code for moving slideshow backward including reductor for slider counter
  3.4 Event listener for slider buttons
4.Slider in '.feedback' section
  4.1 Slider counter initializer
  4.2 Code for moving slideshow forward including incrementor for slider counter
  4.3 Code for moving slideshow backward including reductor for slider counter
  4.4 Event listener for slider buttons
*/
window.document.addEventListener('DOMContentLoaded', function() {

/*1.Box-shadow on scroll to header*/
  window.addEventListener('scroll', function(){
    let headerNode = window.document.getElementsByTagName('HEADER')[0];
    if(window.pageYOffset > 0) {
      headerNode.classList.add('header-fixed');
    } else {
      headerNode.classList.remove('header-fixed');
    }
  });


/*2.List items toggle in '.member-cards' section*/
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


/*3.Slider in '.coaches' section*/
  let buttonNodes = document.querySelectorAll('.coaches-slider-controls button'),
      sliderCounterNode = document.querySelector('.coaches-slider-controls .slider-counter'),
      currentSlideIndexNode = document.querySelector('.coaches-slider-controls .current-slide'),
      nextSlideIndexNode = document.querySelector('.coaches-slider-controls .remaining-slide'),
      descSlides = document.querySelectorAll('.coaches-desc'),
      bioSlides = document.querySelectorAll('.coaches-bio'),
      defaultSlide = 1,
      currentCounterIndex = document.createTextNode(defaultSlide),
      remainingIndex = document.createTextNode(descSlides.length);

  //3.1 Checks if number of slides is even and initializes slider counter
  if(descSlides.length === bioSlides.length) {
    currentSlideIndexNode.appendChild(currentCounterIndex);
    nextSlideIndexNode.appendChild(remainingIndex);
  } else if(descSlides.length > bioSlides.length) {
    sliderCounterNode.style.display = 'none';
    console.error("There are more '.coaches-desc' elements than '.coaches-bio'!");
  } else if(descSlides.length < bioSlides.length) {
    sliderCounterNode.style.display = 'none';
    console.error("There are more '.coaches-bio' elements than '.coaches-desc'!");
  }

  //3.2 Code for moving slideshow forward including incrementor for slider counter
  function showNextSlide(index) {
    let currentDescSlide = document.querySelector('.coaches-slide .slide-active'),
        currentBioSlide = document.querySelector('.coaches-bio-slide .slide-active');

    if(!(currentCounterIndex.nodeValue === remainingIndex.nodeValue)) {
      currentCounterIndex.nodeValue = '';
      currentCounterIndex = document.createTextNode(defaultSlide += index);
      currentSlideIndexNode.appendChild(currentCounterIndex);
    } else {
      defaultSlide = 1;
      currentCounterIndex.nodeValue = '';
      currentCounterIndex.nodeValue = defaultSlide;
      currentSlideIndexNode.appendChild(currentCounterIndex);
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

  //3.3 Code for moving slideshow backward including reductor for slider counter
  function showPrevSlide(index) {
    let currentDescSlide = document.querySelector('.coaches-slide .slide-active'),
        currentBioSlide = document.querySelector('.coaches-bio-slide .slide-active');
    
    if(currentCounterIndex.nodeValue > 1) {
      currentCounterIndex.nodeValue = '';
      currentCounterIndex = document.createTextNode(defaultSlide -= index);
      currentSlideIndexNode.appendChild(currentCounterIndex);
    } else {
      defaultSlide = remainingIndex.nodeValue;
      currentCounterIndex.nodeValue = '';
      currentCounterIndex.nodeValue = defaultSlide;
      currentSlideIndexNode.appendChild(currentCounterIndex);
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

  //3.4 Event listener for slider buttons
  for(let cnt = 0; cnt < buttonNodes.length; cnt++) {
    buttonNodes[cnt].addEventListener('click', function(){
      if(buttonNodes[cnt].classList.contains('next-slide')) {
        showNextSlide(1);
      } else {
        showPrevSlide(1);
      }
    });
  }


/*4.Slider in '.feedback' section*/
  let slides = document.querySelectorAll('.feedback-slide'),
      slideCount = slides.length,
      feedbackSliderButtons = document.querySelectorAll('.feedback-slider-controls button'),
      count = 0,      
      initialSlide = 1,
      initialSlideIndex = document.createTextNode(initialSlide),
      lastSlideIndex = document.createTextNode(slides.length),      
      currentSlide = document.querySelector('.feedback-slider-controls .current-slide'),
      nextSlide = document.querySelector('.feedback-slider-controls .remaining-slide');

  //4.1 Slider counter initializer
  currentSlide.appendChild(initialSlideIndex);
  nextSlide.appendChild(lastSlideIndex);

  //4.2 Code for moving slideshow forward including incrementor for slider counter
  function showNextFeedback(index) {
    if(!(initialSlideIndex.nodeValue === lastSlideIndex.nodeValue)) {
      initialSlideIndex.nodeValue = '';
      initialSlideIndex = document.createTextNode(initialSlide += index);
      currentSlide.appendChild(initialSlideIndex);
    } else {
      initialSlide = 1;
      initialSlideIndex.nodeValue = '';
      initialSlideIndex.nodeValue = initialSlide;
      currentSlide.appendChild(initialSlideIndex);
    }

    slides[count].setAttribute('style', 'order: ' + (count + 1) + ';');

    if(count < slideCount - 1) {
      count++;
    } else {
      count = 0;
    }

    slides[count].setAttribute('style', 'order: 0;');
  }
  
  //4.3 Code for moving slideshow backward including reductor for slider counter
  function showPrevFeedback(index) {
    if(initialSlideIndex.nodeValue > 1) {
      initialSlideIndex.nodeValue = '';
      initialSlideIndex = document.createTextNode(initialSlide -= index);
      currentSlide.appendChild(initialSlideIndex);
    } else {
      initialSlide = remainingIndex.nodeValue;
      initialSlideIndex.nodeValue = '';
      initialSlideIndex.nodeValue = initialSlide;
      currentSlide.appendChild(initialSlideIndex);
    }

    slides[count].setAttribute('style', 'order: ' + count + ';');
  
    if(count > 0) {
      count--;
    } else {
      count = slideCount - 1;
    }
  
    slides[count].setAttribute('style', 'order: ' + (count - slideCount) + ';');
  }

  //4.4 Event listener for slider buttons
  for(let cnt = 0; cnt < feedbackSliderButtons.length; cnt++) {
    feedbackSliderButtons[cnt].addEventListener('click', function(){
      if(feedbackSliderButtons[cnt].classList.contains('next-slide')) {
        showNextFeedback(1);
      } else {
        showPrevFeedback(1);
      }
    });
  }

}, false);