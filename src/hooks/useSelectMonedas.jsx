import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const useSelectMonedas = (label,monedas) => {
  const [state,setState] = useState("")
  const SelectMoneda = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={e => setState(e.target.value)} value={state} >
        <option value="">Seleccionar</option>
      {monedas.map(moneda => (
        <option value={moneda.id} key={moneda.id}>{moneda.nombre}</option>
        ))}
      </Select>
      
    </>
  )
  return [SelectMoneda,state]
};

export default useSelectMonedas;
