import React from "react";

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

export class Print extends React.PureComponent {
  render() {
    return (
      <div className="print-source">
        <div className="invoice-box">
          <table cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr className="top">
                <td colSpan={3}>
                  <table>
                    <tbody>
                      <tr>
                        <td className="title">
                          <img
                            src="https://lacostasamborondon.com/wp-content/uploads/2020/09/lacosta-logo.png"
                            style={{ width: "100%", maxWidth: 300 }}
                          />
                        </td>
                        <td>
                          {this.props.dataCliente.nombre +
                            " " +
                            this.props.dataCliente.apellido}
                          <br />
                          {this.props.dataCliente.correo}
                          <br />
                          {this.props.dataCliente.celular}
                          <br />
                          {/* {new Date()} */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="information">
                <td colSpan={3}>
                  <table>
                    <tbody>
                      <tr>
                        <td
                          style={{ textAlign: "left", marginTop: "20px" }}
                          width="10%"
                        >
                          {this.props.dataCliente.ciudadela == "azul" ? (
                            <h1>COSTA AZUL</h1>
                          ) : (
                            <h1>COSTA VERDE</h1>
                          )}
                          <br />
                          <b>Manzana {this.props.dataCliente.manzana}</b>
                          <br />
                          <b>{this.props.dataCliente.solar}</b>
                          <br />
                          <b>Area del Solar: </b>
                          {this.props.dataCliente.areaSolar}
                          <br />
                          <b>Modelo de Fachada: </b>
                          {this.props.dataCliente.modeloReal}
                          <br />
                          <b>Área de Construcción: </b>
                          {this.props.dataCliente.areaConstruccion}
                          <br />
                          <b>Tipo de Fachada: </b>
                          {this.props.dataCliente.fachada}
                          <br />
                          <b>Tiene Cubierta: </b>
                          {this.props.dataCliente.cubierta}
                        </td>
                        <td width="30%" style={{ textAlign: "left" }}>
                          <img
                            src={`./images/fachadas/CASA-${this.props.dataCliente.modelo}/CASA-${this.props.dataCliente.modelo}-01.jpg`}
                            width="35%"
                          />
                        </td>
                        <td width="10%" style={{ textAlign: "right" }}>
                          <b>Precio de Lista: </b>
                          {this.props.dataGeneralFinanciamiento.precioLista.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Descuento: </b>
                          {this.props.dataGeneralFinanciamiento.descuento.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Precio de Final: </b>
                          {this.props.dataGeneralFinanciamiento.precioFinal.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Entrada: </b>
                          {this.props.dataGeneralFinanciamiento.entrada.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Pago a la Firma: </b>
                          {this.props.dataGeneralFinanciamiento.firma.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Cantidad a Pagar: </b>
                          {this.props.dataGeneralFinanciamiento.pagar.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Cuotas de: </b>
                          {this.props.dataGeneralFinanciamiento.cuotas.toLocaleString(
                            "en"
                          )}
                          <br />
                          <b>Fecha de Inicio de Financiamiento: </b>
                          {/* {this.props.dataGeneralFinanciamiento.descuento} */}
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="information">
                <td colSpan={3}>
                  <table style={{ marginBottom: "-30px", marginTop: "-30px" }}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            textAlign: "left",
                            marginTop: "20px",
                          }}
                          width="10%"
                        >
                          <h1>Información de Financiamiento</h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="heading" align="center">
                <td style={{ width: "12%" }}>Cuota</td>
                <td style={{ width: "25%", textAlign: "center" }}>Mes</td>
                <td style={{ width: "25%" }}>Valor</td>
              </tr>
              {this.props.dataFinanciamiento.map((row) => {
                return (
                  <tr className="item" align="center">
                    <td>{row.valor}</td>
                    <td style={{ textAlign: "center" }}>
                      {month[row.mesTemp] + " " + row.anoInicial}
                    </td>
                    <td>{row.cuota.toLocaleString("en")}</td>
                  </tr>
                );
              })}
              <tr className="total" align="center">
                <td />
                <td />
                <td>
                  Total:{" "}
                  {this.props.dataGeneralFinanciamiento.pagar.toLocaleString(
                    "en"
                  )}
                </td>
              </tr>
              <tr className="information">
                <td colSpan={3}>
                  <table style={{ marginBottom: "-40px", marginTop: "180px" }}>
                    <tbody>
                      <tr>
                        <td></td>
                        <td
                          style={{
                            textAlign: "center",
                          }}
                          width="30%"
                        >
                          <h1>Plano de la Vivienda</h1>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="information">
                <td colSpan={3}>
                  <table style={{ marginTop: "100px" }}>
                    <tbody align="center">
                      <tr>
                        <td>
                          <img
                            src={`./images/planos/CASA-${this.props.dataCliente.modeloReal}.jpg`}
                            width="90%"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Print;
