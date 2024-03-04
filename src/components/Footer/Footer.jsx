import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/useAuthContext";

const Footer = () => {
  const { username, logout, isAdmin } = useAuthContext();
  return (
    <footer className="bg-customBlueSecundary h-40 py-6">
      <div className="flex justify-start max-w-7xl mx-auto">
        <section>
          <h2 className="text-xl">Colaboradores</h2>
          <div className="flex items-center">
            <img src="../image/riello.png" alt="" className="w-52 mr-4" />
            <img src="../image/fpempresa.png" alt="" className="w-52 mr-4" />
            <img src="../image/CaixaBank.png" alt="" className="w-52" />
          </div>
        </section>
        <section className="flex flex-col items-end w-full">
          {username ? (
            <>
              <p
                className="hover:cursor-pointer hover:underline hover:text-colorOrangeHover "
                onClick={() => logout()}
              >
                Cerrar Sesión
              </p>
              {isAdmin && (
                <>
                  <Link
                    to="create/user"
                    className="hover:cursor-pointer hover:underline hover:text-colorOrangeHover "
                  >
                    Crear Usuario
                  </Link>
                  <Link
                    to="/list/users"
                    className="hover:cursor-pointer hover:underline hover:text-colorOrangeHover "
                  >
                    Lista de usuarios
                  </Link>
                </>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="hover:cursor-pointer hover:underline hover:text-colorOrangeHover "
            >
              Zona de administración
            </Link>
          )}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
