import Row from "./Row";

const Table = () => {
  return (
    <div className="card rounded-lg text-dark formulario">
      <div className="card-header py-4" style={{ color: "#b58648" }}>
        Datos de la persona que realiza la cotización
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Cuota</th>
            <th scope="col">Mes</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
