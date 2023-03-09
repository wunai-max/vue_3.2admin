import axios from 'axios'
import {
  ElMessage
} from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// axios响应请求拦截器 简化返回数据
service.interceptors.response.use(
  (response) => {
    // console.log(response)
    const {
      data,
      meta
    } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

export default service