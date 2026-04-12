import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-5">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-widest mb-3">
                Legal
              </p>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-[#080A0F] tracking-tight">
                Terms of Service
              </h1>
              <p className="mt-4 text-sm text-[#080A0F]/50">
                Effective April 12, 2026
              </p>
            </div>
          </FadeUp>

          {/* 1. Acceptance of Terms */}
          <FadeUp delay={50}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                By accessing or using the FoxSocial platform, website, and related services (collectively, the &ldquo;Service&rdquo;) operated by 2802551 Ontario Inc. (&ldquo;FoxSocial,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). These Terms constitute a legally binding agreement between you and FoxSocial.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                If you are entering into these Terms on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to these Terms. In such case, &ldquo;you&rdquo; and &ldquo;your&rdquo; shall refer to that entity.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                If you do not agree with any part of these Terms, you must not access or use the Service. Your continued use of the Service following the posting of any changes to these Terms constitutes acceptance of those changes.
              </p>
            </section>
          </FadeUp>

          {/* 2. Description of Service */}
          <FadeUp delay={100}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                2. Description of Service
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial is an AI-powered social media content automation platform designed for professionals and businesses. The Service researches and curates content from your designated sources, generates written scripts, captions, and hashtags tailored to your brand voice, creates carousel images and visual content, and schedules posts to your connected social media accounts via our integration with Metricool.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Video content generation within the Service requires the client to maintain their own active accounts with ElevenLabs (for voice cloning and text-to-speech) and HeyGen (for video avatar creation). FoxSocial integrates with these services on your behalf but does not provide, manage, or assume responsibility for your accounts with these third-party providers.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We will make reasonable efforts to notify you of any material changes that affect your use of the Service.
              </p>
            </section>
          </FadeUp>

          {/* 3. Subscriptions and Billing */}
          <FadeUp delay={150}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                3. Subscriptions and Billing
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Access to FoxSocial requires a paid monthly subscription. All subscription fees are billed in Canadian Dollars (CAD) on a recurring monthly basis and are processed securely through Stripe. Your subscription will automatically renew at the end of each billing cycle unless you cancel prior to the renewal date.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                A one-time onboarding fee of $150 CAD is charged on your first invoice. This fee covers your complete account setup, including Metricool brand configuration, Content OS activation, content profile setup, n8n workflow configuration, and your activation call with our team. The onboarding fee is non-refundable.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Beta pricing is available to founding subscribers and is locked for the lifetime of your continuous subscription. If you cancel and later resubscribe, beta pricing is no longer guaranteed and current published rates will apply.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                You may cancel your subscription at any time by contacting us at michael@app.foxmortgage.ca. Upon cancellation, your subscription will remain active until the end of your current billing period. No refunds or pro-rated credits are issued for the remaining portion of a billing cycle. In the event of a failed payment, a three (3) business day grace period will be provided. If payment is not received within the grace period, your account will be suspended. Service will be reactivated upon successful payment.
              </p>
            </section>
          </FadeUp>

          {/* 4. Acceptable Use */}
          <FadeUp delay={200}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You are solely responsible for ensuring that your use of the Service complies with all applicable laws, regulations, and the terms of service of any social media platforms to which you publish content.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                You agree not to use the Service to: generate, distribute, or publish content that is illegal, defamatory, threatening, harassing, obscene, or otherwise objectionable; send unsolicited messages, spam, or bulk communications through connected social media accounts; impersonate any person or entity, or misrepresent your affiliation with any person or entity; generate content that violates the terms of service of LinkedIn, Instagram, TikTok, or any other connected platform.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                You further agree not to: attempt to circumvent any usage limits, rate limits, or access restrictions imposed by the Service; reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code or underlying algorithms of the Service; use the Service to develop a competing product or service; share your account credentials with unauthorized third parties or allow multiple individuals to use a single account. Violation of these acceptable use provisions may result in immediate suspension or termination of your account.
              </p>
            </section>
          </FadeUp>

          {/* 5. Content Ownership */}
          <FadeUp delay={250}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                5. Content Ownership
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                You retain full and exclusive ownership of all content generated through FoxSocial for your account, including but not limited to written posts, captions, hashtags, scripts, carousel images, and video content (collectively, &ldquo;Generated Content&rdquo;). FoxSocial does not claim any ownership rights, license rights, or usage rights to your Generated Content.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                You are solely responsible for all content published to your social media accounts through the Service. This includes responsibility for ensuring that your content does not infringe on the intellectual property rights of any third party, does not violate any applicable laws or regulations, and complies with the terms of service of the social media platforms on which it is published.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                FoxSocial retains ownership of its proprietary technology, platform, algorithms, workflows, and processes. Nothing in these Terms grants you any right, title, or interest in FoxSocial&apos;s intellectual property beyond the limited right to use the Service during your active subscription.
              </p>
            </section>
          </FadeUp>

          {/* 6. Third-Party Services */}
          <FadeUp delay={300}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                The Service integrates with and relies upon various third-party services to deliver its functionality. These include Stripe for payment processing, Clerk for user authentication, Metricool for social media scheduling and analytics, Resend for transactional email delivery, Supabase for database hosting, and Vercel for application hosting. Your use of the Service is also subject to the terms and privacy policies of these third-party providers.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Video content features require you to maintain your own active accounts with ElevenLabs and HeyGen. You are solely responsible for your relationship with these providers, including compliance with their terms of service, payment of their fees, and management of your account credentials. FoxSocial is not a reseller, agent, or representative of ElevenLabs or HeyGen.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                FoxSocial is not responsible for the availability, reliability, or performance of any third-party service. In the event of a third-party service outage or disruption, we will make reasonable efforts to restore functionality but shall not be liable for any interruption, delay, or loss resulting from such outage.
              </p>
            </section>
          </FadeUp>

          {/* 7. Limitation of Liability */}
          <FadeUp delay={350}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                To the maximum extent permitted by the laws of the Province of Ontario and applicable Canadian federal law, the total aggregate liability of FoxSocial arising out of or relating to these Terms or your use of the Service shall not exceed the total amount paid by you to FoxSocial in the twelve (12) months immediately preceding the event giving rise to the claim.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                In no event shall FoxSocial, its officers, directors, employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, loss of profits, loss of business opportunities, loss of data, or reputational harm, whether arising in contract, tort, strict liability, or otherwise, even if FoxSocial has been advised of the possibility of such damages.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                FoxSocial shall not be liable for any actions taken by social media platforms in relation to your accounts, including but not limited to account suspension, content removal, reach reduction, or account termination. You acknowledge that social media platforms operate independently and may take action on your account for any reason at their sole discretion.
              </p>
            </section>
          </FadeUp>

          {/* 8. Disclaimer of Warranties */}
          <FadeUp delay={400}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, implied, or statutory. FoxSocial expressly disclaims all implied warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial does not guarantee any specific social media results, engagement rates, follower growth, lead generation, or business outcomes from the use of the Service. The effectiveness of content generated through the platform depends on numerous factors outside our control, including social media platform algorithms, audience behavior, market conditions, and industry trends.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                FoxSocial does not guarantee that the Service will be uninterrupted, error-free, or free of harmful components. While we strive to maintain high availability, scheduled and unscheduled maintenance, third-party service disruptions, and other factors may result in temporary unavailability of the Service.
              </p>
            </section>
          </FadeUp>

          {/* 9. Indemnification */}
          <FadeUp delay={450}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                9. Indemnification
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                You agree to indemnify, defend, and hold harmless FoxSocial, 2802551 Ontario Inc., and its officers, directors, employees, agents, and affiliates from and against any and all claims, demands, actions, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to: your use of the Service; any content generated, published, or distributed through your account; your violation of these Terms; your violation of any applicable law or regulation; or your infringement of any intellectual property or other right of any third party.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                This indemnification obligation shall survive the termination or expiration of these Terms and your use of the Service. FoxSocial reserves the right to assume exclusive defense and control of any matter subject to indemnification by you, at your expense, and you agree to cooperate with our defense of such claims.
              </p>
            </section>
          </FadeUp>

          {/* 10. Termination */}
          <FadeUp delay={500}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                10. Termination
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Either party may terminate this agreement at any time. You may cancel your subscription and terminate your account by contacting us at michael@app.foxmortgage.ca. Upon your cancellation, your access to the Service will continue until the end of your current billing period, after which your account will be deactivated.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial reserves the right to suspend or terminate your account and access to the Service if you breach any provision of these Terms. In the case of a curable breach, we will provide seven (7) days written notice and an opportunity to cure the breach before termination takes effect. In the case of a material or uncurable breach, including but not limited to fraud, illegal activity, or abuse of the platform, we may terminate your account immediately without notice.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                Upon termination, your access to the Service will be revoked and your account deactivated. Your data will be retained for a period of thirty (30) days following termination, during which you may request a copy of your data or request its deletion by contacting us at michael@app.foxmortgage.ca. After thirty (30) days, your data will be permanently deleted upon request.
              </p>
            </section>
          </FadeUp>

          {/* 11. Governing Law */}
          <FadeUp delay={550}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                11. Governing Law
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof shall be subject to the exclusive jurisdiction of the courts of the Province of Ontario.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                You irrevocably consent to the personal jurisdiction and venue of the courts located in Ontario, Canada, and waive any objection based on inconvenient forum. Notwithstanding the foregoing, FoxSocial may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property rights.
              </p>
            </section>
          </FadeUp>

          {/* 12. Changes to Terms */}
          <FadeUp delay={600}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial reserves the right to modify these Terms at any time. When we make material changes, we will provide you with at least thirty (30) days prior notice by sending an email to the address associated with your account. Non-material changes, such as typographical corrections or clarifications, may be made without prior notice.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                Your continued use of the Service after the thirty (30) day notice period constitutes your acceptance of the revised Terms. If you do not agree with any changes, you must discontinue use of the Service and cancel your subscription before the revised Terms take effect. The most current version of these Terms will always be available on our website.
              </p>
            </section>
          </FadeUp>

          {/* 13. Contact Us */}
          <FadeUp delay={650}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                13. Contact Us
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                If you have any questions or concerns about these Terms, please contact us:
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-1">
                <strong className="text-[#080A0F]">2802551 Ontario Inc.</strong> operating as FoxSocial
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-1">
                Email:{" "}
                <a
                  href="mailto:michael@app.foxmortgage.ca"
                  className="text-[#FF6B2B] hover:underline"
                >
                  michael@app.foxmortgage.ca
                </a>
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                Website:{" "}
                <a
                  href="https://foxsocial.ca"
                  className="text-[#FF6B2B] hover:underline"
                >
                  foxsocial.ca
                </a>
              </p>
            </section>
          </FadeUp>
        </div>
      </main>
      <Footer />
    </>
  );
}
