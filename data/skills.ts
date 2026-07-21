export interface Skill {
  name: string;
  percentage: number;
  level: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Core Java", percentage: 85, level: "Proficient" },
      { name: "SQL", percentage: 80, level: "Proficient" },
      { name: "Kotlin", percentage: 65, level: "Intermediate" },
      { name: "PHP", percentage: 70, level: "Intermediate" }
    ]
  },
  {
    title: "Frameworks & Web Tech",
    skills: [
      { name: "Spring Boot", percentage: 75, level: "Intermediate" },
      { name: "Servlets & JSP", percentage: 80, level: "Proficient" },
      { name: "HTML / CSS", percentage: 85, level: "Proficient" },
      { name: "Next.js (React)", percentage: 60, level: "Beginner/Exploring" }
    ]
  },
  {
    title: "Database Integration",
    skills: [
      { name: "Oracle DB", percentage: 75, level: "Intermediate" },
      { name: "JDBC", percentage: 80, level: "Proficient" },
      { name: "MySQL", percentage: 80, level: "Proficient" }
    ]
  },
  {
    title: "Software Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOP)", percentage: 90, level: "Expert" },
      { name: "Java Collections Framework", percentage: 85, level: "Proficient" },
      { name: "Java Multithreading & Concurrency", percentage: 70, level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Environments",
    skills: [
      { name: "Git & GitHub", percentage: 75, level: "Intermediate" },
      { name: "Postman API client", percentage: 80, level: "Proficient" },
      { name: "Eclipse / IntelliJ", percentage: 85, level: "Proficient" },
      { name: "Android Studio", percentage: 70, level: "Intermediate" },
      { name: "VMware & Linux", percentage: 65, level: "Intermediate" }
    ]
  }
];
