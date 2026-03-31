import { IMAGES } from "../constants/images";


function TitleSubtitle() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[0] not-italic px-[40px] relative shrink-0 w-[1730px]" data-name="Title + Subtitle">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#0c0c0c] text-[40px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px] whitespace-pre">
          {`Patent Protection: `}
          <br aria-hidden="true" />
          Securing the Future of FlowVax
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[#212121] text-[18px] w-[642px]">
        <p className="leading-[24px]">{`Securing exclusive rights and ensuring global growth for Flow Pharma's innovative cancer vaccine platform`}</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[383px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[536px] left-[calc(50%+0.5px)] top-[calc(50%+58.5px)] w-[804px]" data-name="image 12">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMAGES.homepage.image1} /> */}
      </div>
      <div className="absolute bg-[#000c15] inset-0 opacity-20 rounded-[12px]" data-name="BG" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[28px]">9 Issued Patents</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[24px]">Securing exclusive legal rights to the core Flow Vax innovations.</p>
      </div>
    </div>
  );
}

function ResourceItem() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="resource-item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[28px]">20 Pending Applications</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[24px]">Ensuring the continued growth and long-term defense of the technology</p>
      </div>
    </div>
  );
}

function ResourceItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="resource-item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function Resources() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Resources1">
      <ResourceItem />
      <ResourceItem1 />
    </div>
  );
}

function ResourcesItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Resources Item">
      <Image />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] tracking-[-0.56px] whitespace-nowrap">
        <p className="leading-[32px]">Intellectual Property Portfolio</p>
      </div>
      <Resources />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[383px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[536.065px] left-[calc(50%+0.5px)] top-1/2 w-[804px]" data-name="pexels-nastyasensei-66707-335393 1">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMAGES.homepage.image1} /> */}
      </div>
      <div className="absolute bg-[#000c15] inset-0 opacity-20 rounded-[12px]" data-name="BG" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[28px]">Global Jurisdictional Reach</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`Robust protection established across multiple  international territories.`}</p>
      </div>
    </div>
  );
}

function ResourceItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="resource-item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[28px]">Comprehensive Portfolio Scope</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[24px]">Covers core platform technologies, specific methods of use, and delivery systems.</p>
      </div>
    </div>
  );
}

function ResourceItem3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="resource-item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function Resources1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Resources1">
      <ResourceItem2 />
      <ResourceItem3 />
    </div>
  );
}

function ResourcesItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Resources Item">
      <Image1 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] tracking-[-0.56px] whitespace-nowrap">
        <p className="leading-[32px]">{`Strategic Coverage & Scope`}</p>
      </div>
      <Resources1 />
    </div>
  );
}

function ResourcesUpdatesItemsContainer() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Resources Updates Items Container">
      <ResourcesItem />
      <ResourcesItem1 />
    </div>
  );
}

function ResourcesUpdatesItems() {
  return (
    <div className="content-stretch flex flex-col items-start px-[40px] relative shrink-0 w-[1730px]" data-name="Resources Updates Items">
      <ResourcesUpdatesItemsContainer />
    </div>
  );
}

export default function PatentProtection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Patent Protection">
      <TitleSubtitle />
      <ResourcesUpdatesItems />
    </div>
  );
}