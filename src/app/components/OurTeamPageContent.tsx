import React from 'react';
import { ChevronRight } from 'lucide-react';
import svgPaths from "../../imports/svg-6oa7gxdabo";

import { Footer } from './Footer';
import { TeamMemberDetail } from './TeamMemberDetail';
import { useState } from 'react';
import { IMAGES } from '../../constants/images';

interface OurTeamPageContentProps {
  onClose: () => void;
}
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

const saveImage = {
  bg1: "/assets/images/"
}

const teamData = {
  board: [
    {
      name: "Reid Rubsamen",
      role: "MD. Chairman of the Board",
      image: IMAGES.ourTeams.team1,
      description: "Dr. Reid Rubsamen is the visionary founder and CEO of Flow Pharma. A board-certified anesthesiologist with training at Massachusetts General Hospital (where he served as Chief Resident) and advanced degrees in both computer science and medicine from UC Berkeley and Stanford, Reid bridges the worlds of technology and healthcare. He previously founded two medical technology companies (including Aradigm Corporation) before launching Flow Pharma. An inventor at heart, he holds over 70 U.S. patents and has more than 10,000 citations to his scientific work – clear evidence of his innovative impact. Despite these accomplishments, Reid is known for his down-to-earth leadership and enthusiasm for mentoring others. He brings to the board not only profound expertise but also a genuine passion for collaboration and breakthrough innovation that inspires everyone around him."
    },
    {
      name: "Tore Steen",
      role: "MBA. Lead Director",
      image: IMAGES.ourTeams.team2,
      description: "Tore Steen is a seasoned CEO, board director, and strategic advisor who has spent decades building and leading global businesses across finance, technology, healthcare, manufacturing, encryption/authentication, and public-company environments (NYSE, NASDAQ, LSE). He started at Citibank and later founded and ran a multi-million-dollar global finance organization across 16 countries for Chemical Bank (now JPMorgan Chase), before moving into CEO and board roles at scale. He brings deep governance discipline, strong deal judgement, and a builder's mindset—plus a service-oriented personal core through YPO/CEO leadership and philanthropy (including founding and chairing The Utah 1033 Foundation). Tore is also a proud Norwegian, a former Royal Norwegian Air Force officer, and an outdoorsman—steady, principled, and grounded."
    },
    {
      name: "Miguel Yanez",
      role: "Decorated US Navy Seal",
      image: IMAGES.ourTeams.team3,
      description: "Miguel Yanez brings a truly unique blend of military valor and business acumen to the Flow Pharma board. A decorated former United States Navy SEAL, he led high-stakes missions in global hotspots and worked closely with U.S. allies across the Middle East, Africa, Latin America, and Asia. After his military service, Miguel transitioned to the corporate arena and now holds board positions with organizations focused on international partnerships, post-conflict development, and the promotion of peace and security. He is admired for his discipline, strategic mindset, and calm under pressure – qualities forged in his years of elite service. At the same time, Miguel's colleagues praise his humble, team-oriented spirit. He approaches challenges with a can-do attitude and a quiet confidence that will greatly enrich our board's discussions and decision-making."
    },
    {
      name: "Rute Fernandes",
      role: "Masters in Economics, MBA",
      image: IMAGES.ourTeams.team4,
      description: "Rute Fernandes is a global life sciences leader who adds a wealth of biopharmaceutical expertise to our board. With over 25 years in leadership roles across Big Pharma, biotech, and health tech, she has served as a C-suite executive and board member for industry giants including Novartis, Shire, and Takeda. Rute has driven high-impact initiatives ranging from rare disease policy and drug launches to digital transformation, at times managing businesses with P&Ls over $2 billion and delivering sustained double-digit growth. Notably, as Country President (CEO) of Takeda Canada she helped shape national rare disease strategy and championed better access to treatments. Colleagues describe Rute as a leader with a rare combination of global insight, strategic clarity, and executional excellence. Yet what truly defines her is her personal mission to \"empower people to lead healthier, more fulfilling lives\". A native of Portugal who has worked across continents, Rute is fluent in multiple languages and adept at leading multicultural teams. She brings compassion, drive, and a big-picture vision to everything she does – we know her wisdom and heart will greatly benefit our board's work."
    },
    {
      name: "Sam Nimah",
      role: "MBA, CPA",
      image: IMAGES.ourTeams.team5,
      description: "Sam Nimah is an accomplished healthcare executive who combines business savvy with a heart for patient care. After rising through executive roles at two Fortune 100 companies, Sam became the CEO and owner of TriVent Healthcare in 2014. In this role, he transformed a specialized medical services company and fell in love with the \"positive clinical impact\" it makes on patients' lives. Armed with an MBA and CPA, Sam has a talent for marrying strategic insight with operational excellence – under his leadership, TriVent has helped hospitals improve critical care outcomes and efficiency. He also generously shares his expertise beyond his company, serving on the advisory board of a university supply chain program and engaging with the Young Presidents Organization. Sam is known for his friendly, down-to-earth style and his mission-driven mindset. He's always ready to roll up his sleeves to solve a problem or help a colleague. With his blend of financial acumen, hands-on leadership, and genuine care for improving healthcare, Sam will be a terrific collaborator on our board."
    },
    {
      name: "Nooshin Behroyan",
      role: "B.S., M.S.",
      image: IMAGES.ourTeams.team6,
      description: "Nooshin Behroyan is a trailblazing entrepreneur and one of the very few female CEOs in the energy industry. She founded Paxon Energy & Infrastructure and, before turning 40, built it into the 9th fastest-growing private company in America. An environmental engineer and former LEED-certified architect, Nooshin is on a mission to help modernize energy infrastructure while advancing sustainability – she speaks on global stages about bridging today's infrastructure needs with a cleaner energy future. Under her leadership, Paxon has championed Environmental, Social, and Governance (ESG) goals in the traditionally conservative oil and gas sector, proving that business growth and environmental responsibility can go hand in hand. Nooshin's personal story is as inspiring as her professional success: she is an Iranian immigrant and mother of two who has overcome significant barriers and \"broken the glass ceiling\" in a male-dominated field. Despite her impressive résumé, she is widely admired for remaining humble and approachable – always ready to mentor others and celebrate team successes. Nooshin's courage, optimism, and genuine care for making a positive impact will resonate strongly within our board and beyond."
    },
    {
      name: "Borys Chabursky",
      role: "B.Sc.",
      image: IMAGES.ourTeams.team7,
      description: "Borys Chabursky is a strategist extraordinaire in the life sciences arena, bringing decades of experience in guiding healthcare innovation. He is the founder and chairman of Shift Health, where he has led over 500 health science initiatives for more than 300 clients worldwide. Through this work, Borys has helped organizations craft business plans and partnerships that leveraged over $1 billion in funding for biomedical research and innovation. He has a proven talent for building bridges across sectors – facilitating dozens of public–private partnerships in biotech and global health, and advising stakeholders from pharmaceutical companies and hospital networks to government policymakers. Borys has also personally mentored startups (even stepping in as interim CEO for several) and seeded new ventures with angel funding. Colleagues know him as a big-picture thinker with a collaborative spirit; he excels at bringing together diverse experts to solve complex challenges. Despite his far-reaching network and achievements, Borys remains deeply committed to the human side of healthcare – he's driven by a passion to improve global health and ensure innovations reach those who need them. We are fortunate to have his wise, steady guidance and his knack for inspiring teamwork on our board."
    },
  ],
  management: [
    {
      name: "Tore Steen",
      role: "MBA. Lead Director",
      image: IMAGES.ourTeams.team2,
      description: "Tore Steen is a seasoned CEO, board director, and strategic advisor who has spent decades building and leading global businesses across finance, technology, healthcare, manufacturing, encryption/authentication, and public-company environments (NYSE, NASDAQ, LSE). He started at Citibank and later founded and ran a multi-million-dollar global finance organization across 16 countries for Chemical Bank (now JPMorgan Chase), before moving into CEO and board roles at scale. He brings deep governance discipline, strong deal judgement, and a builder's mindset—plus a service-oriented personal core through YPO/CEO leadership and philanthropy (including founding and chairing The Utah 1033 Foundation). Tore is also a proud Norwegian, a former Royal Norwegian Air Force officer, and an outdoorsman—steady, principled, and grounded."
    },
    {
      name: "Dylan Bruno",
      role: "B.S., MIT. Director of Investor Relations, Media and Communications",
      image: IMAGES.ourTeams.team8,
      description: "Dylan Bruno has built a rare, nontraditional career that blends MIT-trained engineering rigor with 35 years of entertainment leadership across acting, writing, directing, and producing—launched when Steven Spielberg discovered him and cast him in Saving Private Ryan. He brings a founder's mindset to creative work, often comparing producing to launching a startup: vision, team-building, persistence, and selling into a world trained to say \"no.\" Beyond Hollywood, Dylan has stayed active in technology and critical infrastructure as an investor, advisor, and board member—helping companies pivot business models (manufacturing → services/SaaS, shared-savings, M&A) and supporting innovation in robotics, data platforms, and UAVs. He's also served in mission-driven governance, including The Waterkeeper Alliance—an organization dedicated to protecting clean water in more than 260 countries—during Robert F. Kennedy Jr.'s tenure as president. Dylan is an avid skier, spearfisherman, husband, and father—creative, grounded, and unusually effective at translating bold ideas into real-world execution."
    },
    {
      name: "Amy Rubsamen",
      role: "Chief Of Staff",
      image: IMAGES.ourTeams.team11,
      description: "Amy Rubsamen will serve as Chief Of Staff. Amy has over 30 years experience in sales operations, marketing, education and development in the technology and childcare industries. With proven negotiation, team building and communication skills, she is successful at managing large projects and programs consistently under budget and on time while maintaining vendor and partner relationships. Previously, Amy held senior sales and business development roles at companies including Liquid Robotics (acquired by Boeing), Rebel Brown, Epiphany, Netscape, and OpenVision, consistently building teams, scaling operations, and exceeding revenue targets."
    },
    {
      name: "Rick Graf",
      role: "A.B., A.M., JD cum laude. Secretary and General Counsel",
      image: IMAGES.ourTeams.team9,
      description: "Rick Graf is a high-reps venture/PE dealmaker—an experienced counsel who has led 150+ venture transactions totaling $1.5B+, and has advised startups across software, payments, biotech, and remote healthcare companies from founding through IPO-stage realities. He blends big-firm transaction rigor with founder empathy (he's been a co-founder/GC himself), which makes him a pragmatic guide on financing, governance, and \"how to get it done without stepping on landmines.\" He brings discipline, risk-mitigation, and crisp decision framing—keeping a fast tempo."
    },
    {
      name: "Asif Nazeer",
      role: "FCCA, FCA. Director of Finance and Controller",
      image: IMAGES.ourTeams.team10,
      description: "Asif Nazeer is a finance and controls professional who brings real backbone to governance: a Director of Finance profile focused on strategy, performance oversight, and building transparent structures that keep organizations resilient and future-ready. He has 20+ years experience across telecom, IT, financial services, and fintech, grounded in audit/corporate finance—and credentials that include FCCA/FCA with prior experience at PwC. He's the person who makes sure the numbers are clean, the controls are appropriate, and the operating rhythm is predictable—while still thinking like a growth partner, not a \"department of no.\""
    },
    // {
    //   name: "Amy Rubsamen",
    //   role: "Chief of Staff",
    //   image: IMAGES.ourTeams.team11,
    //   description: "Amy Rubsamen will serve as Chief Of Staff. Amy has over 30 years experience in sales operations, marketing, education and development in the technology and childcare industries. With proven negotiation, team building and communication skills, she is successful at managing large projects and programs consistently under budget and on time while maintaining vendor and partner relationships. Previously, Amy held senior sales and business development roles at companies including Liquid Robotics (acquired by Boeing), Rebel Brown, Epiphany, Netscape, and OpenVision, consistently building teams, scaling operations, and exceeding revenue targets."
    // },
  ],
  advisory: [
    {
      name: "Reid Rubsamen",
      role: "M.D. Founder, CEO, Medical Director, Chief Medical Officer",
      image: IMAGES.ourTeams.team1,
      description: "Dr. Reid Rubsamen is the visionary founder and CEO of Flow Pharma. A board-certified anesthesiologist with training at Massachusetts General Hospital (where he served as Chief Resident) and advanced degrees in both computer science and medicine from UC Berkeley and Stanford, Reid bridges the worlds of technology and healthcare. He previously founded two medical technology companies (including Aradigm Corporation) before launching Flow Pharma. An inventor at heart, he holds over 70 U.S. patents and has more than 10,000 citations to his scientific work – clear evidence of his innovative impact. Despite these accomplishments, Reid is known for his down-to-earth leadership and enthusiasm for mentoring others. He brings to the board not only profound expertise but also a genuine passion for collaboration and breakthrough innovation that inspires everyone around him."
    },
    {
      name: "Tikoes Blankberg",
      role: "M.D. FCAP",
      image: IMAGES.ourTeams.team12,
      description: "Dr. Blankenberg is a board-certified pathologist and the senior partner at Shasta Pathology Associates. He attended Medical School at the University of California, Los Angeles, after receiving his bachelor's degree in Biomedical Engineering, Materials Science option, from Northwestern University, Evanston, Illinois. Dr. Blankenberg subsequently completed his pathology residency at the University of California, Davis and a surgical pathology fellowship at Stanford University. He has served as Chief of Staff for St Elizabeth's Hospital, Red Bluff, California and has served on the Community Board of Dignity Health, Northern California Service Area."
    },
    {
      name: "Paul Harris",
      role: "Ph.D. Chief Science Officer",
      image: IMAGES.ourTeams.team13,
      description: "Paul Harris received his undergraduate degree from the University of California, Berkeley in Biochemistry and Medical Biophysics, his PhD in Cell Biology from Cornell University, and did Postdoctoral training in peptide chemistry at The Rockefeller University. He was a faculty member at the health sciences campus of Columbia University since 1988, most recently as an Associate Professor in Medical Science (in Medicine) in the medical school. Dr Harris' research efforts spanning 1990 to 2010 were instrumental in defining the structure of MHC bound peptides and dendritic cell therapy. Studies he co-authored provided the foundations for current vaccine design strategies."
    },
    {
      name: "CV Herst,",
      role: "Ph.D. Senior Scientist",
      image: IMAGES.ourTeams.team14,
      description: "C.V. Herst received his undergraduate degree in Bacteriology and his master's degree in Public Health from U.C. Berkeley, after which he was hired by Cetus Corporation, one of the original biotechnology companies, where he was on the cloning teams for IFN-beta, IL-2, and TNF-alpha. In 1989 he earned his Ph.D. in Tumor Cell Biology from Northwestern University. In his post-doctoral fellowship at MD Anderson Cancer Center, he researched bcr-abl breakpoint variations in chronic myelogenous leukemia. His career research efforts have led to approved therapies for systemic fungal infections, Multiple Sclerosis, certain cancers, as well as FDA approvals for medical devices. He has been a member of the Flow Pharma team since 2004."
    },
    { name: "CDRE (ret) Moshabab Alqahtani", role: "Regional Advisor", image: IMAGES.ourTeams.team15 },
    {
      name: "Jill Dietz",
      role: "MD",
      image: IMAGES.ourTeams.team16,
      description: "Jill Dietz is current CMO of Cyduct diagnostics, a company devoted to empowering women with personalized cancer risk assessment. Prior to that, as Chief Transformation Officer of the Cancer Institute and Director of Growth and Strategy for the Breast Program at Allegheny Health Network, Pittsburgh PA, she was the liaison between Highmark Health and the Cancer Institute and focused on establishing value-based initiatives, personalized cancer care delivery and the use of AI in cancer risk assessment. She completed her fellowship in breast surgery at the Cleveland Clinic, has practiced breast surgery for over 25 years, and led Breast Cancer programs at the Cleveland Clinic, Barnes Jewish Hospital and University Hospitals in Cleveland.\n\nDr Dietz received her Master's in Health Care Management from Harvard School of Public Health. She is Principal of two consulting companies, TrueNorth Medical Consulting LLC, focusing on value-based transformation and Centers of Excellence guidance and Peace Medical Consulting LLC, an industry partner for education. Other corporate experience is consulting and advisory board positions with IceCure, Genomic Health and Flow Pharma.\n\nDr Dietz is the past President and Chairman of the Board of the American Society of Breast Surgeons (ASBrS) and Vice Chair of the National Accreditation Program for Breast Centers (NAPBC). Dr Dietz co-leads Global Breast Hub and serves as an advisor to Breast Global, international organizations with a mission to lessen gaps in breast cancer care around the world.\n\nDr Dietz led the multi-society Breast Cancer Pandemic Consortium to establish a prioritization recommendation, has taken part in international guideline and consensus statement development, has served as faculty in many courses, and is a frequent international invited speaker. Her current clinical and research interests include oncoplastic surgery, breast cancer risk assessment and stage shifting diagnosis, value-based and patient-centric care and the surgical techniques that promote such care delivery."
    },
    {
      name: "Dr Faisal Abdulhamid Farrash",
      role: "MD, MHCM",
      image: IMAGES.ourTeams.team17,
      description: "Dr Faisal Abdulhamid Farrash is a distinguished neurosurgeon specializing in neuro-oncology at King Faisal Specialist Hospital & Research Centre (KFSH&RC) in Riyadh, Saudi Arabia. As the Director of the Neuro-Oncology Integrated Practice Unit and the Skull Base Fellowship Training Program, he leads advancements in treating complex brain tumors and skull base pathologies.\n\nBoard-certified in neurosurgery and fellowship trained in skull base surgery at the University of Toronto, Dr. Farrash possesses expertise in skull base and endoscopic surgery, complex spine surgery, peripheral nerve surgery, and neuro-oncology. He also has a Masters of Healthcare Management degree from McGill University.\n\nHis research interests include gene silencing techniques and the tumor microenvironment, significantly impacting neuro-oncological treatments. Dr. Farrash also champions integrating artificial intelligence in healthcare, emphasizing its potential to enhance diagnostics and personalize treatment strategies."
    },
  ]
};

