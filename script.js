/* Converter Dólar para Real 
[ x ] Saber quando o botão foi clicado
[ x ] Pegar o valor digitado pelo usuário
[ x ] Conversão do valor
[ x ] Colocar o valor convertido na tela
/***/

function converter() {
    let resultado = document.getElementById("resultado");
   let valorEmDolar = document.getElementById("valor").value;
   let dolarDoDia = 6;
   let valorReal = valorEmDolar * dolarDoDia;

   resultado.innerHTML = "R$" + valorReal;
   
   
}