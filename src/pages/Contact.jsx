import { useReducer } from "react";
import Form from "../components/Form/Form";

const inicialState = {
  email: "",
  TEXT: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET-EMAIL":
      return { ...state, email: action.payload };

    case "SET-TEXT":
      return { ...state, text: action.payload };

    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, inicialState);

  const handleChangeEmail = (e) => {
    dispatch({ type: "SET-EMAIL", payload: e.target.value });
  };
  const handleChangeText = (e) => {
    dispatch({ type: "SET-TEXT", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-[calc(100vh-160px-112px)] p-10 mx-auto max-w-7xl grid grid-cols-1 place-content-center">
      <Form
        handleSubmit={handleSubmit}
        handleChangeText={handleChangeText}
        handleChangeEmail={handleChangeEmail}
        state={state}
      />
    </main>
  );
};

export default Contact;
