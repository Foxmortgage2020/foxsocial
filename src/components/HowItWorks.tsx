import FadeUp from "./FadeUp";

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "We research your content",
    desc: "Every day, our system scans YouTube channels, podcasts, news feeds, and search trends relevant to your industry. It scores each source for relevance, authority, and social media potential.",
    tag: "Automated",
    tagColor: "bg-brand-orange-dim text-brand-orange",
  },
  {
    num: "02",
    icon: (
      <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: "We write everything",
    desc: "AI generates LinkedIn posts, Instagram captions, video scripts, carousel copy, and hashtags. All written in your tone, using prompts calibrated to your voice and audience.",
    tag: "Automated",
    tagColor: "bg-brand-orange-dim text-brand-orange",
  },
  {
    num: "03",
    icon: (
      <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "You add your voice. We publish.",
    desc: "You get an email with your scripts. Tap approve or re-record. Your ElevenLabs voice clone generates the audio. Your HeyGen avatar renders the video. We schedule everything via Metricool.",
    tag: "~10 min",
    tagColor: "bg-gray-100 text-gray-600",
  },
];

const pipeline = [
  { label: "Content Research", auto: true },
  { label: "Script + Caption", auto: true },
  { label: "Metricool Draft", auto: true },
  { label: "Email to You", auto: true },
  { label: "ElevenLabs Voice", auto: false },
  { label: "HeyGen Video", auto: false },
  { label: "Published", auto: true },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-3 text-center">
            How it works
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-black text-center mb-4">
            We handle 95% of it. You do the other 5%.
          </h2>
          <p className="text-brand-black/60 text-center max-w-2xl mx-auto mb-16">
            Our system researches, writes, designs and schedules your content
            every week. Your only job is a quick 10 minutes to add your voice.
          </p>
        </FadeUp>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={i * 100}>
              <div className="border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                <div className="mb-5">{s.icon}</div>
                <h3 className="font-display font-bold text-lg text-brand-black mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-black/60 leading-relaxed flex-1 mb-5">
                  {s.desc}
                </p>
                <span
                  className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full ${s.tagColor}`}
                >
                  {s.tag}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Pipeline bar */}
        <FadeUp>
          <div className="bg-brand-card rounded-2xl p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center gap-0 min-w-[700px]">
              {pipeline.map((step, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className="text-center flex-1">
                    <p className="text-white text-xs md:text-sm font-medium mb-2">
                      {step.label}
                    </p>
                    <span
                      className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        step.auto
                          ? "bg-brand-orange/20 text-brand-orange"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {step.auto ? "Auto" : "You"}
                    </span>
                  </div>
                  {i < pipeline.length - 1 && (
                    <svg
                      className="w-4 h-4 text-white/20 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <p className="text-center text-sm italic text-brand-black/50 mt-8 max-w-2xl mx-auto">
            Your ElevenLabs voice clone generates the audio. Your HeyGen avatar
            renders the video. You upload. We schedule. It sounds exactly like
            you &mdash; because it is.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
