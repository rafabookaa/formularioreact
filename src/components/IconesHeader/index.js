import '../IconesHeader/style.css';
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';

const icones = [perfil, sacola];

function IconesHeader () {
  return (
    <ul className='icones'>
          {icones.map((icone) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
  )
}

export default IconesHeader;