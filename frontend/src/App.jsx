import { useEffect, useState } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import { listarSenhas } from './api';
import './App.css';

export default function App() {
  const [senhas, setSenhas] = useState([]);
  const [senhaSelecionada, setSenhaSelecionada] = useState(null);
  const [bloqueado, setBloqueado] = useState(true);
  const [senhaMestre, setSenhaMestre] = useState('');

  const senhaCorreta = '1234'; // exemplo, pode vir do backend futuramente

  const carregar = async () => {
    try {
      const { data } = await listarSenhas();
      setSenhas(data);
    } catch (err) {
      console.error('Erro ao carregar senhas:', err);
    }
  };

  useEffect(() => {
    if (!bloqueado) {
      carregar();
    }
  }, [bloqueado]);

  const desbloquear = () => {
    if (senhaMestre === senhaCorreta) {
      setBloqueado(false);
    } else {
      alert('Senha incorreta');
    }
  };

  const bloquear = () => {
    setBloqueado(true);
    setSenhaMestre('');
    setSenhaSelecionada(null);
    setSenhas([]);
  };

  return (
    <div className="container">
      <h1>Banco de Senhas</h1>

      {bloqueado ? (
        <div className="bloqueado">
          <input
            type="password"
            placeholder="Digite a senha mestre"
            value={senhaMestre}
            onChange={(e) => setSenhaMestre(e.target.value)}
          />
          <button onClick={desbloquear}>Desbloquear</button>
        </div>
      ) : (
        <>
          <div style={{ textAlign: 'right', marginBottom: 16 }}>
            <button onClick={bloquear}>🔒 Bloquear Banco</button>
          </div>

          <PasswordForm
            onSaved={carregar}
            senhaSelecionada={senhaSelecionada}
            limparSelecao={() => setSenhaSelecionada(null)}
          />

          <hr style={{ margin: '24px 0' }} />

          <PasswordList
            senhas={senhas}
            onSelecionar={(senha) => setSenhaSelecionada(senha)}
          />
        </>
      )}
    </div>
  );
}
