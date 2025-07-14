import { useEffect, useState } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import { listarSenhas } from './api';
import './App.css';

export default function App() {
  const [senhas, setSenhas] = useState([]);

  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [desbloqueado, setDesbloqueado] = useState(false);

  const SENHA_MESTRE = '1234';

  const carregar = async () => {
    const { data } = await listarSenhas();
    setSenhas(data);
  };

  useEffect(() => {
    if (desbloqueado) carregar();
  }, [desbloqueado]);

  const tentarDesbloquear = () => {
    if (senhaDigitada === SENHA_MESTRE) {
      setDesbloqueado(true);
      setSenhaDigitada('');
    } else {
      alert('Senha incorreta!');
    }
  };

  const bloquear = () => {
    setDesbloqueado(false);
    setSenhas([]);
    setSenhaDigitada('');
  };

  if (!desbloqueado) {
    return (
      <div className="bloqueio">
        <h2>🔒 Digite a senha mestre</h2>
        <input
          type="password"
          value={senhaDigitada}
          onChange={(e) => setSenhaDigitada(e.target.value)}
          placeholder="Senha mestre"
        />
        <button onClick={tentarDesbloquear}>Desbloquear</button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Banco de Senhas</h1>
        <button onClick={bloquear}>🔒 Bloquear</button>
      </div>

      <PasswordForm onSaved={carregar} />

      <hr style={{ margin: '24px 0' }} />

      <PasswordList senhas={senhas} onSaved={carregar} />
    </div>
  );
}
