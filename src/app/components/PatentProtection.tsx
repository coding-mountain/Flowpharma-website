import React from 'react';
import imgImage12 from "figma:asset/50ebbf119c43534e25fb02faf1a79406f078340f.png";
import imgPexelsNastyasensei667073353931 from "figma:asset/b02c88a73d07ef325ef31bdbd93bbae87550081c.png";

export function PatentProtection() {
  return (
    <section id="patent-protection" className="bg-white w-full py-16 md:py-20 px-6 md:px-12">
      <div className="w-full flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0c0c0c] tracking-[-0.8px] leading-[1.2]">
            Patent Protection: <br className="hidden md:block" />
            Securing the Future of FlowVax
          </h2>
          <p className="text-[#212121] text-lg font-light leading-relaxed lg:max-w-2xl">
            Securing exclusive rights and ensuring global growth for Flow Pharma's innovative cancer vaccine platform
          </p>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10">
          
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Image */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-xl">
              <img 
                src={imgImage12} 
                alt="Patent Document with Wax Seal" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-[#000c15] opacity-20 pointer-events-none" />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[28px] font-bold text-[#0a0a0a] tracking-[-0.56px]">
                Intellectual Property Portfolio
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 pb-6 border-b border-black/20">
                  <h4 className="text-2xl text-[#0a0a0a] font-normal tracking-[-0.48px]">9 Issued Patents</h4>
                  <p className="text-[#212121] text-lg font-light leading-relaxed">
                    Securing exclusive legal rights to the core Flow Vax innovations.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1 pb-6 border-b border-black/20">
                  <h4 className="text-2xl text-[#0a0a0a] font-normal tracking-[-0.48px]">20 Pending Applications</h4>
                  <p className="text-[#212121] text-lg font-light leading-relaxed">
                    Ensuring the continued growth and long-term defense of the technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Image */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-xl">
              <img 
                src={imgPexelsNastyasensei667073353931} 
                alt="Globe showing jurisdictional reach" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-[#000c15] opacity-20 pointer-events-none" />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[28px] font-bold text-[#0a0a0a] tracking-[-0.56px]">
                Strategic Coverage & Scope
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 pb-6 border-b border-black/20">
                  <h4 className="text-2xl text-[#0a0a0a] font-normal tracking-[-0.48px]">Global Jurisdictional Reach</h4>
                  <p className="text-[#212121] text-lg font-light leading-relaxed">
                    Robust protection established across multiple international territories.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1 pb-6 border-b border-black/20">
                  <h4 className="text-2xl text-[#0a0a0a] font-normal tracking-[-0.48px]">Comprehensive Portfolio Scope</h4>
                  <p className="text-[#212121] text-lg font-light leading-relaxed">
                    Covers core platform technologies, specific methods of use, and delivery systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}