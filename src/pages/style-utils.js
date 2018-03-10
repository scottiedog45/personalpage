import {css} from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 885px) {
      ${ css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1366px) {
      ${ css(...args)}
    }
    `
}
