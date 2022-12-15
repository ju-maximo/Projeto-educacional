import "../../carrossel/carrosel.css"

function Item(props) {
    return(
              <div className="col-lg-3 align-items-center displayflex">
                  <img src={props.image} width="200px"  alt={props.alt}/>
                <h2 className="fw-normal">{props.title}</h2>
                <p>{props.texto}</p>
                <a className="btn btn-secondary" href="#">View details »</a>
              </div>
          )}

export default Item