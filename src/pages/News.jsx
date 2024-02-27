import { useEffect } from "react";
import { useAuthContext } from "../context/useAuthContext";

const News = () => {
  const { username } = useAuthContext();

  useEffect(() => {
    console.log(username)
  }, [])
  

  return <div>{username && <button type="button">Crear Noticia</button>}</div>;
};

export default News;
