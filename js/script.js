$(document).ready(function(){
  $(".navbar a, a[href='#Home'], a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;


    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){


      window.location.hash = hash;
    });
  });


  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  mybutton = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
})


document.addEventListener("DOMContentLoaded", function () {
  var data_atual = new Date();
  var ano = data_atual.getFullYear() - 1;
  var ano_empresa = ano - 1987;
  document.getElementById("anosempresa").innerHTML = ano_empresa;
});
