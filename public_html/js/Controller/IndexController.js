/* 
 * 
 */


var form_euclides = document.querySelector("#form_euclides");

var input_qq = form_euclides.input_qq;
var input_e = form_euclides.input_e;
var input_d = form_euclides.input_d;
    
function ControllerCalculaD(){
  
    var qq = input_qq.value;
    var e = input_e.value;
    
    var d = EuclidesExtendido(qq, e);
    
    input_d.value = d;
}




//################ Sessão Mensagens ###########################################################


var form_chave_publica = document.querySelector("#form_chave_publica");

var input_chave_publica_n = form_chave_publica.input_chave_publica_n;
var input_chave_publica_e = form_chave_publica.input_chave_publica_e;

var textareaMensagemCifrada = document.querySelector("#textareaMensagemCifrada");


function PreencheChavePublica(n, e){
    
    input_chave_publica_n.value = n;
    input_chave_publica_e.value = e;
    
}

function PreencheMensagemCifrada(mensagem){  
    textareaMensagemCifrada.value = mensagem;  
}






//Eventos de Botoes
var botaoObterChave = document.querySelector("#buttonObterChave");
botaoObterChave.addEventListener("click", function() {


    var UrlGet = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/chave";
        
    var xhr = new XMLHttpRequest();
    xhr.open("GET", UrlGet);

    xhr.onload = function() {
        var resposta = xhr.responseText;
        var chavePublica = JSON.parse(resposta);
        console.log(chavePublica);
        PreencheChavePublica(chavePublica.n,chavePublica.e);
    };

    xhr.onerror = function() {
         console.log('There was an error!');
    };

    xhr.withCredentials = true;
    xhr.send();


});

var botaoEnviarChave = document.querySelector("#buttonEnviarChave");
botaoEnviarChave.addEventListener("click", function() {
        
        var UrlPost = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/chave";
        var valor_e = input_chave_publica_e.value;
        var valor_n = input_chave_publica_n.value;
        
        
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", UrlPost);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({id:"1",e:valor_e, n:valor_n}));
    
});

var botaoObterMensagem = document.querySelector("#buttonObterMensagem");
botaoObterMensagem.addEventListener("click", function() {
        
    var UrlGet = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/mensagem";
        
    var xhr = new XMLHttpRequest();
    xhr.open("GET", UrlGet);

    xhr.onload = function() {
        var resposta = xhr.responseText;
        var mensagemCifrada = JSON.parse(resposta);
        console.log(mensagemCifrada);
        PreencheMensagemCifrada(mensagemCifrada.conteudo);
    };

    xhr.onerror = function() {
         console.log('There was an error!');
    };

    xhr.withCredentials = true;
    xhr.send();
        
    
});


var botaoEnviarMensagem = document.querySelector("#buttonEnviarMensagem");
botaoEnviarMensagem.addEventListener("click", function() {
     
    var UrlPost = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/mensagem";
    var valor_mensagem = textareaMensagemCifrada.value

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", UrlPost);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({id:"1",conteudo: valor_mensagem}));
    
});