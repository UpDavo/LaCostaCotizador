import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/images/icono.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://kit.fontawesome.com/512b530c56.js"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
