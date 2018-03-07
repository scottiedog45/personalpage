import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import github from '../../icons/github-512 (1) copy.png'

const Title = styled.h1`
  font-size: 28px;
  font-family: 'Oxygen', sans-serif;
`;

const Headerdiv = styled.div`
  background: black;
`;

const Icon = styled.img`
  height: 2em;
  margin-bottom: 0px;
  margin-top: 8px;
`;

const IconWrapper = styled.div`
  color: white;
  display: block;
  text-align: center;
`;



const Header = () => (
  <Headerdiv>

        <IconWrapper>
          <Icon src={github} alt={'github icon'} />
        </IconWrapper>

  </Headerdiv>
)

export default Header
