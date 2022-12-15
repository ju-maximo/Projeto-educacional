import imagem1 from '../../img/professores-300x200.jpg'
import imagem2 from '../../img/rm373batch15-bg-05.jpg'
import imagem3 from '../../img/naason.jpg'
import "./carrosel.css"
import Item from './item/item'

function Carrossel() {
    return(
          <section className="container-sm container-carrossel" >
            <div className="row centralizar">
            <Item image={imagem1} alt="Homem negro sentado a uma mesa ao fundo em uma parede formulas matematicas" title="Nossos Experts" texto="texto aleatório"/>

            <Item image={imagem2} alt="retrato de uma jovem professora afro americana de oculos olhando para a camera na sala de aula e segurando livros didaticos quadro negro com formulas no fundo conceito de escolaridade livros nas maos" title="Título 2" texto="texto aleatório 2"/>

            <Item image={imagem3} alt="mulher branca com cabelos curtos sentada a uma mesa com uma lousa ao fundo" title="Título 3" texto="texto aleatório 3"/>
            </div>
          </section>
          )}

export default Carrossel