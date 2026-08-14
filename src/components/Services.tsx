import React, { useEffect, useState } from "react";
import { SERVICES } from "../data";
import { Shield, Hammer, ClipboardCheck, ArrowUpRight, CheckCircle2, Factory, Loader } from "lucide-react";
import { Service } from "../types";
import { StorageService } from "../storage";

interface ServicesProps {
  onRequestConsultation: (serviceTitle: string) => void;
}

export default function Services({ onRequestConsultation }: ServicesProps) {
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchServices = () => {
      try {
        setLoading(true);
        const savedServices = StorageService.getServices();
        setServices(savedServices);
      } catch (err) {
        console.warn("Could not synchronize local services.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Map simple string lookups for icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "DraftingCompass":
        return <ClipboardCheck className="h-6 w-6 text-blue-600" />;
      case "Hammer":
        return <Hammer className="h-6 w-6 text-[#f59e0b]" />;
      case "Activity":
        return <ClipboardCheck className="h-6 w-6 text-emerald-600" />;
      case "ShieldAlert":
        return <Shield className="h-6 w-6 text-red-600" />;
      default:
        return <Shield className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-16" id="services-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Head Intro Statement */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-blue-600 font-mono text-xs font-black uppercase tracking-widest block">
            CORROSION ENGINEERING DIVISION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            INTEGRITY & PROTECTION SERVICES
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed pt-2">
            Dominion Technical provides comprehensive site calculations, baseline tests, deepwell drilling supervision, automatic rectifier calibrations, and annual Close Interval surveys to isolate and preserve structural steel assets.
          </p>
        </div>

        {loading && services.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-blue-600 h-8 w-8" />
          </div>
        ) : (
          /* Services List Block Arrangement */
          <div className="space-y-12">
            {services.map((serv, index) => {
              const isAdjustRight = index % 2 !== 0;
              return (
                <div
                  key={serv.id}
                  id={`service-block-${serv.id}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 p-6 md:p-10 shadow-sm rounded-sm ${
                    isAdjustRight ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Visual Image Column */}
                  <div className={`lg:col-span-5 h-64 sm:h-72 bg-slate-100 overflow-hidden border border-slate-200 rounded relative group ${
                    isAdjustRight ? "lg:order-last" : ""
                  }`}>
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition duration-300"></div>
                    {(() => {
                      const lowerUrl = (serv.image || "").toLowerCase();
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
                            src={serv.image}
                            className="w-full h-full object-cover "
                            controls
                            muted
                            loop
                            autoPlay
                            playsInline
                          />
                        );
                      }
                      return (
                        <img
                          src={serv.image}
                          alt={serv.title}
                          className="w-full h-full object-cover "
                          loading="lazy"
                        />
                      );
                    })()}
                    <div className="absolute top-4 left-4 bg-slate-900 text-white p-2.5 rounded shadow">
                      {renderIcon(serv.iconName)}
                    </div>
                  </div>

                  {/* Text Specifications Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest uppercase block">
                        DIVISION PROTOCOL 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mt-0.5 tracking-tight">
                        {serv.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                      {serv.fullDesc}
                    </p>

                    {/* Deliverables List (Tangible Output criteria) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 border border-slate-100 rounded text-xs leading-relaxed">
                      <div className="space-y-2">
                        <h4 className="font-extrabold text-slate-900 uppercase tracking-widest text-[10px] border-b border-slate-200 pb-1 flex items-center gap-1.5">
                          <ClipboardCheck className="h-3.5 w-3.5 text-blue-600" />
                          Engineering Deliverables
                        </h4>
                        <ul className="space-y-1.5 text-slate-600 font-sans">
                          {serv.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-extrabold text-slate-900 uppercase tracking-widest text-[10px] border-b border-slate-200 pb-1 flex items-center gap-1.5">
                          <Factory className="h-3.5 w-3.5 text-amber-500" />
                          Target Industries
                        </h4>
                        <ul className="space-y-1.5 text-slate-600 font-sans">
                          {serv.industries.map((ind, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-1.5">
                              <span className="text-amber-500 font-black">•</span>
                              <span>{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Consultation CTA action */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                      <button
                        onClick={() => onRequestConsultation(serv.title)}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-extrabold uppercase text-xs px-6 py-3 tracking-wider rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        Request {serv.title} Audit
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <span className="text-[11px] text-slate-400 font-mono">
                        *Initial feasibility survey scoping completed within 3 days.
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
