import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "./Error";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
import * as React from 'react';
import Resultado from "./Resultado";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
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
const Formulario = () => {
  const [open, setOpen] = React.useState(false);
  const [monedasTop, setMonedasTop] = useState([]);
  const [error, setError] = useState(false);
  const [MonedaNacional, monedaSeleccionada] = useSelectMonedas(
    "Seleccione su Moneda",
    monedas
  );
  const [CriptoMoneda, criptoMonedaSeleccionada] = useSelectMonedas(
    "Seleccione su Criptomoneda",
    monedasTop
  );
  const [informacionSolicitada, setInformacionSolicitada] = useState([]);
  const [datosCriptomoneda, setDatosCriptomoneda] = useState([]);
  useEffect(() => {
    async function consultarAPI() {
      const respuesta = await fetch(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      );
      const resultado = await respuesta.json();
      const iterar = resultado.Data.map((moneda) => {
        const monedaInformacion = {
          nombre: moneda.CoinInfo.FullName,
          id: moneda.CoinInfo.Name,
        };
        return monedaInformacion;
      });
      setMonedasTop(iterar);
    }
    consultarAPI();
  }, []);

  useEffect(() => {
    if (informacionSolicitada.length > 0) {
      async function mostrarAPI() {
        const respuesta = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMonedaSeleccionada}&tsyms=${monedaSeleccionada}`
        );
        const resultado = await respuesta.json();

        setTimeout(() => {
          setDatosCriptomoneda(
            resultado.DISPLAY[criptoMonedaSeleccionada][monedaSeleccionada]
          );
        },500)
        
      }
      mostrarAPI();
    }
  }, [informacionSolicitada]);
  return (
    <form
      onSubmit={(e) => {
        
        setOpen(true)

        setTimeout(() => {
          setOpen(false)
        },500)
        e.preventDefault();
        if ([criptoMonedaSeleccionada, monedaSeleccionada].includes("")) {
          return setError(true);
        }
        setError(false);
        setInformacionSolicitada([
          criptoMonedaSeleccionada,
          monedaSeleccionada,
        ]);
      }}
    >
      <MonedaNacional />
      <CriptoMoneda />
      <InputSubmit type="submit" value={"Cotizar"} />
      {error && <Error />}
      {datosCriptomoneda.PRICE && (
        <Resultado datosCriptomoneda={datosCriptomoneda} />
      )}
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    </form>
  );
};

export default Formulario;
