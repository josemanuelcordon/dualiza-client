import { useAuthContext } from "../context/useAuthContext";

const News = () => {
  const { username } = useAuthContext();

  return <div>{username && <button type="button">Crear Noticia</button>}</div>;
};

export default News;
