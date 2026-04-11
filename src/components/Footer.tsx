import FoxLogo from "./FoxLogo";

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex items-center gap-3">
            <FoxLogo className="w-7 h-7" />
            <div>
              <p className="font-display font-bold text-brand-white text-sm">
                FoxSocial
              </p>
              <p className="text-xs text-brand-muted">
                Your content. On autopilot.
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-brand-muted">
            <a href="#" className="hover:text-brand-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brand-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-brand-muted">
          <p>&copy; 2026 FoxSocial. All rights reserved.</p>
          <p>Built in Canada &#127809;</p>
        </div>
      </div>
    </footer>
  );
}
