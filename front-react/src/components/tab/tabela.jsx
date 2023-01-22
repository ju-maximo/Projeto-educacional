import imagem4 from '../../img/check.png'
import "./tabela.css"

function Tab(props) {
    return(
  <div className='planos-b'>
  <div className="container-sm">
  <h2 className="display-6 text-center mb-4">Compare os planos</h2>
  
  <div className="table-responsive">
    <table className="table text-center planos-b">
      <thead>
        <tr>
          <th className="width"></th>
          <th className="width">Free</th>
          <th className="width">Pro</th>
          <th className="width">Master</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="text-start">Aulas Gravadas</th>
          <td><img src={imagem4} alt="" className="xheight"/></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
        </tr>
        <tr>
          <th scope="row" className="text-start">Fórum</th>
          <td><img src={imagem4} alt="" className="xheight"/></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th scope="row" className="text-start">Aulas Online</th>
          <td></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
        </tr>
        <tr>
          <th scope="row" className="text-start">Plantão de dúvidas</th>
          <td></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
        </tr>
        <tr>
          <th scope="row" className="text-start">Simulados</th>
          <td></td>
          <td></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
        </tr>
        <tr>
          <th scope="row" className="text-start">Redação</th>
          <td></td>
          <td></td>
          <td><img src={imagem4} alt="" className="xheight"/></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </div>
    
    )}

export default Tab 