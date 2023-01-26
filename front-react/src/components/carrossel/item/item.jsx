import "../../carrossel/carrosel.css"
import { NavLink } from "react-router-dom"

function Item(props) {
    return(
              <div className="col-lg-3 align-items-center displayflex">
                  <img src={props.image} className="imagens" alt={props.alt}/>
                <h2 className="fw-normal">{props.title}</h2>
                <p>{props.texto}</p>
                <NavLink to="/" className="btn btn-secondary">Ver detalhes</NavLink>
              </div>
          )}

export default Item