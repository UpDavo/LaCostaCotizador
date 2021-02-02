const Row = ({ cuota, mes, pago, ano }) => {
  const activarActualizacion = (event) => {
    event.preventDefault();
    console.log("presionaste el boton");
  };

  var month = new Array();
  month[0] = "Enero";
  month[1] = "Febrero";
  month[2] = "Marzo";
  month[3] = "Abril";
  month[4] = "Mayo";
  month[5] = "Junio";
  month[6] = "Julio";
  month[7] = "Agosto";
  month[8] = "Septiembre";
  month[9] = "Octubre";
  month[10] = "Noviembre";
  month[11] = "Diciembre";

  return (
    <tr>
      <th scope="row">{cuota}</th>
      <td>{month[mes] + " " + ano}</td>
      <td style={{ width: "60%" }}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <fieldset disabled>
              <input
                type="text"
                className="form-control"
                id={"pago" + cuota}
                placeholder={pago.toLocaleString("en")}
                value={pago}
              />
            </fieldset>
          </div>
          <div className="form-group col-md-6">
            <button
              className="btn btn-dark mb-2"
              onClick={activarActualizacion}
            >
              Cambiar Valor
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Row;
