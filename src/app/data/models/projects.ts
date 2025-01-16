import { SkillType } from "./types";

export interface Projects {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: SkillType[];
  links: {
    type: string;
    href: string;
    icon: string
  }[];
  image: string;
}
