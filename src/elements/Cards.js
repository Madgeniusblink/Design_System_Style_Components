import styled from 'styled-components'
import { Button } from './Buttons'
import {Elevation} from '../utilities'

export const Card = styled.div`
    border-radius: 6px;
    padding: 10px;
    ${Elevation[1]}
`

const CardButton = styled(Button)`
    width: 100%;
`;

Card.Button = CardButton