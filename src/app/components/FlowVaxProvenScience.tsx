import React from "react";
import { IMAGES } from "../../constants/images";

// calendar icon
function CalendarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2V6M8 2V6"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 10H21"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function dateIcon(string: string) {
  return (
    <div className="flex flex-row gap-3 mt-1">
      <CalendarIcon />
      <span className=" text-[#fff] text-[24px] w-fit leading-none">
        {string}
      </span>
    </div>
  );
}

export function FlowVaxProvenScience() {
  return (
    <section
      id="proven-science"
      className="bg-[#0A253A] w-full py-16 md:py-20 px-6 md:px-12"
    >
      <div className="w-full flex flex-col gap-12 lg:gap-16">
        {/* Header */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-white tracking-[-0.8px] leading-[1.2]">
            FlowVax: Proven Science and <br className="hidden md:block" />
            Preclinical Milestones
          </h2>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column (Timeline/Text) */}
          <div className="flex-1 flex flex-col w-full space-y-6">
            {/* Item 1 */}
            <div className="grid grid-cols-[120px_auto] gap-4 pb-6 border-b border-white/20">
              {dateIcon("2020")}
              <div>
                <h3 className="text-2xl text-white font-normal tracking-[-0.48px] mb-1">
                  100% Protection from Ebola
                </h3>
                <p className="text-[#aaa] text-lg font-light leading-relaxed">
                  A single dose provided complete protection in a mouse model.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-[120px_auto] gap-4 pb-6 border-b border-white/20">
              {dateIcon("2021")}
              <div>
                <h3 className="text-2xl text-white font-normal tracking-[-0.48px] mb-1">
                  Full SARS-CoV-2 Protection
                </h3>
                <p className="text-[#aaa] text-lg font-light leading-relaxed">
                  Vaccination resulted in full protection against
                  virus-associated pneumonia in Rhesus Macaques.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid grid-cols-[120px_auto] gap-4 pb-6 border-b border-white/20">
              {dateIcon("2023")}
              <div>
                <h3 className="text-2xl text-white font-normal tracking-[-0.48px] mb-1">
                  Significant Breast Cancer Tumor Reduction
                </h3>
                <p className="text-[#aaa] text-lg font-light leading-relaxed">
                  Growth rates were significantly reduced in an aggressive
                  murine breast cancer model.
                </p>
              </div>
            </div>

            {/* The Proven Platform Section */}
            <div className="flex flex-col gap-6 pt-2">
              <h3 className="text-[28px] text-white font-bold tracking-[-0.56px]">
                The Proven Platform
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-2xl text-[#eee] font-normal tracking-[-0.48px] mb-1">
                    Validated Across Viral Diseases and Cancer
                  </h4>
                  <p className="text-[#aaa] text-lg font-light leading-relaxed">
                    The platform has been successfully proven in multiple,
                    diverse animal models.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl text-[#eee] font-normal tracking-[-0.48px] mb-1">
                    Safe, Targeted, and Room-Temperature Stable
                  </h4>
                  <p className="text-[#aaa] text-lg font-light leading-relaxed">
                    Patented technology designed for global accessibility and
                    minimized risk to healthy tissue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="flex-1 w-full lg:w-1/2 relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-0 self-stretch flex">
            <img
              src={IMAGES.homepage.flowVax}
              alt="FlowVax vials"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
            {/* Optional tint to match design exact spec */}
            <div className="absolute inset-0 bg-[#000c15] opacity-20 pointer-events-none rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
