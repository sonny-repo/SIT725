document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
      
  // Or with jQuery

  $(document).ready(function(){

    $('.modal').modal();

    $("btn1").click(function(){
      $('this').css('background-color', 'red');
    });

  });
  

  
