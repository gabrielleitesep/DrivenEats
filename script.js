function selecionar(elemento) {

    let nomeComida = elemento.parentNode.className
    console.log(nomeComida)


   const escolhido = document.querySelectorAll(`.${nomeComida} .selecionado`);

   console.log(escolhido)
   if (escolhido.length > 0) {
    escolhido[0].classList.remove("selecionado");

 }

    elemento.classList.toggle("selecionado");

    
   fecharPedido();
}
function fecharPedido() {
   let selecionados = document.querySelectorAll(".selecionado");

   const botaoFechar = document.querySelector(".botao-barra h1")
   if (selecionados.length === 3) {

      botaoFechar.innerHTML = "Fechar pedido";

   }
   const botaoVerde = document.querySelector(".botao-barra")
   if (selecionados.length === 3) {

      botaoVerde.classList.add("botao-verde");

   }

}
