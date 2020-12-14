import React from 'react'
import styled from 'styled-components'

import ErrorComponts from './components/ErrorComponts'
import TempWrap from './components/TempWrap'


const Wrapper = styled.div`
  padding: 25px 25px;
`

export default function App() {
  return (
    <Wrapper>
      <ErrorComponts>
        <TempWrap/>
        </ErrorComponts>
    </Wrapper>
  )
}
