import { useEffect, useState } from 'react';
import { salvarSenha, editarSenha, excluirSenha } from '../api';

export default function PasswordForm({ onSaved, senhaSelecionada, limparSelecao }) {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Preenche o formulário quando uma senha for selecionada para edição
  useEffect(() => {
    if (senhaSelecionada) {
      setNome(senhaSelecionada.nome);
      setUsuario(senhaSelecionada.usuario);
      setSenha(''); // não exibimos a senha original por segurança
    } else {
      setNome('');
      setUsuario('');
      setSenha('');
    }
  }, [senhaSelecionada]);

  const salvar = async () => {
    const dados = {
      nome,
      usuario,
      senhaCriptografada: senha,
    };

    try {
      if (senhaSelecionada) {
        await editarSenha(senhaSelecionada.id, dados);
      } else {
        await salvarSenha(dados);
      }

      onSaved();
      limparSelecao();
    } catch (err) {
      console.error('Erro ao salvar:', err);
      alert('Erro ao salvar a entrada.');
    }
  };

  const excluir = async () => {
    if (senhaSelecionada && confirm('Deseja mesmo excluir esta entrada?')) {
      try {
        await excluirSenha(senhaSelecionada.id);
        onSaved();
        limparSelecao();
      } catch (err) {
        console.error('Erro ao excluir:', err);
        alert('Erro ao excluir a entrada.');
      }
    }
  };

  return (
    <div className="formulario">
      <h3>{senhaSelecionada ? 'Editar Entrada' : 'Nova Entrada'}</h3>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <div style={{ marginTop: 12 }}>
        <button onClick={salvar}>Salvar</button>
        {senhaSelecionada && <button onClick={excluir} style={{ marginLeft: 8 }}>Excluir</button>}
        {senhaSelecionada && <button onClick={limparSelecao} style={{ marginLeft: 8 }}>Cancelar</button>}
      </div>
    </div>
  );
}
