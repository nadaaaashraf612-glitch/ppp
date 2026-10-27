// Real brand marks for the "tools & technologies" section — rendered as
// creative floating logo tiles instead of generic line icons.

export interface TechLogo {
  name: string;
  src?: string; // path to a real brand svg (public/images/tech)
  monogram?: string; // used when no safe brand svg is available
  bg: string; // tile background (brand-tinted)
  pad?: string; // extra padding adjustment for visual balance
  invert?: boolean; // true for white-only marks that need a dark chip
}

export const techLogos: Record<string, TechLogo> = {
  React: { name: "React", src: "/images/tech/react.svg", bg: "radial-gradient(circle at 30% 20%, rgba(97,218,251,0.25), transparent 70%)" },
  "Next.js": { name: "Next.js", src: "/images/tech/nextdotjs.svg", bg: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 70%)", invert: true },
  HTML: { name: "HTML", src: "/images/tech/html5.svg", bg: "radial-gradient(circle at 30% 20%, rgba(227,79,38,0.22), transparent 70%)" },
  CSS: { name: "CSS", src: "/images/tech/css.svg", bg: "radial-gradient(circle at 30% 20%, rgba(102,51,153,0.22), transparent 70%)" },
  JavaScript: { name: "JavaScript", src: "/images/tech/javascript.svg", bg: "radial-gradient(circle at 30% 20%, rgba(247,223,30,0.22), transparent 70%)" },
  Flutter: { name: "Flutter", src: "/images/tech/flutter.svg", bg: "radial-gradient(circle at 30% 20%, rgba(2,86,155,0.22), transparent 70%)" },
  "React Native": { name: "React Native", src: "/images/tech/react.svg", bg: "radial-gradient(circle at 30% 20%, rgba(97,218,251,0.25), transparent 70%)" },
  Swift: { name: "Swift", src: "/images/tech/swift.svg", bg: "radial-gradient(circle at 30% 20%, rgba(240,81,56,0.22), transparent 70%)" },
  Kotlin: { name: "Kotlin", src: "/images/tech/kotlin.svg", bg: "radial-gradient(circle at 30% 20%, rgba(127,82,255,0.25), transparent 70%)" },
  "Node.js": { name: "Node.js", src: "/images/tech/nodedotjs.svg", bg: "radial-gradient(circle at 30% 20%, rgba(95,160,78,0.22), transparent 70%)" },
  Laravel: { name: "Laravel", src: "/images/tech/laravel.svg", bg: "radial-gradient(circle at 30% 20%, rgba(255,45,32,0.2), transparent 70%)" },
  ".NET": { name: ".NET", src: "/images/tech/dotnet.svg", bg: "radial-gradient(circle at 30% 20%, rgba(81,43,212,0.25), transparent 70%)" },
  MySQL: { name: "MySQL", src: "/images/tech/mysql.svg", bg: "radial-gradient(circle at 30% 20%, rgba(68,121,161,0.22), transparent 70%)" },
  PostgreSQL: { name: "PostgreSQL", src: "/images/tech/postgresql.svg", bg: "radial-gradient(circle at 30% 20%, rgba(65,105,225,0.22), transparent 70%)" },
  MongoDB: { name: "MongoDB", src: "/images/tech/mongodb.svg", bg: "radial-gradient(circle at 30% 20%, rgba(71,162,72,0.22), transparent 70%)" },
  Figma: { name: "Figma", src: "/images/tech/figma.svg", bg: "radial-gradient(circle at 30% 20%, rgba(242,78,30,0.2), transparent 70%)" },
  "Adobe Creative Cloud": { name: "Adobe Creative Cloud", monogram: "Cc", bg: "radial-gradient(circle at 30% 20%, rgba(255,0,0,0.18), transparent 70%)" },
  APIs: { name: "APIs", monogram: "{ }", bg: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.25), transparent 70%)" },
  "Payment Gateways": { name: "Payment Gateways", monogram: "$", bg: "radial-gradient(circle at 30% 20%, rgba(217,70,239,0.22), transparent 70%)" },
  "Third-party Integrations": { name: "Third-party Integrations", monogram: "⇄", bg: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.22), transparent 70%)" },
  "Cloud Solutions": { name: "Cloud Solutions", monogram: "☁", bg: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.2), transparent 70%)" },
};

export function getTechLogo(name: string): TechLogo {
  return techLogos[name] ?? { name, monogram: name.charAt(0).toUpperCase(), bg: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.2), transparent 70%)" };
}
