import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export async function purchaseItem(data) {
    const res = await api.post("/vendor/buy", data);
    return res.data;
}
