import '../Header/style.css'

import Logo from '../logo'
import Opcoes from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

function Header () {
  return (
    <header className='App-header'>
        
    <Logo/>
    <Opcoes/>
    <IconesHeader/>
    
        
  </header>
  )
}

export default Header;