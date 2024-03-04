import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between text-2xl">
      <div className="hidden md:flex">
        {/* Proyecto */}
        <Link
          to="/"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Proyecto
        </Link>

        {/* Resultados obtenidos */}
        <Link
          to="/resultadosobtenidos"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Resultados obtenidos
        </Link>

        {/* Mejora tu centro */}
        <Link
          to="/mejoracentro"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Mejora tu centro
        </Link>

        {/* Noticias */}
        <Link
          to="/noticias"
          className="text-white px-4 py-2 hover:text-colorOrangeHover"
        >
          Noticias
        </Link>

        {/* Contacto */}
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
