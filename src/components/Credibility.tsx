import FadeUp from "./FadeUp";

const stats = [
  { value: "43", label: "active workflows" },
  { value: "10+", label: "industries" },
  { value: "~$0.05", label: "per video post" },
];

export default function Credibility() {
  return (
    <section className="py-24 px-5 bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <p className="font-display font-bold text-2xl md:text-3xl text-brand-black mb-10">
            Built by a mortgage agent. Used by professionals across every
            industry.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <blockquote className="text-xl md:text-2xl italic text-brand-black/80 leading-relaxed mb-3 max-w-3xl mx-auto font-body">
            &ldquo;I built this system for my own business first. When it
            started producing better content than anything I could create
            manually &mdash; I knew other professionals needed it too.&rdquo;
          </blockquote>
          <p className="text-sm text-brand-black/50 mb-14">
            &mdash; Michael Fox, Founder, FoxSocial
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={200 + i * 80}>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-display font-bold text-2xl md:text-3xl text-brand-black mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-brand-black/50">{s.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
