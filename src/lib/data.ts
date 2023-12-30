import React from "react";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Petrópolis, RJ",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "",
  }
] as const;

export const projectsData = [
  {
    title: "Digital Agro",
    description: "Acrescentar um descrição sobre o projeto",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Java", "Microservices", "Keycloak"],
    imageUrl: "/digital_agro_login.png",
  },
  {
    title: "Digital Tracking",
    description: "Acrescentar um descrição sobre o projeto",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Java", "Microservices", "Keycloak"],
    imageUrl: "/digital_tracking_login.png",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "PostgreSQL",
] as const;