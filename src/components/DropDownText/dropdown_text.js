import React, {useState} from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //padding: 0 1rem;
    border-radius: 5px;
    cursor: pointer;
    background: ${colors.ternary};
    color: ${colors.secondary};
    margin-bottom: 0.5em;
    //max-height: 60px;
    max-height: ${props => props.active ? "100%": "58.53px"};
    width:${props => props.full===false ? "48%": "100%"};
`
const DropDownheader = styled.header`
    display: flex;
    padding: 0 1rem;
    background: ${colors.primary};
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 5px;
    column-gap: 0.2em;
`
const DropDownIconWrapper = styled.div`
    margin-top: 1rem;
    flex: 0 0 25px;
    display: grid;
    place-items: center;
    font-size: 1.25rem;
    height: 25px;
    width: 25px;
    border-radius: 4px;
    cursor: pointer;
    transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.25s ease;
`
const DropDownIcon = styled.i`
    transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
`

const DropDownTitle = styled.h4`
    font-size: 1em;
    line-height: 1;
    font-weight: 500;
`

const DropDownContentWrapper = styled.div`
    overflow: hidden;
    padding: 0 1rem;
    background: ${colors.ternary};
    color: ${colors.primary};
    border-radius: 5px;
    max-height: ${props => props.active ? "100%": "0"};
    opacity: ${props => (props.active ? "1" : "0")};
    /* transition: all 1s ease; */
    //transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    transition: all 0.3s;

`
const DropDownContent = styled.p`

    line-height: 150%;
    //opacity: 0.8;
`

export default function DropDownText({title, content, active, setActive, full}) {
    
    function iconClick(){
        setActive(!active)
    }
    const contentType = Array.isArray(content)
    console.log(contentType)
    return (
    <DropdownWrapper active={active} full={full} onClick={()=>iconClick()}>
        <DropDownheader>
            <DropDownTitle>
                {title}
            </DropDownTitle>
            <DropDownIconWrapper active={active}>
                <FontAwesomeIcon size={'1x'} icon={faAngleDown}/>
            </DropDownIconWrapper>
        </DropDownheader>
        <DropDownContentWrapper active={active}>
            {
            contentType === false ?
                <DropDownContent>
                    {content}
                </DropDownContent>
                :
                content.map((element, index)=>(
                    <p key={index}>{element}</p>
                ))
            }
        </DropDownContentWrapper>
    </DropdownWrapper>
  )
}
