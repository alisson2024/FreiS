import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';


/*Menor que 18,5	Magreza	0
Entre 18,5 e 24,9	Normal	0
Entre 25,0 e 29,9	Sobrepeso	I
Entre 30,0 e 39,9	Obesidade	II
Maior que 40,0	Obesidade Grave	III*/






export default function Ex10() {


    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState('');


    function imc() {


        let x=''
        
      let total =  peso/(altura **2)
    

if (total < 18.5){
    x=(`peso: ${peso} | altura: ${altura} |  Situação: Magreza `)
}

 if (total > 18.5  && total <= 24.9){

    x=(`peso: ${peso} | altura: ${altura} |  Situação: Peso Normal`  )
}

if (total > 24.9  && total <= 29.9  ){
    x=(`peso: ${peso} | altura: ${altura} |  Situação: Sobrepeso` )
}

 if (total > 30 && total <= 39.9 ){
    x=(`peso: ${peso} | altura: ${altura} | Situação: Obesidade`)
}


 if (total > 40){
    x=( `peso: ${peso} | altura: ${altura} | Situação: Obesidade grave `)
}


setResultado([...resultado,x])

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
                <Link to='/app'> <img className='seta' src="/assets/images/seta.png" alt="" width='40px' /></Link>
                <h1> Exercício 10 - imc</h1>
                <div className='linha1'> </div>
                <div className='meio'>
                    <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</p>
                </div>

                <div className='final'>
                    <h3>Altura</h3>
                    <input type="text" value={altura} onChange={e => setAltura(e.target.value)} />

                    <h3>Peso</h3>
                    <input type="text" value={peso} onChange={e => setPeso(e.target.value)} />

                    <button onClick={imc}> Executar </button>
                </div>

                <h3 className='resp'> {`${resultado} `}</h3>


                

            
            </div>

        </div>

    );

}

