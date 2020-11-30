import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

const Button = styled.button`
  font-size: 20px;
  margin: 10px;
  padding: 10px 10px;
  border-radius: 12px;
  color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main}
`
Button.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
}

export default function ThemeProviderDemo() {
  const theme = {
    main: 'mediumseagreen'
  }
  return (
    <React.Fragment>
      <Button>Normal</Button>
      <ThemeProvider theme={theme}>
          <Button>Themed</Button>
      </ThemeProvider>
    </React.Fragment>
  )
}
