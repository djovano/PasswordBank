import { useState } from 'react';
import { salvarSenha } from '../api';

export default function PasswordForm({ onSaved }) {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !usuario || !senha) return alert('Preencha todos os campos!');

    await salvarSenha({
      nome,
      usuario,
      senhaCriptografada: senha   // o backend criptografa
    });

    setNome('');
    setUsuario('');
    setSenha('');
    onSaved();                    // recarrega lista
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        placeholder="Serviço"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        placeholder="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}
