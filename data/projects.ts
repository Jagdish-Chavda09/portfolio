export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techBadges: string[];
  githubLink: string;
  liveDemoLink?: string;
}

export const projects: Project[] = [
  {
    title: "Travel Agency System",
    description: "A layered CRUD-based management system built for travel operators to manage bookings, clients, itineraries, and reports.",
    longDescription: "Features database relational mapping, dynamic reporting dashboards, and clean layered software architecture principles. Handled form validations, secure database access layers, and clean UI components.",
    techBadges: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/Jagdish-Chavda09/travel-agency-system-php",
    liveDemoLink: "#"
  },
  {
    title: "Flight Ticket App",
    description: "A native Android application designed to search flights, manage tickets, view bookings, and simulate passenger check-ins.",
    longDescription: "Developed with Kotlin and XML layouts in Android Studio. Integrated local SQLite database storage, dynamic list views, and modern Material Design elements.",
    techBadges: ["Kotlin", "Android SDK", "SQLite", "Android Studio", "Material Design"],
    githubLink: "https://github.com/Jagdish-Chavda09/flight-ticket-app-android",
    liveDemoLink: "#"
  },
  {
    title: "Developer Portfolio",
    description: "A premium, fully animated personal portfolio showcasing credentials, academic timelines, skills, and contact operations.",
    longDescription: "Built with Next.js (App Router), TypeScript, and Tailwind CSS. Features highly customized Framer Motion scroll and entry animations, alongside client-side React Hook Form validation, and a Next.js serverless API route.",
    techBadges: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    githubLink: "https://github.com/Jagdish-Chavda09/personal-portfolio-nextjs",
    liveDemoLink: "https://jagdish-chavda-portfolio.vercel.app"
  }
];
