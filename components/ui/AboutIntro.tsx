import Image from "next/image";
import { Abel } from "next/font/google";
const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});
export default function AboutIntro({
  className = "",
  fontClass = "",
}: {
  className?: string;
  fontClass?: string;
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

      <p className={`${abel.className}`}>
        Hi, I’m Zixin (Isabel). I hold a Computer Science degree from Concordia
        University. I am a software developer with three internship experience.
        I’m multilingual — fluent in Mandarin and English, with intermediate
        French and some Cantonese. I’m passionate about creating projects that
        support emotional wellbeing and mental health, and I’m always open to
        collaborating on innovative ideas or startups. In my free time, I love
        dancing, cooking, singing karaoke, and playing mahjong. My favorite
        application is Classpass{" "}
      </p>
    </div>
  );
}
