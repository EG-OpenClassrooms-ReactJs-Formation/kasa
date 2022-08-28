import React, {useState} from 'react'
import styled from 'styled-components'
import image from '../../assets/BannerAbout.png'
import DropDownText from '../../components/DropDownText/dropdown_text'
//import image from '../../assets/BannerImage.png'
const AboutWrapper = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 260px;
    @media (max-width: 768px) {
        padding-bottom: 370px;
    }
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
`
const DropDownContainer = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width: 90%;
    gap: 33px;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`

export default function About() {
    const [activeFiablity, setActiveFiablity] = useState(false)
    const [activeRespect, setActiveRespect] = useState(false)
    const [activeService, setActiveService] = useState(false)
    const [activeSecurity, setActiveSecurity] = useState(false)
    
    return (
        <AboutWrapper>
            <BannerContainer />
            <DropDownContainer>
                <DropDownText 
                    title={'Fiablity'} 
                    active={activeFiablity} 
                    content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
                    setActive={setActiveFiablity}
                />
                <DropDownText 
                    title={'Respect'} 
                    active={activeRespect}
                    content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                    setActive={setActiveRespect}
                />
                <DropDownText 
                    title={'Service'} 
                    active={activeService}
                    content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                    setActive={setActiveService}
                />
                <DropDownText 
                    title={'Security'} 
                    active={activeSecurity}
                    content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
                    setActive={setActiveSecurity}
                />
            </DropDownContainer>
        </AboutWrapper>
    )
}
