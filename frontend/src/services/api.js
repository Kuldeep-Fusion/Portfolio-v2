import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

//post contact
export async function PostContact(data) {
    try {
        const response = await axios.post(`${API_URL}/contact/register`, data);
        return response.data
    } catch (error) {
        console.log(
            "Message:",
            error.response?.data?.message ||
            error.message ||
            "Something went wrong"
        );
    }
}

// Get single project by id
export async function GetProjectById(id) {
    try {
        const response = await axios.get(`${API_URL}/project/${id}`);
        return response.data;
    } catch (error) {
        console.log(
            "Message:",
            error.response?.data?.message ||
            error.message ||
            "Something went wrong"
        );
        throw error;
    }
}

// Get all projects
export async function GetAllProjects() {
    try {
        const response = await axios.get(`${API_URL}/project/get-project`);
        return response.data;
    } catch (error) {
        console.log(
            "Message:",
            error.response?.data?.message ||
            error.message ||
            "Something went wrong"
        );
        throw error;
    }
}
