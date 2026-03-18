import React from 'react';
import { IMAGES } from '../../constants/images';

export function FlowVaxProvenScience() {
  return (
    <section id="proven-science" className="bg-[#0c0a00] w-full py-16 md:py-20 px-6 md:px-12">
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
            <div className="flex flex-col gap-4 pb-6 border-b border-white/20">
              <span className="bg-[#e3e3e3] text-[#4e5157] text-sm px-4 py-2 rounded-md w-fit font-medium leading-none">
                2020
              </span>
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
            <div className="flex flex-col gap-4 pb-6 border-b border-white/20">
              <span className="bg-[#e3e3e3] text-[#4e5157] text-sm px-4 py-2 rounded-md w-fit font-medium leading-none">
                2021
              </span>
              <div>
                <h3 className="text-2xl text-white font-normal tracking-[-0.48px] mb-1">
                  Full SARS-CoV-2 Protection
                </h3>
                <p className="text-[#aaa] text-lg font-light leading-relaxed">
                  Vaccination resulted in full protection against severe infection and virus-associated pneumonia in Rhesus Macaques
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-4 pb-6 border-b border-white/20">
              <span className="bg-[#e3e3e3] text-[#4e5157] text-sm px-4 py-2 rounded-md w-fit font-medium leading-none">
                2023
              </span>
              <div>
                <h3 className="text-2xl text-white font-normal tracking-[-0.48px] mb-1">
                  Significant Breast Cancer Tumor Reduction
                </h3>
                <p className="text-[#aaa] text-lg font-light leading-relaxed">
                  Growth rates were significantly reduced in an aggressive murine breast cancer model.
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
                    The platform has been successfully proven in multiple, diverse animal models.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl text-[#eee] font-normal tracking-[-0.48px] mb-1">
                    Safe, Targeted, and Room-Temperature Stable
                  </h4>
                  <p className="text-[#aaa] text-lg font-light leading-relaxed">
                    Patented technology designed for global accessibility and minimized risk to healthy tissue.
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