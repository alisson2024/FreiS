import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho';
  


export default function Ex2() {


    const [Kg, setKg] = useState(0);
    const [respostagrama, setRespostaGrama] = useState('');
    
    
    
    
    
    function Pedido (){
            
        let total=Kg*1000
         setRespostaGrama(total)
        }
    




    return (
        <div className="pagina-ex2 pagina">

      <Cabecalho />

            <div className='pagEx2'>
            <Link to='/app'> <img  className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 02 - Converter kg/gramas</h1>
                <div className='linha2'> </div>
                <div className='meio'>
                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
                </div>

                <div className='final'>
                    <h3>Valor em kg</h3>
                    <input type="text" value={Kg}  onChange={e => setKg(e.target.value)} />

                    <button onClick={Pedido}> Executar </button>
                </div>

                <h3 className='resp'>Valor em Gramas: {respostagrama} g.</h3>
            </div>

        </div>

    );

}
