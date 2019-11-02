import { css } from 'styled-components'


// CSS helper aka MIXIN
// needed for props

export const fixed = ({x = 0, y = 0} = {}) => css`
    position: fixed;
    top: ${y};
    left: ${x};
 `

export const absolute = ({x = 0, y = 0} = {}) => css`
    position: absolute;
    top: ${y};
    left: ${x};
`



// export const fixedTop = css`
//   position: fixed;
//   top: ${({ top }) => top + 'px'};
//   left: 0;
// `
// you do not need to use the css tag if you do not have a function
// const fixedTop = `
//   position: fixed;
//   top: 0;              // ${({ top }) => top + 'px'}; 
//   left: 0;
// `