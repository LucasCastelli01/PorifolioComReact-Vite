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

      

      <p>Sou o Lucas Castelli, nascido em Casca RS, gosto muito de técnologia e sou apaixonado por E-Sports!</p>

    </div>
  )
}