import { NavLink } from "react-router-dom"
import logo from "../.././img/logo s azul.png"

function Header () {
    return (
        <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* <img src={logo} alt="a"/> */}
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2">Home</NavLink></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Quem Somos</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Intensivão</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Simulados</a></li>
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