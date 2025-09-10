"use client";

type Tech = { name: string; logo: string; href?: string };
type Props = { onBack?: () => void };
const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

// Fallbacks for mono or plain variants if a project has only one form:
const deviconPlain = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg`;

// --- Your stack (from résumé) ---
const LANGUAGES: Tech[] = [
  { name: "Go", logo: devicon("go") },
  { name: "Java", logo: devicon("java") },
  { name: "Python", logo: devicon("python") },
  { name: "C#", logo: devicon("csharp") },
  { name: "C++", logo: devicon("cplusplus") },
  { name: "JavaScript", logo: devicon("javascript") },
  { name: "HTML", logo: devicon("html5") },
  { name: "CSS", logo: devicon("css3") },
  { name: "Ruby", logo: devicon("ruby") },
  { name: "Node.js", logo: devicon("nodejs") },
];

const FRAMEWORKS_LIBS: Tech[] = [
  { name: "ASP.NET", logo: deviconPlain("dotnet") },
  { name: "Bootstrap", logo: devicon("bootstrap") },
  { name: "scikit-learn", logo: deviconPlain("scikitlearn") },
  { name: "Dash", logo: deviconPlain("plotly") },
  { name: "React", logo: devicon("react") }, // mentioned in projects
  { name: "TypeScript", logo: devicon("typescript") }, // mentioned in projects
];

const CLOUD_DEVOPS: Tech[] = [
  { name: "Docker", logo: devicon("docker") },
  { name: "Kubernetes", logo: devicon("kubernetes") },
  { name: "Jenkins", logo: devicon("jenkins") },
  { name: "Azure", logo: devicon("azure") },
  { name: "AWS", logo: devicon("amazonwebservices") },
  { name: "Git", logo: devicon("git") },
  { name: "Jira", logo: devicon("jira") },
  { name: "Helm", logo: deviconPlain("helm") },
  { name: "Podman", logo: deviconPlain("podman") },
  { name: "Linux", logo: devicon("linux") },
  { name: "Bash", logo: deviconPlain("bash") },
];

const DATABASES: Tech[] = [
  { name: "BigQuery", logo: deviconPlain("googlecloud") },
  { name: "MySQL", logo: devicon("mysql") },
  { name: "SQL Server", logo: deviconPlain("microsoftsqlserver") },
  { name: "DynamoDB", logo: deviconPlain("amazondynamodb") },
  { name: "NoSQL", logo: deviconPlain("mongodb") }, // generic stand-in
];

const ANALYTICS_ETL: Tech[] = [
  { name: "Pandas", logo: deviconPlain("pandas") },
  { name: "Looker Studio", logo: deviconPlain("google") },
  { name: "Azure Synapse", logo: deviconPlain("azure") },
  { name: "Marketo", logo: deviconPlain("marketo") },
];

const TOOLS_IDE_APIS: Tech[] = [
  { name: "VS Code", logo: devicon("vscode") },
  { name: "REST API", logo: deviconPlain("swagger") },
  { name: "GraphQL", logo: devicon("graphql") },
  { name: "JFrog", logo: deviconPlain("jfrog") },
];

// Small presentational helpers
function Section({ title, items }: { title: string; items: Tech[] }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-sm font-medium tracking-wide text-black/70">
        {title}
      </h3>
      <ul className="grid grid-cols-5 gap-4 md:grid-cols-6 lg:grid-cols-7">
        {items.map((t) => (
          <li key={t.name} className="flex flex-col items-center">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/10">
              {/* using native img so external CDN works without Next config */}
              <img
                src={t.logo}
                alt={t.name}
                className="h-7 w-7 object-contain"
                loading="lazy"
              />
            </div>
            <span className="mt-1 text-[11px] text-black/65">{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function TechStackPanel({ onBack }: Props) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="rounded-md px-2 py-1 text-[13px] underline hover:opacity-80"
        ></button>
      </div>

      <div className="space-y-4">
        <Section title="Languages & Runtime" items={LANGUAGES} />
        <Section title="Frameworks & Libraries" items={FRAMEWORKS_LIBS} />
        <Section title="Cloud & DevOps" items={CLOUD_DEVOPS} />
        <Section title="Databases" items={DATABASES} />
        <Section title="Analytics & ETL" items={ANALYTICS_ETL} />
        <Section title="Tools & APIs" items={TOOLS_IDE_APIS} />
      </div>
    </div>
  );
}
