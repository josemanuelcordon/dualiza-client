import { Avatar, List } from "antd";

const Home = () => {
  const data = [
    {
      title: "Análisis del estado actual de los centros educativos",
    },
    {
      title: "Aplicación directa por parte del alumnado",
    },
    {
      title: "Formación a profesorado y alumnado",
    },
    {
      title: "Estudio de fuentes de energías renovables ",
    },
    {
      title: "Redes colaborativas entre los centros y con emrpesas del entorno",
    },
    {
      title: "Colaboración directa en la página web",
    },
  ];
  return (
    <main className="min-h-[calc(100vh-160px-112px)] p-10 max-w-7xl mx-auto grid grid-cols-2 gap-4">
      <h1 className="text-6xl col-span-2">Proyecto</h1>
      <section className="row-span-2">
        <h2 className="text-4xl">Descripción</h2>
        <p className="rounded-lg bg-customBlue p-4 text-white">
          Es necesario que los centros educativos y su comunidad tomen un papel
          protagonista en acciones que evalúen y mejoren el uso de la energía en
          sus edificios. Hemos conseguido los recursos necesarios y queremos
          compartirlos contigo para estudiar el estado actual de tu centro
          educativo frente a la energía para ver los puntos susceptibles de
          mejorar y con los resultados elaborar una guía de buenas prácticas.
        </p>
      </section>
      <section className="row-span-5 ml-8">
        <h2 className="text-4xl">Objetivos</h2>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{index + 1}</Avatar>}
                title={item.title}
              />
            </List.Item>
          )}
        />
      </section>
      <section className="row-span-3">
        <h2 className="text-4xl">Participantes</h2>
        <ol className="flex items-center justify-center">
          <li className="flex items-center w-full">
            <img className="w-40" src="./image/Logo/Hlanz.png" />
          </li>
          <li className="flex items-center w-full h-1/3">
            <img className="w-40" src="./image/Logo/albaytar.png" />
          </li>
          <li className="flex items-center w-full h-1/3">
            <img className="w-40" src="./image/Logo/VdG.jpg" />
          </li>
          <li></li>
        </ol>
      </section>
    </main>
  );
};

export default Home;
