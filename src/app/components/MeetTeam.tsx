import { useEffect, useState } from "react";
import { IMAGES } from "../../constants/images";
import svgPaths from "../../imports/svg-6oa7gxdabo";
import { OurTeamPageContent } from "./OurTeamPageContent";
import { AnimatePresence, motion } from "motion/react";
import { TeamMemberDetail } from "./TeamMemberDetail";

const data = {
  members: [
    {
      name: "Reid Rubsamen",
      role: "CEO, Chairman, Chief Medical Officer A.B. (UC Berkeley, Biochemistry and Computer Science) M.D. (Stanford), M.S. (Computer Science, Stanford), MHCM (Harvard)",
      image: IMAGES.ourTeams.ReidRubsamen,
      description:
        "Dr. Reid Rubsamen is the visionary founder and CEO of Flo Pharma. A board-certified anesthesiologist with training at Massachusetts General Hospital (where he served as Chief Resident) and advanced degrees in both computer science and medicine from UC Berkeley and Stanford, Reid bridges the worlds of technology and healthcare. He previously founded two medical technology companies (including Aradigm Corporation) before launching Flo Pharma. An inventor at heart, he holds over 70 U.S. patents and has more than 10,000 citations to his scientific work – clear evidence of his innovative impact. Despite these accomplishments, Reid is known for his down-to-earth leadership and enthusiasm for mentoring others. He brings to the board not only profound expertise but also a genuine passion for collaboration and breakthrough innovation that inspires everyone around him.",
    },
    {
      name: "Paul Harris",
      role: "Ph.D. Chief Science Officer",
      image: IMAGES.ourTeams.PaulHarris,
      description:
        "Paul Harris received his undergraduate degree from the University of California, Berkeley in Biochemistry and Medical Biophysics, his PhD in Cell Biology from Cornell University, and did Postdoctoral training in peptide chemistry at The Rockefeller University. He was a faculty member at the health sciences campus of Columbia University since 1988, most recently as an Associate Professor in Medical Science (in Medicine) in the medical school. Dr Harris' research efforts spanning 1990 to 2010 were instrumental in defining the structure of MHC bound peptides and dendritic cell therapy. Studies he co-authored provided the foundations for current vaccine design strategies.",
    },
    {
      name: "CV Herst",
      role: "Ph.D. Senior Scientist",
      image: IMAGES.ourTeams.CVHerst,
      description:
        "C.V. Herst received his undergraduate degree in Bacteriology and his master's degree in Public Health from U.C. Berkeley, after which he was hired by Cetus Corporation, one of the original biotechnology companies, where he was on the cloning teams for IFN-beta, IL-2, and TNF-alpha. In 1989 he earned his Ph.D. in Tumor Cell Biology from Northwestern University. In his post-doctoral fellowship at MD Anderson Cancer Center, he researched bcr-abl breakpoint variations in chronic myelogenous leukemia. His career research efforts have led to approved therapies for systemic fungal infections, Multiple Sclerosis, certain cancers, as well as FDA approvals for medical devices. He has been a member of the Flo Pharma team since 2004.",
    },
  ],
};
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export function MeetTeam() {
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isTeamOpen) {
      setIsScrolled(false);
    }
  }, [isTeamOpen]);

  return (
    <section
      id="strong-leadership"
      className="scroll-mt-20 px-4 md:px-6 lg:px-12 py-10 w-full flex flex-col gap-12 lg:gap-16"
    >
      <div className="w-full xl:flex xl:items-end xl:justify-between grid">
        <h1 className=" text-[40px] font-medium text-gray-900 w-full leading-[48px] tracking-tight">
          Meet our Team
          <br />
          Driven by Purpose, Powered by People
        </h1>
        <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
          Meet the scientists, innovators, and visionaries engineering a world
          without borders to immunity.
        </p>
      </div>

      <div className="mb-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {data.members.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-[533/426] rounded-[12px] overflow-hidden mb-6 bg-gray-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Plus Icon */}
                <div className="absolute right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-[8.33%]">
                    <svg
                      className="absolute block w-full h-full drop-shadow-md"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 53.3333 53.3333"
                    >
                      <path
                        d={svgPaths.p15971600}
                        fill="white"
                        className="group-hover:fill-[#1F4D71] transition-colors"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-[39.58%]">
                    <div className="absolute inset-[-7.5%]">
                      <svg
                        className="block w-full h-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.3333 15.3333"
                      >
                        <path
                          d={svgPaths.pd1b9400}
                          stroke="#1F4D71"
                          className="group-hover:stroke-white transition-colors"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] md:text-[24px] font-normal tracking-[-0.48px] text-[#0a0a0a] leading-tight">
                  {member.name}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#212121] font-light leading-snug">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              setIsTeamOpen(true);
            }}
            className={` flex justify-between items-center cursor-pointer gap-4 border-2 border-[#0A253A]/10 rounded-xl px-12 py-3 font-normal text-xl ${
              isScrolled
                ? "hover:text-white hover:opacity-80 hover:border-[#0A253A]/90 transition"
                : "hover:text-gray-500 hover:opacity-80 hover:border-[#0A253A]/90"
            } `}
          >
            <p className="text-[#0A253A] ">View All</p>
            <img
              src={IMAGES.homepage.viewAllIcon}
              alt="blank"
              className="h-3.5"
            />
          </button>
        </div>
      </div>
      {/* Slide-up Team Page Modal */}
      <AnimatePresence>
        {isTeamOpen && (
          <div
            key="team-modal"
            className="fixed inset-0 z-40 flex flex-col pointer-events-none pt-[72px]"
          >
            {/* Backdrop */}
            <motion.div
              key="team-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-auto"
            />

            {/* Sliding Panel */}
            <motion.div
              key="team-panel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full overflow-hidden bg-white pointer-events-auto flex flex-col z-10"
            >
              <div
                className="flex-1 overflow-y-auto w-full h-full relative pb-12"
                onScroll={(e) => {
                  const scrollTop = e.currentTarget.scrollTop;
                  setIsScrolled(scrollTop > 50);
                }}
              >
                <OurTeamPageContent onClose={() => setIsTeamOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {selectedMember && (
        <TeamMemberDetail
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
