/* 
 * Dependencia de Class Chave
 */


function ChavePublica(){
    
    var e;
    
    this.getE = function(){
        return e;
    };
    
    this.setE = function(value){
        e = value;
    };
    
}

ChavePublica.prototype = new Chave();