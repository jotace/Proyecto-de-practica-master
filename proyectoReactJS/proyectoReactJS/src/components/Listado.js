import './Listado.css';

function Listado(props) {
  return (
    <div className="Listado">
        <h3>Listado de Elementos</h3>
        <table cellpadding="5" border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Propiedad 1</th>
                    <th>Propiedad 2</th>
                    <th>Propiedad 3</th>
                </tr>
            </thead>
            <tbody>
                {props.objetos.map(objeto => (
                    <tr key={objeto.id}>
                        <td>{objeto.id}</td>
                        <td>{objeto.propiedad1}</td>
                        <td>{objeto.propiedad2}</td>
                        <td>{objeto.propiedad3}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Listado;