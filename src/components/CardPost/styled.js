import styled from 'styled-components'

export const WrapperCard = styled.div`
    width: 100%;
    height: 200px;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: .8rem 0;
    cursor: pointer;
    transition: all 200ms;
    font-family: 'Segoe UI';
    &:hover{
        border: 2px solid #F25A70;
    }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : '#000'};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 110px;
  min-width: 110px;
  text-transform: uppercase;
  margin: 1rem;
`
export const WrapperInfos = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 .3rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: #1B1B1B;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  color: #757575;
`