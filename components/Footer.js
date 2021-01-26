const Footer = () => {
  return (
    <div
      id="layoutDefault_footer"
      // style={{ position: "absolute", width: "100%", bottom: "0px" }}
    >
      <footer className="footer pt-5 pb-3 mt-auto bg-white footer-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-brand">Heimdal</div>
              <div className="mb-3">Iluminando el Futuro</div>
              <div className="icon-list-social mb-5">
                <a
                  className="icon-list-social-link"
                  href="https://www.instagram.com/UpDavo/"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="icon-list-social-link"
                  href="https://github.com/UpDavo"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="row align-items-center">
            <div className="col-md-6 small">
              Copyright © Heimdal {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
