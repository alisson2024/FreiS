import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';


export default function Ex8() {
  const [media, setMedia] = useState(0);
  const [resposta, setResposta] = useState('');



    function VerificarTemperatura() {
        if (media >= 41) {
            setResposta( "Hipertermia");
          } else if (media >= 39.6 && media < 41) {
            setResposta ("Febre Alta");
          } else if (media >= 37.6 && media < 39.6) {
            setResposta ("Febre");
          } else if (media >= 36 && media < 37.6) {
            setResposta("Normal");
          } else {
            setResposta("Hipotermia");
          }
        
    }

    return (
        <div className="pagina-ex8 pagina">
             <Cabecalho />

            <div className='pagEx8'>
                <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 08 - Temperatura</h1>
                <div className='linha3'> </div>
                <div className='meio'>
                    <p> Implementar um programa em javascript que a partir da temperatura, <b> avalie a situação </b> da pessoa conforme a tabela. Ao final, apresente a classificação </p>
                </div>
             <div className='imag'>
                <img src="/assets/images/temperatura.png" alt="" width='500px'/>
             </div>
                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <h3> Temperatura </h3>
                                <input type="text" value={media} onChange={e => setMedia (e.target.value)} />
                            
                         <button onClick={VerificarTemperatura}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> A situação para sua temperatura é  {resposta} </h3>
            

             </div>

        </div>

    );

}

