import { LOADING,SUCCESS,FAILED } from "./types";
import axios from 'axios'
export const getPepole=()=>(dispatch)=>{
     dispatch({type:LOADING})
     axios.get('/user/getusers')
     .then(res=>dispatch({type:SUCCESS,payload:res.data}))
     .catch(error=>dispatch({type:FAILED,payload:error.message}))


}
export const addPerson=(data)=>(dispatch)=>{
     axios.post('/user/register',data)
     .then(res=>dispatch(getPepole()))
     .catch(error=>dispatch({type:FAILED,payload:error.message}))


}
export const deletePerson=(id)=>(dispatch)=>{
     dispatch({type:LOADING})
     axios.delete(`/user/deleteuser/${id}`)
     .then(res=>dispatch(getPepole()))
     .catch(error=>dispatch({type:FAILED,payload:error.message}))


}
export const editPerson=(id,data)=>(dispatch)=>{
     
     axios.put(`/user/updateuser/${id}`,data)
     .then(res=>dispatch(getPepole()))
     .catch(error=>dispatch({type:FAILED,payload:error.message}))


}

