import Row from "./Row";
import { useEffect, useState } from "react";

var enviar = [];
var contadorRowsEditados = false;

const Table = ({
  meses,
  cuota,
  mesInicial,
  anoInicial,
  setDataImprimirFinanciamiento,
  inicializarImpresionFinanciamiento,
}) => {
  //UseState funciones
  const [dataEnviar, setDataEnviar] = useState(enviar);
  const [handleChanges, setHandleChanges] = useState(true);

  var count = 0;

  //Modificación de reload de tabla
  const actualizarTabla = () => {
    enviar = [];
    let mesMultiplicar = meses - 1;
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
      enviar.push({ valor, mesTemp, anoInicial, cuota, total, editado: false });
      mesMultiplicar -= 1;
    });
  };

  const limitarEdicion = () => {
    if (!contadorRowsEditados) {
      contadorRowsEditados = true;
    }
  };

  //Funcion para actualizar los rows
  const updateRows = (index, valorNuevo) => {
    let valorInicial = cuota;
    let total = obtenerTotal();
    let operacionesPorValor = total - valorNuevo;
    console.log(
      "Valor Nuevo: " +
        valorNuevo +
        " A: " +
        operacionesPorValor +
        " Meses: " +
        (meses - 1)
    );

    enviar.map((item) => {
      if (item.valor == index) {
        item.cuota = parseFloat(valorNuevo);
        item.editado = true;
      } else {
        if (valorNuevo > valorInicial) {
          if (!item.editado) {
            item.cuota = operacionesPorValor / (meses - 1);
          }
        } else {
          if (!item.editado) {
            item.cuota = operacionesPorValor / (meses - 1);
          }
        }
      }
    });

    console.log("Arreglo Actualizado");
    console.log(enviar);
    setHandleChanges(!handleChanges);
  };

  const obtenerTotal = () => {
    let total = 0;
    enviar.map((item) => {
      total += item.cuota;
    });
    return total;
  };

  //Se ejecuta luego de las funciones
  useEffect(() => {
    setDataEnviar(enviar);
    setDataImprimirFinanciamiento(dataEnviar);
    console.log("Rows Actualizados");
    console.log(dataEnviar);
    console.log("total: " + obtenerTotal());
  }, [handleChanges]);

  useEffect(() => {
    actualizarTabla();
    setDataEnviar(enviar);
    console.log("Rows reiniciados");
    console.log(dataEnviar);
    console.log("total: " + obtenerTotal());
    inicializarImpresionFinanciamiento(dataEnviar);
  }, [meses, cuota, mesInicial, anoInicial]);

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
                pago={row.cuota.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})}
                updateRows={updateRows}
                limitarEdicion={limitarEdicion}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
