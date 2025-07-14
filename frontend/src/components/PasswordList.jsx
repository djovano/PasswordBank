import { useState } from 'react';
import { editarSenha, excluirSenha } from '../api';

export default function PasswordList({ senhas }) {
  const [editandoId, setEditandoId] = useState(null);
  const [dadosEditados, setDadosEditados] = useState({});

  const iniciarEdicao = (senha) => {
    setEditandoId(senha.id);
    setDadosEditados({ ...senha });
  };

  const cancelarEdicao = () => { 
    setEditandoId(null);
    setDadosEditados({});
  };

  const salvarEdicao = async () => {
    await editarSenha(editandoId, dadosEditados);
    setEditandoId(null);
    setDadosEditados({});
    window.location.reload();
  };

  const confirmarExclusao = async (id) => {
    if (confirm('Tem certeza que deseja excluir esta entrada?')) {
      await excluirSenha(id);
      window.location.reload();
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Serviço</th>
          <th>Usuário</th>
          <th>Senha</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {senhas.map((s) => (
          <tr key={s.id}>
            <td>
              {editandoId === s.id ? (
                <input
                  value={dadosEditados.nome}
                  onChange={(e) => setDadosEditados({ ...dadosEditados, nome: e.target.value })}
                />
              ) : (
                s.nome
              )}
            </td>
            <td>
              {editandoId === s.id ? (
                <input
                  value={dadosEditados.usuario}
                  onChange={(e) => setDadosEditados({ ...dadosEditados, usuario: e.target.value })}
                />
              ) : (
                s.usuario
              )}
            </td>
            <td>
              {editandoId === s.id ? (
                <input
                  value={dadosEditados.senhaCriptografada}
                  onChange={(e) => setDadosEditados({ ...dadosEditados, senhaCriptografada: e.target.value })}
                />
              ) : (
                s.senhaCriptografada
              )}
            </td>
            <td>
              {editandoId === s.id ? (
                <>
                  <button onClick={salvarEdicao}>💾 Salvar</button>

                  <button onClick={cancelarEdicao}>❌ Cancelar</button>
                </>
              ) : (
                <>
                  <button onClick={() => iniciarEdicao(s)}>✏️ Editar</button>

                  <button onClick={() => confirmarExclusao(s.id)}>🗑️ Excluir</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
