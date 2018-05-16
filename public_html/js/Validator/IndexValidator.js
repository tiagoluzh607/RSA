/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Validacoes
$('#form_calcula_chave_publica').validator({
    custom: {
        'primo': function($el) { 

            if(!EhPrimo($el.val())){
                return "Poh vey! o numero aqui tenque ser primo";
            }
        }
    }
});

$('#form_calcula_chave_privada').validator({
    custom: {
        'primorelativo': function($el) { 

            if(!EhPrimoRelativo($el.val(),input_calcula_chave_privada_qq.value)){
                return "Maiss Nunnncaaaa! que esse numero é primo relativo a "+ input_calcula_chave_privada_qq.value;
            }
        }
    }
});