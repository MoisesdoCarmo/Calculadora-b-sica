function calcularResultado(){
  const v1 = parseFloat(document.getElementById("num1").value || 0)
  const v2 = parseFloat(document.getElementById("num2").value || 0)
  
  const soma = v1 + v2;
  const divisao = v1 / v2;
  const multi = v1 * v2;
  const sub = v1 - v2;
  
  document.getElementById("resultado").innerText = "soma: " + soma;
  document.getElementById("resultadodiv").innerText = "divisão: " + divisao;
  document.getElementById("resultadomulti").innerText = "multipicação: " + multi;
  document.getElementById("resultadosub").innerText = "subtração: " + sub;
}






