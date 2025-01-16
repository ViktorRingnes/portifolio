import { SkillType } from "@/app/data/models/types";
import { Skills } from "@/app/data/resume";

export const mapSkill = (skill: string[]) => {
  return skill.map(
    (skill) => Skills.skills.find((s) => s.name === skill) as SkillType
  );
};
