import Componente1 from "./componente1";
import Carrossel from "../../components/carrossel/carrossel";
import Tab from '../../components/tab/tabela'
import Planos from "../../components/planos/planos";

function HomePage () {
return (
<body className="bg-info">
    <Componente1 titulo="Vai prestar o Enem esse ano? Ainda dá tempo de se preparar!" paragrafo="Garanta já sua vaga na Turma de Junho do Cursinho Extensivo"/>
    <Carrossel/>
    <Planos/>
    <Tab/>
</body>
    );
    };

export default HomePage;