import imagem1 from '../../img/professores-300x200.jpg'
import imagem2 from '../../img/rm373batch15-bg-05.jpg'
import imagem3 from '../../img/naason.jpg'

function Carrossel(props) {
    return(
          <section className="container-sm container-carrossel">
            <div className="row">
              <div className="col-lg-3 align-items-center">
                  <img src={imagem1} width="200px"  alt="Homem negro sentado a uma mesa ao fundo em uma parede formulas matematicas"/>
                <h2 className="fw-normal">Nossos Experts</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a className="btn btn-secondary" href="#">View details »</a></p>
              </div>
              <div className="col-lg-3 align-items-center">
                <img width="200px" src={imagem2} alt="retrato de uma jovem professora afro americana de oculos olhando para a camera na sala de aula e segurando livros didaticos quadro negro com formulas no fundo conceito de escolaridade livros nas maos"/>
        
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p><a className="btn btn-secondary" href="#">View details »</a></p>
              </div>
              <div className="col-lg-3 align-items-center">
                <img width="200px" src={imagem3} alt="mulher branca com cabelos curtos sentada a uma mesa com uma lousa ao fundo "/>
        
                <h2 className="fw-normal">Heading</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a className="btn btn-secondary" href="#">View details »</a></p>
              </div>
            </div>
          </section>
          )}

 export default Carrossel