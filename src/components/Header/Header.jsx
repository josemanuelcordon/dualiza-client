// Header component
export const Header = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 col">
      <a href="/">
        <img src="./image/logo.png" alt="" width="150" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        </section>
      </nav>
    </div>
  );
};
