import React from 'react'
import styled from 'styled-components'
import { media } from '../style-utils'

const ServicePanel = styled.div`
  ${media.handheld`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  `}
  ${media.desktop`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "seoWebsite mobileApps"
    "responsiveDesign socialMedia"
  `}
`;

const SeoWebsite = styled.div`
  ${media.desktop`
    grid-area: seoWebsite;
  `}
`;

const MobileApps = styled.div`
  ${media.desktop`
    grid-area: mobileApps;
  `}
`;

const ResponsiveDesign = styled.div `
  ${media.desktop`
    grid-area: responsiveDesign;
  `}
`;

const SocialMedia = styled.div`
  ${media.desktop`
    grid-area: socialMedia;
  `}
`



class Services extends React.Component {
  render() {
    return(
      <div>
      <ServicePanel>
        <SeoWebsite>
          seo-friendly websites
        </SeoWebsite>
        <MobileApps>
          mobile apps
        </MobileApps>
        <ResponsiveDesign>
          responsive website design
        </ResponsiveDesign>
        <SocialMedia>
          social media integration
        </SocialMedia>
      </ServicePanel>
      </div>
    )
  }
}

export default Services