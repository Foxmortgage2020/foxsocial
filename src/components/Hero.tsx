import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />
      {/* Orange glow */}
      <div className="absolute inset-0 orange-glow pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center py-20">
        <FadeUp>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange-dim px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-orange rounded-full pulse-dot" />
            <span className="text-sm font-medium text-brand-orange">
              Beta registration open
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-black leading-[1.1] mb-6">
            Your content.
            <br />
            On autopilot.
          </h1>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mx-auto mb-4">
            FoxSocial finds, scores, and transforms news, podcasts, and videos
            into ready-to-publish content for LinkedIn, Instagram, and TikTok.
            In your voice. Every week.
          </p>
        </FadeUp>

        <FadeUp delay={250}>
          <p className="text-sm text-brand-black/50 mb-10">
            Built for professionals who want to stay visible without spending
            hours creating content.
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#beta"
              className="bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-orange-hover transition-colors text-base"
            >
              Get early access
            </a>
            <a
              href="#how"
              className="border-2 border-brand-black/15 text-brand-black font-semibold px-8 py-3.5 rounded-lg hover:border-brand-black/30 transition-colors text-base"
            >
              See how it works
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={400}>
          <p className="text-sm text-brand-black/45 flex flex-wrap justify-center gap-x-2 gap-y-1">
            <span>Sounds exactly like you</span>
            <span className="text-brand-orange">&#183;</span>
            <span>~10 min of your time per week</span>
            <span className="text-brand-orange">&#183;</span>
            <span>LinkedIn, Instagram &amp; TikTok</span>
            <span className="text-brand-orange">&#183;</span>
            <span>Starting at $40/mo beta</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
