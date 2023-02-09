import styled from "@emotion/styled";
const InputSubmit = styled.input`
    background-color: #9497FF;
    border:none;
    width: 100%;
    padding:10px;
    color:#fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor:pointer;
    transition: background-color .3s;
    &:hover{
        background-color: #7a7dfe;
    }
`;
const Formulario = () => {
  return (
    <form>
      <InputSubmit type="submit" value={"Cotizar"} />
    </form>
  );
};

export default Formulario;
