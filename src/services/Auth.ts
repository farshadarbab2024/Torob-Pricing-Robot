import BaseApiService from "./_BaseApiService";

interface registerData {
  email: string;
  password: string;
}

class Auth extends BaseApiService {
  public static register(data: registerData) {
    return this.post("/auth/register", data);
  }
  public static resendVerificationCode() {
    return this.post(`/auth/email/verify-code/resend`);
  }

  public static verfiyEmail(data: { code: string }) {
    return this.post("/auth/email/verify-code", data);
  }

  public static login(data: { email: string; password: string }) {
    return this.post("/auth/login", data);
  }
}

export default Auth;
