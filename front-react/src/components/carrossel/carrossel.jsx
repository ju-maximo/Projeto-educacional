import imagem1 from '../../img/professores-exemplos.webp'
import imagem2 from '../../img/mesalivros.webp'
import imagem3 from '../../img/amigos5.png'
import "./carrosel.css"
import Item from './item/item'

function Carrossel() {
    return(
          <section className="container-sm container-carrossel" >
            <div className="row centralizar texto">
            <Item image={imagem1} alt="Grupo de 3 pessoas, uma mulher branca, uma mulher e um homem negros, na frente de um quadro negro com fórmulas matemáticas" title="Nossos Experts" texto="Conheça os experts que te ajudarão nos seus estudos!"/>

            <Item image={imagem2} alt="Mesa com alguns objetos de estudo em cima, um notebook, alguns livros, uma xícara de café, um tablet, um óculos e um caderno onde uma pessoa escreve algo" title="Nossos Cursos" texto="Confira todos os cursos da nossa plataforma!"/>

            <Item image={imagem3} alt="grupo de amigos em círculo, abraçados e sorrindo, todos olhando para baixo no centro onde a câmera está posicionada" title="Comunidades" texto="Encontre outros estudantes e compartilhem experiências!"/>
            </div>
          </section>
          )}

export default Carrossel