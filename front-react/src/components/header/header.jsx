import { NavLink } from "react-router-dom"
import logo from "../.././img/logo s azul.png"
import "./header.css"

function Header () {
    return (
        <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* <img src={logo} alt="a"/> */}
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2 nav-brand p-0"><img src={logo} alt="a" className="imagem"/></NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2">Cursos</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2">Simulados</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2">Quem Somos</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2">FAQs</NavLink></li>
          </ul>
          <ul className="nav">
            <li className="nav-item"><NavLink to="/login" className="nav-link link-dark px-2">Login</NavLink></li>
            <li className="nav-item"><NavLink to="/cadastro" className="nav-link link-dark px-2">Cadastro</NavLink></li>
          </ul>
        </div>
    </nav>
    )
}

export default Header