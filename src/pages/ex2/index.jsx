import './index.scss';

import { Link } from 'react-router-dom';



export default function Ex1() {
    return (
        <div className="pagina-ex2 pagina">

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

            <div className='pagEx2'>
            <Link to='/app'> <img  className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 02 - Converter kg/gramas</h1>
                <div className='linha2'> </div>
                <div className='meio'>
                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
                </div>

                <div className='final'>
                    <h3>Valor em gramas</h3>
                    <input type="text" />
                    

                    <button> Executar </button>
                </div>

                <h3 className='resp'>Resultado: O total é R$ 0,00</h3>
            </div>

        </div>

    );

}
