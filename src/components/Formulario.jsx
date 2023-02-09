import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
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
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #7a7dfe;
  }
`;
const Formulario = () => {

  const [SeleccionarMoneda] = useSelectMonedas("Elige tu Moneda",monedas);
  return (
    <form>
      <SeleccionarMoneda />
      <InputSubmit type="submit" value={"Cotizar"} />
    </form>
  );
};

export default Formulario;
