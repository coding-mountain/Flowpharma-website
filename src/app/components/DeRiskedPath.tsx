import React from 'react';
import svgPaths from "../../imports/svg-a2617wsml";
import imgImage24 from "figma:asset/317164733ee30d8a66b77d743eee51961e8e8c01.png";
import imgRectangle10 from "figma:asset/166637ad57862826f24edf335a37bd6dca0b9de9.png";
import currencyImage from 'figma:asset/80ba444e15412bd34046e86c7175c55294e13a41.png';

// Reusable SVG Line Divider
const Divider = () => (
  <div className="w-full h-px bg-[#2F2F2F] my-4 md:my-5 shrink-0" aria-hidden="true" />
);

// Icons
function IconMarket() {
  return (
    <div className="relative shrink-0 w-12 h-12 md:w-16 md:h-16 mb-4">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_11_822)">
          <path clipRule="evenodd" d={svgPaths.paf8dd00} fill="#222529" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p17d4a900} fill="#1F2327" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2a936cb0} fill="#FDFDFD" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip0_11_822">
            <rect fill="white" height="80" rx="4.89796" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconExit() {
  return (
    <div className="relative shrink-0 w-12 h-12 md:w-16 md:h-16 mb-4">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 76 57">
        <path clipRule="evenodd" d={svgPaths.p9c494f0} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pce35280} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3966dd00} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p5335800} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3b70fc80} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1d43e300} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p19eda600} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p2e2f8200} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p25476e00} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p95bac00} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p13583200} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p31c83800} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p19b1ca00} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p2c3b6780} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p25c50380} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pe2af400} fill="#FEFEFE" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pc7f86c0} fill="#FEFEFE" fillRule="evenodd" />
      </svg>
    </div>
  );
}

export function DeRiskedPath() {
  return (
    <section id="derisked-path" className="px-4 md:px-6 lg:px-12 py-10 w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Header Area */}
      <div className="flex flex-col items-center text-center gap-6 md:gap-8 mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-[2rem] sm:text-4xl md:text-[40px] font-medium text-[#0c0c0c] leading-tight tracking-[-0.8px]">
            De-Risked Path To Success
          </h2>
          <p className="text-[#212121] text-lg md:text-[20px] font-light leading-relaxed max-w-3xl mx-auto">
            A two-step strategy that monetizes near-term assets, generates internal funding, and advances high-value programs with a clear commercial path.
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="px-4 py-2 rounded-md border border-zinc-200/60 text-[#18181b] text-[15px] md:text-base whitespace-nowrap">
            De-risked Execution
          </div>
          <div className="px-4 py-2 rounded-md border border-zinc-200/60 text-[#18181b] text-[15px] md:text-base whitespace-nowrap">
            Market Opportunity
          </div>
          <div className="px-4 py-2 rounded-md border border-zinc-200/60 text-[#18181b] text-[15px] md:text-base whitespace-nowrap">
            Clear Exit Path
          </div>
        </div>
      </div>

      {/* Main Content Split Area */}
      <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full">
        
        {/* Left Side: Bridge Image */}
        <div className="w-full xl:w-[48%] relative rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[500px] xl:min-h-[auto]">
          <img 
            src={imgImage24} 
            alt="Bridge at night" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Cards Grid */}
        <div className="w-full xl:w-[52%] flex flex-col gap-4 sm:gap-6">
          
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            {/* The Funding Challenge */}
            <div className="bg-[#0c0a00] p-5 md:p-6 rounded-2xl flex flex-col w-full sm:w-[42%] shrink-0 border border-white/5">
              <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">The Funding Challenge</h3>
              <Divider />
              <div className="w-full h-[140px] sm:h-[160px] md:h-[173px] mb-5 rounded-xl overflow-hidden relative">
                <img src={currencyImage} alt="Money challenge" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1.5 mt-auto">
                <h4 className="text-white text-[17px] md:text-lg font-semibold tracking-tight">Capital-Intensive</h4>
                <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed">
                  Breakthrough cancer research is traditionally capital-intensive, often leading to significant equity dilution for early investors.
                </p>
              </div>
            </div>

            {/* Market Opportunity & Exit */}
            <div className="bg-[#0c0a00] p-5 md:p-6 rounded-2xl flex flex-col w-full sm:w-[58%] border border-white/5">
              <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">Market Opportunity & Exit</h3>
              <Divider />
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 mt-2">
                <div className="flex flex-col flex-1">
                  <IconMarket />
                  <h4 className="text-white text-[17px] md:text-lg font-semibold tracking-tight mb-1.5">$85B USD Projected Market</h4>
                  <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed">
                    The global cancer vaccine market is expected to reach $85 billion by 2032, representing a massive opportunity for the Flow Vax platform.
                  </p>
                </div>
                <div className="flex flex-col flex-1">
                  <IconExit />
                  <h4 className="text-white text-[17px] md:text-lg font-semibold tracking-tight mb-1.5">Clear Path to Exit</h4>
                  <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed">
                    The 3-year plan aims for a strategic partnership, acquisition, or IPO following Phase 1/2 readouts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            {/* Step 1: Monetize */}
            <div className="bg-[#0c0a00] p-5 md:p-6 rounded-2xl flex flex-col w-full sm:w-[58%] border border-white/5">
              <div className="bg-white text-[#212121] text-sm font-medium px-4 py-1.5 rounded-md w-fit mb-4">Step 1</div>
              <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">Monetize FLOVID-20</h3>
              <Divider />
              <div className="flex flex-col sm:flex-row gap-6 mt-2">
                <div className="flex flex-col flex-1">
                  <h4 className="text-white text-[17px] md:text-lg font-semibold tracking-tight mb-1.5">Leverage "Shovel-Ready" Assets:</h4>
                  <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed">Utilize the primate validated, GMP manufactured COVID-19 asset to target a $25B USD global therapy market.</p>
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-white text-[17px] md:text-lg font-semibold tracking-tight mb-1.5">Generate Non-Dilutive Funding:</h4>
                  <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed">
                    Use near-term revenue from the COVID asset to provide a financial catalyst for the company's broader oncology goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Advance */}
            <div className="bg-[#0c0a00] p-5 md:p-6 rounded-2xl flex flex-col w-full sm:w-[42%] shrink-0 border border-white/5">
              <div className="bg-white text-[#212121] text-sm font-medium px-4 py-1.5 rounded-md w-fit mb-4">Step 2</div>
              <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">Advance High-Value Assets</h3>
              <Divider />
              <div className="flex flex-col mt-2">
                <h4 className="text-white text-[15px] md:text-[16px] font-semibold tracking-tight mb-1.5">Reinvest Capital into Oncology</h4>
                <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed">
                  Programs: Direct the funding generated in Step 1 to advanced Glioblastoma (GBM) and other cancer vaccines into Phase 1/2 clinical trials.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 (Full Width Card) */}
          <div className="bg-[#0c0a00] p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-8 sm:gap-6 w-full border border-white/5">
            <div className="flex flex-col flex-1">
              <h3 className="text-white text-[17px] md:text-lg font-medium tracking-tight">The Two-Step Solution:</h3>
              <Divider />
              <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed mt-1">
                A strategic, capital-efficient business plan designed to generate internal funding for our high-value oncology programs.
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-white text-[17px] md:text-lg font-medium tracking-tight">The Bridge to Success:</h3>
              <Divider />
              <p className="text-[#eee] text-[15px] md:text-base font-extralight leading-relaxed mt-1">
                Creating a clear, de-risked path from viral vaccine monetization to oncology treatment breakthroughs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}