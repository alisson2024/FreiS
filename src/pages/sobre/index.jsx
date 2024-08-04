import './index.scss';

import { Link } from 'react-router-dom';


export default function Sobre() {
  return (
    <div className="pagina-contato pagina">

      <header className='cabecalho'>
        <img src="/assets/images/image.png" alt="" width="42px" />
        <h1 className='titulo'>React FreiS </h1>

        <ul>
            <li className='ir-app'>
              <Link to='/app' className='ini'> inicio </Link>
            </li>
          </ul>
          <ul>
            <li className='ir-sobre'>
               <Link to='/sobre'> Sobre </Link>
            </li>
          </ul>

      </header>



      <main>

        <h2>Sobre</h2>

        <p className='iniciotex'> Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.</p>

          <p className='meiotex'>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.</p>
          <p className='finaltex'>Estamos ansiosos para ver seu progresso e sucesso!</p>


          <img className='ima' src="/assets/images/image.png" alt="" width="80px" height={'100px'} />


      </main>
    </div>



  );


}
