import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import colors from '../../utils/style/colors'

const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    
    height: 500px;
    border-radius: 15px;
    @media (max-width: 768px) {
        
        height: 255px;
    }
`
const BannerImage = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ArrowWrapper = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    position: absolute;
    top: 45%;
    margin-left: 2.5%;
    color: ${colors.secondary};
    font-size: 79px;
    @media (max-width: 768px) {
        font-size: 26px;
        
        top: 48%;
    }
`
const BannerCounter = styled.p`
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 25px;
    color: ${colors.secondary};
    @media (max-width: 768px) {
        opacity: 0;
    }
`

export default function Banner({annonceData}) {
    const [imageBannerUsed, setImageBannerUsed] = useState(0)

    function incrementPublicationId(id) {
        if(id < annonceData.pictures.length-1) {
            setImageBannerUsed(id + 1)
        } else {
            setImageBannerUsed(0)
        }
    }
    function decrementPublicationId(id) {
        if(id >= 1) {
            setImageBannerUsed(id - 1)
        } else {
            setImageBannerUsed(annonceData.pictures.length-1)
        }
    }

    function onClickChevron(idPublication, sens){
        if(sens ==='left'){
            decrementPublicationId(idPublication)
        }
        if(sens ==='right'){
            incrementPublicationId(idPublication)
        }
    }
    return (
        <BannerWrapper>
            {annonceData.pictures.length !== 1 ?
                <ArrowWrapper>
                    <FontAwesomeIcon icon={faChevronLeft} 
                        onClick={()=> onClickChevron(imageBannerUsed, 'left')}
                        // size="4x"
                    />
                    
                    <FontAwesomeIcon icon={faChevronRight} 
                        onClick={()=> onClickChevron(imageBannerUsed, 'right')}
                        // size="4x"
                />
                
                </ArrowWrapper>
                :
                null
            }
            {annonceData.pictures.length !== 1 ?
                <BannerCounter>{`${imageBannerUsed + 1}/${annonceData.pictures.length}`}</BannerCounter>
                :
                null
            }
            <BannerImage src={annonceData.pictures[imageBannerUsed]} alt="Banner images" />
        </BannerWrapper>
            
    )
}
