import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/threads.png";
import rmtdevImg from "@/public/car.png";
import wordanalyticsImg from "@/public/messi.png";
import blogeeyImg from "@/public/blogeeyImg.png"
import messiImg from "@/public/messiImg.png";
import carrentImg from "@/public/carrentImg.png";
import nikeImg from "@/public/nikeImg.png"
import threadsImg from '@/public/threadsImg.png'

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [

        {
          title: "Blogeey",
          description:
            "I developed Blogeey, a full-stack Next.js application with a complete CMS system for creating and managing blogs. I share blogs on it.",
          tags: ["React", "Next.js", "GraphQl", "Tailwind","Typescript"],
           imageUrl: blogeeyImg,
        },
        {
          title: "Threads",
          description:
            "Threads is my rendition of a social networking platform, resembling Twitter, where users can post, interact, and engage in conversations. ",
          tags: [ "TypeScript", "Next.js", "Tailwind","MONGODB",],
          imageUrl: threadsImg,
        },
        {
          title: "MessiMadness",
          description:
            "MessiMadness is a  platform dedicated to the legendary footballer, Lionel Messi. It provides detailed statistics, insights into his life, and everything Messi-related.",
          tags: ["React", "Next.js", "threejs", "Tailwind", "Framer"],
          imageUrl: messiImg,
        },
        {
          title: "Carrent Web Application",
          description:
            "Carrent is a modern web application for renting vehicles. It offers a user-friendly interface for booking cars, managing rent etc",
          tags: ["React","RapidApi", "Tailwind", "Typescript"],
          imageUrl: carrentImg,
        },
        {
          title: "Nike Landing Page",
          description:
            "The Nike Landing Page is a stunning, interactive web design showcasing Nike's latest products.",
            tags:["React",  "Tailwind", "Framer","Javascript"],
          imageUrl: nikeImg,
        },
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
   "Soket.io",
   "Redis",
   "RapidAPi"
] as const;