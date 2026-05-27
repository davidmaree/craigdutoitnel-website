import Link from "next/link";
import { Mail, Phone, MessageSquare } from "lucide-react";

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

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      style={{ background: "linear-gradient(160deg, #FFF5F9 0%, #FFE8F2 50%, #FFDAEE 100%)" }}
      className="border-t border-pink-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            {/* TODO: Replace with final logo asset */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(to right, #F45FA0, #3B82F6)" }}
              >
                <span className="font-display text-white font-bold text-sm">C</span>
              </div>
              <div>
                <p className="font-display text-base font-semibold text-charcoal leading-none">
                  Craig du Toit Nel
                </p>
                <p
                  className="font-mono text-[9px] tracking-widest uppercase mt-0.5"
                  style={{
                    background: "linear-gradient(to right, #F45FA0, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Wellness Platform
                </p>
              </div>
            </div>
            <p className="text-sm text-charcoal/60 leading-relaxed max-w-xs">
              Two worlds. One brand. Premium wellness solutions for slimming and lifestyle excellence.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/craig_du_toit_nel"
                target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-pink-500 hover:text-white text-charcoal/60 border border-pink-200 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/CraigDuToitNelPage"
                target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-pink-500 hover:text-white text-charcoal/60 border border-pink-200 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.tiktok.com/@craigdutoitnel"
                target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-charcoal hover:text-white text-charcoal/60 border border-pink-200 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Craig Slimming */}
          <div>
            <h3 className="font-display text-base font-semibold text-pink-500 mb-4">Craig Slimming</h3>
            <ul className="space-y-2">
              {[
                { label: "Shop All",  href: "/slimming/shop" },
                { label: "Peptides",  href: "/slimming/shop?category=peptides" },
                { label: "Formulas",  href: "/slimming/shop?category=formulas" },
                { label: "Bundles",   href: "/slimming/shop?category=bundles" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-charcoal/60 hover:text-pink-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Craig Lifestyle */}
          <div>
            <h3 className="font-display text-base font-semibold text-blue-500 mb-4">Craig Lifestyle</h3>
            <ul className="space-y-2">
              {[
                { label: "Shop All",      href: "/lifestyle/shop" },
                { label: "Skincare",      href: "/lifestyle/shop?category=skincare" },
                { label: "Beauty",        href: "/lifestyle/shop?category=beauty" },
                { label: "Combos",        href: "/lifestyle/shop?category=combo" },
                { label: "Workout Plans", href: "/lifestyle/plans" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-charcoal/60 hover:text-blue-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-semibold text-charcoal mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-charcoal/60">
                <Phone size={14} className="text-pink-400 shrink-0" />
                <a href="tel:+27773817873" className="hover:text-pink-500 transition-colors">
                  077 381 7873
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-charcoal/60">
                <Mail size={14} className="text-pink-400 shrink-0" />
                <a href="mailto:info@craigdutoit.co.za" className="hover:text-pink-500 transition-colors">
                  info@craigdutoit.co.za
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/60 border border-pink-200">
              <p className="text-xs text-charcoal/50 font-mono">WhatsApp Orders</p>
              <p className="text-sm text-charcoal/70 mt-1">
                Order via WhatsApp for priority fulfilment.
              </p>
              <a
                href="https://wa.me/27773817873"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs font-mono text-pink-500 hover:text-pink-600 transition-colors"
              >
                <MessageSquare size={12} />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal/40 font-mono">
            © {new Date().getFullYear()} Craig du Toit Nel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-charcoal/40 hover:text-charcoal/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-xs text-charcoal/40 hover:text-charcoal/70 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
