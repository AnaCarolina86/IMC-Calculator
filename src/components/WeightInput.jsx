import '../App.css';

function WeightInput({
  labelDescription = 'Peso (kg):',
  inputValue = 'Valor de entrada do peso',
  onInputChange = null,
}) {

  function handleInputChange({currentTarget}){
    if(onInputChange){
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <section className="inputValue">
      <label htmlFor="weightInput">{labelDescription}</label>
      <input autoFocus 
            id="weightInput" 
            type="number" 
            step="0.01" 
            placeholder="60"
            value={inputValue} 
            onChange={handleInputChange}></input>
    </section>
  );
}

export default WeightInput;