$(document).ready(function expandirMenu() {
  $('header button').click(function() {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function recolherMenu() {
    $('form').slideUp();
  })

  $('form').on('submit', function adicionarImagens(e) {
    e.preventDefault();

    const enderecoNovaImagem = $('#endereco-nova-imagem').val();
    const novoItem = $('<li style="display: none"></li>');

    $(`<img src="${enderecoNovaImagem}">`).appendTo(novoItem); 
    
    $(`<div class="overlay-image-link">
      <a href="${enderecoNovaImagem} target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
    </div>`).appendTo(novoItem);
    
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco-nova-imagem').val('');
  })

});