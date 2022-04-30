import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import AnnoncePropertyMark from '../../components/AnnoncePropertyMark/annonce_property_mark'
import data from '../../data/data.json'
import colors from '../../utils/style/colors'

const AnnonceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
`
const BannerWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    //height: 415px;
    height: 500px;
    border-radius: 15px;
`
const BannerImage = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const AnnonceGeneralInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //align-items: center;
`
const AnnonceTitleLocationTags = styled.div`
    color: ${colors.primary};
`
const AnnonceTitle = styled.h1`
    margin-top: 15px;
    font-size: 36px;
    font-weight: 500;
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

`

export default function Annonce() {
    const [imageBannerUsed, setImageBannerUsed] = useState(0)
    const { annonceId } = useParams()
    const annonceData = data.filter(x => x.id === annonceId)[0]

    return (
        <AnnonceWrapper>
            <BannerWrapper>
                <BannerImage src={annonceData.pictures[imageBannerUsed]} alt="Banner images" />
            </BannerWrapper>
            <AnnonceGeneralInfos>
                <AnnonceTitleLocationTags>
                    <AnnonceTitle>{annonceData.title}</AnnonceTitle>
                    <AnnonceLocation>{annonceData.location}</AnnonceLocation>
                    <AnnonceTagContainer>
                        {
                            annonceData.tags.map((tag) => (
                                <AnnonceTag>{tag}</AnnonceTag>
                            ))
                        }
                    </AnnonceTagContainer>
                </AnnonceTitleLocationTags>

                <AnnoncePropertyMark profilePicture={annonceData.host.picture} name={annonceData.host.name} mark={annonceData.rating} />

            </AnnonceGeneralInfos>
            <DropDownContainer>

            </DropDownContainer>
        </AnnonceWrapper>
    )
}
