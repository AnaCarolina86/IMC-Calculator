import '../App.css';

function Text(){
  return (
    <article className="flexItemText" >
      <h2>O que significa o valor do IMC?</h2>
      <p>IMC é a abreviação de Índice de Massa Corporal. Destaca-se pela facilidade 
        de aplicação, pois este índice é calculado dividindo-se o peso (em kg) pela 
        altura ao quadrado (em metros).</p>
      <p>Adotado pela Organização Mundial da Saúde (OMS), o IMC possui restrições 
        de uso, não sendo indicado para avaliação de populações de origem asiática e pessoas musculosas 
        (atletas e fisioculturistas, por exemplo).</p>      
      <p>É importante destacar que o IMC é apenas um método preliminar de verificação 
        das condições de peso de uma pessoa, devendo <span><em>a critério do profissional 
        da área de saúde</em></span> ser complementado com outros exames. </p>
      <p>Fonte: <a className="App-link" 
          href="https://indicedemassacorporal.com/indice-de-massa-corporal.html"
          rel="noreferrer"
          target="_blank"
          title="Índice de Massa Corporal"
          >
        Índice de Massa Corporal</a></p>  
    </article>
  );
}

export default Text;