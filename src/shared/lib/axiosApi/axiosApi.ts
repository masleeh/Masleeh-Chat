import axios from 'axios'

const $api = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("masleeh_chat_token")}`
    return config
})

$api.interceptors.response.use((config) => {
    return config   
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/refresh`, { withCredentials: true })
            localStorage.setItem("masleeh_chat_token", response.data.access_token)
            return $api.request(originalRequest)
        } catch (error) {
            console.log("Not authorized")
        }
    }
    throw error
})

export default $api