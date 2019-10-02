
function preencher(valor) 
{
    document.getElementById('visor').value+=valor;
}


function calcular(){
    var total=0;
    total=document.getElementById('visor').value;
    document.getElementById('visor').value=' ';
    document.getElementById('visor').value=eval(total);
}
function limpar(){
    document.getElementById('visor').value=' ';
}