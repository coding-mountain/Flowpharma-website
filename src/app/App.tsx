import React, { useState, useEffect } from 'react';
import { Search, Menu, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import logoImg from 'figma:asset/b701d1a2ec88b61043dd3be1e0117941c21ad9b6.png';
import logoWhiteImg from 'figma:asset/4d977721b2c6317ffd0445b32677bd4971debe28.png';
import heroBgImg from 'figma:asset/fb7a942012799352cdf6aafeb0f3ce67a4daf3d0.png';
import { FlowVaxProvenScience } from './components/FlowVaxProvenScience';
import { PatentProtection } from './components/PatentProtection';
import { ClinicalReadiness } from './components/ClinicalReadiness';
import { DeRiskedPath } from './components/DeRiskedPath';
import { Footer } from './components/Footer';
import { SafePageContent } from './components/SafePageContent';
import { StablePageContent } from './components/StablePageContent';
import { SolutionPageContent } from './components/SolutionPageContent';
import { OurTeamPageContent } from './components/OurTeamPageContent';
import { ContactPageContent } from './components/ContactPageContent';

export default function App() {
  const [isSafeOpen, setIsSafeOpen] = useState(false);
  const [isStableOpen, setIsStableOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll state when opening team page
  useEffect(() => {
    if (isTeamOpen) {
      setIsScrolled(false);
    }
  }, [isTeamOpen]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* Header */}
      <header className={`flex items-center justify-between px-6 py-5 md:px-12 sticky top-0 z-50 transition-all duration-300 border-b border-black/5 ${
        isScrolled ? 'bg-[#050505]' : 'bg-white'
      }`}>
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer select-none">
            <img 
              src={isScrolled ? logoWhiteImg : logoImg} 
              alt="Flo Pharma Logo" 
              className="h-8 w-auto object-contain cursor-pointer transition-opacity duration-300"
              onClick={() => {
                setIsSafeOpen(false);
                setIsStableOpen(false);
                setIsSolutionOpen(false);
                setIsTeamOpen(false);
                setIsContactOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
        <div className={`flex items-center space-x-6 md:space-x-8 text-[15px] font-medium transition-colors duration-300 ${
          isScrolled ? 'text-gray-300' : 'text-[#4A5568]'
        }`}>
          <button 
            onClick={() => {
              setIsContactOpen(false);
              setIsTeamOpen(true);
            }} 
            className={`hidden md:block text-[14px] active:scale-95 transition-all cursor-pointer ${
              isScrolled ? 'hover:text-white hover:opacity-80' : 'hover:text-gray-500 hover:opacity-80'
            }`}
          >
            Our Team
          </button>
          <button 
            onClick={() => {
              setIsTeamOpen(false);
              setIsContactOpen(true);
            }} 
            className={`hidden md:block text-[14px] active:scale-95 transition-all cursor-pointer ${
              isScrolled ? 'hover:text-white hover:opacity-80' : 'hover:text-gray-500 hover:opacity-80'
            }`}
          >
            Contact
          </button>
          <button className={`transition-colors ${
            isScrolled ? 'hover:text-white' : 'hover:text-gray-900'
          }`} aria-label="Search">
            <Search className="w-5 h-5" strokeWidth={2} />
          </button>
          <div className="relative">
            <button 
              className={`active:scale-95 transition-all ${
                isScrolled ? 'hover:text-white' : 'hover:text-gray-900'
              }`} 
              aria-label="Menu"
              onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
            >
              <Menu className="w-6 h-6" strokeWidth={2} />
            </button>
            
            {/* Menu Dropdown */}
            <AnimatePresence>
              {isMenuDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setIsMenuDropdownOpen(false)}
                  className="absolute top-full right-0 mt-4 w-64 rounded-lg shadow-xl overflow-hidden bg-[#1a1a1a] border border-gray-700"
                >
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setIsMenuDropdownOpen(false);
                        document.getElementById('proven-science')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="w-full text-left px-4 py-3 text-sm transition-colors text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Proven Science
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuDropdownOpen(false);
                        document.getElementById('patent-protection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="w-full text-left px-4 py-3 text-sm transition-colors text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Robust Patent Protection
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuDropdownOpen(false);
                        document.getElementById('clinical-readiness')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="w-full text-left px-4 py-3 text-sm transition-colors text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Immediate Clinical Readiness
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuDropdownOpen(false);
                        document.getElementById('derisked-path')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="w-full text-left px-4 py-3 text-sm transition-colors text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      De-Risked Path to Success
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm transition-colors text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Strong Leadership
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-4 md:px-6 lg:px-8 pb-4">
          <motion.div 
            initial={{ 
              scale: 1.15, 
              borderRadius: 0,
              margin: "-1rem -1rem 0 -1rem"
            }}
            animate={{ 
              scale: 1, 
              borderRadius: "1.5rem",
              margin: "0"
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative w-full rounded-3xl overflow-hidden min-h-[80vh] flex bg-[#111827]"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
              style={{ backgroundImage: `url(${heroBgImg})` }}
            />
            
            {/* Gradients to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-black/40 via-transparent to-transparent hidden lg:block pointer-events-none"></div>

            {/* Content Container */}
            <div className="relative w-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-20 h-full">
                {/* Left Content */}
                <div className="max-w-3xl text-white pt-8 md:pt-16 z-10">
                  <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] mb-6 text-white drop-shadow-md"
                  >
                    A Safe, Stable Vaccine and <br className="hidden sm:block" />
                    Immunotherapy Solution. <br className="hidden sm:block" />
                    For everyone, everywhere.
                  </motion.h1>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 md:mt-8 text-gray-200 text-[1.05rem] md:text-xl font-light tracking-wide"
                  >
                    <p className="mb-3 text-gray-100">An accelerated platform technology for:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-gray-400">
                      <li>COVID & Long COVID</li>
                      <li>Breast Cancer and Glioblastoma</li>
                      <li>Ebola and Marburg</li>
                    </ul>
                  </motion.div>

                  {/* Pills */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-3 mt-8"
                  >
                    <span 
                      onClick={() => setIsSafeOpen(true)}
                      className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-gray-200 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
                    >
                      Safe <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-70" />
                    </span>
                    <span 
                      onClick={() => setIsStableOpen(true)}
                      className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-gray-200 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
                    >
                      Stable <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-70" />
                    </span>
                    <span 
                      onClick={() => setIsSolutionOpen(true)}
                      className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-gray-200 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
                    >
                      Solution <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-70" />
                    </span>
                  </motion.div>

                  {/* Button */}
                  <motion.button 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg active:scale-[0.98]"
                  >
                    Meet Our Team <ChevronRight className="ml-2 w-4 h-4 text-gray-500" />
                  </motion.button>
                </div>

                {/* Desktop Right Bottom Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:flex absolute bottom-20 right-20 flex-col items-end space-y-3 text-gray-200 font-medium tracking-wide text-[0.95rem] z-10"
                >
                    <p onClick={() => document.getElementById('proven-science')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm flex items-center gap-2 group">
                      <span>PROVEN SCIENCE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </p>
                    <p onClick={() => document.getElementById('patent-protection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm flex items-center gap-2 group">
                      <span>ROBUST PATENT PROTECTION</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </p>
                    <p onClick={() => document.getElementById('clinical-readiness')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm flex items-center gap-2 group">
                      <span>IMMEDIATE CLINICAL READINESS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </p>
                    <p onClick={() => document.getElementById('derisked-path')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm flex items-center gap-2 group">
                      <span>DE-RISKED PATH TO SUCCESS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </p>
                    <p className="hover:text-white transition-colors cursor-default drop-shadow-sm flex items-center gap-2 group">
                      <span>STRONG LEADERSHIP</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </p>
                </motion.div>
                
                {/* Mobile / Tablet Bottom Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:hidden mt-16 space-y-2.5 text-gray-200 font-medium tracking-wide text-xs sm:text-sm z-10 pb-2"
                >
                    <p onClick={() => document.getElementById('proven-science')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm">PROVEN SCIENCE</p>
                    <p onClick={() => document.getElementById('patent-protection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm">ROBUST PATENT PROTECTION</p>
                    <p onClick={() => document.getElementById('clinical-readiness')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm">IMMEDIATE CLINICAL READINESS</p>
                    <p onClick={() => document.getElementById('derisked-path')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hover:text-white transition-colors cursor-pointer drop-shadow-sm">DE-RISKED PATH TO SUCCESS</p>
                    <p className="hover:text-white transition-colors cursor-default drop-shadow-sm">STRONG LEADERSHIP</p>
                </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Info Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-8 pb-8 md:pt-10 md:pb-10 px-6 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.5rem] font-medium text-gray-900 mb-5 leading-tight tracking-tight">
            A next generation biotech company with <br className="hidden md:block"/> deep innovation history.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light tracking-wide">
            At the summit of Science Poised to enter the Clinic.
          </p>
        </motion.section>

        {/* 100px White Space Spacer */}
        <div className="w-full h-[100px] bg-white" aria-hidden="true" />

        {/* Proven Science Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FlowVaxProvenScience />
        </motion.div>

        {/* 60px White Space Spacer */}
        <div className="w-full h-[60px] bg-white" aria-hidden="true" />

        {/* Patent Protection Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <PatentProtection />
        </motion.div>

        {/* 100px White Space Spacer */}
        <div className="w-full h-[100px] bg-white" aria-hidden="true" />

        {/* Clinical Readiness Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <ClinicalReadiness />
        </motion.div>

        {/* 100px White Space Spacer */}
        <div className="w-full h-[100px] bg-white" aria-hidden="true" />

        {/* De-Risked Path Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <DeRiskedPath />
        </motion.div>

        {/* 100px White Space Spacer */}
        <div className="w-full h-[100px] bg-white" aria-hidden="true" />
      </main>

      {/* Footer */}
      <Footer 
        onOpenSafe={() => setIsSafeOpen(true)} 
        onOpenStable={() => setIsStableOpen(true)} 
      />

      {/* Slide-up Safe Page Modal */}
      <AnimatePresence>
        {isSafeOpen && (
          <div key="safe-modal" className="fixed inset-0 z-40 flex flex-col pointer-events-none pt-[72px]">
            {/* Backdrop */}
            <motion.div
              key="safe-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-auto"
            />
            
            {/* Sliding Panel */}
            <motion.div
              key="safe-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full overflow-hidden bg-white pointer-events-auto flex flex-col z-10"
            >
              <div className="flex-1 overflow-y-auto w-full h-full relative pb-12">
                <SafePageContent onClose={() => setIsSafeOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-up Stable Page Modal */}
      <AnimatePresence>
        {isStableOpen && (
          <div key="stable-modal" className="fixed inset-0 z-40 flex flex-col pointer-events-none pt-[72px]">
            {/* Backdrop */}
            <motion.div
              key="stable-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-auto"
            />
            
            {/* Sliding Panel */}
            <motion.div
              key="stable-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full overflow-hidden bg-white pointer-events-auto flex flex-col z-10"
            >
              <div className="flex-1 overflow-y-auto w-full h-full relative pb-12">
                <StablePageContent onClose={() => setIsStableOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Slide-up Solution Page Modal */}
      <AnimatePresence>
        {isSolutionOpen && (
          <div key="solution-modal" className="fixed inset-0 z-40 flex flex-col pointer-events-none pt-[72px]">
            {/* Backdrop */}
            <motion.div
              key="solution-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-auto"
            />
            
            {/* Sliding Panel */}
            <motion.div
              key="solution-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full overflow-hidden bg-white pointer-events-auto flex flex-col z-10"
            >
              <div className="flex-1 overflow-y-auto w-full h-full relative pb-12">
                <SolutionPageContent onClose={() => setIsSolutionOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-up Team Page Modal */}
      <AnimatePresence>
        {isTeamOpen && (
          <div key="team-modal" className="fixed inset-0 z-40 flex flex-col pointer-events-none pt-[72px]">
            {/* Backdrop */}
            <motion.div
              key="team-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-auto"
            />
            
            {/* Sliding Panel */}
            <motion.div
              key="team-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full overflow-hidden bg-white pointer-events-auto flex flex-col z-10"
            >
              <div 
                className="flex-1 overflow-y-auto w-full h-full relative pb-12"
                onScroll={(e) => {
                  const scrollTop = e.currentTarget.scrollTop;
                  setIsScrolled(scrollTop > 50);
                }}
              >
                <OurTeamPageContent onClose={() => setIsTeamOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-up Contact Page Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div key="contact-modal" className="fixed inset-0 z-40 flex flex-col pointer-events-none pt-[72px]">
            {/* Backdrop */}
            <motion.div
              key="contact-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-auto"
            />
            
            {/* Sliding Panel */}
            <motion.div
              key="contact-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full overflow-hidden bg-white pointer-events-auto flex flex-col z-10"
            >
              <div className="flex-1 overflow-y-auto w-full h-full relative pb-12">
                <ContactPageContent onClose={() => setIsContactOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}