import React from 'react'

import * as S from './styled'

const MenuLinks = () => {
    return (
    <S.MenuLinksWrapper>
        <S.MenuLinksItem>
            <S.menuLinksLink>Home</S.menuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
            <S.menuLinksLink>Blog</S.menuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
            <S.menuLinksLink>Life</S.menuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
            <S.menuLinksLink>Buy a coffe</S.menuLinksLink>
        </S.MenuLinksItem>
    </S.MenuLinksWrapper>
    )
}

export default MenuLinks
