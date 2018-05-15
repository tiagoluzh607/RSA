/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function CriptografarLetra(cod_ascii, e, n){
    
    //Expressao para cifrar (Letra_Cifrada = Letra_Ascii ^ e mod N)
    var mod = n;
    var numero = cod_ascii;
    var expoente = e;

    var result = numero;
    for (var i = 1; i < expoente ; i++){
       result = (result * numero) % mod;
    }
    
    return result;    
}


function CifrarMensagem(mensagem, e, n){
    
    var mensagem_criptografada = "";
   
    for(var i = 0; i < mensagem.length; i++){
        var cod_ascii = mensagem[i].charCodeAt(); //transforma em cod ascii
        
        var cod_criptografado = CriptografarLetra(cod_ascii, e, n);
        mensagem_criptografada += cod_criptografado;
        
        if(i < mensagem.length - 1){ // condicao para nao colocar a virgula no ultimo elemento
        mensagem_criptografada += ",";
        }
    }
    
    return mensagem_criptografada;
}