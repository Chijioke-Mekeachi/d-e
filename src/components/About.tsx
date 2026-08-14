import React, { useState } from "react";
import { TEAM_MEMBERS, MILESTONES } from "../data";
import { Award, Briefcase, Calendar, ShieldCheck, HelpCircle } from "lucide-react";

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(MILESTONES.length - 1);

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-20" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Head Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-3 py-1 font-bold rounded-full uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3 w-3" />
            Reliability Defined
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900">
            D&E Dominion Technical Limited
          </h1>
          <p className="text-slate-600 mt-4 leading-relaxed font-sans text-sm sm:text-base">
            Since 2006, Dominion Technical has provided engineering, installation, and monitoring of cathodic protection systems and corrosion control architectures in challenging, aggressive soil and marine environments.
          </p>
        </div>

        {/* Story & Dominion Difference (Geometric Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4 text-sm">
          <div className="bg-white p-8 border-l-8 border-blue-600 shadow-md rounded-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Our Company Story</h2>
              <div className="h-1 w-16 bg-blue-600"></div>
              <p className="leading-relaxed text-slate-600">
                Founded initially as a maritime corrosion consultancy in Port Harcourt, D&E Dominion Technical Limited transformed into a fully operational industrial protection contractor. Today, we address complex baseline electrochemical needs with heavy duty materials and strict NACE standards.
              </p>
              <p className="leading-relaxed text-slate-600">
                We believe that asset integrity is a matter of business continuity other than simple compliance. A single pipeline leak destroys ecosystems, costs millions in fines, and risks human safety. Our designs neutralize these concerns.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div>
                <span className="text-blue-600 font-black block text-sm">OUR MISSION</span>
                To guarantee absolute zero-accident corrosion immunity across all industrial sectors.
              </div>
              <div>
                <span className="text-amber-500 font-black block text-sm">OUR VISION</span>
                To remain West Africa's primary integrity preservation engineering partner.
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 border-r-8 border-amber-500 shadow-md rounded-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-tight text-amber-400">The "Dominion Difference"</h2>
              <div className="h-1 w-16 bg-amber-400"></div>
              <p className="leading-relaxed text-slate-300">
                Why do leading oil majors, port authorities, and utility providers consult D&E Dominion Technical? It boils down to localized industrial excellence:
              </p>
              
              <ul className="space-y-2.5 text-slate-300 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>Locally Designed Systems:</strong> Our Transformer Rectifier cabinets built inside reinforced IP66 shells stand up to humid, saline marine environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>True Academic Credentials:</strong> Our team is structured purely around senior PhDs, materials engineers, and AMPP Level 4 CP specialists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>Turnkey Field Operation:</strong> We field drill deep wells, lay carbonaceous backfill, compile CIS testing databases, and maintain telemetry.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-800 text-slate-400 text-xs">
              <span className="text-amber-400 font-bold font-mono">"Your Protection, OUR COMMITMENT"</span>
            </div>
          </div>
        </div>

        {/* Milestones Horizontal / Vertical Timeline */}
        <div className="bg-white p-8 shadow-sm border border-slate-200 rounded-sm">
          <div className="mb-8 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Company Growth Timeline
            </h2>
            <p className="text-xs text-slate-500 mt-1">Select are key operational highlights of our historical evolution:</p>
          </div>

          {/* Timeline Buttons container */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-6" id="timeline-controls">
            {MILESTONES.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setActiveTimeline(index)}
                className={`px-4 py-2 font-mono text-xs font-black rounded-sm border cursor-pointer transition-all ${
                  activeTimeline === index
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                }`}
              >
                Year {item.year}
              </button>
            ))}
          </div>

          {/* Active timeline view */}
          <div className="p-6 bg-slate-50 border-l-4 border-amber-500 rounded text-sm transition-all duration-300">
            <span className="font-mono text-amber-600 font-black text-lg block mb-1">
              🎉 {MILESTONES[activeTimeline].year} Major Benchmark
            </span>
            <h3 className="font-extrabold text-[#1e293b] text-base uppercase tracking-wider">
              {MILESTONES[activeTimeline].title}
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              {MILESTONES[activeTimeline].description}
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2 justify-center md:justify-start">
              <Award className="h-6 w-6 text-blue-600" />
              Engineering Leadership Team
            </h2>
            <p className="text-xs text-slate-500 mt-1">Our certified subject matter experts are available for site inspections:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white border border-slate-200 shadow hover:shadow-lg transition flex flex-col h-full rounded-sm">
                <div className="h-150 bg-slate-200 overflow-hidden relative">
                  {/* High Quality Industrial/Leader Placeholder styling using css filters and overlays */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover "
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 to-transparent p-4">
                    <span className="text-amber-400 font-mono text-xs font-bold uppercase block">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-black text-slate-900 uppercase">
                      {member.name}
                    </h3>
                    
                    {/* Credentials */}
                    <div className="flex flex-wrap gap-1 mt-2 mb-3">
                      {member.qualifications.map((q, qidx) => (
                        <span key={qidx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium border border-slate-200">
                          {q}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-4">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Tour section */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full translate-x-16 -translate-y-16"></div>
          
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-mono text-xs font-extrabold uppercase block tracking-widest">
              OFFICIAL FACILITY & TESTING TOUR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              State-of-the-Art Local Testing Lab
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Based in Ogbovires-State, our specialty industrial integration yard features computerized TR stress testing, physical galvanic anode loading audits, and chemical simulation soil-box kits. We run comprehensive heat-cycle assays for custom oil-cooled Transformer Rectifier prototypes prior to deployment.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-bold rounded text-slate-300">
                ✓ Full ISO Testing Compliance
              </span>
              <span className="bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-bold rounded text-slate-300">
                ✓ Open Physical Inspection Allowed
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
