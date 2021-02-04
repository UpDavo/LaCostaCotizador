const extra = () => {
  const dataCliente = {
    nombre: "Anthony",
    apellido: "Villegas",
    correo: "advillegas@uees.ued.ec",
    celular: "094504722",
    ciudadela: "verde",
    manzana: "2",
    solar: "Solar 2",
    areaSolar: "123213",
    modelo: "F1",
    modeloReal: "F1",
    areaConstruccion: "12321",
    fachada: "Top",
    cubierta: "Si",
  };

  return (
    // <div className="print-source">
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
                      {dataCliente.nombre + " " + dataCliente.apellido}
                      <br />
                      {dataCliente.correo}
                      <br />
                      {dataCliente.celular}
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
                      <b>Area del Solar: </b>
                      {dataCliente.areaSolar}
                      <br />
                      <b>Modelo de Fachada: </b>
                      {dataCliente.modeloReal}
                      <br />
                      <b>Área de Construcción: </b>
                      {dataCliente.areaConstruccion}
                      <br />
                      <b>Tipo de Fachada: </b>
                      {dataCliente.fachada}
                      <br />
                      <b>Tiene Cubierta: </b>
                      {dataCliente.cubierta}
                    </td>
                    <td width="10%" style={{ textAlign: "left" }}>
                      {dataCliente.ciudadela == "azul" ? (
                        <b>COSTA AZUL</b>
                      ) : (
                        <b>COSTA VERDE</b>
                      )}
                      <br />
                      <b>Manzana {dataCliente.manzana}</b>
                      <br />
                      <b>{dataCliente.solar}</b>
                    </td>
                    <td width="30%" style={{ textAlign: "right" }}>
                      <img
                        src="./images/fachadas/CASA-A/CASA-A-01.jpg"
                        width="35%"
                      />
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
          <tr className="item" align="center">
            <td>Website design</td>
            <td style={{ textAlign: "center" }}>Enero</td>
            <td>$300.00</td>
          </tr>
          <tr className="item" align="center">
            <td>Website design</td>
            <td style={{ textAlign: "center" }}>Enero</td>
            <td>$300.00</td>
          </tr>
          <tr className="total" align="center">
            <td />
            <td />
            <td>Total: $385.00</td>
          </tr>
          <tr className="information">
            <td colSpan={3}>
              <table>
                <tbody align="center">
                  <tr>
                    <td>
                      <img src="./images/planos/CASA-A.jpg" width="90%" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default extra;
