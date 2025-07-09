import axios from "axios";

export const getAllUsers = async () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "x-api-key": "reqres-free-v1",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const firstPageRes = await axios.get(`https://reqres.in/api/users?page=1`, config);
    const { total_pages, per_page, data: firstPageUsers } = firstPageRes.data;

    const otherRequests = [];
    for (let i = 2; i <= total_pages; i++) {
      otherRequests.push(axios.get(`https://reqres.in/api/users?page=${i}`, config));
    }

    const otherResponses = await Promise.all(otherRequests);
    const otherUsers = otherResponses.flatMap((res) => res.data.data);

    const allUsers = [...firstPageUsers, ...otherUsers];

    return {
      users: allUsers,
      perPage: per_page,
      total: allUsers.length,
    };
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  return await axios.delete(`https://reqres.in/api/users/${id}`, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
};

export const updateUser = async (id, userData) => {
  return await axios.put(`https://reqres.in/api/users/${id}`, userData, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
};
