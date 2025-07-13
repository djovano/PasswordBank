import { useEffect, useState } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import { listarSenhas } from './api';

export default function App() {
  const [senhas, setSenhas] = useState([]);

  // Carrega senhas ao abrir
  const carregar = async () => {
    const { data } = await listarSenhas();
    setSenhas(data);
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: 24 }}> 
      <h1>Banco de Senhas</h1>

      {/* Formulário de cadastro */}
      <PasswordForm onSaved={carregar} />

      <hr style={{ margin: '24px 0' }} />

      {/* Lista de senhas */}
      <PasswordList senhas={senhas} />
    </div>
  );
}
