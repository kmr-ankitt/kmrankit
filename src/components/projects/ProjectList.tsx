import {
  fetchPinnedRepositories,
  fetchRepositoryDescriptions,
  fetchRepoTags,
  Repository,
} from "@/api/fetchRepo";
import RepoCard from "../home/RepoCard";

export default async function ProjectList() {
  const pinnedItems: Repository[] = await fetchPinnedRepositories();
  const topItems = pinnedItems;
  const repoDesc: string[] = await fetchRepositoryDescriptions(topItems);
  const repoTags = await fetchRepoTags(topItems);

  return (
    <div className="flex flex-col gap-5 my-5 lowercase">
      <div className="grid grid-cols-1 gap-6">
        {topItems.map((item, index) => (
          <RepoCard
            key={item.id}
            repository={item}
            description={repoDesc[index]}
            tags={repoTags[index]}
          />
        ))}
      </div>
    </div>
  );
}
