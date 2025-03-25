import axios from "axios";
import authService from "./authService";

const API_BASE_URL = "http://localhost:8000/";

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const setupRequestInterceptor = (getToken: () => string | null) => {
    api.interceptors.request.use(
        (config) => {
            const token = getToken();
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
};

// export const setupResponseInterceptor = (
//     getRefreshToken: () => string | null,
//     updateAccessToken: (newToken: string) => void,
//     logout: () => void
// ) => {
//     api.interceptors.response.use(
//         (response) => response,
//         async (error) => {
//             const originalRequest = error.config;

//             if (error.response?.status === 401) {
//                 const refreshToken = getRefreshToken();

//                 // Se não há refresh token, já desloga
//                 if (!refreshToken) {
//                     console.error("No refresh token available, logging out.");
//                     logout();
//                     return Promise.reject(error);
//                 }

//                 // Se já tentou renovar e falhou, desloga para evitar loop
//                 if (originalRequest._retry) {
//                     console.error("Token refresh already attempted and failed, logging out.");
//                     logout();
//                     return Promise.reject(error);
//                 }

//                 originalRequest._retry = true;

//                 try {
//                     // Tenta renovar o token
//                     const { access_token } = await authService.refreshAccessToken(refreshToken);
                    
//                     // Se conseguiu, atualiza o token e refaz a request original
//                     updateAccessToken(access_token);
//                     originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
//                     return api(originalRequest);
//                 } catch (refreshError) {
//                     console.error("Token refresh failed, logging out.");
//                     logout();
//                     return Promise.reject(refreshError);
//                 }
//             }

//             return Promise.reject(error);
//         }
//     );
// };

export const setupResponseInterceptor = (
    getRefreshToken: () => string | null,
    updateAccessToken: (newToken: string) => void,
    logout: () => void
) => {
    api.interceptors.response.use(
        response => response,
        async (error) => {
            const originalRequest = error.config;

            // Verificar se a requisição é para o endpoint de refresh ou já foi retentada
            if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== 'refresh-token/') {
                originalRequest._retry = true;

                const refreshToken = getRefreshToken();

                if (!refreshToken) {
                    console.error("Sem refresh token, deslogando...");
                    logout();
                    return Promise.reject(error);
                }

                try {
                    console.log("Tentando atualizar o token...");
                    const { access_token } = await authService.refreshAccessToken(refreshToken);

                    if (!access_token) {
                        console.error("Token de acesso não recebido, deslogando...");
                        logout();
                        return Promise.reject(error);
                    }

                    updateAccessToken(access_token);
                    originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

                    return api(originalRequest);
                } catch (refreshError) {
                    console.error("Falha ao atualizar o token, deslogando...");
                    logout();
                    return Promise.reject(refreshError);
                }
            }

            // Se for uma requisição para refresh-token/ com 401, deslogue
            if (error.config.url === 'refresh-token/') {
                console.error("Refresh token inválido, deslogando...");
                logout();
            }

            return Promise.reject(error);
        }
    );
};

export default api;