import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';






export default function Ex1() {
    
const [cupom, setCupom] = useState('');
const [totalPedido, setTotalPedido] = useState(0);
const [respostaPedido, setRespostaPedido] = useState('');





function Pedido (){
        let total=totalPedido
    
            if(cupom=="QUERO50"){
                let desc=total * 50 / 100;
                total= total - desc;
            }
            else if(cupom=="QUERO25"){
                let desc=total * 25 / 100;
                total= total - desc;
            }
            else if(cupom=="QUERO10"){
                let desc=total * 10 / 100;
                total= total - desc;
            }
            else{
                total=total
            }
    
            setRespostaPedido(total)
    }



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
                    <input type="text" value={totalPedido}  onChange={e => setTotalPedido(e.target.value)} />
                    <h3>Informe o valor do cupom</h3>
                    <input type="text" value={cupom} onChange={e => setCupom(e.target.value)}/>

                    <button onClick={Pedido}> Executar </button>
                </div>

                <h3 className='resp'>Resultado: O total é R$ {respostaPedido}</h3>
            </div>

        </div>

    );

}
