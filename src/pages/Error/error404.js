import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
  color: ${colors.primary};
`
const ErrorNumber = styled.h2`
  font-weight: 700;
  font-size: 288px;
  margin: 0;
`

const ErrorTitle = styled.h2`
  font-weight: 300;
`

const ErrorSubtitle = styled(Link)`
  font-weight: 300;
  color: ${colors.primary};
`

export default function Error() {
  return (
    <ErrorWrapper>
      <ErrorNumber>404</ErrorNumber>
      <ErrorTitle>Oups! La page que vous demandez n'existe pas.</ErrorTitle>
      <ErrorSubtitle to={"/"}>
        Retourner à la page d'acceuil
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}
