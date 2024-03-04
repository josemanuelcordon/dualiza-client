import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../api/usersApi";
import { Card, Button } from "antd";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  const handleDelete = async (e, userId) => {
    e.preventDefault;
    await deleteUser(userId);
    setForceUpdate((prev) => !prev);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllUsers();
      setUsers(response);
    };
    fetchApi();
  }, [forceUpdate]);
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
              <Button
                onClick={(e) => handleDelete(e, user.id)}
                className="text-red-500 hover:text-red-800 hover:cursor-pointer flex w-52"
              >
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
