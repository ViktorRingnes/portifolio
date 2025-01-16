import { SkillType } from "./types";

export interface miniProjects {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  href: string;
  links: {
    type: string;
    href: string;
    icon: string;
  }[];
  technologies: SkillType[];
}
