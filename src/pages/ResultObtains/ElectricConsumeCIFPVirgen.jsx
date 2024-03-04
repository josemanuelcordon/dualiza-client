import styled from 'styled-components';
import Table1 from '../../components/Tables/Table1';
import Table2 from '../../components/Tables/Table2';
import Table3 from '../../components/Tables/Table3';
import Table4 from '../../components/Tables/Table4';

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

      {/* Table1 */}
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-md max-h-fit">
        <h2 className="text-lg font-semibold m-2">Parámetros contratados</h2>
        <div className="p-4">
          <Table1 />
        </div>
      </div>

      {/* Table2 */}
      <div className="col-span-2 max-w-full bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="text-lg font-semibold p-4">El consumo y coste eléctrico anual. Periodo 01/10/2018 - 30/09/2019</h2>
        <div className="p-4">
          <Table2 />
        </div>
      </div>

      {/* Table3 */}
      <div className="col-span-2 max-w-full bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="text-lg font-semibold p-4">El consumo y coste eléctrico anual global.</h2>
        <div className="p-4">
          <Table3 />
        </div>
      </div>
    </GridHLanz>

  )
}

export default ElectricConsumeCIFPVirgen