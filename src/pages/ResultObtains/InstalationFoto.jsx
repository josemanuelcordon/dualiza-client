
const InstalationFoto = () => {
  return (
    <div className="max-w-md mx-auto mt-8 mb-8 bg-white shadow-md rounded-md overflow-hidden transition-shadow hover:shadow-lg">
      <h2 className="text-2xl font-semibold p-4">Instalación Fotovoltaica</h2>
      <img
        src="/image/fotovoltaica.png" // Adjust the path to the image
        alt="Instalation Foto"
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        {/* Additional content or description can be added here */}
      </div>
    </div>
  );
};

export default InstalationFoto;
