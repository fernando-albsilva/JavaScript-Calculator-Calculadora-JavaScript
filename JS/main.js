/* Função preencher(); recebe o parametro passado pelo valor do botão clicado no html,
    e concatena no visor o valor recdebido*/
function preencher(valor) 
{
    document.getElementById('visor').value+=valor;
}

/*Função calcular(); guarda na variavel total a expressao completa que se encontra no visor,
    em seguida limpa a tela do visor, e após essas etapas coloca no visor o resultado da expressão
    guardada na variavel total */
function calcular(){
    var total=0;
    total=document.getElementById('visor').value;
    document.getElementById('visor').value=' ';
    document.getElementById('visor').value=eval(total);
}

/*Função limpar(); poe no visor um espaço em branco ' ' , com o objetivo de limpar a tela*/
function limpar(){
    document.getElementById('visor').value=' ';
}