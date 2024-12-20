import {
  fetchPinnedRepositories,
  fetchRepositoryDescriptions,
  fetchRepoTags,
  Repository,
} from "@/api/fetchRepo";
import RepoCard from './RepoCard';

export default async function SelectedProjects() {
  const pinnedItems: Repository[] = await fetchPinnedRepositories();
  const topItems = pinnedItems.slice(0, 3);
  const repoDesc : string[] = await fetchRepositoryDescriptions(topItems);
  const repoTags = await fetchRepoTags(topItems);

  return (
    <RepoCard topItems={topItems} repoDesc={repoDesc} repoTags={repoTags} />
  );
}
