import { Link } from "react-router-dom";

export const Hamburger = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav>
      <section className="MOBILE-MENU flex flex-col items-center justify-center lg:hidden h-full px-6">
        <div
          className="HAMBURGER-ICON  space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
        </div>

        <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} `}>
          <div className="px-8 py-8" onClick={() => setIsNavOpen(false)}>
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <section className="flex flex-col items-center justify-between min-h-[250px]">
            <Link
              to=""
              className="border-b border-gray-400 my-8 uppercase"
              onClick={() => setIsNavOpen(false)}
            >
              <span className="text-black px-4 py-2 hover:text-colorOrangeHover">
                Proyecto
              </span>
            </Link>
            <Link
              to="/resultadosobtenidos"
              className="border-b border-gray-400 my-8 uppercase"
              onClick={() => setIsNavOpen(false)}
            >
              <span className="text-black px-4 py-2 hover:text-colorOrangeHover">
                Resultados obtenidos
              </span>
            </Link>
            <Link
              to="/mejoracentro"
              className="border-b border-gray-400 my-8 uppercase"
              onClick={() => setIsNavOpen(false)}
            >
              <span className="text-black px-4 py-2 hover:text-colorOrangeHover">
                Mejora tu centro
              </span>
            </Link>
            <Link
              to="/noticias"
              className="border-b border-gray-400 my-8 uppercase"
              onClick={() => setIsNavOpen(false)}
            >
              <span className="text-black px-4 py-2 hover:text-colorOrangeHover">
                Noticias
              </span>
            </Link>
            <Link
              to="/contact"
              className="border-b border-gray-400 my-8 uppercase"
              onClick={() => setIsNavOpen(false)}
            >
              <span className="text-black px-4 py-2 hover:text-colorOrangeHover">
                Contacto
              </span>
            </Link>
          </section>
        </div>
      </section>
    </nav>
  );
};
