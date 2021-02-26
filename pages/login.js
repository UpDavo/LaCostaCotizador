import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDown = {
  initial: {
    x: -350,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const Login = () => {
  return (
    <motion.div
      exit="pageExit"
      initial="initial"
      animate="animate"
      variants={stagger}
      style={{
        backgroundImage: `url("images/pattern-shapes.png")`,
      }}
      className="bg-secondary"
    >
      <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <motion.div variants={fadeInDown} class="container">
          <div class="card login-card">
            <div class="row no-gutters">
              <div class="col-md-5">
                <img
                  src="images/la-costa.png"
                  alt="login"
                  class="login-card-img"
                />
              </div>
              <div class="col-md-7" align="center">
                <div class="card-body">
                  <div class="brand-wrapper">
                    <img
                      src="https://lacostasamborondon.com/wp-content/uploads/2020/09/lacosta-logo.png"
                      alt="logo"
                      class="logo mr-4"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <p class="login-card-description">
                    Inicia Sesión en tu cuenta
                  </p>
                  <form action="#!">
                    <div class="form-group">
                      <label for="email" class="sr-only">
                        Correo
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Dirección de correo registrada"
                      />
                    </div>
                    <div class="form-group mb-4">
                      <label for="password" class="sr-only">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        placeholder="***********"
                      />
                    </div>
                    <Link href="/">
                      <input
                        name="login"
                        id="login"
                        class="btn btn-block login-btn mb-4"
                        type="button"
                        value="Iniciar Sesión"
                      />
                    </Link>
                  </form>
                  <a href="#!" class="forgot-password-link">
                    ¿No recuerdas la contraseña?
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Login;
