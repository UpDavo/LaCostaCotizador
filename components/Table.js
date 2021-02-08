import Row from "./Row";
import { useEffect, useState } from "react";

const Table = ({ meses, cuota, mesInicial, anoInicial, functionReturn }) => {
  let count = 0;
  let enviar = [];
  let handleChanges = true;
  //Use effect funciones
  const [dataEnviar, setDataEnviar] = useState(enviar);

  //Modificación de reload de tabla

  Array.from({ length: meses }).map((_, index) => {
    let mesTemp;

    if (mesInicial.getMonth() + count >= 12) {
      count = 0;
      mesTemp = count;
      anoInicial += 1;
    } else {
      mesTemp = mesInicial.getMonth() + count;
      count++;
    }

    let valor = index + 1;

    enviar.push({ valor, mesTemp, anoInicial, cuota });
  });

  //Funcion para actualizar los rows
  const updateRows = (cuota, valorNuevo) => {
    enviar[cuota - 1] = valorNuevo;
    handleChanges = !handleChanges;
  };

  //Se ejecuta luego de las funciones

  useEffect(() => {
    setDataEnviar(enviar);
    console.log(dataEnviar);
    functionReturn(dataEnviar);
  }, [meses, cuota, mesInicial, anoInicial, handleChanges]);

  return (
    <div className="card rounded-lg text-dark formulario scroll">
      <div className="card-header py-4" style={{ color: "#b58648" }}>
        TABLA DE PAGOS
      </div>
      <table className="table table-hover">
        <thead align="center">
          <tr>
            <th scope="col">Cuota</th>
            <th scope="col">Mes</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody align="center">
          {enviar.map((row) => {
            return (
              <Row
                cuota={row.valor}
                mes={row.mesTemp}
                ano={row.anoInicial}
                pago={row.cuota}
                updateRows={updateRows}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
