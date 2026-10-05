export type Cat = "Programming" | "Frontend" | "Backend" | "AI / ML" | "Databases" | "Core CS" | "Tools";
export type Tech = {
  name: string; category: Cat; description: string;
  icon?: string; symbol?: string; usage?: string; related: string[];
};

const si = (s: string, c = "") => `https://cdn.simpleicons.org/${s}${c ? "/" + c : ""}`;
const dv = (s: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s}/${s}-original.svg`;

export const categories: Cat[] = ["Programming", "Frontend", "Backend", "AI / ML", "Databases", "Core CS", "Tools"];

export const techs: Tech[] = [
  { name: "Python", category: "Programming", icon: si("python"), description: "General-purpose scripting and AI/ML work", related: ["Jupyter Notebook", "Generative AI"] },
  { name: "JavaScript (ES6+)", category: "Programming", icon: si("javascript"), description: "The language of the web", usage: "Used across all three featured projects", related: ["TypeScript", "React.js", "Node.js"] },
  { name: "TypeScript", category: "Programming", icon: si("typescript"), description: "Typed JavaScript for safer code", usage: "Used in PDF Chat Companion", related: ["Next.js", "Node.js"] },
  { name: "C++", category: "Programming", icon: si("cplusplus"), description: "Systems language, useful for DSA practice", related: ["Data Structures & Algorithms"] },
  { name: "React.js", category: "Frontend", icon: si("react"), description: "Component-based UI development", usage: "Used in HireBot and CollabNex", related: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Next.js", category: "Frontend", icon: si("nextdotjs", "fff"), description: "Full-stack React framework", usage: "Used in PDF Chat Companion and this portfolio", related: ["React.js", "TypeScript", "Tailwind CSS"] },
  { name: "HTML5", category: "Frontend", icon: dv("html5"), description: "Semantic page structure", related: ["CSS3", "JavaScript (ES6+)"] },
  { name: "CSS3", category: "Frontend", icon: dv("css3"), description: "Layouts, responsive design and styling", related: ["HTML5", "Tailwind CSS"] },
  { name: "Tailwind CSS", category: "Frontend", icon: si("tailwindcss"), description: "Utility-first styling", related: ["CSS3", "React.js", "Next.js"] },
  { name: "Node.js", category: "Backend", icon: si("nodedotjs"), description: "JavaScript runtime for server-side apps", usage: "Backend of all three featured projects", related: ["Express.js", "REST APIs", "MongoDB"] },
  { name: "Express.js", category: "Backend", icon: si("express", "fff"), description: "Minimal web framework for Node.js", usage: "Used in all three featured projects", related: ["Node.js", "REST APIs", "JWT Authentication"] },
  { name: "REST APIs", category: "Backend", symbol: "network", description: "Designing and consuming HTTP APIs", usage: "Used in HireBot and CollabNex", related: ["Express.js", "Postman"] },
  { name: "JWT Authentication", category: "Backend", symbol: "key", description: "Token-based authentication", usage: "Used in HireBot", related: ["Express.js", "REST APIs"] },
  { name: "Generative AI", category: "AI / ML", symbol: "sparkles", description: "Building features on top of LLMs", related: ["Gemini API", "RAG"] },
  { name: "RAG", category: "AI / ML", symbol: "search", description: "Grounding LLM answers in your own documents", usage: "Core of PDF Chat Companion", related: ["Embeddings", "Gemini API"] },
  { name: "Gemini API", category: "AI / ML", icon: si("googlegemini"), description: "Google's generative AI models via API", usage: "Used in HireBot and PDF Chat Companion", related: ["RAG", "Embeddings", "Generative AI"] },
  { name: "Embeddings", category: "AI / ML", symbol: "waypoints", description: "Vector representations for semantic search", usage: "Used in PDF Chat Companion", related: ["RAG", "Gemini API"] },
  { name: "MongoDB", category: "Databases", icon: si("mongodb"), description: "Document database", usage: "Used in all three featured projects", related: ["Node.js", "Express.js"] },
  { name: "MySQL", category: "Databases", icon: si("mysql"), description: "Relational database", related: ["SQL", "DBMS"] },
  { name: "SQL", category: "Databases", symbol: "table", description: "Querying relational data", related: ["MySQL", "DBMS"] },
  { name: "Object-Oriented Programming", category: "Core CS", symbol: "boxes", description: "Classes, encapsulation, inheritance, polymorphism", related: ["C++", "TypeScript"] },
  { name: "DBMS", category: "Core CS", symbol: "database", description: "Database design and management fundamentals", related: ["SQL", "MySQL", "MongoDB"] },
  { name: "Data Structures & Algorithms", category: "Core CS", symbol: "binary", description: "Problem solving fundamentals", related: ["C++", "Python"] },
  { name: "Git", category: "Tools", icon: si("git"), description: "Version control", related: ["GitHub"] },
  { name: "GitHub", category: "Tools", icon: si("github", "fff"), description: "Code hosting and collaboration", related: ["Git"] },
  { name: "Postman", category: "Tools", icon: si("postman"), description: "API testing and debugging", related: ["REST APIs", "Express.js"] },
  { name: "Jupyter Notebook", category: "Tools", icon: si("jupyter"), description: "Interactive notebooks for experiments", related: ["Python"] },
];

const R = 3.6;
export const catAngle = (c: Cat) => (categories.indexOf(c) * 2 * Math.PI) / categories.length;
export const catCenter = (c: Cat): [number, number, number] => {
  const a = catAngle(c);
  return [R * Math.sin(a), categories.indexOf(c) % 2 ? -0.8 : 0.8, R * Math.cos(a)];
};
export const techPos = (t: Tech): [number, number, number] => {
  const items = techs.filter((x) => x.category === t.category);
  const b = (2 * Math.PI * items.indexOf(t)) / items.length + 0.6;
  const [x, y, z] = catCenter(t.category);
  return [x + Math.cos(b) * 1.15, y + Math.sin(b) * 0.95, z + Math.sin(b) * 0.5];
};