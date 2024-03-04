const URL = "http://localhost:8000";

export const validateUser = async (userForm) => {
  try {
    const response = await fetch(`${URL}/user/api/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${URL}/user/api/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${URL}/user/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

export const deleteUser = async (idUser) => {
  const response = await fetch(`${URL}/api/users/${idUser}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.ok;
};

export const getNews = async () => {
  try {
    const response = await fetch(`${URL}/news`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching news");
  }
};

export const publishNew = async (newData, user) => {
  newData.user = user;
  const response = await fetch(`${URL}/news/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
};

export const deleteNew = async (idNew) => {
  const response = await fetch(`${URL}/api/news/${idNew}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.ok;
};

export const sendEmail = async (email) => {
  const response = await fetch(`http://localhost:8000/email/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  return response.ok;
};

export const changeConfig = async (config) => {
  const response = await fetch(`http://localhost:8000/email/config`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
  });
  return response.ok;
};
