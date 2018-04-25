/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
