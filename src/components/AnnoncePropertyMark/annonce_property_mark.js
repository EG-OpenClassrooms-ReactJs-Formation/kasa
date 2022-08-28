import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
    max-width: 130px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    color: ${colors.primary};
    align-items: flex-end;
    @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        max-width: 100%;
        align-items: center;
        margin-top: 0px;
    }
`
const PropertyRow = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        
        max-width: 90px;
    }
`
const PropertyText = styled.p`
    padding:0;
    font-size: 18px;
    @media (max-width: 768px) {
        
        font-size: 12px;
    }
`
const ProfilePicture = styled.img`
    border-radius: 60px;
    height: 64px;
    @media (max-width: 768px) {
        
        height: 36px;
    }
`
const StarsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
        
        max-width: 20%;
    }
`
const StarsContainerOn = styled.div`
    color: ${colors.primary};
`
const StarsContainerOff = styled.div`
    color: ${colors.ternary};
`

export default function AnnoncePropertyMark({name, profilePicture, mark}) {
    let stars = []
    
    for(let i = 0; i < 5; i++) {
        if(i<mark){
            stars.push(1)
        }
        else{
            stars.push(0)
        }
    }
    
    return (
        <Container>
            <PropertyRow>
                
                <PropertyText>{name}</PropertyText>
                <ProfilePicture src={profilePicture}/>
            </PropertyRow>
            <StarsContainer>
            {
            stars.map((star, index)=>(
                star === 1 ?
                    <StarsContainerOn key={index}>
                        <FontAwesomeIcon size={'1x'} icon={faStar}/>
                    </StarsContainerOn>
                    :
                    <StarsContainerOff key={index}>
                        <FontAwesomeIcon size={'1x'} icon={faStar}/>
                    </StarsContainerOff>
            ))
            }
            </StarsContainer>
            
        </Container>
    )
}
