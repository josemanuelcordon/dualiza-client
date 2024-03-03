import styled from 'styled-components';
import Radio from '../../components/charts/Radio';
import Table1 from '../../components/Tables/Table1';
import Table2 from '../../components/Tables/Table2';
import Table3 from '../../components/Tables/Table3';

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

const ResultObtained = () => {

  return (
    <GridHLanz>
      <Title>Consumo eléctrico IES Hermenegildo Lanz</Title>

      {/* Radio Chart */}
      <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-4">
          <Radio />
        </div>
        <Paragraph>
          Los principales focos de consumo eléctrico están presentes en receptores como ordenadores, monitores, altavoces, impresoras, proyectores, 
          equipos de iluminación, equipos de climatización y ventilación colectiva, split y radiadores eléctricos, principalmente.
        </Paragraph>
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

    
  );
};

export default ResultObtained;