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
    <Link to={`/kasa/annonce/${annonceId}`}>
        <CardsContainer urlImage={urlImage}>
            <CardsTitle>{title}</CardsTitle>
        </CardsContainer>
    </Link>
  )
}
