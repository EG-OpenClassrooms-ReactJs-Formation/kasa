import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    color: ${colors.primary};
    align-items: flex-end;

`
const PropertyRow = styled.div`
    display: flex;
`
const PropertyText = styled.p`
    
`
const ProfilePicture = styled.img`
    border-radius: 60px;
    height: 64px;
`
const StarsContainer = styled.div`
    display: flex;
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
