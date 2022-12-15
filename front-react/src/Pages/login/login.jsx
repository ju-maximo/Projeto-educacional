import logo from "../../img/logo.png"


function Login () {
    return (
        <body className="text-center container-login bg-info">
    
            <main className="form-signin w-100 m-auto">
              <form>
                <img className="mb-4" src={logo} alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Entre aqui</h1>
            
                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Senha</label>
                </div>
            
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
              </form>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        <script src="app/app.js"></script>
        </body>
    )
}

export default Login