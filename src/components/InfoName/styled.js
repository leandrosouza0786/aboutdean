import styled from 'styled-components'

export const InfoWrapper = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 0 1rem;
    transition: color 0.5s;
    cursor: pointer;
    &:hover{
        color: #F25A70;
    }
`

export const Infoname = styled.h1`
    text-decoration: none;
    font-size: 1.2rem;
`

export const InfoPosition = styled.small`
    display: block;
    font-size: .8rem;
    font-weight: 300;
`