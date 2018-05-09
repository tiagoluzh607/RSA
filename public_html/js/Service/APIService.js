/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function APIService(){
    
    var UrlChave = "http://webapi-tiagoluzh607665881.codeanyapp.com:8080/euclidesapi/chave";
    var chavePublica = new ChavePublica();
    
    this.getChavePublica = function(){
        return chavePublica;
    };
    
    this.setChavePublica = function(id, n, e){
        chavePublica.setId(id);
        chavePublica.setN(n);
        chavePublica.setE(e);
    };
    
    this.getChaveAPI = function(){
        

    };
    
    
}

