import { useEffect, useState } from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { NavBar } from "../NavBar/NavBar";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="flex h-40 justify-around m-0 bg-customBlue">
        <div className="flex items-center justify-between border-gray-400 py-8 col">
          <a href="/">
            <img src="./image/logo.png" alt="" width="150" />
          </a>
        </div>
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
