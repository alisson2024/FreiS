import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';


export default function Ex8() {
  const [acai, setAcai] = useState(0);
  const [resposta, setResposta] = useState('');



    function calcularAcai() {
        const gramas = acai
        const precoPor100g = 3.50;
        const descontoPor100g = 0.50;

        let precoFinalPor100g = precoPor100g;

        // Verifica se a quantidade é maior ou igual a 1kg (1000g)
        if (gramas >= 1000) {
            precoFinalPor100g -= descontoPor100g;
        }

        // Calcula o total a pagar
        const total = (gramas / 100) * precoFinalPor100g;

        setResposta(total.toFixed(2));
    }

    return (
        <div className="pagina-ex9 pagina">
             <Cabecalho />

            <div className='pagEx9'>
                <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 09 - Sorveteria </h1>
                <div className='linha3'> </div>
                <div className='meio'>
                    <p> Implementar um programa em javascript que <b> calcule o total </b> a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b> 100g é R$ 3,50 <br /> </b>                                                         mas se o total de gramas for a partir de 1kg, o preço das 100g <b>diminui</b> 50 centavos. </p>
                </div>

                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <h3> Total de gramas </h3>
                                <input type="text" value={acai} onChange={e => setAcai (e.target.value)} />
                            
                         <button onClick={calcularAcai}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> O total a pagar é R$ {resposta} </h3>
            

             </div>

        </div>

    );

}

