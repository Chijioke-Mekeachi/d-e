import React, { useEffect, useState } from "react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import { ShieldAlert, CheckCircle, TrendingUp, Award, Clock, ArrowRight, Loader } from "lucide-react";
import { StorageService } from "../storage";

export default function Projects() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [cases, setCases] = useState<CaseStudy[]>(CASE_STUDIES);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProjects = () => {
      try {
        setLoading(true);
        const savedProjects = StorageService.getProjects();
        setCases(savedProjects);
      } catch (err) {
        console.warn("Could not synchronize local projects.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const industries = ["all", "Oil & Gas", "Industrial", "Marine"];

  const filteredCases = selectedIndustry === "all"
    ? cases
    : cases.filter(c => c.industry === selectedIndustry);

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-16 animate-fade-in" id="projects-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Head Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 gap-4">
          <div>
            <span className="text-blue-600 font-mono text-xs font-bold uppercase block tracking-widest">
              FIELD WORK AUDIT RECORDS
            </span>
            <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900 mt-1">
              Industrial Case Studies & Results
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Review real, checked corrosion control solutions commissioned for oil, gas, manufacturing, and port sectors.
            </p>
          </div>

          {/* Quick interactive filter tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1 border border-slate-200 rounded shadow-sm" id="projects-industry-filters">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 font-mono text-xs font-bold uppercase rounded-sm cursor-pointer transition ${
                  selectedIndustry === ind
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {ind === "all" ? "All Sectors" : ind}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Layout grid */}
        <div className="grid grid-cols-1 gap-12" id="case-studies-cards">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-slate-200 shadow hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 rounded-sm overflow-hidden"
            >
              
              {/* Image & Metric Overlay Left Side */}
              <div className="lg:col-span-4 h-64 lg:h-auto bg-slate-100 relative overflow-hidden">
                {(() => {
                  const lowerUrl = (cs.image || "").toLowerCase();
                  const isVideo = lowerUrl.startsWith("data:video/") ||
                    lowerUrl.endsWith(".mp4") ||
                    lowerUrl.endsWith(".webm") ||
                    lowerUrl.endsWith(".ogg") ||
                    lowerUrl.endsWith(".mov") ||
                    lowerUrl.endsWith(".avi") ||
                    lowerUrl.endsWith(".mkv") ||
                    lowerUrl.includes("/video/upload/") ||
                    lowerUrl.includes(".mp4?");
                  if (isVideo) {
                    return (
                      <video
                        src={cs.image}
                        className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition"
                        controls
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    );
                  }
                  return (
                    <img src={cs.image} alt={cs.clientName} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition" />
                  );
                })()}
                <div className="absolute inset-0 bg-slate-900/40"></div>
                
                {/* Metric Overlays */}
                <div className="absolute top-4 left-4 right-4 flex justify-between gap-2">
                  <span className="bg-blue-600 text-white font-mono text-[10px] font-bold uppercase px-2 py-1 rounded">
                    {cs.industry} Sector
                  </span>
                  <span className="bg-slate-950 text-amber-400 font-mono text-[10px] uppercase px-2 py-1 rounded border border-amber-500">
                    ID: {cs.id.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/95 p-4 border-l-4 border-amber-500 text-white rounded">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-amber-500" />
                    <span className="font-mono text-xs font-extrabold tracking-wider uppercase">Key Metrics Achieved</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-800 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-sans">Asset Life Expansion</span>
                      <span className="font-black text-amber-400 font-mono text-sm">{cs.assetLifeExtension}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-sans">Protection Index</span>
                      <span className="font-black text-white font-mono text-sm">{cs.efficiencyMTR}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text specifications details Right Side */}
              <div className="lg:col-span-8 p-6 md:p-8 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Client profile</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight mt-0.5">
                    {cs.clientName}
                  </h2>
                  <div className="h-1 w-12 bg-blue-600 mt-2"></div>
                </div>

                {/* Challenge, Solution, Results Matrix Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed font-sans text-slate-600">
                  <div className="space-y-2 border-l-2 border-red-500 pl-3">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                      <ShieldAlert className="h-3.5 w-3.5 text-red-500" />
                      The Corrosion Challenge
                    </h4>
                    <p className="line-clamp-6">{cs.challenge}</p>
                  </div>

                  <div className="space-y-2 border-l-2 border-blue-600 pl-3">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                      <Award className="h-3.5 w-3.5 text-blue-600" />
                      Our Engineered Solution
                    </h4>
                    <p className="line-clamp-6">{cs.solution}</p>
                  </div>

                  <div className="space-y-2 border-l-2 border-emerald-500 pl-3 bg-emerald-50/20 p-2 rounded">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                      Verification Results
                    </h4>
                    <p className="line-clamp-6">{cs.results}</p>
                  </div>
                </div>

                {/* Footer validation statement */}
                <div className="pt-4 border-t border-slate-150 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-blue-500" />
                    Verified On-site Compliance criteria NACE SP0169 ISO 15589-1
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
