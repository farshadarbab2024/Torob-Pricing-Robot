import axios from "axios" ; 

class BaseApiService {
    protected static api = axios.create({
        baseURL: import.meta.env.VITE_APP_BASE_URL, 
        headers: {
            "Content-Type": "application/json", 
            "Authorization": "", 
        }, 
        timeout: 8000, 
    }) ;

    private static getAuthHeader(){
        const token = localStorage.getItem("token") ; 
        return token ? {
            Authorization: `Bearer ${token}` 
        } : {} ;
    }

    protected static get<T>(url:string, config = {}){
        const completeConfig = {
            ...config, 
            headers: { ...config["headers"], ...this.getAuthHeader() }
        } ;
        return this.api.get<T>(url, completeConfig) ;
    }

    protected static post<T>(url:string, data:any = {}, config = {}){
        const completeConfig = {
            ...config, 
            headers: { ...config["headers"], ...this.getAuthHeader() }
        } ;
        return this.api.post<T>(url, data, completeConfig) ;
    }

    protected static put<T>(url: string, data: any, config={}){
        const completeConfig = {
            ...config, 
            headers: { ...config["headers"], ...this.getAuthHeader() }
        } ;
        return this.api.put<T>(url, data, completeConfig) ; 
    }

    protected static delete<T>(url: string, config={}){
        const completeConfig = {
            ...config, 
            headers: { ...config["headers"], ...this.getAuthHeader() }
        } ;
        return this.api.delete<T>(url, completeConfig) ; 
    }
}

export default BaseApiService ;