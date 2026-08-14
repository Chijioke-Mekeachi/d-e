import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import { Shield, Phone, Mail, MapPin, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [rfqPreselected, setRfqPreselected] = useState<string>("");

  // Handler to smoothly route product detail actions directly to the multi-step RFQ form
  const handleSelectProductForRFQ = (prodName: string) => {
    setRfqPreselected(prodName);
    setActiveTab("rfq");
  };

  // Handler to route service audit requests to the Consultation form on the Contact section
  const handleRequestConsultation = (serviceTitle: string) => {
    setRfqPreselected(serviceTitle);
    setActiveTab("contact");
  };

  const renderActiveSection = () => {

    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-1">
            <Hero
              onLearnMoreServices={() => setActiveTab("services")}
              onRequestQuote={() => setActiveTab("rfq")}
            />
            {/* Short Homepage Section summaries */}
            <div className="bg-white py-12 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-xs">
                <div className="space-y-4">
                  <span className="bg-blue-100 text-blue-800 font-mono text-[10px] uppercase font-bold px-2 py-1 rounded inline-block">
                    INDUSTRIAL PRESENCE
                  </span>
                  <h2 className="text-2xl font-black uppercase text-slate-900 leading-tight">
                    PROVIDING ABSOLUTE CORROSION IMMUNITY
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-sans">
                    With decades of specialized industrial field validation, D&E Dominion Technical Limited maintains structure integrity for petrochemical refineries, saline marine bridges, underground cross-country water lines, and fuel storage tank bases. We design custom impressed current systems using MMO titanium tubular filaments and oil-cooled high performance rectifiers.
                  </p>
                  <button
                    onClick={() => setActiveTab("about")}
                    className="text-blue-600 hover:text-blue-800 font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    Read Our Story ➩
                  </button>
                </div>
                
                <div className="bg-slate-900 text-white p-6 rounded-sm border-l-4 border-amber-500 space-y-4 font-mono">
                  <h4 className="font-extrabold text-amber-500 uppercase tracking-widest text-[11px]">
                    ★ OPERATIONAL STATISTICS
                  </h4>
                  <div className="space-y-2 border-t border-slate-800 pt-3">
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-sans">Water Table Surveys:</span>
                      <span className="text-white font-bold">120+ Audits</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-sans">Cathodic Rectifiers Mounted:</span>
                      <span className="text-white font-bold">450+ Active Units</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-sans">Active Field Personnel:</span>
                      <span className="text-white font-bold">AMPP / NACE Qualified</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Consultation block */}
            <Contact
              initialServiceInterest="General Inquiry"
              onFormSuccess={() => {
                alert("Thank you. Our database registers logged your homepage query securely. We will be in contact shortly.");
              }}
            />
          </div>
        );
      case "about":
        return <About />;
      case "products":
        return <Products onSelectProductForRFQ={handleSelectProductForRFQ} />;
      case "services":
        return <Services onRequestConsultation={handleRequestConsultation} />;
      case "projects":
        return <Projects />;
      case "contact":
        return (
          <Contact
            initialServiceInterest={rfqPreselected || "General Inquiry"}
            onFormSuccess={() => {
              setRfqPreselected("");
            }}
          />
        );
      default:
        return (
          <Hero
            onLearnMoreServices={() => setActiveTab("services")}
            onRequestQuote={() => setActiveTab("rfq")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between" id="applet-master-frame">
      
      {/* Dynamic Header navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Render area */}
      <main className="flex-1">
        {renderActiveSection()}
      </main>

    

      {/* Corporate Modern Footer reminiscent of Geometric Balance style */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-850 font-sans text-xs pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
            
            {/* Logo Left Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white p-1.5 rounded-sm flex items-center justify-center font-bold">
                  <Shield className="h-4.5 w-4.5" />
                </div>
                <div className="font-extrabold text-[#ffffff] tracking-tight uppercase leading-none">
                  DOMINION <span className="text-blue-500">TECHNICAL</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Comprehensive corrosion diagnostics, cathodic engineering design, and local weatherproof Transformer Rectifier assembly.
              </p>
              <div className="font-mono text-[10px] text-amber-500 italic uppercase">
                "Your Protection, OUR COMMITMENT"
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3 font-medium">
              <h4 className="text-[#ffffff] font-extrabold uppercase tracking-widest text-[10px] border-b border-slate-900 pb-1 pb-1">
                Structural Links
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <button onClick={() => { setActiveTab("home"); }} className="hover:text-blue-400 cursor-pointer transition">
                    ➩ Corporate Homepage
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("about"); }} className="hover:text-blue-400 cursor-pointer transition">
                    ➩ About & Leadership
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("products"); }} className="hover:text-blue-400 cursor-pointer transition">
                    ➩ Products Catalog
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("services"); }} className="hover:text-blue-400 cursor-pointer transition">
                    ➩ Engineering Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Contacts Column */}
            <div className="space-y-3">
              <h4 className="text-[#ffffff] font-extrabold uppercase tracking-widest text-[10px] border-b border-slate-900 pb-1">
                Office Information
              </h4>
              <ul className="space-y-2 text-slate-400 text-[11px] font-mono">
                <li className="flex items-start gap-1.5">
                  <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="font-sans">No. 17 Unity Drive, Satellite Village, Oyigbo, Rivers State</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span>+234 8064446220, +234 9023918123</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <a href="mailto:dominiontechnical@gmail.com" className="underline hover:text-blue-400">
                    dominiontechnical@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Professional Certifications lists */}
            <div className="space-y-3 font-medium text-slate-500">
              <h4 className="text-[#ffffff] font-extrabold uppercase tracking-widest text-[10px] border-b border-slate-900 pb-1">
                Quality Compliance
              </h4>
              <ul className="space-y-1.5 text-[10px] uppercase font-bold tracking-wider">
                <li className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  ISO 9001:2015 ACCREDITED
                </li>
                <li className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  NACE / AMPP CHARTER MEMBER
                </li>
                <li className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  COREN LICENSED ENGINEERING YARD
                </li>
              </ul>
            </div>

          </div>

          {/* Micro Footer Bar details (Geometric balance text) */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest gap-2">
            <span>
              © 25th May 2026 D&E Dominion Technical Limited. All rights reserved.
            </span>
            <div className="flex gap-4">
              <span>Your Protection, OUR COMMITMENT</span>
              <span className="text-slate-800">•</span>
              <span>Protecting Today, Preserving Tomorrow.</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
