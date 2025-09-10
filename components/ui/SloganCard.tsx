export default function SloganCard({ className = "" }: { className?: string }) {
  return (
    <div className={`card ${className}`}>
      <h1 className="display font-medium text-4xl md:text-5xl leading-[1.06]">
        Redefining Software
        <br />
        Development with
        <br />
        Creativity and Precision
      </h1>
    </div>
  );
}
