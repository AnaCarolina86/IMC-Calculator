
function Results(props){
  const imcValue = parseFloat(props.valueIMC);
  if (imcValue) {
    if(imcValue <= 18.49){
      return (
        <p>Baixo Peso</p>
      );
    }
    if(imcValue >= 18.5 && imcValue < 25){
      return (
        <p>Peso Adequado</p>
      );
    }
    if(imcValue >= 25 && imcValue <= 29.99){
      return (
        <p>Sobrepeso</p>
      );
    }
    if(imcValue >= 30){
      return (
        <p>Obesidade</p>
      );
    }
  }  
  else{
    return "";
  }
}

export default Results;