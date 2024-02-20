import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Hamburger } from "../Hamburger/Hamburger";
import { NavBar } from "../NavBar/NavBar";

export default function HeaderWithNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="flex  justify-around mt-4  bg-customBlue">
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        {isMobile ? (
          <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        ) : (
          <NavBar />
        )}
      </header>
      <style>{`
          .hideMenuNav {
              display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
    </>
  );
}
