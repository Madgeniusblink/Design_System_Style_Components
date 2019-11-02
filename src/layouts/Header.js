import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { social, fixed } from '../utilities'

const Header = () => {
    return (
        <AppHeader>
          <img src={logo} className="logo" alt="logo" />
        </AppHeader>
    )
}

const AppHeader = styled.header`
    background: ${social.twitter};
    padding: 0px 5%;
    width: 100%;
    ${fixed()}

    .logo {
        width: 70px;
    };
    
`

export default Header
