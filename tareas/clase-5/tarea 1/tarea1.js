function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
  }
  
  document.querySelector("#calcular").onclick = (e) => {
    e.preventDefault;
    let $salarioAnual = document.querySelector("#salario-anual").value;
    document.querySelector("#salario-mensual").value =
      calcularSalarioMensual($salarioAnual);
  };