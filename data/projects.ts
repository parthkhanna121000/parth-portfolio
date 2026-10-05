export type Project = {
  slug: string; title: string; subtitle: string; description: string;
  technologies: string[]; features: string[]; flow: string[];
  github: string; liveDemo: string; image: string;
};
export const projects: Project[] = [
  { slug: "hirebot", title: "HireBot", subtitle: "AI-Powered Resume Screening System",
    description: "A full-stack hiring platform that helps jobseekers analyze resumes and helps recruiters evaluate and rank candidates using AI-powered workflows.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Gemini API"],
    features: ["AI resume analysis", "Skill extraction", "Skill-gap identification", "Structured candidate feedback", "Applicant ranking", "Jobseeker workflow", "Recruiter workflow", "REST APIs"],
    flow: ["Resume", "PDF Processing", "AI Analysis", "Skill Extraction", "Candidate Profile", "Recruiter Ranking"],
    github: "https://github.com/parthkhanna121000/HireBot", liveDemo: "https://hire-bot-six.vercel.app/", image: "/projects/hirebot/cover.png" },
  { slug: "pdf-chat-companion", title: "PDF Chat Companion", subtitle: "AI-powered conversational PDF assistant",
    description: "A full-stack RAG application that allows users to ask natural-language questions over uploaded PDF documents.",
    technologies: ["Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB Atlas", "Gemini API"],
    features: ["PDF upload", "Document processing", "Retrieval-augmented generation", "Gemini embeddings", "Context-grounded responses", "Server-Sent Events", "Streaming responses", "Conversation history", "Multi-turn conversations"],
    flow: ["PDF Upload", "Document Processing", "Embeddings / Retrieval", "Relevant Context", "Gemini", "Streaming Response"],
    github: "https://github.com/parthkhanna121000/PDF-Chat-Companion", liveDemo: "#", image: "/projects/pdf-chat-companion/cover.png" },
  { slug: "collabnex", title: "CollabNex", subtitle: "Team Task Manager",
    description: "A Kanban-based team task management application designed around project workflows, sprint tracking and role-based collaboration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: ["Kanban board", "Task creation", "Drag-and-drop workflows", "Sprint tracking", "Overdue-task views", "Project blocker tracking", "Admin/Member permissions", "Backend and frontend validation"],
    flow: ["Create Task", "Kanban Board", "Sprint Tracking", "Blockers & Overdue", "Role-based Access"],
    github: "https://github.com/parthkhanna121000/Team-Task-Manager", liveDemo: "https://team-task-manager-five-alpha.vercel.app/", image: "/projects/collabnex/cover.png" },
];
