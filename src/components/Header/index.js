import React from 'react'

import Avatar from '../Avatar'
import InfoName from '../InfoName'
import MenuLinks from '../MenuLinks'
import SocialLinks from '../SocialLinks'

import * as S from './styled'

const Header = () => (
    <S.HeaderWrapper>
        <S.WrapperPerson>
            <Avatar />
            <InfoName />
        </S.WrapperPerson>
        <MenuLinks />
        <SocialLinks />
    </S.HeaderWrapper>
)

export default Header