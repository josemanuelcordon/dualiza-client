import { useState, useReducer } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Divider } from "antd";
import { publishNew } from "../api/usersApi";
import { useAuthContext } from "../context/useAuthContext";

const initialState = {
  title: "",
  subtitle: "",
  description: "",
  source: "",
  user: "",
  tag: [],
  image: "",
  sections: [],
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
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_IMAGE":
      return {
        ...state,
        image: action.payload,
      };
    case "ADD_SECTION":
      return {
        ...state,
        subtitle: action.payload,
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
  const [sections, setSections] = useState([]);
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { username } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "SET_USER",
      payload: username,
    });
    await publishNew(state);
  }

  return (
    <main className="min-h-[calc(100vh-160px-112px)] p-10 max-w-7xl mx-auto">
      <form className="mx-auto my-36" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="title"
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
            type="text"
            name="image"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={(e) =>
              dispatch({ type: "SET_IMAGE", payload: e.target.value })
            }
          />
          <label
            htmlFor="image"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Imagen
          </label>
        </div>
        <Upload>
          <Button icon={<UploadOutlined />}>Subir Imagen</Button>
        </Upload>
        {sections.map((section, index) => (
          <>
            <Divider className="bg-gray-900" />
            <section key={index} className="relative z-0 w-full my-16 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </section>
          </>
        ))}
        <button
          type="submit"
          className="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => setSections([...sections, 1])}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Add Section
      </button>
    </main>
  );
};

export default CreateNew;
