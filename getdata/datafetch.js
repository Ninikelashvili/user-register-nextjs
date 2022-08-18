const BASE_URL = "http://localhost:3000";
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};

export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return "";
};

export const addUser = async (fromData) => {
  try {
    const options = {
      method: "POST",
      headers: { "Cont-Type": "aplication/json" },
      body: JSON.stringify(fromData),
    };
    const response = await fetch(`${BASE_URL}/api/users`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (userId, fromData) => {
  try {
    const options = {
      method: "PUT",
      headers: { "Cont-Type": "aplication/json" },
      body: JSON.stringify(fromData),
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Cont-Type": "aplication/json" },
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
