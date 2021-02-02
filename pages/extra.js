const extra = () => {
  const dataCliente = {
    nombre: "a",
    apellido: "a",
    correo: "aa",
    celular: "aaa",
    ciudadela: "asdasd",
    manzana: "lkdf",
    solar: "lsldm",
    areaSolar: "smdvsmv",
    modelo: "cxmvcxv",
    modeloReal: "lccdmsd",
    areaConstruccion: "asmds",
    fachada: "a,smdsa.",
    cubierta: ".s,dmsd",
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
                    <td>
                      {dataCliente.ciudadela == "azul"
                        ? "COSTA AZUL"
                        : "COSTA VERDE"}
                      <br />
                      {"Manzana " + dataCliente.manzana}
                      <br />
                      {dataCliente.solar}
                      <br />
                      {"Área del Solar: " + dataCliente.areaSolar}
                    </td>
                    <td>
                      {"Modelo de Fachada: " + dataCliente.modeloReal}
                      <br />
                      {"Área de Construcción: " + dataCliente.areaConstruccion}
                      <br />
                      {"Tipo de Fachada: " + dataCliente.fachada}
                      <br />
                      {"Tiene Cubierta: " + dataCliente.cubierta}
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
                      <img src="./images/fachadas/CASA-A/CASA-A-01.jpg" width="100%" />
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
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default extra;
