const Footer = () => {
  return (
    <footer className="bg-customBlueSecundary h-40 py-6">
      <div className="flex justify-start max-w-7xl mx-auto">
        <section>
          <h2 className="text-xl">Colaboradores</h2>
          <div className="flex items-center">
            <img src="../image/riello.png" alt="" className="w-40 mr-4" />
            <img src="../image/fpempresa.png" alt="" className="w-40 mr-4" />
            <img src="../image/CaixaBank.png" alt="" className="w-40" />
          </div>
        </section>
        <section className="flex justify-end w-full">
          <a href="/login">Zona de administración</a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
