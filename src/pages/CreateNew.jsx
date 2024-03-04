import { useReducer } from "react";
import { Divider, message } from "antd";
import { publishNew } from "../api/usersApi";
import { useAuthContext } from "../context/useAuthContext";
import { useNavigate } from "react-router-dom";

let initialState = {
  title: "",
  subtitle: "",
  description: "",
  source: "",
  user: "",
  tag: [],
  image: "",
  section: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_SUBTITLE":
      return {
        ...state,
        subtitle: action.payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "SET_SOURCE":
      return {
        ...state,
        source: action.payload,
      };
    case "SET_IMAGE":
      return {
        ...state,
        image: action.payload,
      };
    case "ADD_SECTION":
      return {
        ...state,
        section: [
          ...state.section,
          {
            title: "",
            description: "",
            img: "",
          },
        ],
      };
    case "REMOVE_SECTION":
      return {
        ...state,
        section: [...state.section.slice(1, state.section.length)],
      };
    case "UPDATE_SECTION":
      return {
        ...state,
        section: state.section.map((sect, index) => {
          if (index === action.index) {
            return {
              ...sect,
              [action.key]: action.value,
            };
          }
          return sect;
        }),
      };
    case "ADD_TAG":
      return {
        ...state,
        subtitle: action.payload,
      };
    default:
      return state;
  }
};

const CreateNew = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const navigate = useNavigate();
  const { username } = useAuthContext();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      dispatch({ type: "SET_IMAGE", payload: e.target.result });
    };
    reader.onerror = (error) => {
      message.error("Error leyendo la imagen");
    };
  };

  const handleSectionImageChange = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      dispatch({
        type: "UPDATE_SECTION",
        index: index,
        key: "img",
        value: e.target.result,
      });
    };
    reader.onerror = (error) => {
      message.error("Error leyendo la imagen");
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await publishNew(state, username);
      navigate("/noticias");
    } catch (error) {
      message.error("Error submitting data: " + error.message);
    }
  }

  return (
    <main className="min-h-[calc(100vh-160px-112px)] p-10 max-w-7xl mx-auto">
      <button
        onClick={() => dispatch({ type: "ADD_SECTION" })}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Añadir Sección
      </button>
      <button
        onClick={() => dispatch({ type: "REMOVE_SECTION" })}
        className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Borrar Sección
      </button>
      <form className="mx-auto my-36" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Título
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="subtitle"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            onChange={(e) =>
              dispatch({ type: "SET_SUBTITLE", payload: e.target.value })
            }
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subtítulo
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="description"
            className="block h-56 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            onChange={(e) =>
              dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
            }
          ></textarea>
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Descripción
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="source"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            onChange={(e) =>
              dispatch({ type: "SET_SOURCE", payload: e.target.value })
            }
          />
          <label
            htmlFor="source"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fuente de información
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            name="image"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        {state.section.map((section, index) => (
          <div key={index}>
            <Divider className="bg-gray-900" />
            <h4>Sección {index + 1}</h4>
            <section className="relative z-0 w-full my-16 group">
              <input
                type="text"
                name="section_title"
                className="block py-2.5 px-0 w-full mb-5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SECTION",
                    index: index,
                    key: "title",
                    value: e.target.value,
                  })
                }
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Título
              </label>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="description"
                  className="block h-56 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder=" "
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_SECTION",
                      index: index,
                      key: "description",
                      value: e.target.value,
                    })
                  }
                ></textarea>
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Descripción
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="file"
                  name="image"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => handleSectionImageChange(e, index)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
                />
              </div>
            </section>
          </div>
        ))}
        <button
          type="submit"
          className="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Publicar Noticia
        </button>
      </form>
    </main>
  );
};

export default CreateNew;
