import React from 'react'
import styled from 'styled-components'

import ThemeProviderDemo from './components/ThemeProviderDemo'

const Wrapper = styled.div`
  padding: 25px 25px;
`

export default function App() {
  return (
    <Wrapper>
      <ThemeProviderDemo/>
      
    </Wrapper>
  )
}
