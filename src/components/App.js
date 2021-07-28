import '../App.css';
import { useState } from 'react';
import WeightInput from './WeightInput';
import HeightInput from './HeightInput';
import Text from './Text';
import Results from './Results';
import Footer from './Footer';

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function handleWeightChange(newWeight){
    setWeight(newWeight);
  }

  function handleHeightChange(newHeight){    
    setHeight(newHeight);
  }

  function imcCalc(weightInput, heightInput){
    const result = weightInput/heightInput**2;
    return result.toFixed(2);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <h2>Ana Carolina Coelho Mendes</h2>            
      </header>
      
      <main>
        <Text />
        <section className="flexItemText">
          <h2>Insira os seus dados:</h2>
          <WeightInput labelDescription='Peso (kg):' 
                      inputValue={weight}
                      onInputChange={handleWeightChange} />        
        
          <HeightInput labelDescription='Altura (m):' 
                      inputValue={height}
                      onInputChange={handleHeightChange} />                

          <p>O seu peso é {weight ? `${weight}kg` : `(insira seu peso)`}, 
          e altura {height ? `${height}m` : `(insira sua altura)`}</p>

          <p>O seu IMC é: {weight && height ? imcCalc(weight, height) : "" } </p>
        </section>
        <section className="flexItemText">
          <h2>Resultado:</h2>
          <Results valueIMC={weight && height ? imcCalc(weight, height) : "" }/>
        </section>        
      </main>
      <Footer />

    </div>
  );
}

export default App;
