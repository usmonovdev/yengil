import axios from "axios";

axios.defaults.baseURL = "https://nest-yengil-app-54jp.onrender.com/api"

// axios.interceptors.request.use(parametr => {
//     const token = JSON.parse(localStorage.getItem("TOKEN"))
//     const authorization = token ? `Token ${token}` : ""
//     parametr.headers.Authorization = authorization
//     return parametr
// })

export default axios