import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    gap:1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 150px;
    margin-right: 2rem;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({informacion}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = informacion
  return (
    
        <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}  alt="" />
        <div>
        <Precio>El precio es de: $<span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del dia: $<span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del dia: $<span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas: $<span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima actualizacion: $<span>{LASTUPDATE}</span></Texto>
        </div>
        </Contenedor>
    
  )
}

export default Resultado