export function OurTeamPageContent({ onClose }: OurTeamPageContentProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans w-full -mb-12">
      <div className="w-full px-6 py-8 md:px-12 md:py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[13px] text-gray-500 mb-10">
          <span
            className="cursor-pointer hover:text-gray-900 transition-colors"
            onClick={onClose}
          >
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium">Our Team</span>
        </div>

        {/* Header Section */}
        <div className="w-full mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 w-full mb-6 leading-[1.15] tracking-tight">
            Meet our Team<br />
            Driven by Purpose, Powered by People
          </h1>
          <p className="text-[17px] text-gray-600 font-light leading-relaxed max-w-4xl">
            Meet the scientists, innovators, and visionaries engineering a world without borders to immunity.
          </p>
        </div>

        {/* Board of Directors */}
        <div className="mb-16 w-full">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 pb-4 border-b border-gray-200">Board of Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamData.board.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-[374/426] rounded-[12px] overflow-hidden mb-6 bg-gray-100 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />

                  {/* Plus Icon */}
                  <div className="absolute right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-[8.33%]">
                      <svg className="absolute block w-full h-full drop-shadow-md" fill="none" preserveAspectRatio="none" viewBox="0 0 53.3333 53.3333">
                        <path d={svgPaths.p15971600} fill="white" className="group-hover:fill-[#1F4D71] transition-colors" />
                      </svg>
                    </div>
                    <div className="absolute inset-[39.58%]">
                      <div className="absolute inset-[-7.5%]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333">
                          <path d={svgPaths.pd1b9400} stroke="#1F4D71" className="group-hover:stroke-white transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] md:text-[24px] font-normal tracking-[-0.48px] text-[#0a0a0a] leading-tight">{member.name}</h3>
                  <p className="text-[15px] md:text-[16px] text-[#212121] font-light leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-16 w-full">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 pb-4 border-b border-gray-200">Management Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamData.management.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-[374/426] rounded-[12px] overflow-hidden mb-6 bg-gray-100 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />

                  {/* Plus Icon */}
                  <div className="absolute right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-[8.33%]">
                      <svg className="absolute block w-full h-full drop-shadow-md" fill="none" preserveAspectRatio="none" viewBox="0 0 53.3333 53.3333">
                        <path d={svgPaths.p15971600} fill="white" className="group-hover:fill-[#1F4D71] transition-colors" />
                      </svg>
                    </div>
                    <div className="absolute inset-[39.58%]">
                      <div className="absolute inset-[-7.5%]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333">
                          <path d={svgPaths.pd1b9400} stroke="#1F4D71" className="group-hover:stroke-white transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] md:text-[24px] font-normal tracking-[-0.48px] text-[#0a0a0a] leading-tight">{member.name}</h3>
                  <p className="text-[15px] md:text-[16px] text-[#212121] font-light leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-16 w-full">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 pb-4 border-b border-gray-200">Medical and Scientific Advisory Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamData.advisory.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-[374/426] rounded-[12px] overflow-hidden mb-6 bg-gray-100 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />

                  {/* Plus Icon */}
                  <div className="absolute right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-[8.33%]">
                      <svg className="absolute block w-full h-full drop-shadow-md" fill="none" preserveAspectRatio="none" viewBox="0 0 53.3333 53.3333">
                        <path d={svgPaths.p15971600} fill="white" className="group-hover:fill-[#1F4D71] transition-colors" />
                      </svg>
                    </div>
                    <div className="absolute inset-[39.58%]">
                      <div className="absolute inset-[-7.5%]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333">
                          <path d={svgPaths.pd1b9400} stroke="#1F4D71" className="group-hover:stroke-white transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] md:text-[24px] font-normal tracking-[-0.48px] text-[#0a0a0a] leading-tight">{member.name}</h3>
                  <p className="text-[15px] md:text-[16px] text-[#212121] font-light leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <TeamMemberDetail
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}