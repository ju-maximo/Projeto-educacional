import imagem1 from '../../img/experts.png'
import imagem2 from '../../img/cursos.png'
import imagem3 from '../../img/amigos.png'
import "./carrosel.css"
import Item from './item/item'

function Carrossel() {
    return(
          <section className="container-sm container-carrossel" >
            <div className="row centralizar">
            <Item image={imagem1} alt="Grupo de 3 pessoas, uma mulher branca, uma mulher e um homem negros, na frente de um quadro negro com fórmulas matemáticas" title="Nossos Experts" texto="texto aleatório 1"/>

            <Item image={imagem2} alt="Mesa com alguns objetos de estudo em cima, um notebook, alguns livros, uma xícara de café, um tablet, um óculos e um caderno onde uma pessoa escreve algo" title="Nossos Cursos" texto="texto aleatório 2"/>

            <Item image={imagem3} alt="grupo de amigos em círculo, abraçados e sorrindo, todos olhando para baixo no centro onde a câmera está posicionada" title="Comunidades" texto="texto aleatório 3"/>
            </div>
          </section>
          )}

export default Carrossel