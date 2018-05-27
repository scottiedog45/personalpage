import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div id={'outer-container'}>
    <Helmet
      title="Scott O&#39;Toole"
      meta={[
        { name: 'description', content: 'Scott O&#39;Toole is a Full-stack developer from Atlanta, GA.' },
        {itemprop:'name', content: 'Scott O&#39;Toole&#39;s site'},
        {itemprop: 'description', content: "Scott O'Toole's site"},
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        color: 'black',
        margin: '0 auto',
        backgroundColor: 'white',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
