import Radio3 from '../../components/charts/Radio3';
import Radio2 from '../../components/charts/Radio2';
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

const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 10px;
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
    <Container>
      <div className="p-4">
        <Title>Descripción de las instalaciones</Title>
        <Paragraph>
          El edificio objeto del análisis más pormenorizado ha sido el edificio C. En este edificio podemos encontrar diferentes equipos de climatización y ventilación:
        </Paragraph>
        <List>
          <ListItem>Sistema de calefacción por radiadores con calderas de condensación de gas natural.</ListItem>
          <ListItem>Sistema de climatización con equipos de expansión directa en oficinas y sala técnica donde se encuentra el rack informático.</ListItem>
          <ListItem>
            Unidades de Tratamiento de aire (UTA’s) para asegurar la calidad adecuada de aire por medios mecánicos. Hay dos unidades que están conectadas al circuito de calefacción. Ambas poseen recuperador de calor de flujo cruzado integrado, con un rendimiento que puede oscilar entre 50% y 60%.
          </ListItem>
        </List>
        <img src="/image/climatizacion.png" alt="" />
        <MoreInfoButton onClick={toggleMoreInfo} className='m-4'>
          {showMoreInfo ? "Cerrar" : "Más información"}
        </MoreInfoButton>
        {showMoreInfo && (
          <Overlay>
            <ModalCard>
              <Title>Información adicional</Title>
              {/* Poner la imagen en chiquita, que no ocupe toa la pantalla*/}
                {/* <img src="/image/climatizacion.png" alt="" className="w-50 h-25" /> */}
              <Paragraph>
                En la instalación hay 5 circuitos, uno por planta y otro dos para alimentar a las UTAS’s. Cada uno funciona con una
                 bomba circuladora independiente. Esta sectorización de la instalación permite que podamos activar o parar cada uno 
                 de los sistemas de bombeo, por lo tanto podamos seleccionar la planta a calefactar de manera independiente. Esta 
                 posibilidad de sectorización se debe tener en cuenta a la hora del análisis de los usos y de los consumos energéticos.
                Además, las bombas recirculadoras son modulantes, lo que las hace que puedan adaptarse a la hora de bombear el caudal 
                solicitado por la instalación en función del número de estancias que demanden servicio de calefacción.
                Este aspecto hace que la instalación sea eficiente tanto desde el punto de vista de la producción de calor, como de 
                su transporte a las unidades terminales .
                El sistema de control de la instalación es horario. Este control se realiza a través de un LOGO, donde se define el 
                calendario escolar y el número de horas de funcionamiento de la instalación según la época del año. Una vez que la
                 instalación está en marcha, ya entran en funcionamiento los termostato de zona.
                Los equipos de expansión directa son tipo split 1x1. Cada uno de ellos está situado en una zona y funciona de manera 
                independiente controlado por su termostato. Este es el único sistema de climatización para verano. La gran mayoría de 
                los equipos son de tecnología inverter.
                En los edificios A, B y D del centro disponen de una instalación con dos calderas de Gasóleo de 400kW que también 
                funcionan en cascada. En este caso, no hay termostatos de zona, sino válvulas de reglaje programables para el control
                 de la instalación en algunas aulas, básicamente las que tienen un menor horario de ocupación. Esta instalación no se
                  va a definir con más detalle por no haberse estudiado en profundidad en este proyecto.                                
                <Paragraph>

                </Paragraph>
              </Paragraph>
              <CloseButton onClick={toggleMoreInfo}>Cerrar</CloseButton>
            </ModalCard>
          </Overlay>
        )}
      </div>
    </Container>

 <Container>
        <div className="p-4">
          <Title>Análisis de los datos de consumo térmico </Title>
          <Paragraph>
            Bases:
            <div className="max-w-md mx-auto p-4">
              <ul className="list-disc ml-6">
                <li className="mb-2">
                  El sistema de calefacción trabaja durante 243 horas en el año tipo.
                </li>
                <li className="mb-2">
                  Los equipos autónomos de aire acondicionado para aulas y despachos trabajan durante 216 horas en el año de estudio.
                </li>
                <li className="mb-2">
                  Las Unidades de Tratamiento de Aire (UTA) no funcionan durante el año de estudio.
                </li>
                <li>
                  Hay 3 equipos de recirculación de agua caliente de calefacción. Al ser modulantes, se considera que trabajan en torno al 60 % de su capacidad máxima, para el cálculo del consumo eléctrico en instalación de calefacción.
                </li>
              </ul>
            </div>
            El análisis de los consumos térmicos se ha realizado sobre los datos del edificio C del centro 
            por ser el edificio del que más información se dispone. 
          </Paragraph>
          <div className="flex justify-between">
              <Radio2 />
              <Radio3 />
            </div>
        </div>
      </Container>



        <div className='span-col-2 max-w-full'>
      <Container >
          <Title>Medidas de ahorro energético (MAEs)</Title>            
          <MoreInfoButton onClick={toggleMoreInfo2} className='m-4'>
            {showMoreInfo2 ? "Cerrar" : "OPTIMIZACIÓN DE LA FACTURACIÓN DE GAS NATURAL"}
          </MoreInfoButton>
          {showMoreInfo2 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <CloseButton onClick={toggleMoreInfo2}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo3} className='m-4'>
            {showMoreInfo3 ? "Cerrar" : "MANTENIMIENTOS PREVENTIVOS Y CORRECTIVOS EN LAS UTA"}
          </MoreInfoButton>
          {showMoreInfo3 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <CloseButton onClick={toggleMoreInfo3}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

            <MoreInfoButton onClick={toggleMoreInfo4} className='m-4'>
            {showMoreInfo4 ? "Cerrar" : "AHORRO EN CONSUMO ENERGÉTICO DE AIRE ACONDICIONADO"}
          </MoreInfoButton>
          {showMoreInfo4 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <CloseButton onClick={toggleMoreInfo4}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

           <MoreInfoButton onClick={toggleMoreInfo5} className='m-4'>
            {showMoreInfo5 ? "Cerrar" : "SUSTITUCIÓN O PERMUTA DEL EQUIPO AUTÓNOMO DE LA SALA DE RACK"}
          </MoreInfoButton>
          {showMoreInfo5 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <CloseButton onClick={toggleMoreInfo5}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo6} className='m-4'>
            {showMoreInfo6 ? "Cerrar" : "INSTALACIÓN DE ENERGÍA SOLAR TÉRMICA"}
          </MoreInfoButton>
          {showMoreInfo6 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <CloseButton onClick={toggleMoreInfo6}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}

          <MoreInfoButton onClick={toggleMoreInfo7} className='m-4'>
            {showMoreInfo7 ? "Cerrar" : "INSTALACIÓN ELÉCTRICA"}
          </MoreInfoButton>
          {showMoreInfo7 && (
            <Overlay>
              <ModalCard>
                <Title>Información adicional</Title>
                <CloseButton onClick={toggleMoreInfo7}>Cerrar</CloseButton>
              </ModalCard>
            </Overlay>
          )}
      </Container>
        </div>
    </Grid>
    
    </>
  );
};

export default InstalationClim;
