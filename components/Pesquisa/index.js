/* eslint-disable jsx-a11y/alt-text */
import Input from '../input'
import styled from 'styled-components';

//useState pega o valor de algo digitado 
import {useState} from 'react'

//Importando livros
import {livros} from './DadosPesquisa'


const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const Resultado = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa () {
  //o valor digitado entra pelo set e altera o valor do primeiro parametro do array
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  console.log(livrosPesquisados)

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre um livro em nossa estante.</Subtitulo>
      <Input placeholder='Escreva sua próxima leitura'
      
      onBlur={evento => {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
        setLivrosPesquisados(resultadoPesquisa)
      }}/>
      
      {livrosPesquisados.map(livro => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.src}/>
        </Resultado>
      ))}
    </PesquisaContainer>
    
    
  )
}

export default Pesquisa;