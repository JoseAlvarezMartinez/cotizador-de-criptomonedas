import styled from "@emotion/styled"
const Texto = styled.div`
    background-color: red;
    color:#fff;
    padding:15px;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    margin-top:1rem;
    border-radius: 6px;
`
const Error = () => {
  return (
    <Texto>
        Todos los campos son obligatorios
    </Texto>
  )
}

export default Error