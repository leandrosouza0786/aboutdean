import React from 'react'

import * as S from './styled'

const CardPost = () => (
    <S.WrapperCard>
        <S.PostItemTag />
        <S.WrapperInfos>
            <S.PostItemDate>30 de Julho de 2019 - Leitura de 4min</S.PostItemDate>
            <S.PostItemTitle>Diga não ao Medium: tenha sua própria plataforma</S.PostItemTitle>
            <S.PostItemDescription>De certa forma o mundo mudou. É importante entender a situação e buscar formas de nos adaptar nesses estranhos tempos que estamos vivendo.</S.PostItemDescription>
        </S.WrapperInfos>
    </S.WrapperCard>
)

export default CardPost