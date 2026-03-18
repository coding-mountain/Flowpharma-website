import svgPaths from "./svg-a2617wsml";
import imgImage24 from "figma:asset/317164733ee30d8a66b77d743eee51961e8e8c01.png";
import imgRectangle10 from "figma:asset/166637ad57862826f24edf335a37bd6dca0b9de9.png";

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[9px] relative rounded-[5px] shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(39,39,42,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">De-risked Execution</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[9px] relative rounded-[5px] shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(39,39,42,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Market Opportunity</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[9px] relative rounded-[5px] shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(39,39,42,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Clear Exit Path</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function TitleSubtitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title + Subtitle">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[40px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0c0c0c] text-[40px] text-center tracking-[-0.8px] w-[min-content]">
            <p className="leading-[48px]">De-Risked Path To Success</p>
          </div>
          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[20px] text-center w-[806px]">
            <p className="leading-[28px]">A two-step strategy that monetizes near-term assets, generates internal funding, and advances high-value programs with a clear commercial path.</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[24px]">Capital-Intensive</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center min-w-full relative shrink-0 text-[#eee] text-[16px] w-[min-content]">
        <p className="leading-[20px]">Breakthrough cancer research is traditionally capital-intensive, often leading to significant equity dilution for early investors.</p>
      </div>
    </div>
  );
}

function DeRiskCard() {
  return (
    <div className="bg-[#0c0a00] content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[300px]" data-name="De Risk Card 1">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px]">The Funding Challenge</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 1">
            <line id="Line 1" stroke="var(--stroke-0, #2F2F2F)" x2="268" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-[173px] relative rounded-[12px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle10} />
      </div>
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Icon">
          <g clipPath="url(#clip0_11_822)">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.paf8dd00} fill="#222529" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p17d4a900} fill="#1F2327" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2a936cb0} fill="#FDFDFD" fillRule="evenodd" />
            </g>
          </g>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-[min-content]">
        <p className="leading-[24px]">$85B USD Projected Market</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center relative shrink-0 text-[#eee] text-[16px] w-[226px]">
        <p className="leading-[20px]">The global cancer vaccine market is expected to reach $85 billion by 2032, representing a massive opportunity for the Flow Vax platform.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[220px]">
      <Icon />
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15%_3.69%_14.43%_2.5%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.0479 56.458">
        <g id="Group 7">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p9c494f0} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pce35280} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3966dd00} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5335800} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3b70fc80} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1d43e300} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19eda600} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e2f8200} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p25476e00} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p95bac00} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13583200} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31c83800} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19b1ca00} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c3b6780} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p25c50380} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pe2af400} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pc7f86c0} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative rounded-[4.898px] shrink-0 size-[80px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[24px]">Clear Path to Exit</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center relative shrink-0 text-[#eee] text-[16px] w-[218px]">
        <p className="leading-[20px]">The 3-year plan aims for a strategic partnership, acquisition, or IPO following Phase 1/2 readouts.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[220px]">
      <Icon1 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function DeRiskCard1() {
  return (
    <div className="bg-[#0c0a00] content-stretch flex flex-col gap-[8px] h-[361px] items-center overflow-clip p-[16px] relative rounded-[12px] shrink-0" data-name="De Risk Card 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px]">{`Market Opportunity & Exit`}</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 1">
            <line id="Line 1" stroke="var(--stroke-0, #2F2F2F)" x2="464" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <DeRiskCard />
      <DeRiskCard1 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="tag">
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Step 1</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full">
        <p className="leading-[24px]">{`Leverage "Shovel-Ready" Assets:`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center relative shrink-0 text-[#eee] text-[16px] w-full">
        <p className="leading-[20px]">Utilize the primate-validated, GMP. manufactured COVID-19 asset to target a $258 USD global therapy market.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full">
        <p className="leading-[24px]">Generate Non-Dilutive Funding:</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center relative shrink-0 text-[#eee] text-[16px] w-full">
        <p className="leading-[20px]">{`Use near-term revenue from the COVID asset to provide a finencial catalyst for the company's broader oncology goals.`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function DeRiskCard2() {
  return (
    <div className="bg-[#0c0a00] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[496px]" data-name="De Risk Card 3">
      <Tag />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px]">Monetize FLOVID-20</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 1">
            <line id="Line 1" stroke="var(--stroke-0, #2F2F2F)" x2="464" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="tag">
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Step 2</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[22px]">Reinvest Capital into Oncology</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center min-w-full relative shrink-0 text-[#eee] text-[16px] w-[min-content]">
        <p className="leading-[20px]">Programs: Direct the funding generated in Step 1 to advanced Glioblastoma (GBM) and other cancer vaccines into Phase 1/2 clinical trials.</p>
      </div>
    </div>
  );
}

function DeRiskCard3() {
  return (
    <div className="bg-[#0c0a00] content-stretch flex flex-col gap-[8px] h-[258px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[300px]" data-name="De Risk Card 4">
      <Tag1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px]">Advance High-Value Assets</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 1">
            <line id="Line 1" stroke="var(--stroke-0, #2F2F2F)" x2="268" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <DeRiskCard2 />
      <DeRiskCard3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full">
        <p className="leading-[24px]">The Two-Step Solution:</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 1" stroke="var(--stroke-0, #2F2F2F)" x2="382" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[16px] w-full">
        <p className="leading-[20px]">A strategic, capital-efficient business plan designed to generate internal funding for our high-value oncology programs.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full">
        <p className="leading-[24px]">The Bridge to Success:</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 1" stroke="var(--stroke-0, #2F2F2F)" x2="382" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[16px] w-full">
        <p className="leading-[20px]">Creating a clear, de-risked path from viral vaccine monetization to oncology treatment breakthroughs.</p>
      </div>
    </div>
  );
}

function DeRiskCard4() {
  return (
    <div className="bg-[#0c0a00] relative rounded-[12px] shrink-0 w-full" data-name="De Risk Card 5">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-start justify-center p-[16px] relative w-full">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[820px]">
      <Frame13 />
      <Frame14 />
      <DeRiskCard4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative w-full">
          <div className="h-[799px] relative rounded-[24px] shrink-0 w-[804px]" data-name="image 24">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage24} />
          </div>
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative size-full">
      <TitleSubtitle />
      <Frame16 />
    </div>
  );
}