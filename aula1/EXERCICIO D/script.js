function calcularPreco() {

    let nome = document.getElementById('nome').value;
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    
    let novoPreco = 0;
    if (preco < 1000) {
        novoPreco = preco * 1.05; // Aumento de 5%
    } else {
        novoPreco = preco * 1.07; // Aumento de 7%
    }

    resultado.innerHTML = `Nome da mercadoria: ${nome}<br>
   Novo preço: R$${novoPreco.toFixed(2)}`;
}
