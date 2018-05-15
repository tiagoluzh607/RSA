/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function DescriptografarLetra(cod_criptografado, d, n){
    
    //Expressao para cifrar (Letra_Cifrada = Letra_Ascii ^ e mod N)
    var mod = n;
    var numero = cod_criptografado;
    var expoente = d;

    var result = numero;
    for (var i = 1; i < expoente ; i++){
       result = (result * numero) % mod;
    }
    
    return result;    
}

function ConvertStringParaArrayInt(conteudo){
    
    var Array = conteudo.split(',');
    
    for(var i = 0; i < Array.length; i++){
        var inteiro = parseInt(Array[i]);
        Array[i] = inteiro;
    }
    
    console.log(Array);
    return Array;
}

function DecifrarMensagem(mensagem_criptografada, d, n){
    
    var mensagem = "";
    var cod_ascii = ConvertStringParaArrayInt(mensagem_criptografada);
    
    for(var i = 0; i < cod_ascii.length;i++){
        
        var letra_ascii = DescriptografarLetra(cod_ascii[i], d, n);
        mensagem += String.fromCharCode(letra_ascii); // transforma o cod em letra
    }
    
    return mensagem;
}
