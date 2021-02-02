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
                        <td>
                          {this.props.dataCliente.ciudadela == "azul"
                            ? "COSTA AZUL"
                            : "COSTA VERDE"}
                          <br />
                          {"Manzana " + this.props.dataCliente.manzana}
                          <br />
                          {this.props.dataCliente.solar}
                          <br />
                          {"Área del Solar: " +
                            this.props.dataCliente.areaSolar}
                        </td>
                        <td>
                          {"Modelo de Fachada: " +
                            this.props.dataCliente.modeloReal}
                          <br />
                          {"Área de Construcción: " +
                            this.props.dataCliente.areaConstruccion}
                          <br />
                          {"Tipo de Fachada: " + this.props.dataCliente.fachada}
                          <br />
                          {"Tiene Cubierta: " + this.props.dataCliente.cubierta}
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
                        <td>
                          <img
                            src="./images/fachadas/CASA-A/CASA-A-01.jpg"
                            width="100%"
                          />
                        </td>
                        <td>
                          <img src="./images/planos/CASA-A.jpg" width="100%" />
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
                    <td>{row.cuota}</td>
                  </tr>
                );
              })}

              <tr className="total" align="center">
                <td />
                <td />
                <td>Total: $385.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Print;
