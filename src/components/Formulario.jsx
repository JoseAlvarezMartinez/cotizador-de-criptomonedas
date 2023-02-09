import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
import Error from "./Error";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #7a7dfe;
  }
`;
const Formulario = ({setMonedas}) => {
  const [error, setError] = useState(false);
  const [criptoTop, setCriptoTop] = useState([]);
  const [moneda, SeleccionarMoneda] = useSelectMonedas(
    "Elige tu Moneda",
    monedas
  );
  const [cripto, SeleccionarCripto] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptoTop
  );
  useEffect(() => {
    async function consultarAPI() {
      const respuesta = await fetch(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
      );
      const resultado = await respuesta.json();
      const iterar = resultado.Data.map((informacion) => {
        const objetoInfo = {
          id: informacion.CoinInfo.Name,
          nombre: informacion.CoinInfo.FullName,
        };
        return objetoInfo;
      });
      setCriptoTop(iterar);
    }
    consultarAPI();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if ([moneda, cripto].includes("")) {
            return setError(true)
        }
        setError(false)
        setMonedas({cripto,moneda})
      }}
    >
      <SeleccionarMoneda />
      <SeleccionarCripto />
      <InputSubmit type="submit" value={"Cotizar"} />
      {error && <Error/>}
    </form>
  );
};

export default Formulario;
