import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
/*
Precio de lista
Descuento
Precio Final

Cuota de entrada 30%
Pago contra entrega 70%

Pago a la firma 4%

Fecha de inicio de financiamiento
Meses de financiamiento
Valor a pagar
Cuotas de

*/
var valorFinal = 0;

const Financiamiento = ({ dataCliente, base }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [precioLista, setPrecioLista] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);

  const actualizarPrecio = (casa, cliente) => {
    if (
      casa.MANZANA == parseInt(cliente.manzana) &&
      casa.LOTE == cliente.solar
    ) {
      console.log(cliente);
      if (cliente.fachada == "estandar") {
        if (cliente.cubierta == "si") {
          valorFinal = casa[cliente.modelo] + 7000;
        } else {
          valorFinal = casa[cliente.modelo];
        }
      } else {
        if (cliente.fachada == "top") {
          if (cliente.cubierta == "si") {
            valorFinal = casa[cliente.modelo] + 17000;
          } else {
            valorFinal = casa[cliente.modelo] + 10000;
          }
        }
      }
    }
  };

  const aplicarDescuento = (event) => {
    event.preventDefault();
    setDescuento(parseInt(document.querySelector("#descuento").value));
    setPrecioFinal(precioLista - descuento);
    console.log(precioFinal);
  };

  useEffect(() => {
    base.map((row) => {
      actualizarPrecio(row, dataCliente);
    });
    setPrecioLista(valorFinal);
    setPrecioFinal(precioLista - descuento);
    console.log(precioLista);
  });

  return (
    <div className="card rounded-lg text-dark formulario">
      <div className="card-header py-4" style={{ color: "#b58648" }}>
        INFORMACIÓN DE FINANCIAMIENTO
      </div>
      <div className="card-body">
        <form id="formulario2">
          <div className="form-row">
            <div className="form-group col-md-4">
              <fieldset disabled>
                <label className="small text-gray-600" htmlFor="precioLista">
                  Precio de Lista
                </label>
                <input
                  className="form-control"
                  id="correo"
                  type="precioLista"
                  placeholder={precioLista}
                  value={precioLista}
                />
              </fieldset>
            </div>
            <div className="form-group col-md-4">
              <label className="small text-gray-600" htmlFor="descuento">
                Descuento
              </label>
              <input
                className="form-control"
                id="descuento"
                type="text"
              />
            </div>
            <div className="form-group col-md-4">
              <button
                className="btn btn-secondary dorado btn-block font-weight-200 mt-4"
                id="descuentoBtn"
                onClick={aplicarDescuento}
              >
                Actualizar
              </button>
            </div>
          </div>
          <div className="form-group">
            <fieldset disabled>
              <label className="small text-gray-600" htmlFor="precioFinal">
                Precio Final
              </label>
              <input
                className="form-control"
                id="precioFinal"
                type="text"
                placeholder={precioFinal}
                value={precioFinal}
              />
            </fieldset>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <fieldset disabled>
                <label className="small text-gray-600" htmlFor="cuotaEntrada">
                  Cuota de Entrada 30%
                </label>
                <input className="form-control" id="precioFinal" type="text" />
              </fieldset>
            </div>
            <div className="form-group col-md-6">
              <fieldset disabled>
                <label
                  className="small text-gray-600"
                  htmlFor="pagoContraEntrega"
                >
                  Pago contra Entrega 70%
                </label>
                <input className="form-control" id="precioFinal" type="text" />
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <fieldset disabled>
              <label className="small text-gray-600" htmlFor="pagoFirma">
                Pago a la Firma 4%
              </label>
              <input className="form-control" id="precioFinal" type="text" />
            </fieldset>
          </div>
          <div className="pt-2 pb-2">
            <hr color="darkGray" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="small text-gray-600" htmlFor="pagoFirma">
                Fecha de inicio de Financiamiento
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="form-group col-md-6">
              <fieldset disabled>
                <label className="small text-gray-600" htmlFor="pagoFirma">
                  Financiamiento (meses)
                </label>
                <input className="form-control" id="precioFinal" type="text" />
              </fieldset>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <fieldset disabled>
                <label className="small text-gray-600" htmlFor="pagoFirma">
                  Valor a Pagar
                </label>
                <input className="form-control" id="precioFinal" type="text" />
              </fieldset>
            </div>

            <div className="form-group col-md-6">
              <fieldset disabled>
                <label className="small text-gray-600" htmlFor="pagoFirma">
                  Cuotas de
                </label>
                <input
                  className="form-control"
                  id="precioFinal"
                  type="text"
                  placeholder="A"
                  readonly
                />
              </fieldset>
            </div>
          </div>

          <button
            className="btn btn-secondary dorado btn-block font-weight-500 mt-4"
            type="submit"
          >
            Generar la tabla de pagos
          </button>
        </form>
      </div>
    </div>
  );
};

export default Financiamiento;
