import "./ConteudoPortfolio.css";

export default function ConteudoPortfolio() {
    return (

        <>
            <div>
                <h2>Sobre mim</h2>
                <p>Eu sou o Lucas Castelli, nascido em Casca RS, gosto muito de técnologia e sou apaixonado por E-Sports!</p>
            </div>

            <div>
                <h3>Meus interesses</h3>
                <p>Gosto muito de jogos online, principalmente FPS.</p>
                <p>Amo viajar e conhecer lugares novos.</p>
                <p>Gosto muito de técnlogia em geral, procuro sempre ficar atento as novas tendencias.</p>
            </div>

            <div>
                <h3>Técnologias que conheço, quero aprender e gosto de estudar:</h3>
                <h4>Conheco:</h4>
                <ul className="listaTecnologias">
                    <li>Python</li>
                    <li>Pygame</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Banco de Dados</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Pacote Office</li>
                    <li>Windows Geral</li>
                </ul>

                <h4>Quero aprender:</h4>
                <ul className="listaQueroaprender">
                    <li>Tudo envolvendo cibersegurança</li>
                    <li>Maior aprofundamento em banco de dados</li>

                
                </ul>

            </div>
            


        
        </>

    )

}