

function anuidadeAssociacao(mes, anuidade) {

    let calculoJuros = (anuidade*(1.05)**mes).toFixed(2)
    const juros = 0.05

    switch (mes) {
      case 1:
        return "Janeiro";
      case 2:
        return ` O mês é Fevereiro o valor será ${calculoJuros}`;
      case 3:
        return "Março";
      case 4:
        return "Abril";
      default:
        return "Esse mês não existe";
    }
    
}

console.log(anuidadeAssociacao(2,500))


function calculoJuros1(mes1, associacao1)

  if (mes1 >= 0 && mes1 <= 11) {
      let calculateResult= (associacao1 * ((1 + 0.05) ** mes1));
      result = calculateResult.toFixed(2).toString()
  } else {
      result = 'Mês Inválido'

}

calculateFees(1,500)