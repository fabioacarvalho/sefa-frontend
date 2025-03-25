import api from "./api";

const signIn = async (username: string, password: string) => {
    try {
        const response = await api.post("sign-in", {
            email: username,
            senha: password,
        });

        return response.data;
    } catch (error) {
        console.error("Failed to sign in:", error);
        throw error;
    }
};

const refreshAccessToken = async (refreshToken: string) => {
    try {
        const response = await api.post("refresh-token/", { refresh_token: refreshToken });

        console.log(response)

        if (response.data?.access_token) {
            return {
                access_token: response.data.access_token,
            };
        }
        throw new Error("No access token received");
    } catch (error) {
        console.error("Failed to refresh token:", error);
        throw error;
    }
};

const authService = {
    signIn,
    refreshAccessToken,
};

export default authService;