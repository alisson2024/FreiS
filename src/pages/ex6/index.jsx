import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Ex6() {
    const [salarioBase,setSalarioBase] = useState(0)
    const [bonus,setBonus] = useState(0)
    const [desconto,setDesconto] = useState(0)
    const [valorSalario,setValorSalario] = useState('')


    function salarioLiquido() {

        const salarioBasenum = Number(salarioBase);
        const bonusNum = Number(bonus);
        const descontoNum = Number(desconto);
        
        let calc0=   bonusNum / 100;
        let calc1 = salarioBasenum * calc0;
        let calc2 = calc1 + salarioBasenum;
        let fim = calc2 - descontoNum;

        //(1000 * (10 / 100)) - 300
        setValorSalario(fim.toFixed(2));

        

    }

    return (
        <div className="pagina-ex6 pagina">

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

            <div className='pagEx6'>
                <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 06 - Salário líquido</h1>
                <div className='linha3'> </div>
                <div className='meio'>
                    <p>Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de <br /> descontos em reais  </p>       </div>

                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <h3>Salário base</h3>
                                <input type="text" value={salarioBase} onChange={e => setSalarioBase (e.target.value)} />
                            

                            <h3>Bônus mensal em porcentagem</h3>
                                <input type="text" value={bonus} onChange={e => setBonus (e.target.value)} />
                            

                            <h3>Total de descontos</h3>
                                <input type="text"  value={desconto} onChange={e => setDesconto (e.target.value)} />
                            
                        

                        <button onClick={salarioLiquido}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> Seu salário líquido é de R$ {valorSalario}</h3>
            </div>

        </div>

    );

}

