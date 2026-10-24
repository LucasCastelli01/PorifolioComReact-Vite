import Cabecalho from './components/Cabecalho';
import './App.css';
import RedesSociais from './components/RedesSociais';
import ConteudoPortfolio from './components/ConteudoPortfolio';





export default function App() {
  return (
  
    <div>
      <Cabecalho/>

      <RedesSociais className="ladoALado"/>

      <ConteudoPortfolio/>

    

    </div>
  )
}