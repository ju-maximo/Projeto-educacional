import imagem from '../../img/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg'
import { NavLink } from "react-router-dom"


function Componente1(props) {
return(
<div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={imagem} className="d-block mx-lg-auto img-fluid" alt="estudante branca sentada com caderno nas mãos" width="700" height="500" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">{props.titulo}</h1>
                <p className="lead">{props.paragrafo}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <NavLink to="/cadastro" role="button" className="btn btn-primary btn-lg px-4 me-md-2">Matricule-se já</NavLink>
                <NavLink to="/login" role="button" className="btn btn-outline-secondary btn-lg px-4">Já sou aluno</NavLink>
                </div>
              </div>
            </div>
      </div>
)}

export default Componente1