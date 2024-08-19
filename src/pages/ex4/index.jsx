import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Ex3() {
    const [nomeLivro,setNomeLivro] = useState('')
    const [totalPag,setTotalPag] = useState(0)
    const [tempo,setTempo] = useState(0)
    const [respostaLivro,setRespostaLivro] = useState('')


    function tempodolivro() {

        let calc = (tempo*3600)/totalPag

        setRespostaLivro(calc)

        respostaLivro.push(respostaLivro)

    }

    return (
        <div className="pagina-ex4 pagina">

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

            <div className='pagEx4'>
                <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 04 - Leitura de livro</h1>
                <div className='linha3'> </div>
                <div className='meio'>
                    <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página   </p>       </div>

                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <div className='cxa'> <h3>Nome do livro</h3>
                                <input type="text" value={nomeLivro} onChange={e => setNomeLivro (e.target.value)} />
                            </div>

                            <div className='cxa'><h3>Total de paginas</h3>
                                <input type="text" value={totalPag} onChange={e => setTotalPag (e.target.value)} />
                            </div>

                            <div className='cxa'><h3>Tempo em segundos de leitura</h3>
                                <input type="text" value={tempo} onChange={e => setTempo (e.target.value)} />
                            </div>
                        </div>

                        <button onClick={tempodolivro}> Executar </button>
                    </div>
                </div>

                <h3 className='resp'> Você lerá {nomeLivro} em {respostaLivro} horas.</h3>
            </div>

        </div>

    );

}
