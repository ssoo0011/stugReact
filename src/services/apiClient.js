import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080", // 스프링 포트
    timeout: 10000,
});

export default api;
