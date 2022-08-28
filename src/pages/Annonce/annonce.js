import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import AnnoncePropertyMark from '../../components/AnnoncePropertyMark/annonce_property_mark'
import DropDownText from '../../components/DropDownText/dropdown_text'
import Banner from '../../components/Banner/banner'
import data from '../../data/data.json'
import colors from '../../utils/style/colors'
import Error from '../Error/error404'

const AnnonceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
    @media (max-width: 768px) {
        padding-bottom: 370px;
    }
`
const AnnonceGeneralInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`
const AnnonceTitleLocationTags = styled.div`
    color: ${colors.primary};
`
const AnnonceTitle = styled.h1`
    margin-top: 15px;
    font-size: 36px;
    font-weight: 500;
    max-width: 70%;
    @media (max-width: 768px) {
        font-size: 18px;
        font-weight: 500;
        
    }
`
const AnnonceLocation = styled.h2`
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 14px;
        font-weight: 500;
        
    }
`
const AnnonceTagContainer = styled.div`
    display: flex;
    
`
const AnnonceTag = styled.p`
    color: ${colors.secondary};
    padding: 10px;
    background-color: ${colors.primary};
    border-radius: 10px;
    font-size: 14px;
    margin-right: 10px;
    min-width: 115px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 10px;
        min-width: initial;
        padding: 10px;
        min-width: 84px;
    }
`
const DropDownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    gap: 5%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

export default function Annonce() {
    const { annonceId } = useParams()
    const navigate = useNavigate()
    const annonceData = data.filter(x => x.id === annonceId)[0]

    const [activeEquip, setActiveEquip] = useState(false)
    const [activeDescription, setActiveDescription] = useState(false)

    useEffect(() => {
        if (annonceData === undefined){
            
            navigate("/kasa/404")   
        }
    },[annonceData, navigate])
    
    if (annonceData === undefined){
        return <Error/> 
    }

    return (
        <AnnonceWrapper>
            <Banner annonceData={annonceData}/>
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
                    full={true}
                />
                <DropDownText 
                    active={activeEquip} 
                    setActive={setActiveEquip}
                    title={'Equiment'}
                    content={annonceData.equipments}
                    full={true}
                />
            </DropDownContainer>
        </AnnonceWrapper>
    )
}
