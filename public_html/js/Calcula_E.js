/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function EhPrimo(numero){
    
  var div =0;  
  for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) { 
        div++;
    }
  }
    
  return (div == 2);
    
}

function ProximoPrimo(divisiveis){
    
    var maior = 0;
    for(var i=0;i < divisiveis.length;i++){
        if (divisiveis[i] > maior){
            maior = divisiveis[i];
        }
    }
    
    var proximoPrimo = maior + 1;
    
    while(!(EhPrimo(proximoPrimo))){
        proximoPrimo++;
    }
    
    return proximoPrimo;
}

function DivisiveisDeQQ(qq){
    
    var divisiveis = [];
    
    for(var i = 2;qq != 1; i++){
        if(qq % i == 0){
            console.log(qq + ":"+ i);
            qq = Math.trunc(qq/i);
            divisiveis.push(i);
            i=1;
        }
    }
    
    return divisiveis;
}

function CalculaE(qq){
    
    var divisiveis = DivisiveisDeQQ(qq);
    var e = ProximoPrimo(divisiveis);
    return e;
}