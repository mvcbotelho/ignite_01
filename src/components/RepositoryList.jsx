import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const repos = {
    name: "Unform",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut hendrerit magna dignissim justo posuere, sed laoreet velit euismod.
      Suspendisse orci nisi, vehicula vitae ultricies in, molestie nec nunc.
      Etiam mattis, ipsum ut pharetra varius, nibh mi vehicula erat, vitae
      molestie enim leo sed risus.`,
    link: "https://github.com/unform/unform",
  };

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem
          repository={repos.name}
          description={repos.description}
          link={repos.link}
        />
      </ul>
    </section>
  );
}
