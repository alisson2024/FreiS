import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';






export default function Ex11() {
    

const [valor, setValor] = useState(0);
const [resposta, setResposta] = useState([]);





function tabuada (){
    const tabuadaArray = [];
    for (let i = 1; i <= 10; i++) {
      tabuadaArray.push(`${valor} x ${i} = ${valor * i}`);
    }
    setResposta(tabuadaArray);
    }



    return (
        <div className="pagina-ex11 pagina">

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

            <div className='pagEx11'>
            <Link to='/app'> <img  className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 11 - tabuada</h1>
                <div className='linha1'> </div>
                <div className='meio'>
<p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>             
   </div>

                <div className='final'>
                    <h3>Tabuada do:</h3>
                    <input type="text" value={valor}  onChange={e => setValor(e.target.value)} />
                   

                    <button onClick={tabuada}> Executar </button>
                </div>
                {
            resposta.map((item, pos) => (
              
              <div className='tab'><h3 key={pos} className='resultado'>{item}</h3></div>
            ))
          }
            </div>

        </div>

    );

}
