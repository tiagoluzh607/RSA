/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var form_calcula_chave_publica = document.querySelector("#form_calcula_chave_publica");

var input_calcula_chave_publica_p = form_calcula_chave_publica.input_calcula_chave_publica_p;
var input_calcula_chave_publica_q = form_calcula_chave_publica.input_calcula_chave_publica_q;
var input_calcula_chave_publica_e = form_calcula_chave_publica.input_calcula_chave_publica_e;
var painel_chave_publica = document.querySelector("#painel_chave_publica");
var button_calcula_chave_publica = document.querySelector("#button_calcula_chave_publica");


var form_cadeado = document.querySelector("#form_cadeado");
var input_cadeado_n = form_cadeado.input_cadeado_n;
var input_cadeado_e = form_cadeado.input_cadeado_e;


var form_calcula_chave_privada = document.querySelector("#form_calcula_chave_privada");
var input_calcula_chave_privada_qq = form_calcula_chave_privada.input_calcula_chave_privada_qq;
var input_calcula_chave_privada_d = form_calcula_chave_privada.input_calcula_chave_privada_d;
var input_calcula_chave_privada_e = form_calcula_chave_privada.input_calcula_chave_privada_e;
var table_euclides_estendido = document.querySelector("#table_euclides_estendido");
var button_calcula_chave_privada = document.querySelector("#button_calcula_chave_privada");
var tbody_table_euclides_estendido = document.querySelector("#tbody_table_euclides_estendido");
var painel_chave_privada = document.querySelector("#painel_chave_privada");

var form_chave = document.querySelector("#form_chave");
var input_chave_n = form_chave.input_chave_n;
var input_chave_d = form_chave.input_chave_d;


var form_mensagem = document.querySelector("#form_mensagem");
var textarea_mensagem = form_mensagem .textarea_mensagem;

var form_cifra_mensagem = document.querySelector("#form_cifra_mensagem");
var input_cifra_mensagem_n = form_cifra_mensagem.input_cifra_mensagem_n;
var input_cifra_mensagem_e = form_cifra_mensagem.input_cifra_mensagem_e;
var button_obter_chave = document.querySelector("#button_obter_chave");
var button_enviar_chave = document.querySelector("#button_enviar_chave");
var button_cifrar_mensagem = document.querySelector("#button_cifrar_mensagem");

var form_mensagem_cifrada = document.querySelector("#form_mensagem_cifrada");
var textarea_mensagem_cifrada = form_mensagem_cifrada.textarea_mensagem_cifrada;
var button_obter_mensagem = document.querySelector("#button_obter_mensagem");
var button_enviar_mensagem = document.querySelector("#button_enviar_mensagem");

var form_decifra_mensagem = document.querySelector("#form_decifra_mensagem");
var input_decifra_mensagem_n = form_decifra_mensagem.input_decifra_mensagem_n;
var input_decifra_mensagem_d = form_decifra_mensagem.input_decifra_mensagem_d;
var button_decifrar_mensagem = document.querySelector("#button_decifrar_mensagem");

var form_mensagem_decifrada = document.querySelector("#form_mensagem_decifrada");
var textarea_mensagem_decifrada = form_mensagem_decifrada.textarea_mensagem_decifrada;