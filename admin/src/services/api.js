import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

// GET PROJECTS
export const getProjects = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/project/get-project`
    );

    return response.data;
  } catch (error) {
    console.error("Get Projects Error:", error);
  }
};


// CREATE PROJECT
export const postProject = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/project/create`,
      data
    );

    return response.data;
  } catch (error) {
    console.error("Create Project Error:", error);
  }
};


// DELETE PROJECT
export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/project/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Delete Project Error:", error);
  }
};


// GET CONTACTS
export const getContact = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/contact/get-contact`
    );

    return response.data;
  } catch (error) {
    console.error("Get Contact Error:", error);
  }
};

//login User
export async function LoginUser(data) {
  try {
    const response = await axios.post(`${API_URL}/user/login`, data);
    console.log('User:', response?.data.message);
    return response.data;
  } catch (error) {
    console.log('Server Error Details:', error.response?.data);
  throw error;
  }
}

export async function GetUser(id) {
  try {
    const response = await axios.get(`${API_URL}/user/${id}`);
  return response.data;
  } catch (error) {
    console.log('Failed to get User:', error?.response.data);
     throw error;
  }
}

