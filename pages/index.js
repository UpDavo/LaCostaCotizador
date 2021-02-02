import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Form from "../components/Form";
import Plano from "../components/Plano";
import Head from "next/head";
import Financiamiento from "../components/Financiamiento";
import { motion } from "framer-motion";
import { useState } from "react";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => {
  const [image, setImage] = useState();
  const [plano, setPlano] = useState();
  const [itemsTable, setItemsTable] = useState();
  const [base, setBase] = useState([]);

  const updateImagenPlano = (modelo, selectorCubierta, selectorFachada) => {
    let casa;
    let plano;

    const selector = (temporal, real) => {
      if (selectorFachada == "top") {
        if (selectorCubierta == "si") {
          casa = {
            src: `images/fachadas/CASA-${temporal}/CASA-${temporal}-01TOPCUBIERTA.jpg`,
            descripcion: `Fachada ${real} Top Cubierta`,
          };
          plano = {
            src: `images/planos/CASA-${real}.jpg`,
            descripcion: `Fachada ${real} Top Cubierta`,
          };
        } else {
          casa = {
            src: `images/fachadas/CASA-${temporal}/CASA-${temporal}-01TOP.jpg`,
            descripcion: `Fachada ${real} Top `,
          };
          plano = {
            src: `images/planos/CASA-${real}.jpg`,
            descripcion: `Fachada ${real} Top`,
          };
        }
      } else {
        if (selectorCubierta == "si") {
          casa = {
            src: `images/fachadas/CASA-${temporal}/CASA-${temporal}-01CUBIERTA.jpg`,
            descripcion: `Fachada ${real} Cubierta`,
          };
          plano = {
            src: `images/planos/CASA-${real}.jpg`,
            descripcion: `Fachada ${real} Cubierta`,
          };
        } else {
          casa = {
            src: `images/fachadas/CASA-${temporal}/CASA-${temporal}-01.jpg`,
            descripcion: `Fachada ${real}`,
          };
          plano = {
            src: `images/planos/CASA-${real}.jpg`,
            descripcion: `Fachada ${real}`,
          };
        }
      }
    };

    switch (modelo) {
      case "B1":
        selector("B", modelo);
        break;
      case "B2":
        selector("B", modelo);
        break;
      case "D2":
        selector("D", modelo);
        break;
      case "E2":
        selector("E", modelo);
        break;
      case "E3":
        selector("E", modelo);
        break;
      case "F1":
        selector("F", modelo);
        break;
      case "F2":
        selector("F", modelo);
        break;
      case "G1A":
        selector("G", modelo);
        break;
      case "G1B":
        selector("G", modelo);
        break;
      case "G2A":
        selector("G", modelo);
        break;
      case "G2B":
        selector("G", modelo);
        break;
      default:
        selector(modelo, modelo);
        break;
    }

    setImage(casa);
    setPlano(plano);
  };

  const cargarTabla = (datosFormulario, arregloInformación) => {
    setBase(arregloInformación);
    setItemsTable(datosFormulario);
  };

  return (
    <div>
      <Head>
        <title>La Costa Cotizador</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* Page Header*/}

      <section
        className="page-header page-header-dark bg-img-repeat bg-secondary"
        style={{
          backgroundImage: `url("images/pattern-shapes.png")`,
          backgroundColor: "#66aebf !important",
        }}
      >
        <div className="page-header-content">
          <div className="container">
            <div className="row align-items-center">
              <motion.div
                exit="pageExit"
                initial="initial"
                animate="animate"
                variants={stagger}
                className="col-lg-4"
              >
                <Form
                  actualizarImagenes={updateImagenPlano}
                  enviarDatos={cargarTabla}
                />
              </motion.div>
              <motion.div
                exit="pageExit"
                initial="initial"
                animate="animate"
                variants={stagger}
                className="col-lg-8"
              >
                <Image
                  img={image === undefined ? "images/la-costa.jpg" : image.src}
                  descripcion={
                    image === undefined ? "La Costa" : image.descripcion
                  }
                />
                <Plano
                  img={image == undefined ? "images/la-costa.jpg" : plano.src}
                  descripcion={
                    image == undefined ? "La Costa" : plano.descripcion
                  }
                />
              </motion.div>
            </div>
            <div>
              {itemsTable == undefined ? (
                <br />
              ) : (
                <Financiamiento dataCliente={itemsTable} base={base} />
              )}
            </div>
          </div>
        </div>
        <div className="svg-border-angled text-white">
          {/* Angled SVG Border*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
