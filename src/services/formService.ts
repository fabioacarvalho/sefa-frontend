import api from './api';

const verifyCode = async (code: any, form_id: number) => {
    try {
        const { data } = await api.post('verify', {code: code, form_id: form_id});
        return data;
    } catch (error) {
        console.error('Failed to sign in:', error);
        throw error;
    }
};

const getMunicipios = async () => {
    try {
        const { data } = await api.get('municipios');
        return data;
    } catch (error) {
        console.error('Failed to sign in:', error);
        throw error;
    }
};

const getAllForms = async () => {
    try {
        const { data } = await api.get('forms');
        return data;
    } catch (error) {
        console.error('Failed to sign in:', error);
        throw error;
    }
};

// Cadastro do formulário com pré-save e envio de código de verificação
const addForm = async (payload: any) => {
    try {
        // Passando os dados para a API
        const { data } = await api.post(`form`, payload);
        return data;
    } catch (error) {
        console.error('Failed to add a form:', error);
        throw error;
    }
};


const formService = {
    getMunicipios,
    getAllForms,
    addForm,
    verifyCode
};

export default formService;