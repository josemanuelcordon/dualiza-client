import Radio3 from "../../components/charts/Radio3";
import Radio2 from "../../components/charts/Radio2";
import { useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 400px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #333;
  margin: 20px;
`;

const Paragraph = styled.p`
  margin: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #555;
`;

const MoreInfoButton = styled.button`
  background-color: #4a90e2;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3161a9;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
`;

const CloseButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #999;
  }
`;

const InstalationClim = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const [showMoreInfo2, setShowMoreInfo2] = useState(false);
  const toggleMoreInfo2 = () => {
    setShowMoreInfo2(!showMoreInfo2);
  };
  const [showMoreInfo3, setShowMoreInfo3] = useState(false);
  const toggleMoreInfo3 = () => {
    setShowMoreInfo3(!showMoreInfo3);
  };
  const [showMoreInfo4, setShowMoreInfo4] = useState(false);
  const toggleMoreInfo4 = () => {
    setShowMoreInfo4(!showMoreInfo4);
  };
  const [showMoreInfo5, setShowMoreInfo5] = useState(false);
  const toggleMoreInfo5 = () => {
    setShowMoreInfo5(!showMoreInfo5);
  };
  const [showMoreInfo6, setShowMoreInfo6] = useState(false);
  const toggleMoreInfo6 = () => {
    setShowMoreInfo6(!showMoreInfo6);
  };
  const [showMoreInfo7, setShowMoreInfo7] = useState(false);
  const toggleMoreInfo7 = () => {
    setShowMoreInfo7(!showMoreInfo7);
  };

  return (
    <>
      <Grid>
        <div className="col-span-2">
          <Title>Instalación Eléctrica</Title>
        </div>
        <div className="col-span-2">
          <Container>
            <div className="p-4">
              <Title>Descripción de las instalaciones</Title>
              <Paragraph>
                El edificio objeto del análisis más pormenorizado ha sido el
                edificio C. En este edificio podemos encontrar diferentes
                equipos de climatización y ventilación:
              </Paragraph>
              <List>
                <ListItem>
                  Sistema de calefacción por radiadores con calderas de
                  condensación de gas natural.
                </ListItem>
                <ListItem>
                  Sistema de climatización con equipos de expansión directa en
                  oficinas y sala técnica donde se encuentra el rack
                  informático.
                </ListItem>
                <ListItem>
                  Unidades de Tratamiento de aire (UTA’s) para asegurar la
                  calidad adecuada de aire por medios mecánicos. Hay dos
                  unidades que están conectadas al circuito de calefacción.
                  Ambas poseen recuperador de calor de flujo cruzado integrado,
                  con un rendimiento que puede oscilar entre 50% y 60%.
                </ListItem>
              </List>
              <img src="/image/climatizacion.png" alt="" />
              <MoreInfoButton onClick={toggleMoreInfo} className="m-4">
                {showMoreInfo ? "Cerrar" : "Más información"}
              </MoreInfoButton>
              {showMoreInfo && (
                <Overlay>
                  <ModalCard>
                    <Title>Información adicional</Title>
                    {/* Poner la imagen en chiquita, que no ocupe toa la pantalla*/}
                    {/* <img src="/image/climatizacion.png" alt="" className="w-50 h-25" /> */}
                    <Paragraph>
                      En la instalación hay 5 circuitos, uno por planta y otro
                      dos para alimentar a las UTAS’s. Cada uno funciona con una
                      bomba circuladora independiente. Esta sectorización de la
                      instalación permite que podamos activar o parar cada uno
                      de los sistemas de bombeo, por lo tanto podamos
                      seleccionar la planta a calefactar de manera
                      independiente. Esta posibilidad de sectorización se debe
                      tener en cuenta a la hora del análisis de los usos y de
                      los consumos energéticos. Además, las bombas
                      recirculadoras son modulantes, lo que las hace que puedan
                      adaptarse a la hora de bombear el caudal solicitado por la
                      instalación en función del número de estancias que
                      demanden servicio de calefacción. Este aspecto hace que la
                      instalación sea eficiente tanto desde el punto de vista de
                      la producción de calor, como de su transporte a las
                      unidades terminales . El sistema de control de la
                      instalación es horario. Este control se realiza a través
                      de un LOGO, donde se define el calendario escolar y el
                      número de horas de funcionamiento de la instalación según
                      la época del año. Una vez que la instalación está en
                      marcha, ya entran en funcionamiento los termostato de
                      zona. Los equipos de expansión directa son tipo split 1x1.
                      Cada uno de ellos está situado en una zona y funciona de
                      manera independiente controlado por su termostato. Este es
                      el único sistema de climatización para verano. La gran
                      mayoría de los equipos son de tecnología inverter. En los
                      edificios A, B y D del centro disponen de una instalación
                      con dos calderas de Gasóleo de 400kW que también funcionan
                      en cascada. En este caso, no hay termostatos de zona, sino
                      válvulas de reglaje programables para el control de la
                      instalación en algunas aulas, básicamente las que tienen
                      un menor horario de ocupación. Esta instalación no se va a
                      definir con más detalle por no haberse estudiado en
                      profundidad en este proyecto.
                      <Paragraph></Paragraph>
                    </Paragraph>
                    <CloseButton onClick={toggleMoreInfo}>Cerrar</CloseButton>
                  </ModalCard>
                </Overlay>
              )}
            </div>
          </Container>
        </div>

        <Container className="col-span-2">
          <div className="p-4">
            <Title>Análisis de los datos de consumo térmico </Title>
            <Paragraph>
              Bases:
              <div className="max-w-md mx-auto p-4">
                <ul className="list-disc ml-6">
                  <li className="mb-2">
                    El sistema de calefacción trabaja durante 243 horas en el
                    año tipo.
                  </li>
                  <li className="mb-2">
                    Los equipos autónomos de aire acondicionado para aulas y
                    despachos trabajan durante 216 horas en el año de estudio.
                  </li>
                  <li className="mb-2">
                    Las Unidades de Tratamiento de Aire (UTA) no funcionan
                    durante el año de estudio.
                  </li>
                  <li>
                    Hay 3 equipos de recirculación de agua caliente de
                    calefacción. Al ser modulantes, se considera que trabajan en
                    torno al 60 % de su capacidad máxima, para el cálculo del
                    consumo eléctrico en instalación de calefacción.
                  </li>
                </ul>
              </div>
              El análisis de los consumos térmicos se ha realizado sobre los
              datos del edificio C del centro por ser el edificio del que más
              información se dispone.
            </Paragraph>
            <div className="flex justify-between">
              <Radio2 />
              <Radio3 />
            </div>
          </div>
        </Container>

        <Container className="col-span-2">
          <Title>Medidas de ahorro energético (MAEs)</Title>
          <MoreInfoButton onClick={toggleMoreInfo2} className="m-4">
            {showMoreInfo2
              ? "Cerrar"
              : "OPTIMIZACIÓN DE LA FACTURACIÓN DE GAS NATURAL"}
          </MoreInfoButton>
          {showMoreInfo2 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <Paragraph>
                  La medida de mejora propuesta busca ajustar la tarifa de facturación a la demanda real 
                  para evitar costes innecesarios. Actualmente, la comercializadora del centro es Gas Natural
                   Fenosa y el tramo de suministro denominado TUR, RL.3, comprende de los 15.000 kWh hasta los 
                   50.000 kWh anuales. Se considera el cambio de compañía a Total Energies, ya que ofrece precios 
                   competitivos y una tarifa de gas más acorde a los consumos declarados para el edificio. La comparativa
                   arroja un precio calculado de 1530 euros para el año tipo de consumo en gas natural.
                </Paragraph>
                <CloseButton onClick={toggleMoreInfo2}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo3} className="m-4">
            {showMoreInfo3
              ? "Cerrar"
              : "MANTENIMIENTOS PREVENTIVOS Y CORRECTIVOS EN LAS UTA"}
          </MoreInfoButton>
          {showMoreInfo3 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <Paragraph>
                  Se recomienda aplicar un plan de mantenimiento preventivo y correctivo a los equipos de tratamiento de
                   aire y sus recuperadores, ya que no se encuentran en óptimas condiciones, aunque no es necesario 
                   renovarlos por equipos más modernos. 
                </Paragraph>
                <Paragraph>
                  El consumo energético de los equipos de ventilación y climatización depende de las pérdidas de presión
                   del sistema en su conjunto, y los filtros de aire tienen un papel clave en el consumo del equipo de ventilación.
                    Es necesario limpiarlos con regularidad y cambiarlos cuando lleguen al final de su periodo de vida útil.
                     Si el grado de suciedad es elevado, los ventiladores se verán forzados a trabajar para compensar las 
                     pérdidas de presión adicionales, lo que repercutirá en un mayor consumo. 
                </Paragraph>
                <Paragraph>
                  También se recomienda sustituir los presostatos diferenciales (DPS) deteriorados para aumentar la 
                  eficiencia de los equipos, acompañado de las necesarias revisiones de los motores de los ventiladores 
                  de impulsión y extracción, así como de sus filtros (G4), y la realización de las operaciones de mantenimiento 
                  preventivas y correctivas pertinentes.
                </Paragraph>
                <CloseButton onClick={toggleMoreInfo3}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo4} className="m-4">
            {showMoreInfo4
              ? "Cerrar"
              : "AHORRO EN CONSUMO ENERGÉTICO DE AIRE ACONDICIONADO"}
          </MoreInfoButton>
          {showMoreInfo4 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <Paragraph>
                  La solución adoptada es la instalación de sensores de movimiento o presencia para evitar que los equipos
                   de aire acondicionado estén funcionando cuando no hay nadie usando las dependencias, y de esta manera, 
                   controlar las consecuencias de gasto energético derivadas de los malos hábitos y el mal uso de estos equipos.
                </Paragraph>
                <Paragraph>
                  En el centro sólo se dispone de 8 equipos autónomos ubicados en algunas dependencias. El sistema 
                  elegido consta de un contactor con relé de trabajo, llamado módulo central, al que se le une mediante
                   bluetooth, un detector de presencia instalado de forma cenital y que ha sido tasado por la empresa 
                   suministradora de material ACTUM.
                </Paragraph>
                <CloseButton onClick={toggleMoreInfo4}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo5} className="m-4">
            {showMoreInfo5
              ? "Cerrar"
              : "SUSTITUCIÓN O PERMUTA DEL EQUIPO AUTÓNOMO DE LA SALA DE RACK"}
          </MoreInfoButton>
          {showMoreInfo5 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <Paragraph>
                  La sala de Rack donde se ubican los recursos informáticos y electrónicos que dan soporte a la red del
                   centro necesitan unas condiciones de temperatura entre 18ªC y 27ºC por lo que se encuentra permanentemente
                    climatizada por un equipo de AC. 
                </Paragraph>
                <Paragraph>
                  Se ha comprobado que tiene una tecnología antigua e ineficiente, y por ello, se propone su sustitución
                   por un equipo nuevo partido de AC Mitsubishi MSZ-HR 25 VF con tecnología INVERTER y calificación 
                   energética A++ en refrigeración y A+++ en calefacción. La tecnología INVERTER evita los picos de arranque 
                   mediante variadores de frecuencia, suponiendo un ahorro del 60% de energía con respecto a la tecnología anterior
                </Paragraph>
                <Paragraph>
                  También se propone, en lugar de su sustitución por un equipo nuevo, la permuta con el equipo de la 
                  sala de archivo de secretaría que actualmente tiene poco uso y tiene mejores prestaciones energéticas,
                   y que trabaja con el mismo refrigerante y sus potencias son similares. Esta propuesta tendría un ahorro 
                   importante en el coste de material y además también en mano de obra, ya que podría plantearse como una práctica 
                   de taller con el alumnado del GS de Mantenimiento de instalaciones térmicas y de fluidos, con la supervisión 
                   del equipo docente.Es altamente recomendable llevar a cabo algunas de estas dos medidas, ya que este equipo
                    de AC es el mayor consumidor de las instalaciones de refrigeración en el centro.
                </Paragraph>
                <CloseButton onClick={toggleMoreInfo5}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo6} className="m-4">
            {showMoreInfo6 ? "Cerrar" : "INSTALACIÓN DE ENERGÍA SOLAR TÉRMICA"}
          </MoreInfoButton>
          {showMoreInfo6 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <Paragraph>
                  Se propone la instalación de energía solar térmica como apoyo de la calefacción. Los equipos elegidos son 
                  4 captadores de la marca Escosol de 2,23 m2 y capacidad de 170 l y un depósito acumulador de 750 l y 
                  temperatura de trabajo de 90ºC.
                </Paragraph>
                <Paragraph>
                  Con esta medida se consigue una mejora en la calificación energética del edificio pasando del rango B
                   al rango A, ya que las emisiones bajarán hasta los 29kg CO2/m2año, y el consumo de energía primaria no 
                   renovable también disminuiría hasta los 145,1 kwh/m2año, tal y como se indica en el certificado energético del edificio.
                </Paragraph>
                <CloseButton onClick={toggleMoreInfo6}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo7} className="m-4">
            {showMoreInfo7 ? "Cerrar" : "INSTALACIÓN ELÉCTRICA"}
          </MoreInfoButton>
          {showMoreInfo7 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <Paragraph>
                  Se propone instalar detectores de presencia que permitan encender y apagar el sistema de iluminación
                   de cada estancia de forma automática, según el nivel de iluminación existente y la presencia de personas. 
                    Además, se propone instalar en el sistema de iluminación, lámparas de tecnología LED en aquellas estancias
                     donde no se haya sustituido aún por lámparas de otra tecnología.
                </Paragraph>
                <Paragraph>
                  Otra medida propuesta consiste en programar los ordenadores para que se apaguen de forma automática cuando finalice 
                  el horario lectivo, para evitar olvidos en los que el ordenador se queda encendido. Con el mismo fin, se propone
                   reducir el tiempo de inactividad de los equipos, activando la suspensión o hibernación del ordenador transcurrido 
                   un determinado tiempo en el que no se está usando.
                </Paragraph>                
                <CloseButton onClick={toggleMoreInfo7}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}
        </Container>
      </Grid>
    </>
  );
};

export default InstalationClim;
