import Image from "next/image";

export default function PortraitCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`card ${className}`}>
      <div
        className="w-full rounded-[20px]"
        style={{ background: "#fadcd9", padding: "16px" }}
      >
        <Image
          src="/images/isabel.png"
          alt="Isabel portrait"
          width={330}
          height={476}
          className="object-contain rounded-[20px] h-full w-auto"
        />
      </div>
    </div>
  );
}
