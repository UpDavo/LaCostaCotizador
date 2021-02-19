import React from "react";
import DataPlanos from "../DataPlanos";

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
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    Object.keys(DataPlanos).map((index) => {
      if (index == this.props.dataCliente.modeloReal) {
        this.modeloInfo = DataPlanos[index];
      }
    });

    console.log(this.props.dataFinanciamiento);
  }

  imprimirCasa() {
    if (this.props.dataCliente.fachada == "top") {
      if (this.props.dataCliente.cubierta == "si") {
        return `images/fachadas/CASA-${this.props.dataCliente.modelo}/CASA-${this.props.dataCliente.modelo}-01TOPCUBIERTA.jpg`;
      } else {
        return `images/fachadas/CASA-${this.props.dataCliente.modelo}/CASA-${this.props.dataCliente.modelo}-01TOP.jpg`;
      }
    } else {
      if (this.props.dataCliente.cubierta == "si") {
        return `images/fachadas/CASA-${this.props.dataCliente.modelo}/CASA-${this.props.dataCliente.modelo}-01CUBIERTA.jpg`;
      } else {
        return `images/fachadas/CASA-${this.props.dataCliente.modelo}/CASA-${this.props.dataCliente.modelo}-01.jpg`;
      }
    }
  }

  obtenerTotal() {
    let total = 0;
    this.props.dataFinanciamiento.map((item) => {
      total += item.cuota;
    });
    return total.toLocaleString("en");
  }

  render() {
    return (
      <div className="print-source">
        <div
          style={{
            width: "100%",
            fontFamily:
              'helvetica, "helvetica neue", arial, verdana, sans-serif',
            WebkitTextSizeAdjust: "100%",
            msTextSizeAdjust: "100%",
            padding: 0,
            margin: 0,
          }}
        >
          <div
            className="es-wrapper-color"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <table
              className="es-wrapper"
              style={{
                msoTableLspace: "0pt",
                msoTableRspace: "0pt",
                borderCollapse: "collapse",
                borderSpacing: 0,
                padding: 0,
                margin: 0,
                width: "100%",
                height: "100%",
                backgroundRepeat: "repeat",
                backgroundPosition: "center top",
              }}
              width="100%"
              cellSpacing={0}
              cellPadding={0}
            >
              <tbody>
                <tr style={{ borderCollapse: "collapse" }}>
                  <td valign="top" style={{ padding: 0, margin: 0 }}>
                    <table
                      className="es-header"
                      cellSpacing={0}
                      cellPadding={0}
                      align="center"
                      style={{
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        tableLayout: "fixed !important",
                        width: "100%",
                        backgroundColor: "transparent",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center top",
                      }}
                    >
                      <tbody>
                        <tr style={{ borderCollapse: "collapse" }}>
                          <td align="center" style={{ padding: 0, margin: 0 }}>
                            <table
                              className="es-header-body"
                              style={{
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                borderCollapse: "collapse",
                                borderSpacing: 0,
                                backgroundColor: "transparent",
                                width: "100%",
                              }}
                              cellSpacing={0}
                              cellPadding={0}
                              align="center"
                            >
                              <tbody>
                                <tr style={{ borderCollapse: "collapse" }}>
                                  <td
                                    align="left"
                                    style={{
                                      padding: 0,
                                      margin: 0,
                                      paddingTop: 20,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                    }}
                                  >
                                    {/*[if mso]><table style="width:860px" cellpadding="0" cellspacing="0"><tr><td style="width:420px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-left"
                                      align="left"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "left",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            className="es-m-p20b"
                                            align="left"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 420,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="left"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                      paddingBottom: 20,
                                                      fontSize: 0,
                                                    }}
                                                  >
                                                    <img
                                                      src="https://fodrao.stripocdn.email/content/guids/CABINET_87833819fc781f42211f150e17a54082/images/23441612889339916.png"
                                                      alt
                                                      style={{
                                                        display: "block",
                                                        border: 0,
                                                        outline: "none",
                                                        textDecoration: "none",
                                                        msInterpolationMode:
                                                          "bicubic",
                                                      }}
                                                      width={269}
                                                      height={72}
                                                    />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td><td style="width:20px"></td><td style="width:420px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-right"
                                      align="right"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "right",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            align="left"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 420,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={9}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="right"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <p
                                                      style={{
                                                        margin: 0,
                                                        WebkitTextSizeAdjust:
                                                          "none",
                                                        msTextSizeAdjust:
                                                          "none",
                                                        msoLineHeightRule:
                                                          "exactly",
                                                        fontSize: 14,
                                                        fontFamily:
                                                          'helvetica, "helvetica neue", arial, verdana, sans-serif',
                                                        lineHeight: 0,
                                                        color: "#666666",
                                                      }}
                                                    >
                                                      {this.props.dataCliente
                                                        .nombre +
                                                        " " +
                                                        this.props.dataCliente
                                                          .apellido}
                                                    </p>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="right"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <p
                                                      style={{
                                                        margin: 0,
                                                        WebkitTextSizeAdjust:
                                                          "none",
                                                        msTextSizeAdjust:
                                                          "none",
                                                        msoLineHeightRule:
                                                          "exactly",
                                                        fontSize: 14,
                                                        fontFamily:
                                                          'helvetica, "helvetica neue", arial, verdana, sans-serif',
                                                        lineHeight: 4,
                                                        color: "#666666",
                                                      }}
                                                    >
                                                      {
                                                        this.props.dataCliente
                                                          .correo
                                                      }
                                                    </p>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="right"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <p
                                                      style={{
                                                        margin: 0,
                                                        WebkitTextSizeAdjust:
                                                          "none",
                                                        msTextSizeAdjust:
                                                          "none",
                                                        msoLineHeightRule:
                                                          "exactly",
                                                        fontSize: 14,
                                                        fontFamily:
                                                          'helvetica, "helvetica neue", arial, verdana, sans-serif',
                                                        lineHeight: 0,
                                                        color: "#666666",
                                                      }}
                                                    >
                                                      {
                                                        this.props.dataCliente
                                                          .celular
                                                      }
                                                    </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td></tr></table><![endif]*/}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      className="es-content"
                      cellSpacing={0}
                      cellPadding={0}
                      align="center"
                      style={{
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        tableLayout: "fixed !important",
                        width: "100%",
                      }}
                    >
                      <tbody>
                        <tr style={{ borderCollapse: "collapse" }}>
                          <td align="center" style={{ padding: 0, margin: 0 }}>
                            <table
                              className="es-content-body"
                              style={{
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                borderCollapse: "collapse",
                                borderSpacing: 0,
                                backgroundColor: "transparent",
                                width: "100%",
                              }}
                              cellSpacing={0}
                              cellPadding={0}
                              align="center"
                            >
                              <tbody>
                                <tr style={{ borderCollapse: "collapse" }}>
                                  <td
                                    align="left"
                                    style={{
                                      padding: 0,
                                      margin: 0,
                                      paddingTop: 20,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                    }}
                                  >
                                    {/*[if mso]><table style="width:860px" cellpadding="0" cellspacing="0"><tr><td style="width:257px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-left"
                                      align="left"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "left",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            className="es-m-p0r es-m-p20b"
                                            align="center"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 247,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    className="es-m-txt-l"
                                                    align="left"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                      paddingBottom: 10,
                                                      paddingRight: 20,
                                                    }}
                                                  >
                                                    <h2
                                                      style={{
                                                        margin: 0,
                                                        lineHeight: 1,
                                                        msoLineHeightRule:
                                                          "exactly",
                                                        fontFamily:
                                                          'helvetica, "helvetica neue", arial, verdana, sans-serif',
                                                        fontSize: 23,
                                                        fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        color: "#666666",
                                                      }}
                                                    >
                                                      {this.props.dataCliente
                                                        .ciudadela == "azul" ? (
                                                        <h1>COSTA AZUL</h1>
                                                      ) : (
                                                        <h1>COSTA VERDE</h1>
                                                      )}
                                                    </h2>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                      paddingBottom: 5,
                                                    }}
                                                  >
                                                    <table
                                                      className="tablaPrint"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <th>
                                                            <b>UBICACION</b>
                                                          </th>
                                                          <th />
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Manzana
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.props
                                                                .dataCliente
                                                                .manzana
                                                            }
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Solar
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.props
                                                                .dataCliente
                                                                .solar
                                                            }
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Área de Terreno
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.props
                                                                .dataCliente
                                                                .areaSolar
                                                            }{" "}
                                                            m2
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <table
                                                      className="tablaPrint"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <th>
                                                            <b>MODELO</b>
                                                          </th>
                                                          <th />
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Modelo
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.props
                                                                .dataCliente
                                                                .modeloReal
                                                            }
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Área de Construcción
                                                            (m2)
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.props
                                                                .dataCliente
                                                                .areaConstruccion
                                                            }
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Fachada
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataCliente.fachada.toUpperCase()}
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Cubierta de parqueo
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataCliente.cubierta.toUpperCase()}
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td
                                            className="es-hidden"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 10,
                                            }}
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td><td style="width:259px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-left"
                                      align="left"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "left",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            className="es-m-p20b"
                                            align="center"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 249,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={39}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="left"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                      fontSize: 0,
                                                    }}
                                                  >
                                                    <img
                                                      className="adapt-img"
                                                      src={this.imprimirCasa()}
                                                      alt="A"
                                                      style={{
                                                        display: "block",
                                                        border: 0,
                                                        outline: "none",
                                                        marginTop:
                                                          "8px !important",
                                                        textDecoration: "none",
                                                        msInterpolationMode:
                                                          "bicubic",
                                                      }}
                                                      width={255}
                                                      height={255}
                                                    />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td
                                            className="es-hidden"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 10,
                                            }}
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td><td style="width:85px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-left"
                                      align="left"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "left",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            className="es-m-p20b"
                                            align="center"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 85,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={150}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td><td style="width:10px"></td><td style="width:249px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-right"
                                      align="right"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "right",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            align="center"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 249,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={21}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                      paddingBottom: 5,
                                                    }}
                                                  >
                                                    <table
                                                      className="tablaPrint"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Precio Lista
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.precioLista.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Descuento
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.descuento.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Precio Final
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            <b>
                                                              {this.props.dataGeneralFinanciamiento.precioFinal.toLocaleString(
                                                                "en"
                                                              )}
                                                            </b>
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Cuota de Entrada 30%
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.entrada.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Pago contra Entrega
                                                            70%
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.entrega.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <table
                                                      className="tablaPrint"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <th>
                                                            <b>
                                                              FINANCIAMIENTO DE
                                                              ENTRADA
                                                            </b>
                                                          </th>
                                                          <th />
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Pago a la firma 4%
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.firma.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Saldo a financiar
                                                            26%
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.financiar.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Financiamiento
                                                            (meses)
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {this.props.dataGeneralFinanciamiento.cuotas.toLocaleString(
                                                              "en"
                                                            )}
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td></tr></table><![endif]*/}
                                  </td>
                                </tr>
                                <tr style={{ borderCollapse: "collapse" }}>
                                  <td
                                    style={{
                                      padding: 0,
                                      margin: 0,
                                      paddingTop: 50,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                      backgroundColor: "#fff",
                                    }}
                                    bgcolor="#fff"
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellSpacing={0}
                                      cellPadding={0}
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            valign="top"
                                            align="center"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 860,
                                            }}
                                          >
                                            <table
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "separate",
                                                borderSpacing: 0,
                                                borderColor: "#EFEFEF",
                                                borderStyle: "solid",
                                                borderWidth: 1,
                                                borderRadius: 3,
                                                backgroundColor: "#FFFFFF",
                                              }}
                                              width="100%"
                                              cellSpacing={0}
                                              cellPadding={0}
                                              bgcolor="#ffffff"
                                              role="presentation"
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <table
                                                      className="tablaPrintGrande"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <thead>
                                                        <tr
                                                          style={{
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>No.</b>
                                                          </th>
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>No.</b>
                                                          </th>
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>FECHA</b>
                                                          </th>
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>SALDO CAPITAL</b>
                                                          </th>
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>AB. CAPITAL</b>
                                                          </th>
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>INTERES</b>
                                                          </th>
                                                          <th
                                                            style={{
                                                              border:
                                                                "3px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding:
                                                                "8px !important",
                                                            }}
                                                          >
                                                            <b>CUOTA</b>
                                                          </th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        {this.props.dataFinanciamiento.map(
                                                          (row) => {
                                                            return (
                                                              <tr
                                                                style={{
                                                                  borderCollapse:
                                                                    "collapse",
                                                                }}
                                                              >
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  {row.valor}
                                                                </td>
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  0
                                                                </td>
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  {month[
                                                                    row.mesTemp
                                                                  ] +
                                                                    " " +
                                                                    row.anoInicial}
                                                                </td>
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  ${" "}
                                                                  {row.total.toLocaleString(
                                                                    "en"
                                                                  )}
                                                                </td>
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  ${" "}
                                                                  {row.cuota.toLocaleString(
                                                                    "en"
                                                                  )}
                                                                </td>

                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  $ 0
                                                                </td>
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding: 0,
                                                                    margin: 0,
                                                                  }}
                                                                >
                                                                  ${" "}
                                                                  {row.cuota.toLocaleString(
                                                                    "en"
                                                                  )}
                                                                </td>
                                                              </tr>
                                                            );
                                                          }
                                                        )}
                                                      </tbody>
                                                      <tfoot>
                                                        <tr
                                                          style={{
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          />
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          />
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          />
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          />
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            <b>
                                                              ${" "}
                                                              {this.obtenerTotal()}
                                                            </b>
                                                          </td>
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            <b>0</b>
                                                          </td>
                                                          <td
                                                            style={{
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            <b>
                                                              ${" "}
                                                              {this.obtenerTotal()}
                                                            </b>
                                                          </td>
                                                        </tr>
                                                      </tfoot>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                    <br />
                    <table
                      className="es-content"
                      cellSpacing={0}
                      cellPadding={0}
                      align="center"
                      style={{
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        tableLayout: "fixed !important",
                        width: "100%",
                      }}
                    >
                      <tbody>
                        <tr style={{ borderCollapse: "collapse" }}>
                          <td align="center" style={{ padding: 0, margin: 0 }}>
                            <table
                              className="es-content-body"
                              style={{
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                borderCollapse: "collapse",
                                borderSpacing: 0,
                                backgroundColor: "#fff",
                                width: "100%",
                              }}
                              cellSpacing={0}
                              cellPadding={0}
                              bgcolor="#fff"
                              align="center"
                            >
                              <tbody>
                                <tr style={{ borderCollapse: "collapse" }}>
                                  <td
                                    align="left"
                                    style={{
                                      padding: 0,
                                      margin: 0,
                                      paddingTop: 100,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                    }}
                                  >
                                    {/*[if mso]><table style="width:860px" cellpadding="0" cellspacing="0"><tr><td style="width:536px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-left"
                                      align="left"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "left",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            className="es-m-p20b"
                                            align="left"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 536,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                      fontSize: 0,
                                                    }}
                                                  >
                                                    <img
                                                      className="adapt-img"
                                                      src={`./images/planos/CASA-${this.props.dataCliente.modeloReal}.jpg`}
                                                      alt="A"
                                                      // src={`./images/planos/CASA-${this.props.dataCliente.modeloReal}.jpg`}
                                                      style={{
                                                        display: "block",
                                                        border: 0,
                                                        outline: "none",
                                                        textDecoration: "none",
                                                        msInterpolationMode:
                                                          "bicubic",
                                                      }}
                                                      width={536}
                                                      height={675}
                                                    />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td><td style="width:15px"></td><td style="width:309px" valign="top"><![endif]*/}
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="es-right"
                                      align="right"
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        float: "right",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td
                                            align="left"
                                            style={{
                                              padding: 0,
                                              margin: 0,
                                              width: 309,
                                            }}
                                          >
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              role="presentation"
                                              style={{
                                                msoTableLspace: "0pt",
                                                msoTableRspace: "0pt",
                                                borderCollapse: "collapse",
                                                borderSpacing: 0,
                                              }}
                                            >
                                              <tbody>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={22}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <h4
                                                      style={{
                                                        margin: 0,
                                                        lineHeight: "120%",
                                                        msoLineHeightRule:
                                                          "exactly",
                                                        fontFamily:
                                                          'roboto, "helvetica neue", helvetica, arial, sans-serif',
                                                      }}
                                                    >
                                                      <b>
                                                        Tipo{" "}
                                                        {
                                                          this.props.dataCliente
                                                            .modeloReal
                                                        }
                                                      </b>
                                                    </h4>
                                                    <br />
                                                    <table
                                                      className="tablaPrint"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <th>
                                                            <b>
                                                              CUADRO DE AREAS
                                                            </b>
                                                          </th>
                                                          <th />
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Planta Baja
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.modeloInfo
                                                                .areas
                                                                .plantaBaja
                                                            }{" "}
                                                            m2
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Planta Alta
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.modeloInfo
                                                                .areas
                                                                .plantaAlta
                                                            }{" "}
                                                            m2
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Total
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            {
                                                              this.modeloInfo
                                                                .areas.total
                                                            }{" "}
                                                            m2
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={10}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <table
                                                      className="tablaPrint"
                                                      role="presentation"
                                                      style={{
                                                        fontFamily: "Helvetica",
                                                        width: "100%",
                                                        color: "#666666",
                                                        fontSize: 11,
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        borderCollapse:
                                                          "collapse",
                                                        borderSpacing: 0,
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <th colSpan={2}>
                                                            <b>
                                                              ESPECIFICACIONES
                                                              TÉCNICAS
                                                            </b>
                                                          </th>
                                                          <th />
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Tumbados
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            De gypsum o similar.
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Closeths
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Módulo de cajones y
                                                            repisas, con
                                                            colgadores de ropa y
                                                            puertas.
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Baños
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Anaqueles altos y
                                                            bajos con puertas y
                                                            una repisa.
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Muebles de Cocina
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Anaqueles altos y
                                                            bajos con puertas y
                                                            una repisa.
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Recubrimiento de
                                                            Cocina
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Granito importado.
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Lavaplatos
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            De acero inoxidable
                                                            de dos pozos.
                                                          </td>
                                                        </tr>
                                                        <tr
                                                          style={{
                                                            border:
                                                              "1px solid #DDDDDD",
                                                            textAlign: "left",
                                                            padding: 12,
                                                            borderCollapse:
                                                              "collapse",
                                                          }}
                                                        >
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Recubrimiento de
                                                            Pisos
                                                          </td>
                                                          <td
                                                            style={{
                                                              border:
                                                                "1px solid #DDDDDD",
                                                              textAlign: "left",
                                                              padding: 0,
                                                              margin: 0,
                                                            }}
                                                          >
                                                            Piso interior Y
                                                            escaleras con
                                                            porcelanato.
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="center"
                                                    height={10}
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  />
                                                </tr>
                                                <tr
                                                  style={{
                                                    borderCollapse: "collapse",
                                                  }}
                                                >
                                                  <td
                                                    align="left"
                                                    style={{
                                                      padding: 0,
                                                      margin: 0,
                                                    }}
                                                  >
                                                    <p
                                                      style={{
                                                        margin: 0,
                                                        WebkitTextSizeAdjust:
                                                          "none",
                                                        msTextSizeAdjust:
                                                          "none",
                                                        msoLineHeightRule:
                                                          "exactly",
                                                        fontSize: 14,
                                                        fontFamily:
                                                          'helvetica, "helvetica neue", arial, verdana, sans-serif',
                                                        lineHeight: 1.5,
                                                        color: "#666666",
                                                        marginTop: "10px",
                                                      }}
                                                    >
                                                      {this.modeloInfo.detalle.extras.map(
                                                        (value) => {
                                                          return (
                                                            <div>
                                                              - {value}
                                                              <br />
                                                            </div>
                                                          );
                                                        }
                                                      )}
                                                    </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*[if mso]></td></tr></table><![endif]*/}
                                    <table
                                      className="es-content"
                                      cellSpacing={0}
                                      cellPadding={0}
                                      style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                        tableLayout: "fixed !important",
                                        width: "100%",
                                      }}
                                    >
                                      <tbody>
                                        <tr
                                          style={{ borderCollapse: "collapse" }}
                                        >
                                          <td style={{ padding: 0, margin: 0 }}>
                                            <tr
                                              style={{
                                                borderCollapse: "collapse",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  padding: 0,
                                                  margin: 0,
                                                  paddingTop: 10,
                                                  paddingLeft: 0,
                                                  paddingRight: 20,
                                                  backgroundColor: "#fff",
                                                }}
                                                bgcolor="#fff"
                                                align="left"
                                              >
                                                <br />
                                                <h3>
                                                  <b>
                                                    Cuotas de Crédito
                                                    Hipotecario
                                                  </b>
                                                </h3>
                                                <table
                                                  width="52%"
                                                  cellSpacing={0}
                                                  cellPadding={0}
                                                  style={{
                                                    msoTableLspace: "0pt",
                                                    msoTableRspace: "0pt",
                                                    borderCollapse: "collapse",
                                                    borderSpacing: 0,
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr
                                                      style={{
                                                        borderCollapse:
                                                          "collapse",
                                                      }}
                                                    >
                                                      <td
                                                        valign="top"
                                                        style={{
                                                          padding: 0,
                                                          margin: 0,
                                                          width: 860,
                                                        }}
                                                      >
                                                        <table
                                                          style={{
                                                            msoTableLspace:
                                                              "0pt",
                                                            msoTableRspace:
                                                              "0pt",
                                                            borderCollapse:
                                                              "separate",
                                                            borderSpacing: 0,
                                                            borderColor:
                                                              "#EFEFEF",
                                                            borderStyle:
                                                              "solid",
                                                            borderWidth: 1,
                                                            borderRadius: 3,
                                                            backgroundColor:
                                                              "#FFFFFF",
                                                          }}
                                                          width="100%"
                                                          cellSpacing={0}
                                                          cellPadding={0}
                                                          bgcolor="#ffffff"
                                                          role="presentation"
                                                        >
                                                          <tbody>
                                                            <tr
                                                              style={{
                                                                borderCollapse:
                                                                  "collapse",
                                                              }}
                                                            >
                                                              <td
                                                                style={{
                                                                  padding: 0,
                                                                  margin: 0,
                                                                }}
                                                              >
                                                                <table
                                                                  className="tablaPrintGrande"
                                                                  role="presentation"
                                                                  style={{
                                                                    fontFamily:
                                                                      "Helvetica",
                                                                    width:
                                                                      "100%",
                                                                    color:
                                                                      "#666666",
                                                                    fontSize: 11,
                                                                    msoTableLspace:
                                                                      "0pt",
                                                                    msoTableRspace:
                                                                      "0pt",
                                                                    borderCollapse:
                                                                      "collapse",
                                                                    borderSpacing: 0,
                                                                  }}
                                                                >
                                                                  <thead>
                                                                    <tr
                                                                      style={{
                                                                        borderCollapse:
                                                                          "collapse",
                                                                      }}
                                                                    >
                                                                      <th
                                                                        style={{
                                                                          border:
                                                                            "3px solid #DDDDDD",
                                                                          textAlign:
                                                                            "left",
                                                                          padding:
                                                                            "8px !important",
                                                                        }}
                                                                      >
                                                                        <b>
                                                                          10
                                                                          años
                                                                        </b>
                                                                      </th>
                                                                      <th
                                                                        style={{
                                                                          border:
                                                                            "3px solid #DDDDDD",
                                                                          textAlign:
                                                                            "left",
                                                                          padding:
                                                                            "8px !important",
                                                                        }}
                                                                      >
                                                                        <b>
                                                                          15
                                                                          años
                                                                        </b>
                                                                      </th>
                                                                      <th
                                                                        style={{
                                                                          border:
                                                                            "3px solid #DDDDDD",
                                                                          textAlign:
                                                                            "left",
                                                                          padding:
                                                                            "8px !important",
                                                                        }}
                                                                      >
                                                                        <b>
                                                                          20
                                                                          años
                                                                        </b>
                                                                      </th>
                                                                    </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                    <tr
                                                                      style={{
                                                                        borderCollapse:
                                                                          "collapse",
                                                                      }}
                                                                    >
                                                                      <td
                                                                        style={{
                                                                          textAlign:
                                                                            "left",
                                                                          padding: 0,
                                                                          margin: 0,
                                                                        }}
                                                                      >
                                                                        {this.props.creditoHipotecario.diez.toLocaleString(
                                                                          "en"
                                                                        )}
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          textAlign:
                                                                            "left",
                                                                          padding: 0,
                                                                          margin: 0,
                                                                        }}
                                                                      >
                                                                        {this.props.creditoHipotecario.quince.toLocaleString(
                                                                          "en"
                                                                        )}
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          textAlign:
                                                                            "left",
                                                                          padding: 0,
                                                                          margin: 0,
                                                                        }}
                                                                      >
                                                                        {this.props.creditoHipotecario.veinte.toLocaleString(
                                                                          "en"
                                                                        )}
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/*AAAAAAAAAAAAAAAAAA */}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      </div>
    );
  }
}

export default Print;
