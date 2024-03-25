import { baseUrl } from "./BaseURL";
import { commonAPI } from "./CommonAPI";

export const registerAPI = async(user) => {
    return await commonAPI ("post",`${baseUrl}/register`,user,"")
}

export const loginAPI = async(user) => {
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}


export const AddDataAPI = async(reqBody,reqHeader) => {
    return await commonAPI("post",`${baseUrl}/data/add`,reqBody,reqHeader)
    
}


export const logoutAPI = async () => {
    try {
        
     return await commonAPI("post", `${baseUrl}/logout`)
    } 
    catch (error) {
        console.log(error.response.data);
    }
};


export const resetPasswordAPI = async (userId, newPassword) => {
    try {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json'
        };

        const response = await commonAPI("post", `${baseUrl}/reset-password`, { userId, newPassword }, reqHeader);
        return response.data; 
    } 
    catch (error) {
        console.log(error.response.data)
    }
};



