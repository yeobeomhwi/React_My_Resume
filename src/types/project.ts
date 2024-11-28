export interface Project {
  id: string;
  date: string;
  platform: string;
  title: string;
  duration: number;
  description: string;
  achievements: string[];
  skills: string[];
  status: "제작중" | "제작완료";
  githubUrl: string;
  portfolioUrl: string;
}
