import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">

      <header className='cabecalho'>
        <img src="/assets/images/image.png" alt="" width="42px" />
        <h1 className='titulo'>React FreiS </h1>
        <ul>
          <li className='ir-app'>
            <Link to='/app'> inicio </Link>
          </li>
        </ul>
        <ul>
          <li className='ir-sobre'>
            <Link to='/sobre'> Sobre </Link>
          </li>
        </ul>


      </header>
    
      <section className='secao'>
        <h1>Escolha um treino...</h1>
      </section>

      <div className='todosEx'>

        <Link className='ex' to='/ex1'>
          <div className='cubo1'>
          </div>
          <p>Cupom de desconto</p>
          <p>Exercício 01</p>
        </Link>



        <Link className='ex' to='/ex2'>
          <div className='cubo2'>
          </div>
          <p>Converter Kg/gramas</p>
          <p>Exercício 02</p>
        </Link>


        <Link className='ex' to='/ex3'>
          <div className='cubo3'>
          </div>
          <p>Valor total por quantidade</p>
          <p>Exercício 03</p>
        </Link>


      </div>
    </div>
  )
}