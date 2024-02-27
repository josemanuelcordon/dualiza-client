import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between text-2xl">
      <div className="hidden md:flex">
        <Link
          to="/"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Proyecto
        </Link>

        <a
          href="#"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Resultados obtenidos
        </a>

        <a
          href="#"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Mejora tu centro
        </a>

        <Link
          to="/noticias"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Noticias
        </Link>
        <Link
          to="/contact"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};
