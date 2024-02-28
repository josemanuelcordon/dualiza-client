import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useEffect, useState } from "react";
import { deleteNew, getNews } from "../api/usersApi";

const News = () => {
  const { username } = useAuthContext();
  const [news, setNews] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  //Debe de ir en la carpeta utils
  const formatDate = (dateNotFormatted) => {
    const date = new Date(dateNotFormatted);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;

    return `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;
  };

  async function handleDelete(newId) {
    const responseOk = await deleteNew(newId);
    if (!responseOk) {
      message.error("Error al borrar la noticia");
    } else {
      setForceUpdate(!forceUpdate);
    }
  }

  useEffect(() => {
    const fetchApi = async () => {
      const news = await getNews();
      setNews(news);
    };
    fetchApi();
  }, [forceUpdate]);

  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10 max-w-7xl mx-auto flex flex-col items-center">
      <section className="flex items-end w-full px-10 pt-20 pb-10 bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">Noticias</h1>
        {username && (
          <Link
            className="py-3 px-8 rounded-xl bg-blue-400 hover:bg-blue-800 text-white"
            to="/create/new"
          >
            Crear Noticia
          </Link>
        )}
      </section>
      {news && (
        <section className="w-full rounded-md p-8">
          {news.map((n) => (
            <div
              key={n.id}
              className="w-full mb-4 p-4 rounded-md flex h-56 items-center gap-8 border border-solid border-gray-300"
            >
              {n.img && <img className="w-80 rounded-md" src={n.img} />}
              <div className="relative flex flex-col items-start h-full w-full ">
                {username && (
                  <>
                    <EditOutlined className="absolute top-4 right-4 hover:text-customBlueSecundary" />
                    <DeleteOutlined
                      onClick={() => handleDelete(n.id)}
                      className="absolute top-10 right-4 hover:text-red-500"
                    />
                  </>
                )}
                <Link
                  to="/noticia"
                  state={{ pageNew: n }}
                  className="text-2xl font-bold hover:underline h-20 hover:text-colorOrangeHover overflow-hidden text-overflow-ellipsis"
                >
                  {n.title}
                </Link>
                <p className="text-gray-700 h-40 py-4 overflow-hidden text-overflow-ellipsis">
                  {n.description}
                </p>
                <div className="flex items-end h-full w-full">
                  <div className="w-full flex justify-between">
                    <p>Publicado: {formatDate(n.date)}</p>
                    <p>{n.user}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default News;
