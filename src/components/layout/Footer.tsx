import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* TODO: Replace with final logo asset */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center">
                <span className="font-display text-white font-bold text-sm">C</span>
              </div>
              <div>
                <p className="font-display text-base font-semibold leading-none">
                  Craig du Toit Nel
                </p>
                <p className="font-mono text-[9px] text-grey-mid tracking-widest uppercase mt-0.5">
                  Wellness Platform
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Two worlds. One brand. Premium wellness solutions for slimming and
              lifestyle excellence.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Craig Slimming */}
          <div>
            <h3 className="font-display text-base font-semibold text-pink-200 mb-4">
              Craig Slimming
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Shop All", href: "/slimming/shop" },
                { label: "Peptides", href: "/slimming/shop?category=peptides" },
                { label: "Formulas", href: "/slimming/shop?category=formulas" },
                { label: "Bundles", href: "/slimming/shop?category=bundles" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-pink-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Craig Lifestyle */}
          <div>
            <h3 className="font-display text-base font-semibold text-teal-200 mb-4">
              Craig Lifestyle
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Shop All", href: "/lifestyle/shop" },
                { label: "Skincare", href: "/lifestyle/shop?category=skincare" },
                { label: "Beauty", href: "/lifestyle/shop?category=beauty" },
                { label: "Combos", href: "/lifestyle/shop?category=combo" },
                { label: "Workout Plans", href: "/lifestyle/plans" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={14} className="text-pink-300 shrink-0" />
                <span>077 381 7873 / 069 832 0765</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size={14} className="text-pink-300 shrink-0" />
                <a
                  href="mailto:info@craigdutoitnel.co.za"
                  className="hover:text-pink-200 transition-colors"
                >
                  info@craigdutoitnel.co.za
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/50 font-mono">WhatsApp Orders</p>
              <p className="text-sm text-white/80 mt-1">
                Order via WhatsApp for priority fulfilment.
              </p>
              <a
                href="https://wa.me/27773817873"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-mono text-pink-300 hover:text-pink-200 transition-colors"
              >
                Open WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} Craig du Toit Nel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
