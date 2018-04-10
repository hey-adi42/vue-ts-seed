import axios from 'axios';
import qs from 'qs';
import config from './config';

// import { Message } from 'bfui';

const service = axios.create(config);

// POST传参序列化(添加请求拦截器)
service.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        if (
            config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
        ) {
            // 序列化
            config.data = qs.parse(config.data);
        }
        return config;
    },
    error => {
        alert('报错信息');
        return Promise.reject(error);
    }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
    res => {
        const data = res.data;
        if (data && data.code !== 0 && data.code !== 200) {
            alert('数据异常信息');
            return Promise.reject(data.message);
        }
        return data;
    },
    error => {
        alert('报错信息');
        return Promise.reject(error);
    }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default service;