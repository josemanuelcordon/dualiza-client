const usersURL = "http://192.168.70.170:8000/user/api/users";

export const validateUser = async (userForm) => {
  try {
    const response = await fetch(usersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userForm.email,
        password: userForm.password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching user");
  }
};
