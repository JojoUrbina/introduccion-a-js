function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
  }
  
  document.querySelector("#calcular").onclick =function (e){
    
    let salarioAnual = document.querySelector("#salario-anual").value;
    document.querySelector("#salario-mensual").value =
      calcularSalarioMensual(salarioAnual);
      e.preventDefault();
  };