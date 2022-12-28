export class ProjectsListInterface {
  title: string;
  imgUrl: string;
  description: string;
  path: string;
  altText: string;
  stackblitz: boolean;
  internal: boolean;
  views: number;
  forks: number;
  publishedOn: string;
  updatedOn: string;
  repoLink: string;
  repoTitle: string;
  category: string;
  cached?: boolean;
}
