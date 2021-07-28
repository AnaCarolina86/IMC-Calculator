import '../App.css';

function HeightInput({
  labelDescription = 'Altura (m):',
  inputValue = 'Valor de entrada da altura',
  onInputChange = null,
}){

  function handleInputChange({currentTarget}){
    if(onInputChange){
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <section className="inputValue">
          <label className="labelHeight" htmlFor="heightInput">{labelDescription}</label>
          <input autoFocus 
                id="heightInput" 
                type="number" 
                step="0.01" 
                placeholder="1.60"
                value={inputValue} 
                onChange={handleInputChange} ></input>
    </section>
  );
}

export default HeightInput;