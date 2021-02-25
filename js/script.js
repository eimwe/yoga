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
  function activeClassChanger(){
    let liNodes = document.querySelectorAll('.member-cards-toggle li');

    for (let cnt = 0; cnt < liNodes.length; cnt++) {
      liNodes[cnt].addEventListener('click', function() {
        let current = document.getElementsByClassName('toggle-active');
        current[0].className = current[0].className.replace('toggle-active','');
        this.className += "toggle-active";
      });
    }
  }

  activeClassChanger();
  
}, false);