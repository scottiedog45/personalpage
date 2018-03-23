import {css} from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media only screen and (min-width: 320px) {
      ${ css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 800px) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media only screen and (min-width: 768px) {
      ${ css(...args)}
    }
  `
}
