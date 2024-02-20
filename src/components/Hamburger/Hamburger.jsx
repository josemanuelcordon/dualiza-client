export const Hamburger = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav>
      <section className="MOBILE-MENU flex flex-col items-center justify-center lg:hidden h-full">
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
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="#"
                className="text-black  px-4 py-2 hover:text-colorOrangeHover"
              >
                Principal
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="#"
                className="text-black px-4 py-2 hover:text-colorOrangeHover"
              >
                Proyecto
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="#"
                className="text-black px-4 py-2 hover:text-colorOrangeHover"
              >
                Resultados obtenidos
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="#"
                className="text-black px-4 py-2 hover:text-colorOrangeHover"
              >
                Mejora tu centro
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="#"
                className="text-black px-4 py-2 hover:text-colorOrangeHover"
              >
                Noticias
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="#"
                className="text-black px-4 py-2 hover:text-colorOrangeHover"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};
