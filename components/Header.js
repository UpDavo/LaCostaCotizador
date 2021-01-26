const Header = () => {
  return (
    <div>
      <main>
        {/* Navbar*/}
        <nav className="pt-4 pb-4 navbar navbar-marketing navbar-expand-lg bg-white navbar-light">
          <div className="container">
            <a className="navbar-brand text-dark" href="#">
              <img
                className="card-img-top"
                src="https://lacostasamborondon.com/wp-content/uploads/2020/09/lacosta-logo.png"
                alt="..."
                style={{
                  width: "230px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </a>

            <a
              className="btn font-weight-500 ml-lg-4 btn-secondary dorado"
              href="https://lacostasamborondon.com/"
            >
              Página web
              <i className="ml-2" data-feather="arrow-right" />
            </a>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Header;
