import axios from "axios";

export const getAPI = axios.create({
    baseURL: "https://e7d2-2404-8000-1095-99a-d4f8-edf2-f7c-6aaa.ngrok-free.app"
})

export const postAPI = axios.create({
    baseURL: 'https://ce75-2404-8000-1095-99a-dc74-efd7-a3e6-d1dc.ngrok-free.app'
})