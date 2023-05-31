$(document).ready(function() {
    $(".btn-header").click(function() {
        //Ira estender o elemento "form".
        $("form").slideDown();
    });

    $('.reset-btn').click(function() {
        //Ira recolher o elemento "form".
        $('form').slideUp();
    });

    $("form").on('submit', function(e) {
        //Previne que o formulário seja resetado.
        e.preventDefault();
        
        //Está pegando apenas o valor do campo.
        const urlExterno = $('#url-externo').val();
        //Declarando uma nova constante e atribuindo a ela o elemento "li".
        const novaImg = $('<li style="display: none"></li>');

        //Criando o elemento "img" e setando a ele uma nova "src", além de inseri-lo em "novaImg".
        $(`<img src="${urlExterno}" />`).appendTo(novaImg);

        //Criando um novo elemento
        $(`<div class="link-externo">
            <a href="${urlExterno}" target="_blank" title="Ver imagem em tamanho real"
            </a>
        </div>`).appendTo(novaImg);

        //Inserindo "novaImg" no elemento "ul".
        $(novaImg).appendTo('ul');

        //Fara a animação de entrada.
        $(novaImg).fadeIn('slow');

        //Ira limpar o campo do input.
        $('#url-externo').val('');

    });
    
});