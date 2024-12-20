import { fetchPinnedRepositories, fetchRepositoryDescriptions, Repository } from "@/api/fetchRepo";
import Link from "next/link";

export default async function SelectedProjects() {
  const pinnedItems : Repository[] = await fetchPinnedRepositories();
  const topItems = pinnedItems.slice(0, 3);
  const repoDesc = await fetchRepositoryDescriptions(topItems);

  return (
    <div className="flex flex-col gap-10 my-10 ">
      <h1 className="text-2xl font-extrabold">Selected Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topItems.map((item: Repository, index: number) => (
          <div
            key={item.id}
            className="p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={item.url}>
              <div className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="mb-2 fill-current text-gray-800 dark:text-gray-200"
                >
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg>
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{repoDesc[index]}</p>
              <p className="text-sm text-gray-500">
                ⭐ {item.stargazers.totalCount} stars
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}