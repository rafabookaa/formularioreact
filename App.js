
import Header from './components/Header';
import styled from 'styled-components'
import Pesquisa from '../src/components/Pesquisa'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

//function para criar a pagina 
function App() {

 return (
    //criacao da classe para css
        <AppContainer>
        <Header/>     
        <Pesquisa/>
        </AppContainer> 
      
    
  );
}

export default App;
