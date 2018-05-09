/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function APIService(){
    
    var UrlChave = "http://localhost:8080/euclidesapi/chave";
    
    this.getChave = function(){
        
        var xhr = new XMLHttpRequest();

        xhr.open("GET", UrlChave, true);
        
        xhr.addEventListener("load", function(){
                
                var resposta = xhr.responseText;
                    var chaves = JSON.parse(resposta);

                    chaves.forEach(function (chave) {
                        return chave;
                    });
                
                if (xhr.status == 200) {

                    
                } else {
                    //Codigo do Erro aqui
                }
            

        });

        xhr.send();
        
    };
    
    this.getJSON = function (url, sucesso, erro) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", url, true);
        httpRequest.responseType = "json";
        httpRequest.addEventListener("readystatechange", function (event) {
          if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
              if (sucesso) sucesso(httpRequest.response);
            } else {
              if (erro) erro(httpRequest.status, httpRequest.statusText);
            }
          }
        });

        httpRequest.send();
      };
    
    
}

