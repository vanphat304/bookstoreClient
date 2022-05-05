import axios from "axios"
import { apiLogin,apiGetListBook ,apiDeleteBook, apiInsertBook, apiUpdateBook } from "../config"
import { openNoti } from "../page/modal/commonModal"

export const saveUserlogin = (user)=>{
    console.log("user save",user)
    window.localStorage.setItem("userLogin",JSON.stringify(user))
}

export const getUserlogin = ()=>{

    let userLogin = JSON.parse(window.localStorage.getItem("userLogin"))
    console.log("userLogin",userLogin)
     return userLogin;
 }

export const login = async (userLogin)=>{
    try {
        let data = await axios.post(apiLogin,userLogin)
        return data
    } catch (error) {
        console.log("error service",error)
        throw error.message
    }
}
export const getBookList = async ()=>{

    let dataGet = getUserlogin()
    console.log("datadelte",dataGet)
    try {
        let data = await axios.post(apiGetListBook,dataGet)
        return data;

    } catch (error) {
        
    }
}



export const deleteBook = async(id)=>{
    try {
        let dataDelete = {...getUserlogin(),id}
        console.log("datadelte",dataDelete)
        let data = await axios.post(apiDeleteBook,dataDelete)
        return data;
    } catch (error) {     
        console.log("error",error)    
        throw error        
    }
}

export const insertBook = async(data)=>{
    try {
        let dataInsert = {...getUserlogin(),data}
        console.log("data insert",dataInsert)
        let newdata = await axios.post(apiInsertBook,dataInsert)
        return newdata;
    } catch (error) {
        console.log("error servicce",error)
        throw error
    }   
}

export const updateBook = async (data)=>{
    let dataUpdate = {...getUserlogin(),data}
    console.log("data insert",dataUpdate)
    try {
        let newdata = await axios.post(apiUpdateBook,dataUpdate)
        return newdata
    } catch (error) {
        console.log("eroor",error)
        throw error
    }
}

