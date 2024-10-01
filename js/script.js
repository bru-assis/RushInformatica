$(document).ready(function() {
  // Função de animação para rolar até âncoras na mesma página
  $(".navbar a, a[href='#Home'], a").on('click', function(event) {
    // Verifica se o link contém um hash (âncora)
    var hash = this.hash;

    // Se o hash não estiver vazio e o destino do hash existir na página
    if (hash !== "" && $(hash).length) {
      event.preventDefault(); // Evita o comportamento padrão apenas para âncoras na mesma página

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });

  // Função de exibição do botão de "voltar ao topo"
  $(window).scroll(function() {
    $(".slideanim").each(function() {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();

      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  // Lógica do botão "voltar ao topo"
  var mybutton = document.getElementById("btnTop");

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {
  var data_atual = new Date();
  var ano = data_atual.getFullYear() - 1;
  var ano_empresa = ano - 1987;
  document.getElementById("anosempresa").innerHTML = ano_empresa;
});
