/* 
 * Dependencia de class Chave
 */


function ChavePrivada(){
    
    var d = 0;
    
    this.getD = function(){
        return d;
    };
    
    this.setD = function(value){
        d = value;
    };
    
}

ChavePrivada.prototype = new Chave()