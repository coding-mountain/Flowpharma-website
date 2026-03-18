import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import uploadedImage from 'figma:asset/1e65a259fa576d4faac94b510258a4579df88789.png';
import pureIngredientsImage from 'figma:asset/824d90a5c19493076ca9ca29b8e9706fbcf9593c.png';
import minimalRiskImage from 'figma:asset/a436b1f0cb92a4af4bb213813035f266451d5081.png';
import microspheresImage from 'figma:asset/084a16ebe5849ca7c27b5d2f775a552d63a9d848.png';

interface SafePageContentProps {
  onClose: () => void;
}

export function SafePageContent({ onClose }: SafePageContentProps) {
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
            <span className="text-gray-900 font-medium">FlowVax: Setting New Standard in Vaccine Safety</span>
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
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 max-w-2xl leading-[1.15] tracking-tight">
            Setting the New Standard in Vaccine Safety
          </h1>
          <p className="text-[17px] text-gray-600 font-light leading-relaxed max-w-3xl mt-6">
            The Clean Composition of FlowVax with Natural Immune Protection
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-5">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-5 bg-blue-50">
              <img 
                src="https://images.unsplash.com/photo-1651479856378-f5e70a921d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ1cyUyMGNlbGwlMjBibHVlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NzMyMjg1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Virus cells" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[22px] font-medium text-gray-900 mb-3 leading-tight tracking-tight">
              No mRNA, No live virus
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed font-light">
              The formulation contains no mRNA or live virus, eliminating risks associated with genetic or viral materials.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-5 bg-blue-50">
              <img 
                src={microspheresImage} 
                alt="Microspheres" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[22px] font-medium text-gray-900 mb-3 leading-tight tracking-tight">
              Safe PLGA Microspheres
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed font-light">
              Uses biodegradable polymers and natural peptides to deliver a precise, non-toxic immune response.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-5">
              <img 
                src={pureIngredientsImage} 
                alt="Pure ingredients" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-[22px] font-medium text-gray-900 mb-3 leading-tight tracking-tight">
              Pure Ingredients: No Thimerosal or Aluminium
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed font-light">
              Formulated without traditional preservatives or adjuvants that often cause adverse reactions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-5 bg-blue-50">
              <img 
                src={uploadedImage} 
                alt="Boosts immune system" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-[22px] font-medium text-gray-900 mb-3 leading-tight tracking-tight">
              Boosts Your Own Immune System
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed font-light">
              APC cells consume microspheres to naturally train T-cells to destroy only diseased cells.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-5 bg-purple-50">
              <img 
                src={minimalRiskImage} 
                alt="Minimal risk" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[22px] font-medium text-gray-900 mb-3 leading-tight tracking-tight">
              Minimal Risk to Healthy Tissue
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed font-light">
              Precise targeting avoids the systemic toxicity and severe side effects of common immunotherapies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}