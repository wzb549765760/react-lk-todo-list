import axios from 'axios'

let baseUrl = "";
if (process.env.NODE_ENV === "development") {
    /*本地*/
    baseUrl = "/hsDeposit";
    // baseUrl = "http://192.168.8.36:8080/";
} else {
    baseUrl = "";
    /*生产*/
    // baseUrl = "http://192.168.1.86:8000/v1";/*生产*/
}
// axios 配置
//axios.defaults.timeout = 5000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.baseURL = 'http://192.168.10.101:8888/app';

axios.defaults.withCredentials = true;

// 请求超时拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error.response)
});

// 请求完成后的拦截器
axios.interceptors.response.use(response => {
    return response
}, error => {
    // 这里我们把错误信息扶正, 后面就不需要写 catch 了
    return Promise.resolve(error.response)
});

function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response.data;
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '无法连接到服务器'
    }
}


export default {
    post(url, data, rollBack) {
        return axios({
            method: 'post',
            //			baseURL: 'http://192.168.1.223:8000/v1',//(ip)
            baseURL: baseUrl, //（生产）
            url,
            data: data,
            // dataType: "json",
            timeout: 60000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                // 'Access-Control-Max-Age': '1209600',
                // 'Content-Type': 'multipart/form-data'
                'Content-Type': 'application/json',
            }
        }).then(
            (response) => {
                return rollBack(checkStatus(response))
            }
        ).catch(
            (res) => {
                // return rollBack("error")
            }
        )
    },
    get(url, params, rollBack) {
        return axios({
            method: 'get',
            baseURL: baseUrl, //（生产）
            //			baseURL: 'http://192.168.1.171:8888/app',
            url,
            headers: {
                // 'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                // 'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Max-Age': '1209600'
            },
            params, // get 请求时带的参数
            timeout: 60000
        }).then(
            (response) => {
                return rollBack(checkStatus(response))
            }
        ).catch(
            (res) => {
                // return rollBack("error")
            }
        )
    }
}
