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

      <section className='treino'>
        <h1>Escolha um treino...</h1>
      </section>

      <div className='todosEx'>


        <div className='sla'>
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



          <Link className='ex' to='/ex4'>
            <div className='cubo4'>
            </div>
            <p>Leitura de livro</p>
            <p>Exercício 04</p>
          </Link>

          <Link className='ex' to='/ex5'>
            <div className='cubo5'>
            </div>
            <p>Média de notas</p>
            <p>Exercício 05</p>
          </Link>
        </div>

        <div className='sla'>
          <Link className='ex' to='/ex6'>
            <div className='cubo6'>
            </div>
            <p>Salário liquido</p>
            <p>Exercício 06</p>
          </Link>



          <Link className='ex' to='/ex7'>
            <div className='cubo7'>
            </div>
            <p>Cores primárias</p>
            <p>Exercício 07</p>
          </Link>



          <Link className='ex' to='/ex8'>
            <div className='cubo8'>
            </div>
            <p>temperatura</p>
            <p>Exercício 08</p>
          </Link>




          <Link className='ex' to='/ex9'>
            <div className='cubo9'>
            </div>
            <p>Sorveteria</p>
            <p>Exercício 09</p>
          </Link>


          <Link className='ex' to='/ex10'>
            <div className='cubo10'>
            </div>
            <p>Calculo IMC com hístorico</p>
            <p>Exercício 10</p>
          </Link>
        </div>
        <div className='sla'>
          <div className='sla'></div>
          <Link className='ex' to='/ex11'>
            <div className='cubo11'>
            </div>
            <p>Tabuada</p>
            <p>Exercício 11</p>
          </Link>


          <Link className='ex' to='/ex12'>
            <div className='cubo12'>
            </div>
            <p>Comparador de pessoas</p>
            <p>Exercício 12</p>
          </Link></div>


      </div>
    </div>
  )
}