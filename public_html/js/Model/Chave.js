/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Chave(){
    
    var id = 0;
    var n = 0;
    
    
    this.getId = function(){
        return id;
    };
    
    this.setId = function(value){
        id = value;
    };
    
    this.getN = function () {
        return n;
    };
 
    this.setN = function (value) {
        n = value;
    };

}

