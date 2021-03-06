import {css} from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media only screen and (min-width: 0px) {
      ${ css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1025px) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media only screen and (min-width: 768px) {
      ${ css(...args)}
    }
  `,
  extraBig: (...args) => css`
    @media only screen and (min-width: 1500px) {
      ${ css(...args)}
    }
  `
}
