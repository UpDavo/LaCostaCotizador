import React, { useState } from "react";
import Data from "../pages/json/Data";
import { motion } from "framer-motion";
var infoCiudadelas;
const modelos = {
  A: 198.9,
  B1: 177.75,
  B2: 177.75,
  C: 155.17,
  D: 163.6,
  D2: 163.6,
  E: 201.44,
  E2: 201.44,
  E3: 201.44,
  F1: 199.3,
  F2: 199.3,
  G1A: 179.41,
  G1B: 179.41,
  G2A: 179.41,
  G2B: 179.41,
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Form = ({ actualizarImagenes, enviarDatos }) => {
  const [numeroManzanas, setNumeroManzanas] = useState();
  const [numeroSolares, setNumeroSolares] = useState();
  const [areaSolar, setAreaSolar] = useState(0);
  const [areaConstruccion, setAreaConstruccion] = useState(0);

  const tomarDatos = () => {
    let ciudadela = document.querySelector("#ciudadela").value;
    if (ciudadela == "azul") {
      infoCiudadelas = Data.azul;
    } else if (ciudadela == "verde") {
      infoCiudadelas = Data.verde;
    }
    setNumeroManzanas(infoCiudadelas[0]);
  };

  const presentarSolares = () => {
    let manzana = document.querySelector("#manzana").value;
    let solares = [];
    infoCiudadelas.map((data) => {
      if (data.MANZANA == manzana) {
        solares.push(data.LOTE);
      }
    });
    setNumeroSolares(solares);
  };

  const cargarArea = () => {
    let manzana = document.querySelector("#manzana").value;
    let solar = document.querySelector("#solar").value;

    infoCiudadelas.map((data) => {
      if (data.MANZANA == manzana && data.LOTE == solar) {
        setAreaSolar(data.METRAJE);
      }
    });
  };

  const cargarAreaConstruccion = () => {
    let modelo = document.querySelector("#modelo").value;
    cargarImagenes();
    setAreaConstruccion(modelos[modelo]);
  };

  const cargarImagenes = () => {
    let modelo = document.querySelector("#modelo").value;
    let cubierta = document.querySelector("#cubierta").value;
    let fachada = document.querySelector("#fachada").value;

    actualizarImagenes(modelo, cubierta, fachada);
  };

  const generarTabla = (event) => {
    event.preventDefault();
    let modeloActualizado;
    switch (document.querySelector("#modelo").value) {
      case "D2":
        modeloActualizado = "D";
        break;
      case "E2":
        modeloActualizado = "E";
        break;
      case "E3":
        modeloActualizado = "E";
        break;
      case "F1":
        modeloActualizado = "F";
        break;
      case "F2":
        modeloActualizado = "F";
        break;
      case "G1A":
        modeloActualizado = "G";
        break;
      case "G1B":
        modeloActualizado = "G";
        break;
      case "G2A":
        modeloActualizado = "G";
        break;
      case "G2B":
        modeloActualizado = "G";
        break;
      default:
        modeloActualizado = document.querySelector("#modelo").value;
        break;
    }
    const datosImportantes = {
      nombre: document.querySelector("#nombre").value,
      apellido: document.querySelector("#apellido").value,
      correo: document.querySelector("#correo").value,
      celular: document.querySelector("#celular").value,
      ciudadela: document.querySelector("#ciudadela").value,
      manzana: document.querySelector("#manzana").value,
      solar: document.querySelector("#solar").value,
      areaSolar: document.querySelector("#areaSolar").value,
      modelo: modeloActualizado,
      areaConstruccion: document.querySelector("#areaConstruccion").value,
      fachada: document.querySelector("#fachada").value,
      cubierta: document.querySelector("#cubierta").value,
    };

    enviarDatos(datosImportantes, infoCiudadelas);
  };

  return (
    <motion.div
      variants={fadeInRight}
      className="card rounded-lg text-dark formulario"
    >
      <div className="card-header py-4" style={{ color: "#b58648" }}>
        Datos de la persona que realiza la cotización
      </div>
      <div className="card-body">
        <form onSubmit={generarTabla} id="formulario">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="small text-gray-600" htmlFor="nombre">
                Nombre
              </label>
              <input className="form-control" id="nombre" type="text" />
            </div>
            <div className="form-group col-md-6">
              <label className="small text-gray-600" htmlFor="apellido">
                Apellido
              </label>
              <input className="form-control" id="apellido" type="text" />
            </div>
          </div>
          <div className="form-group">
            <label className="small text-gray-600" htmlFor="correo">
              Correo
            </label>
            <input className="form-control" id="correo" type="correo" />
          </div>
          <div className="form-group">
            <label className="small text-gray-600" htmlFor="celular">
              Número Celular
            </label>
            <input className="form-control" id="celular" type="text" />
          </div>
          <div className="form-group">
            <label className="small text-gray-600" htmlFor="ciudadela">
              Seleccione el tipo de ciudadela
            </label>
            <select
              className="form-control"
              id="ciudadela"
              onChange={tomarDatos}
            >
              <option value="verde">Costa Verde</option>
              <option value="azul">Costa Azul</option>
            </select>
          </div>
          <div className="form-group">
            <label className="small text-gray-600" htmlFor="manzana">
              Ingrese la Manzana
            </label>
            <select
              className="form-control"
              id="manzana"
              onChange={presentarSolares}
            >
              {numeroManzanas == undefined ? (
                <option>Selecccione primero una Ciudadela</option>
              ) : (
                numeroManzanas.map((opcion) => {
                  return <option>{opcion}</option>;
                })
              )}
            </select>
          </div>
          <div className="form-group">
            <label className="small text-gray-600" htmlFor="solar">
              Ingrese el Solar
            </label>
            <select className="form-control" id="solar" onChange={cargarArea}>
              {numeroSolares == undefined ? (
                <option>Selecccione primero una Manzana</option>
              ) : (
                numeroSolares.map((solar) => {
                  return <option value={solar}>{solar}</option>;
                })
              )}
            </select>
          </div>
          <fieldset disabled>
            <div className="form-group">
              <label className="small text-gray-600" htmlFor="areaSolar">
                Área del Solar
              </label>
              <input
                class="form-control"
                id="areaSolar"
                type="text"
                placeholder={
                  areaSolar == 0 ? "Selecccione primero una Solar" : areaSolar
                }
                value={
                  areaSolar == 0 ? "Selecccione primero una Solar" : areaSolar
                }
                readonly
              ></input>
            </div>
          </fieldset>

          <div className="form-group">
            <label className="small text-gray-600" htmlFor="modelo">
              Modelo
            </label>
            <select
              className="form-control"
              id="modelo"
              onChange={cargarAreaConstruccion}
            >
              <option value="" selected disabled>
                Seleccione un modelo
              </option>
              <option value="A">A</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="D2">D2</option>
              <option value="E">E</option>
              <option value="E2">E2</option>
              <option value="E3">E3</option>
              <option value="F1">F1</option>
              <option value="F2">F2</option>
              <option value="G1A">G1A</option>
              <option value="G1B">G1B</option>
              <option value="G2A">G2A</option>
              <option value="G2B">G2B</option>
            </select>
          </div>

          <fieldset disabled>
            <div className="form-group">
              <label className="small text-gray-600" htmlFor="areaConstruccion">
                Área del Construcción (m2)
              </label>
              <input
                class="form-control"
                id="areaConstruccion"
                type="text"
                placeholder={
                  areaConstruccion == 0
                    ? "Selecccione primero un modelo"
                    : areaConstruccion
                }
                value={
                  areaConstruccion == 0
                    ? "Selecccione primero un modelo"
                    : areaConstruccion
                }
                readonly
              ></input>
            </div>
          </fieldset>

          <div className="form-group">
            <label className="small text-gray-600" htmlFor="fachada">
              Fachada
            </label>
            <select
              className="form-control"
              id="fachada"
              onChange={cargarImagenes}
            >
              <option value="estandar">Estandar</option>
              <option value="top">Top</option>
            </select>
          </div>

          <div className="form-group">
            <label className="small text-gray-600" htmlFor="cubierta">
              Cubierta de Parqueo
            </label>
            <select
              className="form-control"
              id="cubierta"
              onChange={cargarImagenes}
            >
              <option value="no">No</option>
              <option value="si">Si</option>
            </select>
          </div>

          <button
            className="btn btn-secondary dorado btn-block font-weight-500 mt-4"
            type="submit"
          >
            Generar la tabla de pagos
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
