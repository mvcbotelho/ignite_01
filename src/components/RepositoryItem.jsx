export function RepositoryItem({ repository, description, link }) {
  return (
    <li>
      <strong>{repository ?? "Default"}</strong>
      <p>{description ?? "Descrição indisponível"}</p>
      <a href={link}>Acessar repositório</a>
    </li>
  );
}
