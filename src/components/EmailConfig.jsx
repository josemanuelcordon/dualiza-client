import { Input, Button } from "antd";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { changeConfig } from "../api/usersApi";

const inicialState = {
  api_key: "",
  email: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_KEY":
      return { ...state, api_key: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    default:
      return state;
  }
};

const EmailConfig = () => {
  const [state, dispatch] = useReducer(formReducer, inicialState);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    await changeConfig(state);
    navigate("/");
  }
  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10  max-w-5xl mx-auto flex flex-col">
      <section className="flex items-end w-full px-10 pt-20 pb-10 mb-10 rounded-b-xl bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">Configuración de contacto</h1>
      </section>
      <h2 className="text-3xl mb-4">Servicio resend</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="api_key" className="font-bold">
            API KEY
          </label>
          <Input
            size="large"
            required
            placeholder="API KEY"
            name="api_key"
            onChange={(e) =>
              dispatch({ type: "SET_API_KEY", payload: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Correo Electrónico
          </label>
          <Input
            size="large"
            required
            placeholder="Correo electrónico"
            name="email"
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          shape="round"
          className="bg-customBlue"
          size="large"
        >
          Cambiar configuración
        </Button>
      </form>
    </main>
  );
};

export default EmailConfig;
