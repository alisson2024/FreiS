import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const [valorPedido,setValorPedido]= useState(0);
const [cupom,setCupom]= useState(0);


export default function Ex1() {
    return (
        <div className="pagina-ex1 pagina">

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

            <div className='pagEx1'>
            <Link to='/app'> <img  className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 01 - Cupom de desconto</h1>
                <div className='linha1'> </div>
                <div className='meio'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>

                <div className='final'>
                    <h3>Informe o valor do pedido</h3>
                    <input type="text" value={valorPedido} onChange={setValorPedido} />
                    <h3>Informe o valor do cupom</h3>
                    <input type="text" value={cupom} onChange={setCupom}/>

                    <button> Executar </button>
                </div>

                <h3 className='resp'>Resultado: O total é R$ 0,00</h3>
            </div>

        </div>

    );

}
