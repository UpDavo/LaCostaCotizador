import Row from "./Row";
import { useEffect, useState } from "react";

const Table = ({
  meses,
  cuota,
  mesInicial,
  anoInicial,
  functionReturn,
  total,
}) => {
  let count = 0;
  let enviar = [];
  let handleChanges = true;

  //Modificación de reload de tabla
  const actualizarTabla = () => {
    enviar = [];
    let mesMultiplicar = meses;
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
      let total = cuota * mesMultiplicar;
      enviar.push({ valor, mesTemp, anoInicial, cuota, total });
      mesMultiplicar -= 1;
    });
  };

  actualizarTabla();
  //UseState funciones
  const [dataEnviar, setDataEnviar] = useState(enviar);

  //Funcion para actualizar los rows
  const updateRows = (cuota, valorNuevo) => {
    let copiaArray = [];
    let itemNuevo;
    let mesRestado = meses;

    enviar.map((item, index) => {
      if (index == cuota - 1) {
        itemNuevo = {
          anoInicial: item.anoInicial,
          cuota: parseInt(valorNuevo),
          mesTemp: item.mesTemp,
          valor: item.valor,
          disminuye: item.cuota * mesRestado,
        };
        copiaArray.push(itemNuevo);
      } else {
        itemNuevo = {
          anoInicial: item.anoInicial,
          cuota: item.cuota,
          mesTemp: item.mesTemp,
          valor: item.valor,
          disminuye: item.cuota * mesRestado,
        };
        copiaArray.push(itemNuevo);
      }
      mesRestado -= 1;
    });
    setDataEnviar(copiaArray);
    handleChanges = !handleChanges;
  };

  //Se ejecuta luego de las funciones

  useEffect(() => {
    // actualizarTabla();
    setDataEnviar(enviar);
    functionReturn(dataEnviar);
    console.log(dataEnviar);
  }, [meses, cuota, mesInicial, anoInicial, handleChanges, total]);

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
