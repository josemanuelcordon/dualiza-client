import { Select, Input, Button, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CreateUserForm = ({ dispatch, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-bold">
          Nombre de usuario
        </label>
        <Input
          size="large"
          required
          placeholder="Nombre de usuario"
          name="username"
          onChange={(e) =>
            dispatch({ type: "SET_USERNAME", payload: e.target.value })
          }
          prefix={<UserOutlined />}
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
          prefix={<UserOutlined />}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold">
          Contraseña
        </label>
        <Input.Password
          size="large"
          required
          name="password"
          placeholder="Contraseña"
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          prefix={<UserOutlined />}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="font-bold">
          Rol
        </label>
        <Select
          size="large"
          required
          name="role"
          className="w-full"
          placeholder="Rol"
          onChange={(selected) =>
            dispatch({ type: "SET_ROLE", payload: selected })
          }
          options={[
            { value: "ROLE_ADMIN", label: <span>Admin</span> },
            { value: "ROLE_MOD", label: <span>Moderador</span> },
          ]}
        />
      </div>
      <Button
        htmlType="submit"
        type="primary"
        shape="round"
        className="bg-customBlue"
        size="large"
      >
        Crear Usuario
      </Button>
    </form>
  );
};

export default CreateUserForm;
