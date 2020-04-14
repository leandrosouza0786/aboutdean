import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 1rem;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  &:not(:last-child){
    margin-right: 1rem;
  }
`

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #F25A70;
    background: #fff;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`