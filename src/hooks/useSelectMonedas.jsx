import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;
const useSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option value={opcion.id} key={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );
  return [SelectMonedas];
};

export default useSelectMonedas;
