import "./login.css"

function Login () {
    return (
        <body className="text-center container-login bg-info">
          <div className="container1">
            <main className="form-signin w-100 m-auto">
              <form>
                <h1 className="h3 mb-3 fw-normal">Entre aqui</h1>
            
                <div className="form-floating formulario">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating formulario">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Senha</label>
                </div>
            
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button className="btn btn-lg btn-primary botao" type="submit">Entrar</button>
              </form>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        <script src="app/app.js"></script>
        </div>
        </body>
    )
}

export default Login