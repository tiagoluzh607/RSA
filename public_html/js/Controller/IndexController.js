/* 
 * 
 */

/*
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
*/


//################ Sessão Chave Publica ###########################################################

function AddPainelChavePublica(painel, conteudo1, conteudo2, conteudo3, ehresultado){
    
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    
    div1.textContent = conteudo1;
    div2.textContent = conteudo2;
    div3.textContent = conteudo3;
    
    div1.classList.add("col-4");
    div2.classList.add("col-4");
    div3.classList.add("col-4");
    
    if(ehresultado){
        div1.classList.add("div_resposta");
        div2.classList.add("div_resposta");
        div3.classList.add("div_resposta");
        
        var hr = document.createElement("hr");
        hr.classList.add("col-11");
        painel.appendChild(hr);
    }
    
    painel.appendChild(div1);
    painel.appendChild(div2);
    painel.appendChild(div3);
    
}

function PreenchePainelChavePublica(painel,p,q,n,qq,e){
    
    var divisiveis = DivisiveisDeQQ(qq).toString();
    
    painel.textContent = ""; // Caso o Painel já esteja preenchido reseta o conteudo dele
    
    AddPainelChavePublica(painel, "N = p * q", "QQ = (p-1)*(q-1)", "e = primo relativo a QQ",false);
    AddPainelChavePublica(painel, n+" = "+p+" * "+q, qq+" = ("+(p-1)+")*("+(q-1)+")", "e = !("+divisiveis+")",false);
    AddPainelChavePublica(painel, "N = "+n, "QQ = "+qq, "E = "+e,true);
}

function PreenchePainelCadeado(n,e){   
    input_cadeado_n.value = n;
    input_cadeado_e.value = e;
}

button_calcula_chave_publica.addEventListener("click", function() {
    
    var p = input_calcula_chave_publica_p.value;
    var q = input_calcula_chave_publica_q.value;
    var n = p * q;
    var qq = (p-1)*(q-1);
    var e = CalculaE(qq);
    
    
    //gatilhos
    PreenchePainelChavePublica(painel_chave_publica,p,q,n,qq,e);
    PreenchePainelCadeado(n,e);
    input_calcula_chave_publica_e.value = e;
    input_calcula_chave_privada_e.value = e;
    input_calcula_chave_privada_qq.value = qq;
    input_chave_n.value = n;
    input_cifra_mensagem_n.value = n;
    input_cifra_mensagem_e.value = e;
    input_decifra_mensagem_n.value = n;
    
});


//################ Sessão Chave Privada ###########################################################


function AddRowPainelChavePrivada(painel, conteudo1, ehresultado){
    
    var div1 = document.createElement("div");
    
    div1.textContent = conteudo1;
     
    div1.classList.add("col-12");

    
    if(ehresultado){
        div1.classList.add("div_resposta");
        
        var hr = document.createElement("hr");
        hr.classList.add("col-11");
        painel.appendChild(hr);
    }
    
    painel.appendChild(div1);
    
}

function PreenchePainelChavePrivada(painel, d, e, qq){
    
    painel.textContent = ""; // Caso o Painel já esteja preenchido reseta o conteudo dele
    AddRowPainelChavePrivada(painel,"(d * e) mod QQ = 1",false);
    AddRowPainelChavePrivada(painel,"("+d+" * "+e+") mod "+qq+" = 1",false);
    AddRowPainelChavePrivada(painel,"D = "+d,true);
    
}


button_calcula_chave_privada.addEventListener("click", function() {
    
    var e = input_calcula_chave_privada_e.value;
    var qq = input_calcula_chave_privada_qq.value;
    var d = EuclidesExtendidoPreenchendoTabela(qq,e);
    
    
    
    //gatilhos
    PreenchePainelChavePrivada(painel_chave_privada,d,e,qq);
    input_calcula_chave_privada_d.value = d;
    input_chave_d.value = d;
    input_decifra_mensagem_d.value = d;
});





//################ Sessão Mensagens ###########################################################


function PreencheFormCifraMensagem(n, e){
    
    input_cifra_mensagem_n.value = n;
    input_cifra_mensagem_e.value = e;
    
}

function PreencheMensagemCifrada(mensagem){  
    textarea_mensagem_cifrada.value = mensagem;  
}






//Eventos de Botoes
button_obter_chave.addEventListener("click", function() {


    var UrlGet = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/chave";
        
    var xhr = new XMLHttpRequest();
    xhr.open("GET", UrlGet);

    xhr.onload = function() {
        var resposta = xhr.responseText;
        var chavePublica = JSON.parse(resposta);
        console.log(chavePublica);
        PreencheFormCifraMensagem(chavePublica.n,chavePublica.e);
    };

    xhr.onerror = function() {
         console.log('There was an error!');
    };

    xhr.withCredentials = true;
    xhr.send();


});

button_enviar_chave.addEventListener("click", function() {
        
        var UrlPost = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/chave";
        var valor_e = input_cifra_mensagem_e.value;
        var valor_n = input_cifra_mensagem_n.value;
        
        
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", UrlPost);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({id:"1",e:valor_e, n:valor_n}));
    
});

button_obter_mensagem.addEventListener("click", function() {
        
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

button_enviar_mensagem.addEventListener("click", function() {
     
    var UrlPost = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/mensagem";
    var valor_mensagem = textarea_mensagem_cifrada.value

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", UrlPost);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({id:"1",conteudo: valor_mensagem}));
    
});