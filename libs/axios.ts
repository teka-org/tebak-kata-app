import axios from "axios";

export const getAPI = axios.create({
    baseURL: "https://bcd6-2404-8000-1095-99a-c17a-f006-667c-48e2.ngrok-free.app"
})

export const postAPI = axios.create({
    baseURL: 'https://9a89-2404-8000-1095-99a-a5f4-6abf-b4ef-7d6b.ngrok-free.app'
})