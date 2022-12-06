import imagem4 from '../../img/cruz.png'


function Tab(props) {
    return(


  <>
  <h2 className="display-6 text-center mb-4">Compare os planos</h2>
  
  <div className="table-responsive">
    <table className="table text-center">
      <thead>
        <tr>
          {/* <th style="width: 34%;"></th> */}
          {/* <th style="width: 22%;">Free</th>
          <th style="width: 22%;">Pro</th>
          <th style="width: 22%;">Enterprise</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="text-start">Public</th>
          <td><img src={imagem4} alt=""/></td>
        {/*<td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        {/*<td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        </tr>
        <tr>
          <th scope="row" className="text-start">Private</th>
          <td></td>
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th scope="row" className="text-start">Permissions</th>
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        </tr>
        <tr>
          <th scope="row" className="text-start">Sharing</th>
          <td></td>
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        </tr>
        <tr>
          <th scope="row" className="text-start">Unlimited members</th>
          <td></td>
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        </tr>
        <tr>
          <th scope="row" className="text-start">Extra security</th>
          <td></td>
          <td></td>
          {/* <td><svg className="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td> */}
        </tr>
      </tbody>
    </table>
  </div>

  </>
    
    )}

export default Tab 