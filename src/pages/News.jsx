import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { useEffect, useState } from "react";
import { getNews } from "../api/usersApi";

const News = () => {
  const { username } = useAuthContext();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getNews();
      setNews(response);
    };
    fetchApi();
  }, []);

  return (
    <main className="min-h-[calc(100vh-160px-112px)] p-10 max-w-7xl mx-auto flex flex-col items-center">
      {username && (
        <Link
          className="py-3 px-8 rounded-xl bg-blue-400 hover:bg-blue-800 text-white"
          to="/create/new"
        >
          Crear Noticia
        </Link>
      )}
      {news && (
        <section className="w-full rounded-md border-slate-700">
          {news.map((news) => {
            return (
              <div key={news.id} className="w-full p-4">
                <h2 className="text-xl font-bold">{news.title}</h2>
                <p className="text-gray-700">{news.description}</p>
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default News;
