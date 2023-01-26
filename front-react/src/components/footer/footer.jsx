import { NavLink } from "react-router-dom"

function Footer (props) {
    return (
            <div className="py-3 bg-info">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Fale Conosco</NavLink></li>
              <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Cursos</NavLink></li>
              <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">FAQs</NavLink></li>
              <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Sobre</NavLink></li>
              </ul> 
              <p className="text-center text-muted">© 2022 Company, Inc</p>
            </div>
    )}

export default Footer