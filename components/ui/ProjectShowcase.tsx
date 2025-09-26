"use client";
import Image from "next/image";
import Link from "next/link";

const badgeClass =
  "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string[];
};

export default function ProjectShowcase() {
  const projects: Project[] = [
    {
      title: "Magic Villa",
      description:
        "A property listing app where admins can add, edit, delete, and search villas; includes user access control and helpful features like versioning, caching, and pagination.",
      image: "/images/magic_villa.jpeg",
      link: "https://github.com/ZixinIsabelDeng/magicVilla_API",
      tech: ["C#", "ASP.NET", "Bootstrap"],
    },
    {
      title: "IPO Delisting Prediction",
      description:
        "A tool that analyzes newly listed companies and predicts the chance they’ll be delisted within the next five quarters, with results presented for monitoring and comparison.",
      image: "/images/ipo.png",
      link: "https://github.com/ZixinIsabelDeng/Ipo_delisting_prediction",
      tech: ["Python", "Pandas", "Scikit-learn", "data preprosessing", "ML"],
    },
    {
      title: "Sesame Cake (Ongoing)",
      description:
        "A lightweight, configurable ETL pipeline framework that moves data between Elasticsearch and S3, applies optional record/batch transforms (including API enrichment), and runs under Airflow—built for parallelism, idempotent loads, retries, and basic metrics.",
      image: "/images/sesa.png",
      link: "https://github.com/ZixinIsabelDeng/Sesame_Cake",
      tech: ["python", "Opensearch", "S3", "Airflow"],
    },
    {
      title: "Match And Move (Ongoing)",
      description:
        "A marketplace that connects carpool riders with drivers and also matches shippers with truck drivers to fill backhauls and reduce empty runs..",
      image: "/images/truck.png",
      link: "https://github.com/ZixinIsabelDeng/MatchAndMove",
      tech: ["Typescript", "Node.js", "MongoDB", "React", "Express"],
    },
    {
      title: "EEG Based Motor Imagery Decoding with Deep Learning",
      description:
        "A research project that decodes motor-imagery intentions from EEG signals, using the BNCI2014001 dataset and a reproducible notebook to preprocess data, train models, and benchmark accuracy against a baseline.",
      image: "/images/eeg.png",
      link: "https://github.com/ZixinIsabelDeng/-EEG-Based-Motor-Imagery-Decoding-with-Deep-Learning/",
      tech: ["Python", "ML/DL"],
    },
    {
      title: "Security Analysis of Social Media Applications",
      description:
        "A research project that evaluates 43 popular social media apps/sites for security and privacy weaknesses using static and dynamic analysis, documenting issues like broken auth, plaintext data transmission, injection risks, and CORS/CSRF problems, with practical mitigation recommendations.",
      image: "/images/security.png",
      link: "https://github.com/ZixinIsabelDeng/security_analysis_of_social_media_app",
      tech: ["penatration test", "Burp Suite"],
    },
    {
      title: "Personal Website",
      description:
        "A personal website built with Next.js, Tailwind CSS, and HeroUI. It showcases my work and acts as a digital CV.",
      image: "/images/web.png",
      link: "https://github.com/ZixinIsabelDeng/security_analysis_of_social_media_app",
      tech: ["Typescript", "Next.js", "TailwindCSS", "HeroUI"],
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="max-w-sm bg-[#fadcd9] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Link href={proj.link} target="_blank">
              <div className="w-full h-[200px] overflow-hidden rounded-t-lg">
                <Image
                  className="object-cover w-full h-full"
                  src={proj.image}
                  alt={proj.title}
                  width={400}
                  height={200}
                />
              </div>
            </Link>
            <div className="p-5">
              <Link href={proj.link} target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {proj.title}
                </h5>
              </Link>
              <p className="mb-3 text-sm font-normal text-gray-700">
                {proj.description}
              </p>
              <Link
                href={proj.link}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
              >
                View Source
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              {/* badges */}
              {proj.tech?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={`${proj.title}-${t}`} className={badgeClass}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
