
function calcular() {
  
    let salario = Number(document.getElementById('salario').value);
    let nfilhos = Number(document.getElementById('numero de filhos').value);
    let resultado = document.getElementById('resultado');

 

    let salarioFamilia = 0;
    if (salario < 2000) {
        salarioFamilia = nfilhos * 45; 
    }

    let salarioFinal = salario + salarioFamilia;

    resultado.innerHTML = `Salário base: R$${salario.toFixed(2)}
   Salário família: R$${salarioFamilia.toFixed(2)}
  Salário final: R$${salarioFinal.toFixed(2)}`;
}
