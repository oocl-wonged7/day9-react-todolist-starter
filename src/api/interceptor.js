import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c95868020296630aba1.mockapi.io/api/v1",
});

instance.interceptors.request.use((config) => {
    console.log("Request Interceptor", config);
    config.metadata = {timeStart: new Date()}
    return config;
}, (error) => {
    console.log("Request Interceptor Error", error);
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    console.log("Response Interceptor", response);
    var duration = new Date() - response.config.metadata.timeStart
    console.log(`url: ${response.config.url} method: ${response.config.method} duration:${duration}`)
    // console.log("Request duration", config.metadata.timeEnd - config.metadata.timeStart);
    return response;
}, (error) => {
    if (error.response && error.response.status === 404){
        window.location.href = "/notFoundPage"
    }else if(error.response && error.response.status === 500){
        window.location.href = "/hardStop"
    }
    // console.log("Response Interceptor Error", error);
    return Promise.reject(error);
});

export default instance;