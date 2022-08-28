import React from 'react'
import styled from 'styled-components'
import image from '../../assets/BannerImage.png'
import colors from '../../utils/style/colors'
import data from '../../data/data.json'
import HomeCard from '../../components/HomeCard/home_card'

const HomeWrapper = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    
`
const BannerContainer = styled.div`
    background-image: url(${image});
    height: 225px;
    border-radius: 15px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      height: 111px;
    }
`
const BannerText = styled.p`
    color: ${colors.secondary};
    font-size: 24px;
    font-weight: 500;
`
const CardsContainer = styled.div`
  background: #36393e;
  display: flex;
  justify-content: center; // 1
  flex-flow: column wrap; // 2
  width: 100%;
  height: 100%;
`
const CardsList = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.ternary};
  border-radius: 15px;
  @media (max-width: 768px) {
    background-color: ${colors.secondary};
    flex-direction: column;
  
  }
`
export default function Home() {

  return (
    <HomeWrapper>
        <BannerContainer>
            <BannerText>Chez vous, partout et ailleurs</BannerText>
        </BannerContainer>
        <CardsList>
          {
          data.map((item, index) => (
            <HomeCard
              key={index}
              urlImage={item.cover} 
              title={item.title}
              annonceId={item.id}
            />
          ))
          }
        </CardsList>
    </HomeWrapper>
  )
}
