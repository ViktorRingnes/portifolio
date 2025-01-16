import { mapSkill } from "@/lib/mapSkill";
import {
  EducationType,
  MiniProjectType,
  ProjectType,
  SkillType,
  WorkType,
} from "./models/types";

export const Skills: { skills: SkillType[] } = {
  skills: [
    { name: "React", color: "#61DAFB", href: "https://reactjs.org" },
    { name: "Next.js", color: "#000000", href: "https://nextjs.org" },
    {
      name: "Typescript",
      color: "#3178C6",
      href: "https://www.typescriptlang.org",
    },
    { name: "Node.js", color: "#339933", href: "https://nodejs.org" },
    {
      name: "C#",
      color: "#512BD4",
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    { name: ".NET", color: "#512BD4", href: "https://dotnet.microsoft.com" },
    { name: "Postgres", color: "#336791", href: "https://www.postgresql.org" },
    { name: "MongoDB", color: "#47A248", href: "https://www.mongodb.com" },
    { name: "TailwindCSS", color: "#06B6D4", href: "https://tailwindcss.com" },
    { name: "Azure", color: "#0089D6", href: "https://azure.microsoft.com" },
    {
      name: "AI Search",
      color: "#00A4EF",
      href: "https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search",
    },
    { name: "C++", color: "#A1549D", href: "https://isocpp.org" },
  ],
};

export const Work: { work: WorkType[] } = {
  work: [
    {
      company: "Statens lånekasse for utdanning",
      href: "https://lanekassen.no",
      location: "Oslo, Norway",
      title: "Software Engineer Apprentice",
      logoUrl: "/CompanyLogos/lanekassen.png",
      start: "August 2024",
      end: "Present",
      description: `Worked as part of a 2 man apprentice team developing the company's test center for retrieving anonymized data for testing purposes.`,
      skills: mapSkill([
        "React",
        "Typescript",
        "C#",
        "Postgres",
        "Azure",
        ".NET",
        "AI Search",
      ]),
    },
    {
      company: "Statens lånekasse for utdanning",
      href: "https://lanekassen.no",
      location: "Oslo, Norway",
      title: "Software Engineer Intern",
      logoUrl: "/CompanyLogos/lanekassen.png",
      start: "February 2024",
      end: "March 2024",
      description: `Worked as part of the team developing the case management system for loan and stipend applications.`,
      skills: mapSkill(["React", "Typescript", "C#", "Azure", ".NET"]),
    },
    {
      company: "Intility",
      href: "https://intility.no",
      location: "Oslo, Norway",
      title: "Software Engineer Intern",
      logoUrl: "/CompanyLogos/Intility.png",
      start: "June 2023",
      end: "July 2023",
      description: `Worked as part of an intern team focusing on recreating company tools as a learning experience.`,
      skills: mapSkill(["React", "Typescript"]),
    },
  ],
};

export const Education: { education: EducationType[] } = {
  education: [
    {
      school: "Kuben High School",
      href: "https://kuben.vgs.no",
      degree: "Information Technology",
      logoUrl: "/Education/Kuben.png",
      start: "2022",
      end: "2024",
    },
  ],
};

export const Projects: { projects: ProjectType[] } = {
  projects: [
    {
      title: "Blackwater",
      href: "https://clarknet.site",
      description:
        "An intelligence website that handles advanced user authentication, and strict role based access access to complex and user friendly tools.",
      dates: "2024 - Present",
      active: true,
      technologies: mapSkill([
        "React",
        "Next.js",
        "Typescript",
        "MongoDB",
        "C#",
        ".NET",
        "TailwindCSS",
      ]),
      links: [
        {
          type: "Website",
          href: "https://clarknet.site",
          icon: "globe",
        },
      ],
      image: "/Projects/Blackwater.png",
    },
    {
      title: "Clarke",
      href: "https://clarkcounty.site",
      description:
        "Online betting website created for a ROBLOX community, with a focus on user experience and ease of use. Reached 1000 users in the first month with 5 million HTTP requests, no security vulnerabilities with 100% uptime.",
      dates: "October 2024 - December 2024",
      active: false,
      technologies: mapSkill([
        "React",
        "Next.js",
        "Typescript",
        "Postgres",
        "TailwindCSS",
      ]),
      links: [],
      image: "/Projects/Clarke.png",
    },
  ],
};

export const MiniProjects: { miniProjects: MiniProjectType[] } = {
  miniProjects: [
    {
      title: "ShaNext",
      dates: "2024",
      href: "https://github.com/ViktorRingnes/ShaNext",
      location: "Oslo, Norway",
      description: "A high performance and easy to use hashing library for C#.",
      image: "/MiniProjects/Github.png",
      links: [
        {
          type: "Github",
          href: "https://github.com/ViktorRingnes/ShaNext",
          icon: "github",
        },
        {
          type: "NuGet",
          href: "https://www.nuget.org/packages/ShaNext",
          icon: "nuget",
        },
      ],
      technologies: mapSkill(["C#", ".NET"]),
    },
    {
      title: "Memory Reader",
      dates: "2024",
      href: "https://github.com/ViktorRingnes/MemoryReader",
      location: "Oslo, Norway",
      description:
        "A simple low level application that reads memory from other processes based on PIDs.",
      image: "/MiniProjects/Github.png",
      links: [
        {
          type: "Github",
          href: "https://github.com/ViktorRingnes/MemoryReader",
          icon: "github",
        },
      ],
      technologies: mapSkill(["C++"]),
    },
  ],
};
