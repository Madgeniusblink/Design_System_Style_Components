import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { lighten } from 'polished'
import { Elevation } from '../utilities'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,
  cancel: ({ theme }) => `
    background: ${theme.colors.secondary};
    &:hover {
      background: ${lighten(0.2, theme.colors.secondary)};
    };
  `
}

export const Button = styled.button`
  color: white;
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  font-size: 2rem;
  background: ${props => props.theme.colors.primary};
  transition: 0.3s ease box-shadow;
  ${Elevation[1]};
  &:hover {
    ${Elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}

`

// If modifiers become to large make an extend button
// export const CancelButton = styled(Button)`
//   background: tomato;

// `


  /* background: ${({type}) => type === 'cancel' ? 'tomato' : 'indigo'} */
  /* ${props => props.type === 'delete' && 'background: pink'} */


  /* ${({size}) => {
    if (size === 'small') {
      return BUTTON_MODIFIERS.small
    }
  }}
  ${({type}) => {
    if (type === 'cancel') {
      return BUTTON_MODIFIERS.cancel
    }
  }} */