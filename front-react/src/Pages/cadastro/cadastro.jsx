import "./cadastro.css"
import { useState } from "react"

function Cadastro (props) {
    let [email, setEmail] = useState("")
    let [username, setUsername] = useState("")

    function pegarEmail(e) {
      setEmail(
        e.target.value
      )
    }

    function pegarUsername(e) {
      setUsername(
        e.target.value
      )
    }

    function enviar (event) { 
      event.preventDefault()
      const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, username })
      };
      fetch('http://localhost:5000/post', options)
          .then(response => response.json())
          .then(data => {
            console.log(data)
          });
      }

    return (
        <body className="bg-info">
    <div className=" container-cadastro container2">
        <form className="row g-3" id="form" onsubmit="return criarCadastro(event)">
           <div className= "row">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" onChange={pegarEmail} name="email"/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Senha</label>
              <input type="password" className="form-control" id="inputPassword4" onchange="pegarSenha(event)" name="senha"/>
            </div>
            <div className="col-md-6">
                <label for="inputZip" className="form-label">Cep</label>
                <input type="text" className="form-control" id="cep" onchange="pegarCep(event)" name="cep"/>
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputCity" onChange={pegarUsername}/>
              </div>
            <div className="col-6">
                <label for="inputAddress" className="form-label">Endereço</label>
                <input type="text" className="form-control" id="inputAddress"placeholder="Rua 123"/>
              </div>
            <div className="col-md-6">
              <label for="inputState" className="form-label">Estado</label>
              <select id="inputState" className="form-select">
                <option selected>Escolha...</option>
                <option>...</option>
              </select>
            </div>
            </div>
           <div className= "row">
            <div className="col-12 d-flex justify-content-center pt-3">
              <button type="submit" className="btn btn-primary" onClick={enviar}>Cadastrar</button>
            </div>
            </div>
          </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<script src="app/app.js"></script>
</body>

)
}

export default Cadastro