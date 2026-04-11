const items = [
  "Content research",
  "AI scoring",
  "Script generation",
  "Carousel creation",
  "Voice cloning",
  "Video drafts",
  "Auto-scheduling",
  "Multi-platform publishing",
  "Analytics tracking",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <section className="bg-brand-dark py-5 overflow-hidden">
      <div className="ticker-track flex animate-scroll-left whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-white text-sm font-medium px-6">{item}</span>
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
