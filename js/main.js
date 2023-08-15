$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true
    });

$('.menu-burg').click(function(){
    $('nav').slideToggle();
})

$('#telefone').mask('(00) 00000-0000',{
    placeholder:'(99) 99999-9999'
})

$('form').validate({
    rules: {
        nome:{required:  true
        },
        email: {required:  true,
            email: true
        },
        tel:{required:  true
        }
    },
    messages :{
        nome :'seu nome',
        tel: 'seu tel',
        email: 'email requerido'
    },
    submithandeler : function(form){
        
    }
})

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})