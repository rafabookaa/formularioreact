
import '../OpcoesHeader/style.css';

const textoOpcoes = ['CATEGORIA', 'MINHA ESTANTE', 'FAVORITOS'];

function Opcoes () {

  return (
<ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) )}
        </ul>

  )
}



export default Opcoes; 