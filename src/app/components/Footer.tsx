import React from "react";
import { Mail, MapPin } from "lucide-react";
import { IMAGES } from "../../constants/images";

export function Footer({
  onOpenSafe,
  onOpenStable,
  onOpenSolution,
}: {
  onOpenSafe?: () => void;
  onOpenStable?: () => void;
  onOpenSolution?: () => void;
}) {
  return (
    <footer className="w-full bg-[#0A253A] text-[#eee] pt-20 pb-8 px-6 md:px-12 border-t border-zinc-900">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-start gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="w-full md:w-[45%] lg:w-[28%] flex flex-col gap-6">
            <div className="flex items-center select-none">
              <img
                src={IMAGES.homepage.logoWhite}
                alt="Flo Pharma Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-[#ffffff] text-[15px] leading-relaxed max-w-sm font-light">
              A next-generation biotech company pioneering patented viral and
              oncology immunotherapies with a clear, de-risked path to
              commercialization.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {/* <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
              >
                <svg className="w-4 h-4" viewBox="0 0 1200 1227" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="w-full md:w-[45%] lg:w-auto flex flex-col gap-5">
            <h4 className="text-white font-medium text-[17px] tracking-tight mb-2">
              Company
            </h4>
            <div className="flex flex-col gap-3.5">
              <span
                onClick={() => {
                  document.getElementById("proven-science")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Proven Science
              </span>
              <span
                onClick={() => {
                  document
                    .getElementById("clinical-readiness")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Clinical Readiness
              </span>
              <span
                onClick={() => {
                  document.getElementById("patent-protection")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Patent Protection
              </span>
              <span
                onClick={() => {
                  document.getElementById("strong-leadership")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Our Team
              </span>
            </div>
          </div> */}

          {/* Why Flo Pharma */}
          {/* <div className="w-full md:w-[45%] lg:w-auto flex flex-col gap-5">
            <h4 className="text-white font-medium text-[17px] tracking-tight mb-2">
              Why Flo Pharma?
            </h4>
            <div className="flex flex-col gap-3.5">
              <span
                onClick={onOpenSafe}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Safe
              </span>
              <span
                onClick={onOpenStable}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Stable
              </span>
              <span
                onClick={onOpenSolution}
                className="text-[#ffffff] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Solution
              </span>
            </div>
          </div> */}

          {/* Contact Info */}
          <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col gap-5">
            <h4 className="text-white font-medium text-[17px] tracking-tight mb-2">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-[#ffffff]">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-[15px] font-light leading-relaxed">
                  924 East 7th St #200
                  <br />
                  Austin TX 78702
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#ffffff]">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                <a
                  href="mailto:inquiries@flo-pharma.com"
                  className="text-[15px] font-light hover:text-white transition-colors"
                >
                  inquiries@flo-pharma.com
                </a>
              </div>
              {/* <div className="flex items-center gap-3 text-[#ffffff]">
                <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
                <a
                  href="tel:+61212345678"
                  className="text-[15px] font-light hover:text-white transition-colors"
                >
                  +61 2 1234 5678
                </a>
              </div> */}
            </div>

            {/* Newsletter/Action */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#71717a] text-sm font-light">
            © {new Date().getFullYear()} Flo Pharma. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-light text-[#71717a]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
