import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/senhas',
});

export const listarSenhas = () => API.get();
export const salvarSenha = (senha) => API.post('', senha);
export const editarSenha = (id, senha) => API.put(`/${id}`, senha); 
export const excluirSenha = (id) => API.delete(`/${id}`);           

