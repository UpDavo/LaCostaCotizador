import Row from "./Row";
import { useEffect, useState } from "react";

const Table = ({ meses, cuota, mesInicial, anoInicial, functionReturn }) => {
  let count = 0;
  let enviar = [];
  let handleChanges = true;

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

  //UseState funciones
  const [dataEnviar, setDataEnviar] = useState(enviar);

  //Funcion para actualizar los rows
  const updateRows = (cuota, valorNuevo) => {
    let copiaArray = [];
    let itemNuevo;

    enviar.map((item, index) => {
      if (index == cuota - 1) {
        itemNuevo = {
          anoInicial: item.anoInicial,
          cuota: parseInt(valorNuevo),
          mesTemp: item.mesTemp,
          valor: item.valor,
        };
        copiaArray.push(itemNuevo);
      } else {
        copiaArray.push(item);
      }
    });

    console.log(copiaArray);

    setDataEnviar(copiaArray);
    handleChanges = !handleChanges;
  };

  //Se ejecuta luego de las funciones

  useEffect(() => {
    setDataEnviar(enviar);
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
          {dataEnviar.map((row) => {
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
