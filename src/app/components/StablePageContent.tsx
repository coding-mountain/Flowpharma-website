import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import flowvaxVialsImage from 'figma:asset/44dab16e8bffaedfbd7e55174e9280a21ac4a255.png';
import warehouseImage from 'figma:asset/2447c94af7b6c1a8401ee89e15678a3a0f10358f.png';
import freezerImage from 'figma:asset/dcf6f00ae9d2c00773f6aa34d902baf2ad971d90.png';

interface StablePageContentProps {
  onClose: () => void;
}

export function StablePageContent({ onClose }: StablePageContentProps) {
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
            <span className="text-gray-900 font-medium">FlowVax: Stable at Room Temperature</span>
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
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 max-w-2xl leading-[1.15] tracking-tight">
            FlowVax: The New Standard in Vaccine Stability & Logistics
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed lg:text-right font-light">
            Unlike competing technologies that rely on complex cold chain logistics, FlowVax offers a core advantage with its superior room-temperature shelf stability.
          </p>
        </div>

        {/* 3-Column Detailed Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mt-16 pb-8">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-gray-900 leading-snug mb-4">
              FlowVax:<br />
              Breaking The Cold Chain
            </div>
            <div className="aspect-[1.35/1] rounded-2xl overflow-hidden mb-6 bg-blue-50">
              <img 
                src={flowvaxVialsImage}
                alt="FlowVax Vials" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[22px] font-semibold text-gray-900 tracking-tight mb-5">
              Economic and Logistic Impact
            </h3>
            
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[15px] font-medium text-gray-800 block mb-0.5">No Cold Chain Required:</span>
                <span className="text-[14.5px] text-gray-600 font-light leading-relaxed block">
                  Eliminates Ultra-Low Temp Freezers & Refrigerated Transport
                </span>
              </div>
              
              <div>
                <span className="text-[15px] font-medium text-gray-800 block mb-0.5">Cheaper & Easier Logistics:</span>
                <span className="text-[14.5px] text-gray-600 font-light leading-relaxed block pr-4">
                  Simplified Requirements, Efficient Distribution to Rural Areas & Developing Nations
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-gray-900 leading-snug mb-4">
              Core Advantage:<br />
              Room Temperature Shelf Stability
            </div>
            <div className="aspect-[1.35/1] rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <img 
                src={warehouseImage}
                alt="Room Temperature Storage" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[22px] font-semibold text-gray-900 tracking-tight mb-5">
              Strategic Use cases
            </h3>
            
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[15px] font-medium text-gray-800 block mb-0.5">Ideally Suited for Pandemic Stockpiling:</span>
                <span className="text-[14.5px] text-gray-600 font-light leading-relaxed block">
                  Long-Term, Low-Maintenance Storage
                </span>
              </div>
              
              <div>
                <span className="text-[15px] font-medium text-gray-800 block mb-0.5">Critical Asset for Biodefense:</span>
                <span className="text-[14.5px] text-gray-600 font-light leading-relaxed block">
                  Deployable without Reliance on Electrical Grid or Specialized Cooling
                </span>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-200 my-6" />

            <h3 className="text-[22px] font-semibold text-gray-900 tracking-tight mb-4">
              Scalable Global Solution
            </h3>
            
            <div>
              <span className="text-[15px] font-medium text-gray-800 block mb-0.5">Inexpensive & Scalable:</span>
              <span className="text-[14.5px] text-gray-600 font-light leading-relaxed block">
                Designed for Widespread Global Use, Utilizing Practical Manufacturing & Storage
              </span>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-gray-900 leading-snug mb-4">
              Competing Technologies:<br />
              Cold Chain Barriers
            </div>
            <div className="aspect-[1.35/1] rounded-2xl overflow-hidden mb-6 bg-blue-100">
              <img 
                src={freezerImage}
                alt="Freezer Storage" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-[20px] font-semibold text-gray-900 tracking-tight mb-4">
              mRNA VACCINES
            </h3>
            <div className="mb-5">
              <p className="text-[12px] font-medium text-gray-500 tracking-wide uppercase mb-1">
                EXTREME SUB-ZERO / FREEZING AT -60°C
              </p>
              <p className="text-[14.5px] text-gray-600 font-light">
                Requires Specialized Freezing Equipment
              </p>
            </div>
            
            <div className="w-full h-px bg-gray-200 mb-6" />

            <h3 className="text-[20px] font-semibold text-gray-900 tracking-tight mb-4">
              VIRAL VECTOR VACCINES
            </h3>
            <div className="mb-5">
              <p className="text-[12px] font-medium text-gray-500 tracking-wide uppercase mb-1">
                SPECIALIZED / FREEZING AT -20°C
              </p>
              <p className="text-[14.5px] text-gray-600 font-light">
                Complex Supply Chain & Storage
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}