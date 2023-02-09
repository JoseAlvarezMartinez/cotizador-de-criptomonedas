import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import "./App.css";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import { useState,useEffect } from "react";
const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
function App() {
  const [monedas,setMonedas] = useState({});
  const {moneda,cripto} = monedas
  const [informacion,setInformacion] = useState({})
  useEffect(()=> {
    if(Object.values(monedas).length > 0){
      async function mostrarMonedas(){
        const respuesta = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`);
        const resultado = await respuesta.json()
        setInformacion(resultado.RAW[cripto][moneda])
      }
      mostrarMonedas()
    }
  },[monedas])
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas}/>

      {informacion.PRICE && <Resultado informacion={informacion}/>}
      </div>
    </Contenedor>
  );
}

export default App;
