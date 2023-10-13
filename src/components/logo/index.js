
import logo from '../../img/logo.svg'

function Logo () {
  return (
    <div className='logo'>
        <img src={logo} alt='img-logo' className='img-logo'></img>
        <p>Braspress<strong>Telecom</strong></p>
        </div>
  )
}

export default Logo;