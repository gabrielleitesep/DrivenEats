let tituloPrato;
let tituloBebida;
let tituloSobremesa;

//Criando 3 variaveis do tipo let
let precoBebida, precoPrato, precoSobremesa, total, nome, endereco;


function converterNumero (precoString) {

    let preco = precoString.replace("R$ ","");
    preco = preco.replace(",", ".");
    preco = Number(preco) * 100;

    return preco;
}

function selecionarPrato (elemento) {
    const cardClicado = document.querySelector('.pratos .selecionado');

    if (cardClicado !== null) {
        cardClicado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
    tituloPrato = elemento.querySelector('.titulo').innerHTML;
   
    precoPrato = elemento.querySelector('.preco').innerHTML;
    precoPrato = converterNumero(precoPrato);

    fazerPedido();

}

function selecionarBebida (elemento) {
    const cardClicado = document.querySelector('.bebidas .selecionado');

    if (cardClicado !== null) {
        cardClicado.classList.remove('selecionado');
    }
    
    elemento.classList.add('selecionado');
    
    tituloBebida = elemento.querySelector('.titulo').innerHTML;
    precoBebida = elemento.querySelector('.preco').innerHTML;
    precoBebida = converterNumero(precoBebida);
    fazerPedido();
}

function selecionarSobremesa (elemento) {
    const cardClicado = document.querySelector('.sobremesas .selecionado');

    if (cardClicado !== null) {
        cardClicado.classList.remove('selecionado');
    }
    
    elemento.classList.add('selecionado');
    tituloSobremesa = elemento.querySelector('.titulo').innerHTML;
    precoSobremesa = elemento.querySelector('.preco').innerHTML;
    precoSobremesa = converterNumero(precoSobremesa);
    fazerPedido();
    
}

function fazerPedido () {

    //TEM UMA FORMA MELHOR DE FAZER &&
    if (tituloPrato !== undefined) {
        if (tituloBebida !== undefined) {
            if (tituloSobremesa !== undefined) {
                console.log('VOCE PODE FAZER O PEDIDO')
                const botaoFecharPedido = document.querySelector('.fazer-pedido');

                botaoFecharPedido.classList.add('ativo');
                botaoFecharPedido.innerHTML = 'Fazer o pedido'
            }
        }
    } 
}


function mostrarConfirmarPedido () {

    
    if (tituloPrato !== undefined && tituloBebida !== undefined && tituloSobremesa !== undefined){


        nome = prompt('Qual o seu nome?');
        endereco = prompt('Onde devo entregar?');

        const overlay = document.querySelector('.overlay');


        overlay.querySelector('.prato .nome').innerHTML = tituloPrato;
        overlay.querySelector('.prato .preco').innerHTML = (precoPrato / 100).toFixed(2);

        overlay.querySelector('.bebida .nome').innerHTML = tituloBebida;
        overlay.querySelector('.bebida .preco').innerHTML = (precoBebida / 100).toFixed(2);


        overlay.querySelector('.sobremesa .nome').innerHTML = tituloSobremesa;
        overlay.querySelector('.sobremesa .preco').innerHTML = (precoSobremesa / 100).toFixed(2);

        total = precoPrato + precoBebida + precoSobremesa;
        overlay.querySelector('.total .preco-total').innerHTML = `R$ ${(total / 100).toFixed(2)}`;

        overlay.classList.remove('escondido');
    }
 
}

function cancelarOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('escondido');
}

function enviarPedido () {

    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${tituloPrato}
    - Bebida: ${tituloBebida}
    - Sobremesa: ${tituloSobremesa}
    Total: R$ ${(total / 100).toFixed(2)}
    
    Nome: ${nome}
    Endereço: ${endereco}
    `

    msg = encodeURIComponent(msg);

    const numeroAtendimento = '329999999999'
    const linkZapvac = `https://wa.me/${numeroAtendimento}?text=${msg}`
    window.open(linkZapvac);
}
