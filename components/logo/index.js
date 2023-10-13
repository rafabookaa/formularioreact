

import styled from 'styled-components'
import logo from '../../img/logo.svg'

const LogoContainer = styled.div`
  display: flex;
  align-items:center;
  font-size: 20px;
`

const LogoImg = styled.img`
  margin-right: 5px; 
`

function Logoo () {
  return (
    <LogoContainer>
        <LogoImg src={logo} alt='img-logo' />
        <p>Braspress<strong>Telecom</strong></p>
    </LogoContainer>
  )
}

export default Logoo;