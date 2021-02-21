window.document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', function(){
    let headerNode = window.document.getElementsByTagName('HEADER')[0];
    if(window.pageYOffset > 0) {
      headerNode.classList.add('header-fixed');
    } else {
      headerNode.classList.remove('header-fixed');
    }
  });
  
}, false);