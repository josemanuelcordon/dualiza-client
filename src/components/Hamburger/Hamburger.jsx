export const Hamburger = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <>
      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
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
        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/about">About</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
