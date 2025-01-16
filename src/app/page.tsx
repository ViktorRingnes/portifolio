"use client";

import { METADATA } from "./data/metadata";
import BlurFade from "@/components/magicui/blur-fade";
import { Education, MiniProjects, Projects, Skills, Work } from "./data/resume";
import { ResumeCard } from "@/components/resume-card";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { HackathonCard } from "@/components/mini-project-card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Home() {
  const BLUR_FADE_DELAY = 0.04;

  const handleSkillClick = (href: string) => {
    window.open(href);
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 divide-y divide-dashed">
      <section id="hero">
        <BlurFade key={1} delay={BLUR_FADE_DELAY * 6 + 1 * 0.05}>
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${METADATA.name.split(" ")[0]}`}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="default"
                className="bg-transparent text-black bg-white hover:bg-white hover:text-black/80"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/viktor-ringnes-b81a8128b/"
                  )
                }
              >
                <Icons.linkedin />
              </Button>
              <Button
                size="icon"
                variant="default"
                className="bg-transparent text-black bg-white hover:bg-white hover:text-black/80"
                onClick={() =>
                  window.open("https://www.github.com/ViktorRingnes")
                }
              >
                <Icons.github />
              </Button>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="work" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {Work.work.map((work, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={id}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                skills={work.skills}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {Education.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {Skills.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge
                  variant="default"
                  key={id}
                  onClick={() => handleSkillClick(skill.href as string)}
                  className="cursor-pointer"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="pt-6">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {Projects.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  links={project.links}
                  image={project.image}
                  technologies={project.technologies}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="mini-projects" className="pt-6">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Mini Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love building small to medium-sized projects to learn new
                  technologies, and to open source them so others can learn from
                  them too.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {MiniProjects.miniProjects.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                    technologies={project.technologies}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
