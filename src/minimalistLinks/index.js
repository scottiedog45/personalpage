import React from 'react'
import styledcomponents from 'styled-components'
import styled from 'styled-components'
import { media } from '../style-utils'

import github from '../minimalistIconAssets/github.png'
import twitter from '../minimalistIconAssets/twitter.png'
import email from '../minimalistIconAssets/email.png'
import apple from '../minimalistIconAssets/appleImage.png'
import android from '../minimalistIconAssets/androidImage.png'
import js from '../minimalistIconAssets/jsImage.png'

const Icon = styled.img`
  ${media.handheld`
  width:50px;
  height:50px;
  margin-left: 10px;
  margin-right: 10px;
  
  
   object-fit:scale-down;
    `}
  ${media.tablet``}
  ${media.desktop`
    `}
`;

const LargerIcon = styled.img`
${media.handheld`

  `}
${media.tablet``}
${media.desktop`
  `}
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
  align-items: center;
  height: 120px
`

const MinimalContainer = styled.div`

`

const CenterAndroidImageWithPadding = styled.div`
  margin-left: 20px;
  margin-right: 20px
  height: 34px;
`

const CenterImageWithPadding = styled.div`
  margin-left: 10px;
  margin-right: 10px
  height: 34px;
`

const Words = styled.p`
  text-align:center;
`

const twitterLink = ""

const MinimalistLinks = () => (

  <div>
    <Words>scott o'toole</Words>
    <ImageContainer>
      <Icon src={apple} alt={'apple logo'} />
      <Icon src={android} alt={'android logo'} />
      <Icon src={js} alt={'js logo'} />
    </ImageContainer>
    <Words>get in touch:</Words>
    <ImageContainer>
      <a href="https://github.com/scottiedog45">
        <Icon src={github} alt={'github logo'} />
      </a>
      <a href="https://twitter.com/scottiedog45">
        <Icon src={twitter} alt={'twitter logo'} />
      </a>
      <a href="mailto:scottmatthewotoole@gmail.com">
        <Icon src={email} alt={'email logo'} />
      </a>
    </ImageContainer>
  </div>
)

export default MinimalistLinks