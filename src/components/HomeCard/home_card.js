import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
const CardsContainer = styled.div`
  position: relative;
  border-radius: 20px;
  height: 340px;
  width: 340px;
  margin-top: 20px;
  ${(props) =>
    props.urlImage &&
    `
    background-image: url(${props.urlImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `}
  @media (max-width: 768px) {
    width: 100%;
    height: 255px;
  
  }
`
const CardsLink = styled(Link)`
@media (max-width: 768px) {
    
  width: 100%;
  height: 100%;
  }
  
`
const CardsTitle = styled.p`
  color: ${colors.secondary};
  max-width: 60%;
  position: absolute;
  left: 5px;
  bottom: 25px;
`
export default function HomeCard({urlImage, title, annonceId}) {
  return (
    <CardsLink to={`/annonce/${annonceId}`}>
      <CardsContainer urlImage={urlImage}>
          <CardsTitle>{title}</CardsTitle>
      </CardsContainer>
    </CardsLink>
  )
}
