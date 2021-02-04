import DatePicker from "react-datepicker";
import React, { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Table from "./Table";
import Print from "./Print";
import ReactToPrint from "react-to-print";

var valorFinal = 0;

const Financiamiento = ({ dataCliente, base }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [precioLista, setPrecioLista] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(precioLista - descuento);
  const [financiamiento, setFinanciamiento] = useState(
    dataCliente.ciudadela == "verde" ? 24 : 32
  );
  const [porcentajes, setPorcentajes] = useState({
    treinta: precioFinal * 0.3,
    setenta: precioFinal * 0.7,
    cuatro: precioFinal * 0.04,
    pagar: precioFinal * 0.3 - precioFinal * 0.04,
    cuotas: (precioFinal * 0.3 - precioFinal * 0.04) / financiamiento,
  });

  const componentRef = useRef();

  let arregloImpresionFinanciamiento = {
    precioLista: precioLista,
    descuento: descuento,
    precioFinal: precioFinal,
    entrada: porcentajes.treinta,
    entrega: porcentajes.setenta,
    firma: porcentajes.cuatro,
    pagar: porcentajes.pagar,
    cuotas: porcentajes.cuotas,
  };

  /*Funcionalidad Pre Render */

  const actualizarPrecio = (casa, cliente) => {
    if (
      casa.MANZANA == parseInt(cliente.manzana) &&
      casa.LOTE == cliente.solar
    ) {
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
  };

  base.map((row) => {
    actualizarPrecio(row, dataCliente);
  });

  /* Funcionalidad Post Render*/
  useEffect(() => {
    setPrecioLista(valorFinal);
    setPrecioFinal(precioLista - descuento);
    setPorcentajes({
      treinta: precioFinal * 0.3,
      setenta: precioFinal * 0.7,
      cuatro: precioFinal * 0.04,
      pagar: precioFinal * 0.3 - precioFinal * 0.04,
      cuotas: (precioFinal * 0.3 - precioFinal * 0.04) / financiamiento,
    });
    setFinanciamiento(dataCliente.ciudadela == "verde" ? 24 : 32);
  }, [precioFinal, dataCliente, precioLista, descuento]);

  const [dataImprimirFinanciamiento, setDataImprimirFinanciamiento] = useState(
    []
  );

  const imprimirFinanciamiento = (arregloCuotas) => {
    arregloImpresionFinanciamiento = {
      precioLista: precioLista,
      descuento: descuento,
      precioFinal: precioFinal,
      entrada: porcentajes.treinta,
      entrega: porcentajes.setenta,
      firma: porcentajes.cuatro,
      pagar: porcentajes.pagar,
      cuotas: porcentajes.cuotas,
    };
    setDataImprimirFinanciamiento(arregloCuotas);
    console.log(arregloCuotas);
  };

  return (
    <div className="row align-items-center mt-5">
      <div className="col-lg-7">
        <Table
          meses={financiamiento}
          cuota={porcentajes.cuotas}
          mesInicial={startDate}
          anoInicial={2021}
          functionReturn={imprimirFinanciamiento}
        />
      </div>
      <div className="col-lg-5">
        <div className="card rounded-lg text-dark formulario">
          <div className="card-header py-4" style={{ color: "#b58648" }}>
            INFORMACIÓN DE FINANCIAMIENTO
          </div>
          <div className="card-body">
            <form id="formulario2">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <fieldset disabled>
                    <label
                      className="small text-gray-600"
                      htmlFor="precioLista"
                    >
                      Precio de Lista
                    </label>
                    <input
                      className="form-control"
                      id="precioLista"
                      value={precioLista.toLocaleString("en")}
                    />
                  </fieldset>
                </div>
                <div className="form-group col-md-4">
                  <label className="small text-gray-600" htmlFor="descuento">
                    Descuento
                  </label>
                  <input className="form-control" id="descuento" type="text" />
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
                    value={precioFinal.toLocaleString("en")}
                    readOnly
                  />
                </fieldset>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <fieldset disabled>
                    <label
                      className="small text-gray-600"
                      htmlFor="cuotaEntrada"
                    >
                      Cuota de Entrada 30%
                    </label>
                    <input
                      className="form-control"
                      id="cuotaEntrada"
                      type="text"
                      value={porcentajes.treinta.toLocaleString("en")}
                      readOnly
                    />
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
                    <input
                      className="form-control"
                      id="contraEntrega"
                      type="text"
                      value={porcentajes.setenta.toLocaleString("en")}
                      readOnly
                    />
                  </fieldset>
                </div>
              </div>

              <div className="form-group">
                <fieldset disabled>
                  <label className="small text-gray-600" htmlFor="pagoFirma">
                    Pago a la Firma 4%
                  </label>
                  <input
                    className="form-control"
                    id="pagoFirma"
                    type="text"
                    value={porcentajes.cuatro.toLocaleString("en")}
                    readOnly
                  />
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
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <fieldset disabled>
                    <label className="small text-gray-600" htmlFor="pagoFirma">
                      Financiamiento (meses)
                    </label>
                    <input
                      className="form-control"
                      id="financiamiento"
                      type="text"
                      value={financiamiento}
                      readOnly
                    />
                  </fieldset>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <fieldset disabled>
                    <label className="small text-gray-600" htmlFor="pagoFirma">
                      Valor a Pagar
                    </label>
                    <input
                      className="form-control"
                      id="valorPagar"
                      type="text"
                      value={porcentajes.pagar.toLocaleString("en")}
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="form-group col-md-6">
                  <fieldset disabled>
                    <label className="small text-gray-600" htmlFor="pagoFirma">
                      Cuotas de
                    </label>
                    <input
                      className="form-control"
                      id="cuotasDe"
                      type="text"
                      value={porcentajes.cuotas.toLocaleString("en")}
                      readonly
                    />
                  </fieldset>
                </div>
              </div>
            </form>

            <ReactToPrint
              trigger={() => (
                <button
                  className="btn btn-secondary dorado btn-block font-weight-500"
                  style={{
                    marginTop: "3%",
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    fontSize: "20px",
                  }}
                >
                  Imprimir <br />
                  <img
                    src="/images/imprimir.png"
                    width="40px"
                    style={{ marginTop: "10px" }}
                  ></img>
                </button>
              )}
              content={() => componentRef.current}
              bodyClass="blanco"
            />

            <Print
              ref={componentRef}
              dataCliente={dataCliente}
              dataFinanciamiento={dataImprimirFinanciamiento}
              dataGeneralFinanciamiento={arregloImpresionFinanciamiento}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financiamiento;
