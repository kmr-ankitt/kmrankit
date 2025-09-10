import { redirect } from 'next/navigation';

interface PageProps {
  params: { reponame: string };
}

export default function Page({ params }: PageProps) {
  redirect(`https://github.com/kmr-ankitt/${params.reponame}`);
  return null;
}
