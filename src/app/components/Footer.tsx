import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import logoImg from 'figma:asset/4d977721b2c6317ffd0445b32677bd4971debe28.png';

export function Footer({ 
  onOpenSafe,
  onOpenStable 
}: { 
  onOpenSafe?: () => void;
  onOpenStable?: () => void;
}) {
  return (
    <footer className="w-full bg-[#050505] text-[#eee] pt-20 pb-8 px-6 md:px-12 border-t border-zinc-900">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-start gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="w-full md:w-[45%] lg:w-[28%] flex flex-col gap-6">
            <div className="flex items-center select-none">
              <img src={logoImg} alt="Flo Pharma Logo" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-[#a1a1aa] text-[15px] leading-relaxed max-w-sm font-light">
              A next-generation biotech company pioneering patented viral and oncology immunotherapies with a clear, de-risked path to commercialization.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[45%] lg:w-auto flex flex-col gap-5">
            <h4 className="text-white font-medium text-[17px] tracking-tight mb-2">Company</h4>
            <div className="flex flex-col gap-3.5">
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Proven Science
              </a>
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Clinical Readiness
              </a>
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Patent Protection
              </a>
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Our Team
              </a>
            </div>
          </div>

          {/* Why Flowpharma */}
          <div className="w-full md:w-[45%] lg:w-auto flex flex-col gap-5">
            <h4 className="text-white font-medium text-[17px] tracking-tight mb-2">Why Flowpharma</h4>
            <div className="flex flex-col gap-3.5">
              <span onClick={onOpenSafe} className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Safe
              </span>
              <span onClick={onOpenStable} className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group cursor-pointer">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Stable
              </span>
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-light flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                Solution
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col gap-5">
            <h4 className="text-white font-medium text-[17px] tracking-tight mb-2">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-[#a1a1aa]">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-[15px] font-light leading-relaxed">
                  Sydney Innovation Hub<br />
                  Level 4, 11 Biotech Way<br />
                  Sydney, NSW 2000, Australia
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#a1a1aa]">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                <a href="mailto:contact@flopharma.com" className="text-[15px] font-light hover:text-white transition-colors">
                  contact@flopharma.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#a1a1aa]">
                <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
                <a href="tel:+61212345678" className="text-[15px] font-light hover:text-white transition-colors">
                  +61 2 1234 5678
                </a>
              </div>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}