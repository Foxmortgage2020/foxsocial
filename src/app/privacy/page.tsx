import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="mt-4 text-sm text-[#080A0F]/50">
                Effective April 12, 2026
              </p>
            </div>
          </FadeUp>

          {/* 1. Introduction */}
          <FadeUp delay={50}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                1. Introduction
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We at 2802551 Ontario Inc., operating as FoxSocial, respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at foxsocial.ca and our AI-powered social media content automation platform (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                By accessing or using FoxSocial, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our Service.
              </p>
            </section>
          </FadeUp>

          {/* 2. Information We Collect */}
          <FadeUp delay={100}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                2. Information We Collect
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We collect information that you provide directly to us when you create an account, subscribe to our Service, or communicate with us. This includes your name, email address, billing address, company name, industry, and job title. We collect this information to set up your account, personalize your content strategy, and communicate with you about the Service.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Payment information, including credit card details, is processed exclusively by Stripe, our third-party payment processor. FoxSocial does not store, access, or have visibility into your full credit card number, CVV, or other sensitive payment credentials at any time. Stripe is PCI DSS Level 1 compliant and handles all payment data in accordance with the highest industry security standards.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We automatically collect usage data as you interact with the Service. This includes information about the content generated through your account, the social media platforms you connect, scheduling activity, content preferences, and feature usage patterns. This data helps us improve the Service and provide you with a better experience.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                We also collect aggregated social media performance data through our integration with Metricool, including post engagement metrics, reach, impressions, and follower analytics. This data is used to inform your content strategy and is displayed within your FoxSocial dashboard.
              </p>
            </section>
          </FadeUp>

          {/* 3. How We Use Your Information */}
          <FadeUp delay={150}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We use the information we collect to provide, operate, and maintain the FoxSocial platform. This includes generating content tailored to your brand voice, scheduling posts to your connected social media accounts, processing your subscription payments through Stripe, and delivering the core functionality of the Service.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We send you transactional and service-related communications, including account setup confirmations, content script approval emails, scheduling alerts, billing receipts, and important notices about changes to the Service. These communications are essential to the operation of your account and are not marketing messages.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                We use aggregated and anonymized usage data to analyze trends, improve the platform, develop new features, and ensure the security and reliability of the Service. We may also use your information to respond to your support inquiries and to communicate about updates, changes, or issues affecting the Service.
              </p>
            </section>
          </FadeUp>

          {/* 4. Information Sharing */}
          <FadeUp delay={200}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                4. Information Sharing
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial does not sell, rent, or trade your personal information to any third party for marketing or advertising purposes. We share your information only with the third-party service providers necessary to operate the Service, and only to the extent required for them to perform their functions on our behalf.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Our third-party service providers include: Stripe for payment processing; Clerk for user authentication and account management; Resend for transactional email delivery; Metricool for social media scheduling and analytics; Supabase for database hosting; and Vercel for application hosting and deployment. Each of these providers is bound by their own privacy policies and data protection obligations.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                ElevenLabs (voice cloning) and HeyGen (video avatar generation) are client-owned accounts. FoxSocial does not access, store, or manage credentials for these services. You maintain a direct relationship with these providers, and their respective privacy policies govern the data you share with them.
              </p>
            </section>
          </FadeUp>

          {/* 5. Data Retention */}
          <FadeUp delay={250}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                5. Data Retention
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We retain your account data, including your profile information, content history, and platform connections, for as long as your subscription remains active. This data is necessary to provide the Service and to maintain your content history and performance analytics.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Upon account closure or cancellation of your subscription, we will delete your personal data within thirty (30) days of receiving a written request to do so at michael@app.foxmortgage.ca. During this period, your data will be retained in a deactivated state and will not be used for any purpose other than fulfilling your deletion request.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                Aggregated, anonymized data that does not identify you personally may be retained indefinitely for analytical and service improvement purposes. This data cannot be used to re-identify any individual user.
              </p>
            </section>
          </FadeUp>

          {/* 6. Your Rights */}
          <FadeUp delay={300}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                6. Your Rights
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                Under the Personal Information Protection and Electronic Documents Act (PIPEDA), which governs the collection, use, and disclosure of personal information in the course of commercial activity in Canada, you have the right to access the personal information we hold about you. Upon written request, we will provide you with a copy of your personal data in a commonly used electronic format within thirty (30) days.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                You have the right to request the correction of any inaccurate or incomplete personal information we hold about you. You also have the right to withdraw your consent to our collection, use, or disclosure of your personal information at any time, subject to legal or contractual restrictions and reasonable notice. Please note that withdrawing consent may impact our ability to provide the Service to you.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                If you believe that we have not handled your personal information in accordance with PIPEDA, you have the right to file a complaint with the Office of the Privacy Commissioner of Canada. To exercise any of your rights, or if you have questions about how we handle your personal information, please contact us at michael@app.foxmortgage.ca.
              </p>
            </section>
          </FadeUp>

          {/* 7. Cookies */}
          <FadeUp delay={350}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                7. Cookies
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial uses a minimal number of cookies that are strictly necessary for the operation of the Service. These include authentication cookies managed by Clerk, which are required to keep you securely signed in to your account, and essential session cookies that enable core site functionality.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                We do not use advertising cookies, tracking cookies, or third-party analytics cookies. We do not participate in any advertising networks, and no data collected through cookies on our platform is shared with advertisers or data brokers.
              </p>
            </section>
          </FadeUp>

          {/* 8. Security */}
          <FadeUp delay={400}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                8. Security
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmitted between your browser and our servers is encrypted using TLS/SSL (Transport Layer Security / Secure Sockets Layer) protocols.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                User authentication is managed by Clerk, which provides enterprise-grade security features including secure session management, multi-factor authentication support, and protection against common attack vectors. Payment processing is handled by Stripe, which is PCI DSS Level 1 compliant, the highest level of certification available in the payments industry.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                While we take reasonable measures to protect your information, no method of electronic transmission or storage is completely secure. We regularly review and update our security practices, but we cannot guarantee absolute security. We will notify affected users promptly in the event of a data breach in accordance with applicable Canadian privacy legislation.
              </p>
            </section>
          </FadeUp>

          {/* 9. Children's Privacy */}
          <FadeUp delay={450}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                FoxSocial is a business-to-business platform designed for use by professionals and is not intended for individuals under the age of eighteen (18). We do not knowingly collect, use, or disclose personal information from children under the age of 18.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                If we become aware that we have inadvertently collected personal information from a child under 18, we will take immediate steps to delete such information from our records. If you believe that a child under 18 has provided us with personal information, please contact us at michael@app.foxmortgage.ca so that we can take appropriate action.
              </p>
            </section>
          </FadeUp>

          {/* 10. Changes to This Policy */}
          <FadeUp delay={500}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                We reserve the right to update or modify this Privacy Policy at any time. When we make material changes to this policy, we will notify you by sending an email to the address associated with your account and by posting a notice on our website prior to the changes taking effect.
              </p>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed">
                Your continued use of the Service after the effective date of any updated Privacy Policy constitutes your acceptance of the revised terms. We encourage you to review this policy periodically to stay informed about how we are protecting your information. The date at the top of this page indicates when this policy was last updated.
              </p>
            </section>
          </FadeUp>

          {/* 11. Contact Us */}
          <FadeUp delay={550}>
            <section className="mb-10">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                11. Contact Us
              </h2>
              <p className="text-sm text-[#080A0F]/70 leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
