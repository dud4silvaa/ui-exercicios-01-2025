function classificarTriangulo() {
    
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');



    if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
        resultado.innerHTML = "Os valores informados não formam um triângulo.";
        return;
    }

 
    if (ladoA === ladoB && ladoB === ladoC) {
        resultado.innerHTML = "O triângulo é EQUILÁTERO (todos os lados são iguais).";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resultado.innerHTML = "O triângulo é ISÓSCELES (dois lados são iguais).";
    } else {
        resultado.innerHTML = "O triângulo é ESCALENO (todos os lados são diferentes).";
    }
}
