import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Ex3() {
const[acaiPequeno,setAcaiPequeno]=useState(0)
const[acaiMedio,setAcaiMedio]=useState(0)
const[acaiGrande,setAcaiGrande]=useState(0)
const[respostaAcai,setRespostaAcai]=useState('')


function pedidoacai () 
{
  let piq = 13.5
  let med = 15
  let grd = 17.50

  let p = piq * acaiPequeno
  let m = med * acaiMedio
  let g = grd * acaiGrande

  let res = p + m + g

  setRespostaAcai(res)


}

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

          <div className='haha'>
          <div className='final'>
          <div className='sub'>
           
           <div className='cxa'> <h3>Quantidade pequeno</h3>
            <input type="text" value={acaiPequeno} onChange={ e => setAcaiPequeno(e.target.value)} /></div>

            <div className='cxa'><h3>Quantidade médio</h3>
            <input type="text" value={acaiMedio} onChange={ e => setAcaiMedio(e.target.value)} /></div>

            <div className='cxa'><h3>Quantidade grande</h3>
            <input type="text" value={acaiGrande} onChange={ e => setAcaiGrande(e.target.value)} />
            </div> </div>
          
           <button onClick={pedidoacai}> Executar </button> </div>
       </div>

        <h3 className='resp'>Resultado: O total é R$ {respostaAcai}</h3>
      </div>

    </div>

  );

}

