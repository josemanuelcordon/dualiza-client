import { useEffect, useState } from "react";
import { getAllUsers } from "../api/usersApi";
import { DeleteOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllUsers();
      setUsers(response);
    };
    fetchApi();
  }, []);
  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10  max-w-5xl mx-auto flex flex-col">
      <section className="flex items-end w-full px-10 pt-20 pb-10 mb-10 rounded-b-xl bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">Lista de usuarios</h1>
      </section>
      <section className="flex flex-col gap-8">
        {users.map((user) => (
          <Card
            key={user.id}
            type="inner"
            title={user.username}
            extra={
              <Button className="text-red-500 hover:text-red-800 hover:cursor-pointer flex w-52">
                <DeleteOutlined className="absolute top-10 right-4 hover:text-red-500" />
                Eliminar
              </Button>
            }
          >
            {user.email}
          </Card>
        ))}
      </section>
    </main>
  );
};

export default UserList;
