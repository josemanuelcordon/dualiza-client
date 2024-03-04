import styled from 'styled-components';
import Table5 from '../../components/Tables/Table5';
import Table6 from '../../components/Tables/Table6';
import Table7 from '../../components/Tables/Table7';
import Table4 from '../../components/Tables/Table4';
import Table8 from '../../components/Tables/Table8';
import Table9 from '../../components/Tables/Table9';
import Table10 from '../../components/Tables/Table10';

const GridHLanz = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto 1fr;
  gap: 10px;
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

const ElectricConsumeCIFPVirgen = () => {
  return (
     <GridHLanz>
      <Title>Consumo eléctrico</Title>
      <div style={{ gridColumn: '1 / -1' }}>
            <Paragraph>
                La instalación eléctrica del centro consiste en tres acometidas independientes, las cuales suministran energía a las tres partes del centro.
                Todos ellos están regidos por tarifas de tipo 3.0A, siendo la empresa comercializadora GBP (Global Biosfera Protect). 
                En este caso los focos de consumo son el sistema de iluminación, los equipos de ofimática, el sistema de calefacción y otros consumos. 
                De cada foco de consumo se va a realizar una breve introducción y posteriormente se va a mostrar unas tablas con los resultados obtenidos tras 
                el análisis de los distintos consumos. 
            </Paragraph>
        </div>
      {/* Table4 */}
      <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="text-lg font-semibold m-2">Sistemas de iluminación</h2>
        <Paragraph>
            La instalación de iluminación interior está formada, en su mayoría, por lámparas LED aunque en ciertas zonas de poca afluencia hay instaladas lámparas fluorescentes.  
        </Paragraph>
        <div className="p-4">
          <Table4 />
        </div>
      </div>

      {/* Table5 */}
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-md max-h-fit">
        <h2 className="text-lg font-semibold m-2">Ofimática</h2>
        <Paragraph>
            El centro cuenta con una elevada cantidad de ordenadores, proyectores e impresoras. Durante la visita para la auditoría la mayoría de las aulas con ordenadores estaban vacías, por lo que los equipos estaban apagados, pero un detalle a tener en cuenta de cara a posibles mejoras es que muchos monitores (≈60%) tenían el piloto de standby encendido. En cuanto a los equipos de impresión se encuentran principalmente en despachos y en departamentos del profesorado, así como las fotocopiadoras se encuentran en la sala de profesores y conserjería. 
        </Paragraph>
        <div className="p-4">
          <Table5 />
        </div>
      </div>

      {/* Table6 */}
      <div className="col-span-2 max-w-full bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="text-lg font-semibold p-4">Otros equipos eléctricos</h2>
        <div className="p-4">
          <Table6 />
        </div>
      </div>

      {/* Table7 */}
      <div className="col-span-2 max-w-full bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="text-lg font-semibold p-4">Resumen con la potencia instalada en los diferentes sistemas que han sido analizados</h2>
        <div className="p-4">
          <Table7 />
        </div>
      </div>

      {/* Table8 , Table9 , Table10 */}
      <div className="col-span-2 max-w-full bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="text-lg font-semibold p-4">Tarifa contratada para cada cuadro eléctrico</h2>
        <div className="p-4">
          <Table8 />
          <Table9 />
          <Table10 />
        </div>
      </div>

      
    </GridHLanz>

  )
}

export default ElectricConsumeCIFPVirgen