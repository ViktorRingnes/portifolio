import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import NugetLogo from "../../public/MiniProjects/NuGet.png";
import Image from "next/image";
import { SkillType } from "@/app/data/models/types";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    type: string;
    href: string;
    icon: string;
  }[];
  technologies: SkillType[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
  technologies,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-1 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      <div className="mt-2 gap-2 flex wrap">
        {technologies?.map((skill, id) => (
          <Badge
            variant="default"
            key={id}
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <Button size="sm" className="h-8 gap-2 text-xs">
                {link.icon === "nuget" ? (
                  <Image src={NugetLogo} alt="NuGet" className="w-4 h-4" />
                ) : (
                  <Icons.github className="w-4 h-4" />
                )}
                {link.type}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
