import "./cadastro.css"

function Cadastro (props) {
    return (
        <body className="bg-info">
    <div className=" container-cadastro container2">
        <form className="row g-3" id="form" onsubmit="return criarCadastro(event)">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" onchange="pegarEmail(event)" name="email" value=""/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Senha</label>
              <input type="password" className="form-control" id="inputPassword4" onchange="pegarSenha(event)" value="" name="senha"/>
            </div>
            <div className="col-md-6">
                <label for="inputZip" className="form-label">Cep</label>
                <input type="text" className="form-control" id="cep" onchange="pegarCep(event)" value=" " name="cep"/>
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">Cidade</label>
                <input type="text" className="form-control" id="inputCity"/>
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
            <div className="col-12">
              <button type="submit" className="btn btn-primary botao2">Cadastrar</button>
            </div>
          </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<script src="app/app.js"></script>
</body>

)
}

export default Cadastro