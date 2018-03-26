import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import resume from '../../contactIcons/resume.pdf'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import FontAwesome from 'react-fontawesome';

const Headerdiv = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 10vw;
  z-index: 3;
  float: left;
`;

const ContactFloater = styled.div`
  font-size: 40px;
  color: #f8f8ff;
  margin-top: 21vh;
`;

const ContactLink = styled.a`
  color: inherit;
  &:hover{
    color: cyan;
  }
`;

const ContactLinkWrapper= styled.div`
  margin-top: 50px;
  margin-left: 5px;
  font-size: 30px;
`;

const ContactIcon = styled.img`
  height: 50px;
  margin-left: 20px;
`;

const ResumeLinkWrapper = ContactLinkWrapper.extend`
  transform: rotate(270deg);
  transform-origin: left top 0;
  font-size: 15px;
  margin-left: 7px;
`;

const ResumeLink = styled.a`
  color: #f8f8ff;
  word-wrap: normal;
  text-decoration: none;
  &:hover{
    color: cyan;
  }
  letter-spacing: 5px;
`;

const FirstContactLinkWrapper = ContactLinkWrapper.extend`
  margin-top: 8px;
`;

const BlogLinkWrapper = ContactLinkWrapper.extend`
transform: rotate(270deg);
transform-origin: left top 0;
font-size: 15px;
margin-left: 7px;
margin-top: 58px;
`;

const BlogLink = styled.a`
color: #f8f8ff;
word-wrap: normal;
text-decoration: none;
&:hover{
  color: cyan;
}
letter-spacing: 5px;
`;

const Header = () => (
  <Headerdiv>
    <ContactFloater>
      <ResumeLinkWrapper>
        <ResumeLink href={resume} target='_blank'>
          résumé
        </ResumeLink>
      </ResumeLinkWrapper>
    <FirstContactLinkWrapper>
      <ContactLink
        href={'mailto:scottiedog45@gmail.com'} >
        <FaEnvelope />
      </ContactLink>
      </FirstContactLinkWrapper>
      <ContactLinkWrapper>
        <ContactLink href={'https://github.com/scottiedog45'}target={'_blank'}>
          <FaGithubSquare />
        </ContactLink>
      </ContactLinkWrapper>
      <ContactLinkWrapper>
        <ContactLink href={'https://www.linkedin.com/in/scott-o-toole-8b35b01b/'}target={'_blank'}>
          <FaLinkedinSquare />
        </ContactLink>
      </ContactLinkWrapper>
    </ContactFloater>
  </Headerdiv>
)

export default Header
