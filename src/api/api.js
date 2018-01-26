import axios from 'axios'
// 请求基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}
