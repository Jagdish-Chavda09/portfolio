export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  details: string[];
}

export const educationTimeline: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kadi Sarva Vishwavidyalaya (KSV) University, Gandhinagar, Gujarat",
    duration: "2024 - Present (3rd Semester Ongoing)",
    grade: "Semester 2: 87%",
    details: [
      "Specialized in Advanced Java, Database Systems, and System Architecture.",
      "Engaged in academic team projects including a flight reservation model and database optimization modules.",
      "Deepened knowledge of Object-Oriented design patterns, SQL optimizations, and data structures."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kadi Sarva Vishwavidyalaya (KSV) University Affiliate, Gujarat",
    duration: "2022 - 2025",
    grade: "83.9% (Overall)",
    details: [
      "Learnt core programming foundations in C, C++, Core Java, and Web Technologies.",
      "Created desktop systems, simple web CRUD forms, and database schemas.",
      "Achieved top academic performance across semesters, developing strong algorithmic problem-solving skills."
    ]
  }
];
