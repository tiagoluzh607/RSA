/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function DivisiveisDeQQ(qq){
    
    if(qq < 2){
        return null;
    }
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

function EhPrimo(numero){
    
  var div =0;  
  for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) { 
        div++;
    }
  }
    
  return (div == 2);
    
}

function EhPrimoRelativo(e, qq){
     var divisiveisDeQQ = DivisiveisDeQQ(qq);
     var divisiveisDeE= DivisiveisDeQQ(e);
     
     for(var i=0;i < divisiveisDeQQ.length;i++){
        if (divisiveisDeQQ[i] == e){ //se algum dos divisores for igual a E não é primo relativo
            return false;
        }
     }
     
     for(var i=0;i < divisiveisDeQQ.length;i++){
      
        for(var j=0;j < divisiveisDeE.length;j++){
            if (divisiveisDeQQ[i] == divisiveisDeE[j]){ //se algum dos divisores de QQ for um dos divisores de E e não é primo relativo
                return false;
            }
        }
     }     
     
     return true;
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


function CalculaE(qq){
    
    var divisiveis = DivisiveisDeQQ(qq);
    var e = ProximoPrimo(divisiveis);
    return e;
}