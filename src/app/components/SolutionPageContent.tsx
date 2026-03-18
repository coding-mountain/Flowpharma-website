import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import { IMAGES } from '../../constants/images';
interface SolutionPageContentProps {
  onClose: () => void;
}

export function SolutionPageContent({ onClose }: SolutionPageContentProps) {
  return (
    <div className="min-h-screen bg-white font-sans w-full">
      <div className="w-full px-6 py-8 md:px-12 md:py-12">
        {/* Breadcrumbs and Close Button */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-2 text-[13px] text-gray-500">
            <span
              className="cursor-pointer hover:text-gray-900 transition-colors"
              onClick={onClose}
            >
              Home
            </span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">The FLowVax Solution: A Next Generation Vaccine Platform</span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300 flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 w-full max-w-none leading-[1.15] tracking-tight">
            The FlowVax Solution:<br />
            A Next Generation Vaccine Platform
          </h1>

        </div>

        {/* Solutions Grid */}
        <div className="flex flex-col gap-6 w-full max-w-[1624px] mx-auto pb-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Safe & Targeted Precision */}
            <div className="relative col-span-1 lg:col-span-7 h-[350px] lg:h-[426px] rounded-xl overflow-hidden shadow-sm">
              <img src={IMAGES.safe.safe9} alt="Safe & Targeted Precision" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#000c15]/60" />
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                <h3 className="text-[24px] lg:text-[28px] text-white font-normal leading-tight tracking-[-0.56px]">Safe & Targeted Precision</h3>
                <p className="text-[16px] lg:text-[18px] text-[#fafafa] font-light leading-relaxed max-w-[400px]">
                  Flow Vax ensures a precise immune response that minimizes risk to healthy tissue by containing no mRNA, thimerosal, aluminum, or live viruses.
                </p>
              </div>
            </div>

            {/* Card 2: Inexpensive & Scalable */}
            <div className="relative col-span-1 lg:col-span-5 h-[350px] lg:h-[426px] rounded-xl overflow-hidden shadow-sm">
              <img src={IMAGES.safe.safe10} alt="Inexpensive & Scalable Global Solution" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#000c15]/60" />
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                <h3 className="text-[24px] lg:text-[28px] text-white font-normal leading-tight tracking-[-0.56px]">Inexpensive & Scalable Global Solution</h3>
                <p className="text-[16px] lg:text-[18px] text-[#fafafa] font-light leading-relaxed max-w-[400px]">
                  This platform is room-temperature shelf-stable (no cold chain required), making it ideally suited for global use, pandemic stockpiling, and biodefense.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 3: Long-Lasting Natural Immunity */}
            <div className="relative col-span-1 lg:col-span-5 h-[350px] lg:h-[426px] rounded-xl overflow-hidden shadow-sm">
              <img src={IMAGES.safe.safe11} />
              <div className="absolute inset-0 bg-[#000c15]/60" />
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                <h3 className="text-[24px] lg:text-[28px] text-white font-normal leading-tight tracking-[-0.56px]">
                  Long-Lasting Natural Immunity for<br />possible "one-and-done" Solution
                </h3>
                <p className="text-[16px] lg:text-[18px] text-[#fafafa] font-light leading-relaxed max-w-[400px]">
                  Engineered to prevent recurrent disease, the platform boosts your own immune system to create a robust and natural long-term response.
                </p>
              </div>
            </div>

            {/* Card 4: A Validated Scientific Platform */}
            <div className="relative col-span-1 lg:col-span-7 h-[350px] lg:h-[426px] rounded-xl overflow-hidden shadow-sm">
              <img src={IMAGES.safe.safe12} alt="A Validated Scientific Platform" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#000c15]/60" />
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                <h3 className="text-[24px] lg:text-[28px] text-white font-normal leading-tight tracking-[-0.56px]">A Validated Scientific Platform</h3>
                <p className="text-[16px] lg:text-[18px] text-[#fafafa] font-light leading-relaxed max-w-[400px]">
                  The technology is a proven solution, having demonstrated effective results across multiple animal models.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}