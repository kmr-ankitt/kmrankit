import {
  fetchPinnedRepositories,
  fetchRepositoryDescriptions,
  fetchRepoTags,
  Repository,
} from "@/api/fetchRepo";
import RepoCard from "../home/RepoCard";

export default async function SelectedProjects() {
  const pinnedItems: Repository[] = await fetchPinnedRepositories();
  const topItems = pinnedItems;
  const repoDesc: string[] = await fetchRepositoryDescriptions(topItems);
  const repoTags = await fetchRepoTags(topItems);

  return (
    <div>
      <div className="flex flex-col gap-10 my-10 lowercase">
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
      <div></div>
    </div>
  );
}
