"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Markdown from "react-markdown";
import { Button } from "./ui/button";
import { GlobeIcon } from "lucide-react";
import { Icons } from "./icons";
import { Skill } from "@/app/data/models/skill";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  technologies?: Skill[];
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  links,
  className,
  technologies,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
        className
      )}
    >
      <Link href={href || "#"} className="block">
        <div className="relative h-20 w-full overflow-hidden">
          {image && (
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      </Link>
      <CardHeader className="space-y-4 px-6 pt-6 pb-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-black/80">
            {title}
          </h3>
          <time className="text-sm text-muted-foreground">{dates}</time>
        </div>
        <Markdown className="prose prose-sm max-w-none dark:prose-invert text-black/80">
          {description}
        </Markdown>
        {link && (
          <div className="hidden text-sm text-muted-foreground underline print:block">
            {link.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
        )}
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-6 pb-4">
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {technologies?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag.href}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      {links && links.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="h-8 gap-2 text-xs">
                {link.icon === "globe" ? (
                  <GlobeIcon className="h-3 w-3" />
                ) : (
                  <Icons.github className="h-3 w-3" />
                )}
                {link.type}
              </Button>
            </Link>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
