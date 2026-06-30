import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

interface TeamMemberDetailProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamMemberDetail({ member, onClose }: TeamMemberDetailProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] pt-16 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 md:mx-6 max-h-[90vh] overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5 bg-gray-100 flex-shrink-0 relative">
                <div className="w-full h-[400px] md:h-[600px] ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute w-full h-full object-contain block inset-0 "
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-6 md:p-10 lg:p-12">
                <div className="space-y-6">
                  {/* Name & Role */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3 leading-tight tracking-tight">
                      {member.name}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                      {member.description ||
                        "Detailed biography and professional background information will be added here. This section will highlight their expertise, achievements, and contributions to the organization."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
