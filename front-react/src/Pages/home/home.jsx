import Componente1 from "./componente1";
import logo from "../../img/logo.png"
import Carrossel from "../../components/carrossel/carrossel";
import Tab from '../../components/tab/tabela'
import Planos from "../../components/planos/planos";
import Rodape from "../../components/footer/footer";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";

function HomePage () {
return (
<body className="bg-info">

{/* aqui termina a navbar e começa o header */}
    <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            {/* <svg className="bi me-2" width="40" height="32"><use link:href="#bootstrap"></use></svg> */}
            <span className="fs-4">
                <img height="50px" width="auto" src={logo} alt="quadro azul com a palavra stoody em letras brancas" srcset=""/>
                Stoodi</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
          </form>
        </div>
      </header>
      
      <Componente1 titulo="Vai prestar o Enem esse ano? Ainda dá tempo de se preparar!" paragrafo="Garanta já sua vaga na Turma de Junho do Cursinho Extensivo"/>
      <Carrossel/>
      <Planos/>
      <Tab/>
      </body>
      );
      };

export default HomePage;