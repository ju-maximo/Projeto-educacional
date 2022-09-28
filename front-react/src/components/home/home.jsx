import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage () {
return (
<body class="bg-info">
    <nav class="py-2 bg-light border-bottom">
        <div class="container d-flex flex-wrap">
          <ul class="nav me-auto">
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Quem Somos</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Intensivão</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Simulados</a></li>
          </ul>
          <ul class="nav">
            <li class="nav-item"><a href="login.html" class="nav-link link-dark px-2">Login</a></li>
            <li class="nav-item"><a href="cadastro.html" class="nav-link link-dark px-2">Cadastro</a></li>
          </ul>
        </div>
    </nav>
{/* aqui termina a navbar e começa o header */}
    <header class="py-3 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          {/* <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            <span class="fs-4">
                <img height="50px" width="auto" src="logo.png" alt="quadro azul com a palavra stoody em letras brancas" srcset=""/>
                Stoodi</span>
          </a> */}
          <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
          </form>
        </div>
      </header>
      </body>
      );
      };

export default HomePage;