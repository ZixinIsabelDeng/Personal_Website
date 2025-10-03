import Image from "next/image";
import { Abel } from "next/font/google";
const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

const texts = {
  en: ` Hi, I’m Zixin (Isabel). I hold a Computer Science degree from Concordia
        University. I am a software developer with three internship experience.
        I’m multilingual — fluent in Mandarin and English, with intermediate
        French and some Cantonese. I’m passionate about creating projects that
        support emotional wellbeing and mental health, and I’m always open to
        collaborating on innovative ideas or startups. In my free time, I love
        dancing, cooking, singing karaoke, and playing mahjong. My favorite
        application is Classpass`,
  zh: `各位老板/大佬们好，我是邓子昕！一位刚刚在加拿大康考迪亚大学本科CS毕业的留学生。
  目前正在寻找一份软件开发（后端，全栈或者运维）的全职工作。我有三段（总共一年）的加拿
  大本地实习的经历，分别是在后端和数据工程的岗位。我能够熟练且快速的掌握各种语言，目前
  工作中接触的语言有Golang和python，实际工作涉及开发REST 风格接口，大数据迁移，设计
  与实现 ETL 数据流水线，测试驱动开发，云原生态开发。我也拥由 Linux 基金会认证的 
  Kubernetes 与云原生助理证书（KCNA)如果有幸能得到您的帮助和支持，本人将不胜感激！`,
  fr: `Bonjour à tous, je suis Zixin Deng ! Je viens d'obtenir mon diplôme
   en informatique à l'Université Concordia. Je recherche actuellement un
    poste à temps plein en développement logiciel (backend, fullstack ou DevOps).`,
};

export default function AboutIntro({
  className = "about",
  fontClass = "",
  lang = "en",
}: {
  className?: string;
  fontClass?: string;
  lang?: "en" | "zh" | "fr";
}) {
  return (
    <div className={`card flex flex-col ${className}`}>
      <div className="flex items-center space-x-3 mb-3">
        <Image
          src="/icons/mahjong.png"
          alt="Mahjong icon"
          width={40}
          height={40}
        />
        <Image src="/icons/china.png" alt="China icon" width={40} height={40} />
        <Image
          src="/icons/canada.png"
          alt="Canada icon"
          width={40}
          height={40}
        />
        <Image src="/icons/sing.png" alt="Sing icon" width={40} height={40} />
      </div>

      <p className={`${abel.className}`}>{texts[lang]}</p>
    </div>
  );
}
