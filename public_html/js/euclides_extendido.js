/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function AddRowEuclidesEstendido(tbody, coluna1, coluna2, coluna3, coluna4, coluna5){
    
    var tr = document.createElement("tr");
    
    var th = document.createElement("th");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    
    th.textContent = coluna1;
    td1.textContent = coluna2;
    td2.textContent = coluna3;
    td3.textContent = coluna4;
    td4.textContent = coluna5;
    
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    tbody.appendChild(tr);
    
}

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

function EuclidesExtendidoPreenchendoTabela( qq, e){
    
    var s = 0; var s_anterior = 1;
    var t = 1; var t_anterior = 0;
    var r = e; var r_anterior = qq;
    
    
    var contador = 3;
    
    tbody_table_euclides_estendido.textContent = ""; //reseta tabela
    AddRowEuclidesEstendido(tbody_table_euclides_estendido, "1", "", r_anterior, s_anterior, t_anterior);
    AddRowEuclidesEstendido(tbody_table_euclides_estendido, "2", "", r, s, t);
    
    while(r != 1) {
        
                 
        //Calcula quociente
        var quociente = Math.trunc(r_anterior / r);
        var conteudo1 = r_anterior+"/"+r+" = "+ quociente;
        
        //Calcula resto
        var auxr = r_anterior;
        r_anterior = r;
        var conteudo2 = auxr+"%"+r+" = ";
        r = auxr % r;
         
        
        //Calcula S
        var auxs = s_anterior;
        s_anterior = s;
        var conteudo3 = auxs+" - "+quociente+" * "+s+" = ";
        s = auxs - quociente * s;

        //Calcula T
        var auxt = t_anterior;
        t_anterior = t;
        var conteudo4 = auxt+" - "+quociente+" * "+t+" = ";
        t = auxt - quociente * t;


        conteudo2+= r;
        conteudo3+= s;
        conteudo4+= t;

        //Exibe no Console a Cada interação
        console.log("quocinete: "+quociente+" resto: "+r+" valor S: "+s+" valor T: "+t);
        

        AddRowEuclidesEstendido(tbody_table_euclides_estendido, contador, conteudo1, conteudo2, conteudo3, conteudo4);
        contador++;
    }
    
    //retorno somente quem atende a condição (d*e) mod qq = 1
    if( (t*e)%qq == 1 ){
        return t;
    }else if ( (s*e)%qq == 1 ) {
        return s;
    }

    
}