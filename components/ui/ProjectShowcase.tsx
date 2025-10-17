"use client";
import Image from "next/image";
import Link from "next/link";

const badgeClass =
  "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10";

type Locale = "en" | "fr" | "zh";

type LocalizedText = {
  en: string;
  fr: string;
  zh: string;
};

type Project = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  link: string;
  tech?: string[];
};

interface ProjectShowcaseProps {
  lang: Locale;
}

export default function ProjectShowcase({ lang }: ProjectShowcaseProps) {
  const t = {
    heading: {
      en: "Projects",
      fr: "Projets",
      zh: "项目",
    },
    viewSource: {
      en: "View Source",
      fr: "Voir le code",
      zh: "查看源码",
    },
  } satisfies Record<string, LocalizedText>;

  const projects: Project[] = [
    {
      title: {
        en: "Magic Villa",
        fr: "Magic Villa",
        zh: "Magic Villa",
      },
      description: {
        en: "A property listing app where admins can add, edit, delete, and search villas; includes user access control and helpful features like versioning, caching, and pagination.",
        fr: "Application d'annonces immobilières où les administrateurs peuvent ajouter, modifier, supprimer et rechercher des villas ; comprend le contrôle d'accès et des fonctionnalités comme la gestion de versions, la mise en cache et la pagination.",
        zh: "一个房源发布应用，管理员可添加、编辑、删除并搜索别墅；包含用户权限控制，以及版本管理、缓存和分页等功能。",
      },
      image: "/images/magic_villa.jpeg",
      link: "https://github.com/ZixinIsabelDeng/magicVilla_API",
      tech: ["C#", "ASP.NET", "Bootstrap"],
    },
    {
      title: {
        en: "IPO Delisting Prediction",
        fr: "Prédiction de radiation d'IPO",
        zh: "IPO 退市预测",
      },
      description: {
        en: "A tool that analyzes newly listed companies and predicts the chance they’ll be delisted within the next five quarters, with results presented for monitoring and comparison.",
        fr: "Un outil qui analyse les entreprises nouvellement cotées et prédit la probabilité de radiation dans les cinq prochains trimestres, avec résultats pour suivi et comparaison.",
        zh: "分析新上市公司，并预测其在接下来五个季度内退市的概率；提供结果用于监控与对比。",
      },
      image: "/images/ipo.png",
      link: "https://github.com/ZixinIsabelDeng/Ipo_delisting_prediction",
      tech: ["Python", "Pandas", "Scikit-learn", "data preprosessing", "ML"],
    },
    {
      title: {
        en: "Sesame Cake (Ongoing)",
        fr: "Sesame Cake (En cours)",
        zh: "黑芝麻蛋糕（进行中）",
      },
      description: {
        en: "A lightweight, configurable ETL pipeline framework that moves data between Elasticsearch and S3, applies optional record/batch transforms (including API enrichment), and runs under Airflow—built for parallelism, idempotent loads, retries, and basic metrics.",
        fr: "Un framework ETL léger et configurable qui déplace les données entre Elasticsearch et S3, applique des transformations (enregistrement/lot, y compris enrichissement via API) et s'exécute sous Airflow — conçu pour le parallélisme, les chargements idempotents, les reprises et des métriques de base.",
        zh: "轻量且可配置的 ETL 框架，在 Elasticsearch 与 S3 间搬运数据，支持记录/批量转换，在 Airflow 下运行；具备并行、幂等加载、重试与基础指标。",
      },
      image: "/images/sesa.png",
      link: "https://github.com/ZixinIsabelDeng/Sesame_Cake",
      tech: ["python", "Opensearch", "S3", "Airflow"],
    },
    {
      title: {
        en: "Match And Move (Ongoing)",
        fr: "Match And Move (En cours)",
        zh: "Match And Move（进行中）",
      },
      description: {
        en: "A marketplace that connects carpool riders with drivers and also matches shippers with truck drivers to fill backhauls and reduce empty runs..",
        fr: "Une place de marché reliant covoitureurs et conducteurs, et mettant en relation expéditeurs et chauffeurs poids lourds pour optimiser les trajets retour et réduire les kilomètres à vide.",
        zh: "一个平台，连接拼车乘客与司机，同时为发货方匹配卡车司机以填补回程运力，减少空驶。",
      },
      image: "/images/truck.png",
      link: "https://github.com/ZixinIsabelDeng/MatchAndMove",
      tech: ["Typescript", "Node.js", "MongoDB", "React", "Express"],
    },
    {
      title: {
        en: "EEG Based Motor Imagery Decoding with Deep Learning",
        fr: "Décodage d'imagerie motrice EEG avec Deep Learning",
        zh: "基于 EEG 的运动想象解码（深度学习）",
      },
      description: {
        en: "A research project that decodes motor-imagery intentions from EEG signals, using the BNCI2014001 dataset and a reproducible notebook to preprocess data, train models, and benchmark accuracy against a baseline.",
        fr: "Projet de recherche qui décode les intentions d'imagerie motrice à partir de signaux EEG, utilisant le jeu de données BNCI2014001 et un notebook reproductible pour le prétraitement, l'entraînement et l'évaluation.",
        zh: "使用 BNCI2014001 数据集，从 EEG 信号中解码运动想象意图；提供可复现的笔记本完成预处理、训练与基线对比。",
      },
      image: "/images/eeg.png",
      link: "https://github.com/ZixinIsabelDeng/-EEG-Based-Motor-Imagery-Decoding-with-Deep-Learning/",
      tech: ["Python", "ML/DL"],
    },
    {
      title: {
        en: "Security Analysis of Social Media Applications",
        fr: "Analyse de sécurité des applications de médias sociaux",
        zh: "社交媒体应用的安全分析",
      },
      description: {
        en: "A research project that evaluates 43 popular social media apps/sites for security and privacy weaknesses using static and dynamic analysis, documenting issues like broken auth, plaintext data transmission, injection risks, and CORS/CSRF problems, with practical mitigation recommendations.",
        fr: "Projet évaluant 43 applications/sites de médias sociaux pour détecter faiblesses de sécurité et de confidentialité via analyses statiques et dynamiques : authentification défaillante, transmission en clair, risques d'injection, problèmes CORS/CSRF, etc., avec recommandations pratiques.",
        zh: "通过静态与动态分析评估 43 个主流社交应用/网站的安全与隐私弱点，记录如认证失效、明文传输、注入风险、CORS/CSRF 等问题，并提出可行的缓解建议。",
      },
      image: "/images/security.png",
      link: "https://github.com/ZixinIsabelDeng/security_analysis_of_social_media_app",
      tech: ["penatration test", "Burp Suite"],
    },
    {
      title: {
        en: "Personal Website",
        fr: "Site personnel",
        zh: "个人网站",
      },
      description: {
        en: "A personal website built with Next.js, Tailwind CSS, and HeroUI. It showcases my work and acts as a digital CV.",
        fr: "Un site personnel construit avec Next.js, Tailwind CSS et HeroUI, présentant mes projets et faisant office de CV en ligne.",
        zh: "使用 Next.js、Tailwind CSS 与 HeroUI 构建的个人网站，用于展示我的作品并作为在线简历。",
      },
      image: "/images/web.png",
      link: "https://github.com/ZixinIsabelDeng/Personal_Website",
      tech: ["Typescript", "Next.js", "TailwindCSS", "HeroUI"],
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">{t.heading[lang]}</h2>
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
                  alt={proj.title[lang]}
                  width={400}
                  height={200}
                />
              </div>
            </Link>
            <div className="p-5">
              <Link href={proj.link} target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {proj.title[lang]}
                </h5>
              </Link>
              <p className="mb-3 text-sm font-normal text-gray-700">
                {proj.description[lang]}
              </p>
              <Link
                href={proj.link}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
              >
                {t.viewSource[lang]}
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
