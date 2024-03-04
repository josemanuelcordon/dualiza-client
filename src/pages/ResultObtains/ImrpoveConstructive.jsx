import styled from "styled-components";

const GridHLanz = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  grid-column: 1 / -1;
  margin: 20px auto;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  margin: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ImrpoveConstructive = () => {
  return (
    <GridHLanz>
      <Title>Consumo eléctrico IES Hermenegildo Lanz</Title>

      {/* Text 1 */}
      <div className="w-full py-2 my-2 bg-white shadow-md rounded-md overflow-hidden">
        <div className="text-lg font-semibold p-4 text-center">
          Opacos en edificios A,B y D
        </div>
        <div className="flex">
          <div>
            <Paragraph>
              Se propone el uso de aislamiento insuflado para mejorar la
              eficiencia energética reduciendo las pérdidas o ganancias
              térmicas. La medida consistiría en inyectar un material aislante
              en las cámaras de aire existentes en las fachadas del edificio,
              utilizando equipos especiales de insuflación. El material
              propuesto es Poliuretano (PUR) proyectado con CO2 en celda
              cerrada, con una conductividad térmica aproximada de 0,032 (ya que
              puede variar en función del fabricante).
            </Paragraph>
            <Paragraph>
              El principal propósito del aislamiento insuflado es crear una capa
              aislante continua y uniforme, que ocupe los espacios existentes y
              reduzca la transferencia de calor entre el interior y el exterior
              (o viceversa).
            </Paragraph>
            <Paragraph>
              El material utilizado para el aislamiento insuflado puede variar
              según la aplicación y las características específicas del
              edificio. Algunos materiales comunes incluyen la celulosa, la
              fibra de vidrio y la lana mineral, entre otros.
            </Paragraph>
            <Paragraph>
              Con esto se gana una mejora significativa en cuanto a la
              transmitancia térmica pasando de 1.19 W/m2K a 0.45 W/m2K para la
              fachada tipo A y de 0.93W/m2K a 0.40 W/m2K en fachada tipo B
            </Paragraph>
          </div>
          <div>
            <Paragraph>
              En cuanto a la carpintería para que siga respetando su estilo
              debido a la catalogación que conlleva se ha previsto hacer una
              modificación manteniendo el mismo color actual pero siendo el
              nuevo tipo PVC correderas o fijas según las necesidades para los
              edificios A,B y D
            </Paragraph>
            <Paragraph>
              Tras el estudio iniciado para la insuflación de poliuretano en la
              cámara de aire en los edificios A,B y D se ha llegado a la
              siguiente conclusión:
            </Paragraph>
            <Paragraph>
              Con las mediciones generadas deduciendo los huecos obtenemos:
              <ol>
                <li>Planta Baja: 1874.6 m2</li>
                <li>Planta primera: 1197.15 m2</li>
                <li>Planta segunda: 205.52 m2</li>
              </ol>
            </Paragraph>
          </div>
          <div>
            <Paragraph>
              El precio de m2 de aislamiento insuflado en cámara de aire de
              poliuretano con un espesor medio de 50 mm ronda los 8.52 euros/m2,
              por lo cual obtendremos los siguientes presupuestos divididos por
              plantas:
              <ol>
                <li>Planta Baja: 13.318.63 euros</li>
                <li>Planta primera: 7.903.83 euros</li>
                <li>Planta segunda: 1.425.40 euros</li>
              </ol>
            </Paragraph>
            <Paragraph>
              Con una inversión de 22.647.86 euros aislaríamos al completo el
              edificio obteniendo ya no solo un considerable ahorro económico
              futuro en calefacción y refrigeración, sino que La rehabilitación
              con este producto, permite estar alineada con la agenda 2030,
              fomentando la reducción de las emisiones de CO2 e impulsando la
              economía circular.
            </Paragraph>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/image/opacoedificio.png" alt="" />
        </div>
      </div>

      {/* Text 2 */}

      <div className="w-full py-2 bg-white shadow-md rounded-md overflow-hidden">
        <div className="text-lg font-semibold p-4 text-center">
          Propuesta de mejora del control solar
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Paragraph>
            <b>Colocación de toldos:</b> Toldos fijos de la empresa BricoDepot
            en las fachadas suroeste y al sureste. Se ha optado por la
            colocación de toldos de dimensiones 3,80 m de ancho y 3 m de largo
            extendido completamente. Es conveniente usar colores acordes al tipo
            de edificio, funcionales y poco llamativos por ello está empresa nos
            ofrece este toldo retráctil manual de aluminio y poliéster,
            resistente a la corrosión y a los rayos ultravioleta (UV). Tiene una
            inclinación ajustable de hasta 42º
          </Paragraph>
          <img src="/image/toldo1.png" alt="" className="w-full h-auto" />
        </div>
        <div className=" flex flex-wrap justify-center items-center">
          <div className="text-lg font-semibold p-4 text-center">
            Toldos necesarios según dimensiones de cada hueco <br />
            Vista axonométrica con medidas de mejora (Estado actual Edificio C)
          </div>
          <div className="mx-auto">
            <img src="/image/toldo2.png" alt="" className="max-w-full h-auto" />
            <img src="/image/toldo3.png" alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Text 3 */}

      <div className="w-full py-2 bg-white shadow-md rounded-md overflow-hidden">
        <div className="text-lg font-semibold p-4 text-center">
          Recomendaciones en huecos edificio A, B y D
        </div>
        <div>
          <Paragraph>
            <b>
              Instalar vidrios de doble o triple acristalamiento donde no los
              hubiera:
            </b>
            Los vidrios con varias capas ayudan a mejorar el aislamiento térmico
            y acústico de las ventanas. El espacio entre las capas de vidrio
            puede llenarse con gas argón para mejorar aún más las propiedades de
            aislamiento.
          </Paragraph>
          <Paragraph>
            <b>Utilizar vidrios de baja emisividad (Low-E):</b>
            Estos vidrios cuentan con una capa especial que refleja el calor
            hacia el interior en invierno y hacia el exterior en verano. Esto
            ayuda a mantener la temperatura interior más estable y reduce la
            transferencia de calor a través de las ventanas.
          </Paragraph>
          <Paragraph>
            <b>Instalar marcos de ventanas eficientes: </b>
            Los marcos de las ventanas tienen un papel muy importante en el
            aislamiento del hueco. Los marcos de PVC, madera o aluminio con
            rotura de puente térmico, son opciones muy ventajosas. Esta medida
            es recomendable hacerla conjuntamente con el cambio de vidrios, ya
            que abarataría los costos de instalación y se aislaría el hueco por
            completo.
          </Paragraph>
          <Paragraph>
            <b>Utilizar selladores y juntas de calidad: </b>
            Para evitar fugas de aire y filtraciones, es importante asegurarse
            de que las ventanas estén correctamente selladas. Se pueden aplicar
            selladores de calidad y utilizar juntas adecuadas para minimizar las
            corrientes de aire.
          </Paragraph>
          <Paragraph>
            <b>Instalar persianas o cortinas térmicas: </b>
            Las persianas o cortinas con propiedades aislantes pueden ayudar a
            reducir la transferencia de calor a través de las ventanas. Estas se
            colocarán donde no las hubiera, o en su caso sustituirlas por unas
            de mayor calidad.
          </Paragraph>
          <Paragraph>
            <b>Considerar el uso de láminas o vinilos reflectantes: </b>
            Estas películas se aplican directamente sobre el vidrio y pueden
            reducir la ganancia solar, bloquear los rayos UV y mejorar la
            privacidad. Son de fácil colocación y tienen precios asequibles.
          </Paragraph>
        </div>
      </div>

      <div className="w-full py-2 bg-white shadow-md rounded-md overflow-hidden">
        <div className="text-lg font-semibold p-4 text-center">
          Recomendaciones en huecos Edificio C
        </div>
        <div>
          En cuanto al Edificio C se ha propuesto la inclusión de Argón entre
          las capas de los vidrios, para así mejorar la transmitancia térmica
          con un coeficiente variable de 0.1 a 0.3 W/m2K
        </div>
      </div>
    </GridHLanz>
  );
};

export default ImrpoveConstructive;
