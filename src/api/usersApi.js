const usersURL = "http://192.168.1.28:8000/user/api/validate";

export const validateUser = async (userForm) => {
  try {
    const response = await fetch(usersURL, {
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
    const response = await fetch("http://192.168.1.28:8000/user/api/all");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch("http://192.168.1.28:8000/user/api/users", {
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
  const response = await fetch(`http://192.168.1.28:8000/api/news/${idUser}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.ok;
};

export const getNews = async () => {
  try {
    const response = await fetch("http://192.168.1.28:8000/news");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching news");
  }
};

export const publishNew = async (newData, user) => {
  newData.user = user;
  const response = await fetch("http://192.168.1.28:8000/news/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
};

export const deleteNew = async (idNew) => {
  const response = await fetch(`http://192.168.1.28:8000/api/news/${idNew}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.ok;
};

export const sendEmail = async (email) => {
  const response = await fetch(`http://192.168.1.28:8000/email/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  return response.ok;
};
