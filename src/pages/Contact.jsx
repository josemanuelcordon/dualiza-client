import { useReducer } from "react";
import ContactForm from "../components/Form/ContactForm";
import { sendEmail } from "../api/usersApi";
import { message } from "antd";

const inicialState = {
  email: "",
  subject: "",
  body: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "SET_SUBJECT":
      return { ...state, subject: action.payload };

    case "SET_BODY":
      return { ...state, body: action.payload };

    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, inicialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailOk = await sendEmail(state);
    if (emailOk) {
      message.success("Email enviado correctamente");
    } else {
      message.error("Error al enviar el email");
    }
  };

  return (
    <main className="min-h-[calc(100vh-160px-112px)] p-10 mx-auto max-w-7xl grid grid-cols-1 place-content-center">
      <ContactForm
        handleSubmit={handleSubmit}
        dispatch={dispatch}
        state={state}
      />
    </main>
  );
};

export default Contact;
