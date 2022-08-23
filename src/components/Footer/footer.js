import React from 'react'
import logo from '../../assets/dark_logo.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
const FooterWrapper = styled.div`
  min-height: 210px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.footerBackground};
  justify-content: space-around;
  align-items: center;
  bottom: 0;
`
const CardLogo = styled.img`
    height: 40px;
`
const FooterParagraph = styled.p`
    color: ${colors.secondary};
    font-size: 18px;
    margin: 0;
`
export default function Footer() {
  return (
    <FooterWrapper>
        <CardLogo src={logo} alt={'dark logo'}/>
        <FooterParagraph>© 2020 Kasa. All rights reserved</FooterParagraph>
    </FooterWrapper>
  )
}
