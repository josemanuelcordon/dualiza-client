import { useReducer } from "react";
import CreateUserForm from "../components/Form/CreateUserForm";
import { createUser } from "../api/usersApi";
const inicialState = {
  username: "",
  password: "",
  email: "",
  role: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "SET_ROLE":
      return { ...state, role: [action.payload] };

    default:
      return state;
  }
};

const CreateUser = () => {
  const [state, dispatch] = useReducer(formReducer, inicialState);

  async function handleSubmit(e) {
    e.preventDefault();
    await createUser(state);
  }

  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10  max-w-5xl mx-auto flex flex-col">
      <section className="flex items-end w-full px-10 pt-20 pb-10 mb-10 rounded-b-xl bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">Crear usuario</h1>
      </section>
      <CreateUserForm handleSubmit={handleSubmit} dispatch={dispatch} />
    </main>
  );
};

export default CreateUser;
