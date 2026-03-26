import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})

export async function getAllDustbins(){
    const res = await api.get("/iot/dustbins");
    return res.data;
}

export async function getTotalWeastDeposited(){
    const res = await api.get("/analytics/total");
    return res.data;
}

export async function getAllStudents(){
    const res = await api.get("/admin/students");
    return res.data;
}

export async function getOverallWeeklyAnalytics(){
    const res = await api.get("/analytics/weekly/college");
    return res.data;
}

export async function leaderboard(){
    const res = await api.get("/leaderboard");
    return res.data;
}

export async function createDustbin(name,capacity){
    const res = await api.post("/iot/dustbin/create", { name, capacity });
    return res.data;
}