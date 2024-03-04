import styled from "styled-components";

const Subtitle = styled.h2`
  margin: 10px auto;
  text-align: left;
  font-weight: bold;
  font-size: 1rem;
  color: #555;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  flex: 1;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;



const ContactForm = (props) => {
  const { dispatch, handleSubmit, state } = props;

  const departamentosHLanz = [
    {
      nombre: 'Dpto. Instalación y Mantenimiento',
      responsable: 'Maria Dolores Sáenz Pajares',
      email: 'msaepaj412@g.educaand.es',
    },
  ];

  const departamentosAlBaytar = [
    {
      nombre: 'Dpto. Instalación y Mantenimiento',
      responsable: 'David Racero',
      email: 'dracpat976@g.educaand.es',
    },
  ];

  const departamentosCFIPVirgen = [
    {
      nombre: 'Dpto. Energía y Agua',
      responsable: 'Raúl Morales Ocaña',
      email: 'rmo14@educastillalamancha.es',
    },
  ];

  

  return (
    <>
      <form onSubmit={handleSubmit} className="col-span-1">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo electrónico
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="subject"
            id="subject"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            value={state.subject}
            onChange={(e) =>
              dispatch({ type: "SET_SUBJECT", payload: e.target.value })
            }
          />
          <label
            htmlFor="subject"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Asunto
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            value={state.body}
            name="body"
            id="body"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) =>
              dispatch({ type: "SET_BODY", payload: e.target.value })
            }
          />
          <label
            htmlFor="body"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Cuerpo
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enivar
        </button>
      </form>

  <div className="container mx-auto mt-8">
      <StyledList>
        <Card>
          <Subtitle>IES POLITÉCNICO HERMENEGILDO LANZ</Subtitle>
          {departamentosHLanz.map((departamento, index) => (
            <ListItem key={index}>
              <h2 className="text-m font-semibold">{departamento.nombre}</h2>
              <p className="text-gray-600">{`Responsable: ${departamento.responsable}`}</p>
              <p className="text-blue-500">{`Email: ${departamento.email}`}</p>
            </ListItem>
          ))}
        </Card>

        <Card>
          <Subtitle>IES AL-BAYTAR</Subtitle>
          {departamentosAlBaytar.map((departamento, index) => (
            <ListItem key={index}>
              <h2 className="text-m font-semibold">{departamento.nombre}</h2>
              <p className="text-gray-600">{`Responsable: ${departamento.responsable}`}</p>
              <p className="text-blue-500">{`Email: ${departamento.email}`}</p>
            </ListItem>
          ))}
        </Card>

        <Card>
          <Subtitle>CIFP VIRGEN DE GRACIA</Subtitle>
          {departamentosCFIPVirgen.map((departamento, index) => (
            <ListItem key={index}>
              <h2 className="text-m font-semibold">{departamento.nombre}</h2>
              <p className="text-gray-600">{`Responsable: ${departamento.responsable}`}</p>
              <p className="text-blue-500">{`Email: ${departamento.email}`}</p>
            </ListItem>
          ))}
        </Card>
      </StyledList>
    </div>
    </>
  );
};

export default ContactForm;
