import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',   // ajuste se mudar a porta do backend
});

export const listarSenhas = () => api.get('/senhas');

export const salvarSenha = (dados) => api.post('/senhas', dados);
