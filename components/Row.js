import { useEffect, useState } from "react";

//Meses del año
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

const Row = ({ cuota, mes, pago, ano, updateRows }) => {
  //Funcion para activar la actualizacion del row
  const activarActualizacion = (event) => {
    event.preventDefault();
    console.log("presionaste el boton");
    document.querySelector(`#pago${cuota}`).disabled = false;
    document.querySelector(`#save${cuota}`).disabled = false;
    document.querySelector(`#edit${cuota}`).disabled = true;
  };

  //funtion para tomar el cambio de input
  const [dinero, setDinero] = useState(pago);

  //Funcion para actualizar la tabla
  const updateTable = (event) => {
    event.preventDefault();

    //test de si es texto o no
    const re = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (re.test(dinero)) {
      updateRows(cuota, dinero);

      document.querySelector(`#pago${cuota}`).disabled = true;
      document.querySelector(`#save${cuota}`).disabled = true;
      document.querySelector(`#edit${cuota}`).disabled = false;
    } else {
      alert("Debes ingresar números");
    }
  };

  //Estado luego de que el componente cargue
  useEffect(() => {
    document.querySelector(`#pago${cuota}`).disabled = true;
    document.querySelector(`#save${cuota}`).disabled = true;
    setDinero(pago);
  }, [pago]);

  //Inicio de funcionalidad Jsx
  return (
    <tr>
      <th scope="row">{cuota}</th>
      <td>{month[mes] + " " + ano}</td>
      <td style={{ width: "60%" }}>
        <div className="form-row">
          <div className="form-group col-6">
            <fieldset id={"pago" + cuota} style={{ marginLeft: "30%" }}>
              <input
                type="text"
                className="form-control"
                value={dinero}
                onChange={(event) => setDinero(event.target.value)}
              />
            </fieldset>
          </div>
          <div className="form-group col-6">
            <div className="row">
              <div className="col-6">
                <button
                  className="btn btn-dark mb-2"
                  onClick={activarActualizacion}
                  id={"edit" + cuota}
                  style={{ marginLeft: "26%" }}
                >
                  <img src="/images/pencil.png" width="20px"></img>
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-dark mb-2"
                  onClick={updateTable}
                  id={"save" + cuota}
                  style={{ marginLeft: "-80%" }}
                >
                  <img src="/images/save.png" width="20px"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Row;
