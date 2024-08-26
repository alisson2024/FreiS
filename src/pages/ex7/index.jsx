import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';


export default function Ex7() {
  const [cor1, setCor1] = useState('');
  const [cor2, setCor2] = useState('');
  const [resposta, setResposta] = useState('');



    function VerificarCor() {

        if(cor1='amarelo'){
            setResposta.send('true')
        }
        
       
        

    }

    return (
        <div className="pagina-ex7 pagina">
             <Cabecalho />

            <div className='pagEx7'>
                <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 07 - Cores primárias</h1>
                <div className='linha3'> </div>
                <div className='meio'>
                    <p>Implementar um programa em javascript para verificar se duas cores são primárias</p>
                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <h3>cor 01</h3>
                                <input type="text" value={cor1} onChange={e => setCor1 (e.target.value)} />
                            

                            <h3>Cor 02</h3>
                                <input type="text" value={cor2} onChange={e => setCor2 (e.target.value)} />
                        
                            
                        

                        <button onClick={VerificarCor}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> As duas cores são primárias? {resposta} </h3>
            </div>

        </div>

        </div>

    );

}

