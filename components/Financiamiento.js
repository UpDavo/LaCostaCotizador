import DatePicker from "react-datepicker";
import React, { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Table from "./Table";
import Print from "./Print";
import ReactToPrint from "react-to-print";

var valorFinal = 0;
var arregloImprimir = [];

const Financiamiento = ({ dataCliente, base }) => {
  var fecha = new Date();
  fecha.setMonth(fecha.getMonth() + 1);
  const [startDate, setStartDate] = useState(fecha);
  const [precioLista, setPrecioLista] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(precioLista - descuento);
  const [financiamiento, setFinanciamiento] = useState(
    dataCliente.ciudadela == "verde" ? 32 : 24
  );

  const [porcentajes, setPorcentajes] = useState({
    treinta: precioFinal * 0.3,
    setenta: precioFinal * 0.7,
    cuatro: precioFinal * 0.04,
    financiar: precioFinal * 0.26,
    pagar: precioFinal * 0.3 - precioFinal * 0.04,
    cuotas:
      (precioFinal * 0.3 - precioFinal * 0.04) /
      (dataCliente.ciudadela == "verde" ? 32 : 24),
  });

  const [creditoHipotecario, setCreditoHipotecario] = useState({
    diez: PMT(0.095 / 12, 10 * 12, precioFinal * 0.7),
    quince: PMT(0.095 / 12, 15 * 12, precioFinal * 0.7),
    veinte: PMT(0.095 / 12, 20 * 12, precioFinal * 0.7),
  });

  /*Funcionalidad Pre Render */
  //Actualiza el precio dependiendo de la casa
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

  //Funcionalidad para aplicar el descuento
  const aplicarDescuento = (event) => {
    event.preventDefault();
    const re = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    const tomarDescuento = parseInt(document.querySelector("#descuento").value);
    if (re.test(tomarDescuento)) {
      setDescuento(tomarDescuento);
      setPrecioFinal(precioLista - descuento);
    } else {
      alert("Debes ingresar números");
    }
  };

  //Recorre la base de datos con toda la informacion
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
      cuotas:
        (precioFinal * 0.3 - precioFinal * 0.04) /
        (dataCliente.ciudadela == "verde" ? 32 : 24),
      financiar: precioFinal * 0.26,
    });
    setFinanciamiento(dataCliente.ciudadela == "verde" ? 32 : 24);
    setCreditoHipotecario({
      diez: PMT(0.095 / 12, 10 * 12, -(precioFinal * 0.7)),
      quince: PMT(0.095 / 12, 15 * 12, -(precioFinal * 0.7)),
      veinte: PMT(0.095 / 12, 20 * 12, -(precioFinal * 0.7)),
    });
  }, [precioFinal, dataCliente, precioLista, descuento]);

  /*-------------------------------Imprimir-------------------------------- */

  const [dataImprimirFinanciamiento, setDataImprimirFinanciamiento] = useState(
    arregloImprimir
  );
  const [handleChanges, setHandleChanges] = useState(false);

  //Referencia para el boton de imprimir
  const componentRef = useRef();

  //Arreglo creado para la impresion del financiamiento
  let arregloImpresionFinanciamiento = {
    precioLista: precioLista,
    descuento: descuento,
    precioFinal: precioFinal,
    entrada: porcentajes.treinta,
    entrega: porcentajes.setenta,
    firma: porcentajes.cuatro,
    pagar: porcentajes.pagar,
    cuotas: porcentajes.cuotas,
    financiar: porcentajes.financiar,
  };

  const datosDeFinanciamiento = (financiamiento) => {
    arregloImprimir = [];
    arregloImprimir = financiamiento;
    console.log("Este es el financiamiento");
    console.log(arregloImprimir);
    setHandleChanges(!handleChanges);
  };

  const inicializarImpresionFinanciamiento = (dataInicial) => {
    arregloImprimir = [];
    arregloImprimir = dataInicial;
    setDataImprimirFinanciamiento(arregloImprimir);
  };

  useEffect(() => {
    //Esto organiza los datos de los valores superiores de la tabla
    arregloImpresionFinanciamiento = {
      precioLista: precioLista,
      descuento: descuento,
      precioFinal: precioFinal,
      entrada: porcentajes.treinta,
      entrega: porcentajes.setenta,
      firma: porcentajes.cuatro,
      pagar: porcentajes.pagar,
      cuotas: porcentajes.cuotas,
      financiar: porcentajes.financiar,
    };

    setDataImprimirFinanciamiento(arregloImprimir);
  }, [handleChanges]);

  /*-------------------------------Imprimir-------------------------------- */

  return (
    <div className="row align-items-center mt-5">
      <div className="col-lg-7">
        <Table
          meses={financiamiento}
          cuota={porcentajes.cuotas}
          mesInicial={startDate}
          anoInicial={2021}
          setDataImprimirFinanciamiento={datosDeFinanciamiento}
          inicializarImpresionFinanciamiento={
            inicializarImpresionFinanciamiento
          }
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
                  <input
                    className="form-control"
                    pattern="[0-9]*"
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
                      Cuota de Entrada 30 %
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
                      Pago contra Entrega 70 %
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
              <div className="form-row">
                <div className="form-group col-md-6">
                  <fieldset disabled>
                    <label className="small text-gray-600" htmlFor="pagoFirma">
                      Pago a la Firma 4 %
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
                <div className="form-group col-md-6">
                  <fieldset disabled>
                    <label className="small text-gray-600" htmlFor="pagoFirma">
                      Saldo a Financiar 26 %
                    </label>
                    <input
                      className="form-control"
                      id="saldoFinanciar"
                      type="text"
                      value={porcentajes.financiar.toLocaleString("en")}
                      readOnly
                    />
                  </fieldset>
                </div>
              </div>

              <div className="pt-2 pb-2">
                <hr color="darkGray" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="small text-gray-600" htmlFor="pagoFirma">
                    Inicio de Financiamiento
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
                      Financiamiento(meses)
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
              <div align="center" className="pt-2 pb-3">
                <hr color="darkGray" />
                <h2 className="pt-2">Credito hipotecario</h2>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <fieldset disabled>
                    <label className="small text-gray-600">10 Años</label>
                    <input
                      className="form-control"
                      id="10anos"
                      type="text"
                      value={creditoHipotecario.diez.toLocaleString("en")}
                      readOnly
                    />
                  </fieldset>
                </div>
                <div className="form-group col-md-4">
                  <fieldset disabled>
                    <label className="small text-gray-600">15 Años</label>
                    <input
                      className="form-control"
                      id="15anos"
                      type="text"
                      value={creditoHipotecario.quince.toLocaleString("en")}
                      readonly
                    />
                  </fieldset>
                </div>
                <div className="form-group col-md-4">
                  <fieldset disabled>
                    <label className="small text-gray-600">20 Años</label>
                    <input
                      className="form-control"
                      id="20anos"
                      type="text"
                      value={creditoHipotecario.veinte.toLocaleString("en")}
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
              creditoHipotecario={creditoHipotecario}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function PMT(ir, np, pv, fv, type) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;

  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return pmt;
}

export default Financiamiento;
