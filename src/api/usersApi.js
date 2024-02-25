const usersURL = "http//:192.168.1.28:8000/api/users";

export const getUser = async (useForm) => {
  try {
    const response = await fetch(usersURL);
    if (!response.ok) {
      return null;
    }
    const data = response.json();
    return data['hydra:member'];
  } catch (error) {
    throw new "Error fetching user"();
  }
};
