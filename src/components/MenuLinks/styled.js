import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.ul`
    display: flex;
    align-items: center;
`

export const MenuLinksItem = styled.li`
    padding: .5rem .7rem;
    .active{
        color: #1fa1f2;
    }
`
export const menuLinksLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    transition: color 0.5s;
    font-size: 1.1em;
    cursor: pointer;
    &:hover{
        color: #F25A70;
    }
`