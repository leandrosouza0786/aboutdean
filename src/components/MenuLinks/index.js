import React from 'react'

import * as S from './styled'

const MenuLinks = () => {
    return (
    <S.MenuLinksWrapper>
        <S.MenuLinksItem>
            <S.menuLinksLink to="/" activeClassName="active">Home</S.menuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
            <S.menuLinksLink to="/blog" activeClassName="active">Blog</S.menuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
            <S.menuLinksLink >Life</S.menuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
            <S.menuLinksLink  to="/coffe" activeClassName="active">Buy a coffe</S.menuLinksLink>
        </S.MenuLinksItem>
    </S.MenuLinksWrapper>
    )
}

export default MenuLinks
