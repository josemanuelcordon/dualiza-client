import { useState } from "react";
import { validateUser } from "../api/usersApi";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

import { Spin } from "antd";

const LoginPage = () => {
  const { login } = useAuthContext();
  const [userForm, setUserForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function hanleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await validateUser(userForm);
      setLoading(false);
      if (user.login) {
        login(user.username, user.admin);
        navigate("/");
      } else {
        setError("Usuario no encontrado, intentelo de nuevo.");
      }
    } catch (error) {
      setLoading(false);
      setError("Imposible logear");
    }
  }

  return (
    <section className="h-screen flex items-center justify-center bg-customBlue">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <a
          href="#"
          className="flex items-center mb-6 text-3xl font-semibold text-gray-900"
        >
          <img
            className=" w-32 h-32 mr-2 "
            src="/image/LogoLogin.png"
            alt="logo"
          />
          Dualiza
        </a>
        <div className="p-6">
          <h1 className="text-xl font-bold leading-tight text-gray-900">
            Iniciar sesion
          </h1>
          <form className="mt-6" action="#">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setUserForm({
                    ...userForm,
                    email: e.target.value.trim().toLowerCase(),
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="name@example.com"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setUserForm({
                    ...userForm,
                    password: e.target.value.trim().toLowerCase(),
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="••••••••"
                required=""
              />
            </div>
            {error && (
              <p className=" text-red-500">Usuario o contraseña incorrecta</p>
            )}
            <button
              className={`w-full ${
                loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              } focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-md text-sm py-2.5`}
              onClick={hanleSubmit}
              disabled={loading}
            >
              {loading ? <Spin /> : "Inicar Sesion"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
