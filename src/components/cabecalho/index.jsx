import { Link } from "react-router-dom";


export function Cabecalho(){
    return(

        <header className='cabecalho'>
        <img src="/assets/images/image.png" alt="" width="42px" />
        <h1 className='titulo'>React FreiS </h1>
        <ul>
          <li className='ir-app'>
            <Link to='/app'> inicio </Link>
          </li>
        </ul>
        <ul>
          <li className='ir-sobre'>
            <Link to='/sobre'> Sobre </Link>
          </li>
        </ul>


      </header>
    )
}
