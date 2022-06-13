function selecionar(elemento, nomeClasse) {

   const escolhido = document.querySelector(`.${nomeClasse} .selecionado `);

   if (escolhido !== null) {
      escolhido.classList.remove("selecionado");


   }

   if (escolhido !== elemento) {
      elemento.classList.add("selecionado");

   }

   verificarPedido();
}

function verificarPedido() {
   let selecionados = document.querySelectorAll(".selecionado");

   const botaoFechamento = document.querySelector(".botao-barra")
   if (selecionados.length === 3) {

      botaoFechamento.innerHTML = "Fechar pedido";
      botaoFechamento.classList.add("finalizar-pedido");

   }
   if (selecionados.length !== 3) {

      botaoFechamento.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
      botaoFechamento.classList.remove("finalizar-pedido");
   }



}
