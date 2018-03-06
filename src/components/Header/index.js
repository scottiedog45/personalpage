import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 28px;
`;

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Scott O'Toole, web-dev
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
