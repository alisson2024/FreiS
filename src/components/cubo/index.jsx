import { Link } from "react-router-dom"



export function Cubos(cor,titulo,subtitulo){

    return(
        <div className='sla'>
          <Link className='ex' to='/ex1'>
            <div className='cubo'>
            </div>
            <p>Cupom de desconto</p>
            <p>Exercício 01</p>
          </Link>
          </div>
    )
}