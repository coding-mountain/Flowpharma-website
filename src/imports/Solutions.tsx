import { IMAGES } from "../constants/images";


function Solution() {
  return (
    <div className="h-[426px] overflow-clip relative rounded-[12px] shrink-0 w-[984px]" data-name="Solution1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[426px] left-1/2 top-1/2 w-[1063.961px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMAGES.homepage.image1} />
      </div>
      <div className="absolute bg-[#000c15] h-[426px] left-0 opacity-60 right-0 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0" data-name="BG" />
      <div className="absolute bottom-[76px] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[40px] not-italic text-[#fafafa] text-[18px] translate-y-1/2 w-[401px]">
        <p className="leading-[24px]">Flow Vax ensures a precise immune response that minimizes risk to healthy tissue by containing no mRNA, thimerosal, aluminum, or live viruses.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] not-italic text-[28px] text-white top-[56px] tracking-[-0.56px] whitespace-nowrap">
        <p className="leading-[32px]">{`Safe & Targeted Precision`}</p>
      </div>
    </div>
  );
}

function Solution1() {
  return (
    <div className="h-[426px] overflow-clip relative rounded-[12px] shrink-0 w-[640px]" data-name="Solution 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[427px] left-1/2 top-[calc(50%+0.5px)] w-[640px]" data-name="coronavirus-arrangement-with-blood-samples-vaccine 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMAGES.homepage.image1} />
      </div>
      <div className="absolute bg-[#000c15] inset-0 opacity-60 rounded-[12px]" data-name="BG" />
      <div className="absolute bottom-[76px] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[40px] not-italic text-[#fafafa] text-[18px] translate-y-1/2 w-[401px]">
        <p className="leading-[24px]">This platform is room-temperature shelf-stable (no cold chain required), making it ideally suited for global use, pandemic stockpiling, and biodefense.</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[9.39%_13.91%_83.1%_6.25%] justify-center leading-[0] not-italic text-[28px] text-white tracking-[-0.56px]">
        <p className="leading-[32px]">{`Inexpensive & Scalable Global Solution`}</p>
      </div>
    </div>
  );
}

function SolutionRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Solution Row 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[40px] relative w-full">
          <Solution />
          <Solution1 />
        </div>
      </div>
    </div>
  );
}

function Solution2() {
  return (
    <div className="h-[426px] overflow-clip relative rounded-[12px] shrink-0 w-[640px]" data-name="Solution3">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[425px] left-[calc(50%+19.78px)] top-[calc(50%+0.5px)] w-[755.556px]" data-name="pexels-gabby-k-5841747 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMAGES.homepage.image1} />
      </div>
      <div className="absolute bg-[#000c15] inset-0 opacity-60 rounded-[12px]" data-name="BG" />
      <div className="absolute bottom-[76px] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[40px] not-italic text-[#fafafa] text-[18px] translate-y-1/2 w-[401px]">
        <p className="leading-[24px]">Engineered to prevent recurrent disease, the platform boosts your own immune system to create a robust and natural long-term response.</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[9.39%_24.53%_75.59%_6.25%] justify-center leading-[0] not-italic text-[28px] text-white tracking-[-0.56px] whitespace-nowrap">
        <p className="leading-[32px] whitespace-pre">
          {`Long-Lasting Natural Immunity for `}
          <br aria-hidden="true" />
          {`possible "one-and-done" Solution`}
        </p>
      </div>
    </div>
  );
}

function Solution3() {
  return (
    <div className="h-[426px] overflow-clip relative rounded-[12px] shrink-0 w-[984px]" data-name="Solution 4">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[656px] left-1/2 top-[calc(50%-30px)] w-[984px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMAGES.homepage.image1} />
      </div>
      <div className="absolute bg-[#000c15] h-[426px] left-0 opacity-60 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[984px]" data-name="BG" />
      <div className="absolute bottom-[76px] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[40px] not-italic text-[#fafafa] text-[18px] translate-y-1/2 w-[401px]">
        <p className="leading-[24px] whitespace-pre-wrap">
          {`The technology is a proven solution, having demonstrated effective results across `}
          <br aria-hidden="true" />
          multiple animal models.
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] not-italic text-[28px] text-white top-[56px] tracking-[-0.56px] whitespace-nowrap">
        <p className="leading-[32px]">A Validated Scientific Platform</p>
      </div>
    </div>
  );
}

function SolutionRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Solution Row 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[40px] relative w-full">
          <Solution2 />
          <Solution3 />
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Solutions">
      <SolutionRow />
      <SolutionRow1 />
    </div>
  );
}