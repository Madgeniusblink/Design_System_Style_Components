import React from 'react';
import styled, { ThemeProvider} from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements'

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61',

  }
}

const themeTwo = {
  colors: {
    primary: '#52473',
    secondary: '#82D8D8',

  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main 
        css={`
          background: red;
        `}
      >
        <Button modifiers='small'>Hello</Button>
        <Button modifiers='cancel'>CancelB</Button>
        <Button modifiers={['small', 'cancel']}>Cancelsmall</Button>
        <ThemeProvider theme={themeTwo}>
          <Card>
            <h2>Heeloo world</h2>
            <Card.Button as='a' href="bluehubs.com" modifiers="cancel">Cancelsmall</Card.Button>
          </Card>
        </ThemeProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
