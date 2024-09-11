
import axios from "axios"
import jwtAxios from "../util/jwtUtil"

export const API_SERVER_HOST = 'https://port-0-mallapi-4fju66f2clmu7lni8.sel5.cloudtype.app'

const host = `${API_SERVER_HOST}/api/products`

export const postAdd = async (product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}

  // 경로 뒤 '/' 주의 
  const res = await jwtAxios.post(`${host}/`, product, header)

  return res.data

}

export const getList = async ( pageParam ) => {

  const {page,size} = pageParam

  const res = await jwtAxios.get(`${host}/list`, {params: {page:page,size:size }})
  
  return res.data

}

export const getOne = async (tno) => {

  const res = await jwtAxios.get(`${host}/${tno}` )

  return res.data

}


export const putOne = async (pno, product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}

  const res = await axios.put(`${host}/${pno}`, product, header)

  return res.data

}

export const deleteOne = async (pno) => {

  const res = await axios.delete(`${host}/${pno}`)

  return res.data

}