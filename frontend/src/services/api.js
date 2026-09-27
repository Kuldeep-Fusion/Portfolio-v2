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

