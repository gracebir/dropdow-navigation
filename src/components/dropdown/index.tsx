import React from 'react'
import styled from 'styled-components';

type itemProp = {
    imgUrl?: string,
    itemLabel: string
}

type dropDownProps = {
    label: string
    isDropdow: boolean
    items?: itemProp[]
}

const DropDownWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const DropBottom = styled.div`
    display: flex;
    align-items: center;
    gap: .2em;
    cursor: pointer;
    margin-bottom: 1em;
`

const DropdownLabel = styled.span`
    font-size: .9em;
`

const DropdowContent = styled.div`
    position: absolute;
    background-color: var(--almost-white);
    @media (min-width: 45em) {
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px var(--medium-gray);
        z-index: 1;
        padding: 1em 1.4em;
    }
`
const DropItemGroup = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: .6em 0;
    gap: .7em;
`

const ItemText = styled.span`
    white-space: nowrap;
    color: var(--medium-gray);
    font-size: .9em;
`

function DropDown({
    label,
    isDropdow=false,
    items
}: dropDownProps) {
    const [isArrowUp, setArrowIsUp] = React.useState<boolean>(false);
    
    const onClick = ()=>{
        if(isArrowUp){
            setArrowIsUp(false)
        } else {
            setArrowIsUp(true)
        }
    }

  return (
    <DropDownWrapper>
        <DropBottom onClick={onClick}>
            <DropdownLabel>{label} </DropdownLabel>
            {isDropdow ? isArrowUp ? (<img src='images/icon-arrow-up.svg'/>):
             (<img src='images/icon-arrow-down.svg'/>) : null }
        </DropBottom>
        {isDropdow ? !isArrowUp ? null : (
             <DropdowContent>
               {items?.map((item, i)=>(
                    <DropItemGroup>
                        {item.imgUrl ? <img src={item.imgUrl}/>: null}
                        <ItemText>{item.itemLabel}</ItemText>
                    </DropItemGroup>
               ))}
            </DropdowContent>
        ) : null
    } 
    </DropDownWrapper>
  )
}

export default DropDown
