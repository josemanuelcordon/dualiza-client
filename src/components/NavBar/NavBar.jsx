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
        <div className="relative group">
          <Link
            to="/resultadosobtenidos"
            className="text-white px-4 py-2 hover:text-colorOrangeHover"
          >
            Resultados obtenidos
          </Link>
          {/* Submenu */}
          <ul className="absolute hidden mt-2 space-y-2 bg-white text-black group-hover:block rounded-lg border border-gray-300 text-sm right-4">
            <li>
              <Link to="/resultadosobtenidos/instalacion" className="block px-3 py-1 hover:bg-gray-100">
                Instalación fotovoltáica
              </Link>
            </li>
            <li>
              <Link to="/resultadosobtenidos/consumos" className="block px-3 py-1 hover:bg-gray-100">
                Consumos eléctricos
              </Link>
            </li>
            <li>
              <Link to="/resultadosobtenidos/instclimatizacion" className="block px-3 py-1 hover:bg-gray-100">
                Instalaciones de climatización
              </Link>
            </li>
            <li>
              <Link to="/resultadosobtenidos/mejoras" className="block px-3 py-1 hover:bg-gray-100">
                Mejoras constructivas
              </Link>
            </li>
          </ul>
        </div>

        {/* Mejora tu centro */}
        <div className="relative group">
          <Link
            to="/mejoracentro"
            className="text-white px-4 py-2 hover:text-colorOrangeHover"
          >
            Mejora tu centro
          </Link>

          {/* Submenu */}
          <ul className="absolute hidden mt-2 space-y-2 bg-white text-black group-hover:block rounded-lg border border-gray-300 text-sm right-4">
            <li>
              <Link to="/mejora/guia" className="block px-3 py-1 hover:bg-gray-100">
                Guía de buenas prácticas
              </Link>
            </li>
            <li>
              <Link to="/mejora/documentos" className="block px-3 py-1 hover:bg-gray-100">
                Documentos de interés
              </Link>
            </li>
            <li>
              <Link to="/mejora/enlaces" className="block px-3 py-1 hover:bg-gray-100">
                Enlaces
              </Link>
            </li>
          </ul>
        </div>

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
