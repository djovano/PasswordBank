export default function PasswordList({ senhas }) {
  if (!senhas.length) return <p>Nenhuma senha cadastrada ainda.</p>;

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Serviço</th>
          <th>Usuário</th>
          <th>Senha</th>
        </tr>
      </thead>
      <tbody>
        {senhas.map((s) => (
          <tr key={s.id}>
            <td>{s.nome}</td>
            <td>{s.usuario}</td>
            <td>{s.senhaCriptografada}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
