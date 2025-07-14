export default function PasswordList({ senhas, onSelecionar }) {
  return (
    <div className="lista">
      <h3>Senhas Cadastradas</h3>

      {senhas.length === 0 ? (
        <p>Nenhuma senha cadastrada.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Senha</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {senhas.map((s) => (
              <tr key={s.id}>
                <td>{s.nome}</td>
                <td>{s.usuario}</td>
                <td>{s.senhaCriptografada}</td>
                <td>
                  <button onClick={() => onSelecionar(s)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
