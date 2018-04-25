/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function EuclidesExtendido( qq, e){
    
    var s = 0; var s_anterior = 1;
    var t = 1; var t_anterior = 0;
    var r = e; var r_anterior = qq;
    
    while(r != 1) {
                 
        //Calcula quociente
        var quociente = Math.trunc(r_anterior / r);        
        
        //Calcula resto
        var auxr = r_anterior;
        r_anterior = r;
        r = auxr % r;
        
        //Calcula S
        var auxs = s_anterior;
        s_anterior = s;
        s = auxs - quociente * s;

        //Calcula T
        var auxt = t_anterior;
        t_anterior = t;
        t = auxt - quociente * t;

        //Exibe no Console a Cada interação
        console.log("quocinete: "+quociente+" resto: "+r+" valor S: "+s+" valor T: "+t);
    }
    
    //retorno somente quem atende a condição (d*e) mod qq = 1
    if( (t*e)%qq == 1 ){
        return t;
    }else if ( (s*e)%qq == 1 ) {
        return s;
    }

    
}