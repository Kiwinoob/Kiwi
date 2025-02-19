export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  status: "LATEST" | "OPEN SOURCE";
  createdAt: Date;
  updatedAt: Date;
};
