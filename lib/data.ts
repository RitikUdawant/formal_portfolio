import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import publication from "@/public/publication.png";
import patent from "@/public/patent.jpeg";
import { IoMdTrain } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { SiSuzuki } from "react-icons/si";

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
    title: "Apprenticeship",
    location: "Bhilai, Chhattisgarh, India",
    company: "Bhilai Steel Plant, SAIL ",
    description:
      `• Under the guidance of the General Manager in the various departments learn basics daily routine and inspection in the plant. \n
      • Worked with Capital Repair and Modification CRM department. \n
      • Learn about the production of Rail & Plate in Rail mill, universal rail mill, Plate mill in the Plant.\n
      • Learn about the various safety measures to be followed in the plant.\n
      • Scheduling various meetings and presentation was a nice experience.`,
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2021",
  },
  {
    title: "Engineering Trainee",
    location: "Raipur, Chhattisgarh, India",
    company: "South East Central Railways",
    description:
      `• Assisted by the Head Mechanical engineering in the daily maintenance of railway engine wheels.\n
      • Worked on the Project Report on the repair and maintenance of breaking system in diesel locomotive.\n
      • Used Auto CAD as Assistant Design engineer under the guidance of design engineer for dimensioning CAD models.`,
    icon: React.createElement(IoMdTrain),
    date: "Aug 2021 - Sep 2021",
  },
  {
    title: "Sales Officer",
    location: "Nagpur, Maharashtra, India",
    company: "ITC Limited",
    description:
      `• Expertly managed a team of 11 PMS vendor members, ensuring efficient merchandising practices and adherence to FIFO standards.\n
      • Proficient in negotiating for prime window shelf space and promotional areas to enhance brand visibility and drive sales.\n
      • Consistently achieved numeric and weighted distribution targets, while increasing product stacking and market penetration.\n
      • Focused on ensuring product availability, visibility, and freshness to meet consumer demands and exceed expectations.\n
      • Spearheaded the addition of new outlets to the first club network, orchestrating brand promotion activities and festival celebrations.\n
      • Proficient in managing channel partners and leading cross-functional teams to achieve business objectives.\n
      • Experienced in product launch initiatives, including product matrix development and performance tracking, ensuring successful market entry and sustained growth.`,
    icon: React.createElement(MdOutlineWork),
    date: "Aug 2022 - Aug 2023",
  },
  {
    title: " Assistant Manager",
    location: "Hyderabad, Telangana, India",
    company: "Maruti Suzuki India Limited",
    description:
      ``,
    icon: React.createElement(SiSuzuki),
    date: "Sep 2023 - Present ",
  },
] as const;

export const projectsData = [
  {
    title: "Publications",
    description:
      "Desirability Function integrated Response Surface for CNC Milling Process Variables Optimization.",
    href: "https://www.mililink.com/upload/article/1803319653aams_vol_219_july_2022_a42_p5299-5307_ram_krishna_rathore_et_al..pdf",
    tags: ["Fusion 360", "Mechanical Engineering", "MiniTab", "Creo Parametric", "CNC Milling"],
    imageUrl: publication,
  },
  {
    title: "Patent",
    description:
      "DRAINAGE PIPES CLEANING ROBOT (Design Patent).     \n 356543-001 · Issued Mar 25, 2022",
    href: "https://drive.google.com/file/d/1KrZR-BBxYVaBOZGn0-ojUGIhSGNsc5df/view",
    tags: ["AutoCAD", "Creo", "Simulation", "Design", "Robotics"],
    imageUrl: patent,
  },
] as const;

export const skillsData = [
  "B2B Marketing",
  "Automotive Engineering",
  "Instore Marketing",
  "Customer Satisfaction",
  "Sales OperationsSales Operations",
  "Sales Management",
  "Trade Marketing and Distribution",
  "Fast-Moving Consumer Goods (FMCG)",
  "Communication Skills",
  "Plan and Organization Skills",
  "Project Management",
  "Agile & Waterfall Methodologies",
  "Leadership",
  "Event ManagementEvent Management",
  "Engineering",
  "Mechanical Engineering",
  "Project Reporting",
  "Solution Development ",
  "Creo Parametric",
  "AutoCAD",
  "Team work",
  "Robotics",
  "CNC Milling",
  "Fusion 360"
] as const;
