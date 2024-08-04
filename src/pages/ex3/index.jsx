import './index.scss';

import { Link } from 'react-router-dom';



export default function Ex1() {
  return (
    <div className="pagina-ex3 pagina">

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

      <div className='pagEx3'>
        <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
        <h1> Exercício 03 - Valor total por quantidade</h1>
        <div className='linha3'> </div>
        <div className='meio'>
          <p>Implementar um programa em Javascript para calcular o <b> total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho:<b> pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
        </div>

        <div className='final'>
          <div className='sub'>
            <h3>Quantidade pequeno</h3>
            <input type="text" />

            <h3>Quantidade médio</h3>
            <input type="text" />

            <h3>Quantidade grande</h3>
            <input type="text" />
          </div>
           <button> Executar </button>
        </div>

        <h3 className='resp'>Resultado: O total é R$ 0,00</h3>
      </div>

    </div>

  );

}

