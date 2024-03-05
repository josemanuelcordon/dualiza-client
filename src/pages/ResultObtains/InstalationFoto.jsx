import styled from "styled-components";

const Paragraph = styled.p`
  margin: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
`;
const InstalationFoto = () => {
  return (
    <div className="max-w-md mx-auto mt-8 mb-8 bg-white shadow-md rounded-md overflow-hidden transition-shadow hover:shadow-lg">
      <h2 className="text-2xl font-semibold p-4">Instalación Fotovoltaica</h2>
      <div className="p-4">
        <Paragraph>Las instalaciones fotovoltaicas son sistemas que utilizan paneles solares para convertir la luz solar en electricidad.
           Estos paneles se colocan estratégicamente en estructuras montadas en el suelo, techos o integradas en edificaciones para 
           maximizar la captación de luz solar. La corriente continua generada se transforma en corriente alterna mediante inversores, 
           permitiendo su integración en la red eléctrica convencional o su uso local. Este enfoque sostenible reduce la dependencia 
           de fuentes de energía no renovables y contribuye a mitigar el impacto ambiental al aprovechar una fuente limpia como la energía 
           solar.
           </Paragraph>
      </div>
      <img
        src="/image/fotovoltaica.png" // Adjust the path to the image
        alt="Instalation Foto"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default InstalationFoto;
