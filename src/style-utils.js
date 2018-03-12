import {css} from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (min-width: 320px) {
      ${ css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1366px) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${ css(...args)}
    }
  `
}
