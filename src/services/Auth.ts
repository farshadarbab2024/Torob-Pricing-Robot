import BaseApiService from "./_BaseApiService";

interface registerData {
    email: string, 
    password: string, 
}


class Auth extends BaseApiService { 
    public static register(data:registerData){
        return this.post("/auth/register", data) ; 
    }   
    public static resendVerificationCode(){
        return this.post(`/auth/email/verify-code/resend`) ; 
    }

    public static verfiyEmail(data: {code: string}){
        return this.post("/auth/email/verify-code", data) ; 
    }
}

export default Auth ; 