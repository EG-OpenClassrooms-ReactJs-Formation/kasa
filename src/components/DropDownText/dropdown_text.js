import React, {useState} from 'react'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.09);
    cursor: pointer;
    background: #fff;
    margin-bottom: 0.5em;
`
const DropDownheader = styled.header`
    display: flex;
    justify-content: space-between;
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
    background: #dedede;
    cursor: pointer;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.09);
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
    //max-height: 0;
    overflow: hidden;
    max-height: ${props => props.active ? "100%": "0"};
    opacity: ${props => (props.active ? "1" : "0")};
    /* transition: all 1s ease; */
    //transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    transition: all 0.3s;

`
const DropDownContent = styled.p`

    line-height: 150%;
    opacity: 0.8;
`

export default function DropDownText({title, content}) {
    const [active, setActive] = useState(false)
    function iconClick(){
        setActive(!active)
    }

    return (
    <DropdownWrapper>
        <DropDownheader>
            <DropDownTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </DropDownTitle>
            <DropDownIconWrapper onClick={()=>iconClick()}>
                <DropDownIcon className='bx bx-chevron-down'></DropDownIcon>
            </DropDownIconWrapper>
        </DropDownheader>
        <DropDownContentWrapper active={active}>
            <DropDownContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elitl
            </DropDownContent>
            <DropDownContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </DropDownContent>
        </DropDownContentWrapper>
    </DropdownWrapper>
  )
}
