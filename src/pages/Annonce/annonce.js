import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AnnoncePropertyMark from '../../components/AnnoncePropertyMark/annonce_property_mark'
import DropDownText from '../../components/DropDownText/dropdown_text'
import data from '../../data/data.json'
import colors from '../../utils/style/colors'

const AnnonceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
`
const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    
    height: 500px;
    border-radius: 15px;
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
`
const BannerCounter = styled.p`
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 25px;
    color: ${colors.secondary};
`
const AnnonceGeneralInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const AnnonceTitleLocationTags = styled.div`
    color: ${colors.primary};
`
const AnnonceTitle = styled.h1`
    margin-top: 15px;
    font-size: 36px;
    font-weight: 500;
    max-width: 70%;
`
const AnnonceLocation = styled.h2`
    font-size: 18px;
    font-weight: 500;
`
const AnnonceTagContainer = styled.div`
    display: flex;
`
const AnnonceTag = styled.p`
    color: ${colors.secondary};
    padding: 10px;
    background-color: ${colors.primary};
    border-radius: 15px;
    font-size: 14px;
    margin-right: 10px;
    min-width: 150px;
    text-align: center;
`
const DropDownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

export default function Annonce() {
    const [imageBannerUsed, setImageBannerUsed] = useState(0)
    const { annonceId } = useParams()
    const annonceData = data.filter(x => x.id === annonceId)[0]

    const [activeEquip, setActiveEquip] = useState(false)
    const [activeDescription, setActiveDescription] = useState(false)

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
        <AnnonceWrapper>
            <BannerWrapper>
                {annonceData.pictures.length !== 1 ?
                    <ArrowWrapper>
                        <FontAwesomeIcon icon={faChevronLeft} 
                            onClick={()=> onClickChevron(imageBannerUsed, 'left')}
                            size="4x"
                        />
                        
                        <FontAwesomeIcon icon={faChevronRight} 
                            onClick={()=> onClickChevron(imageBannerUsed, 'right')}
                            size="4x"
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
            <AnnonceGeneralInfos>
                <AnnonceTitleLocationTags>
                    <AnnonceTitle>{annonceData.title}</AnnonceTitle>
                    <AnnonceLocation>{annonceData.location}</AnnonceLocation>
                    <AnnonceTagContainer>
                        {
                            annonceData.tags.map((tag, index) => (
                                <AnnonceTag key={index}>{tag}</AnnonceTag>
                            ))
                        }
                    </AnnonceTagContainer>
                </AnnonceTitleLocationTags>

                <AnnoncePropertyMark profilePicture={annonceData.host.picture} name={annonceData.host.name} mark={annonceData.rating} />

            </AnnonceGeneralInfos>
            <DropDownContainer>
                <DropDownText 
                    active={activeDescription} 
                    setActive={setActiveDescription}
                    title={'Description'}
                    content={annonceData.description}
                    full={false}
                />
                <DropDownText 
                    active={activeEquip} 
                    setActive={setActiveEquip}
                    title={'Equiment'}
                    content={annonceData.equipments}
                    full={false}
                />
            </DropDownContainer>
        </AnnonceWrapper>
    )
}
