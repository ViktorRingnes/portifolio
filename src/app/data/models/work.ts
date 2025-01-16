import { Skill } from "./skill";

export interface Work {
  company: string;
  href: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
  skills?: Skill[];
}
