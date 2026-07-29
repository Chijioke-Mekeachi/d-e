import React from "react";
import { Shield, ArrowRight, Zap, Award, CheckCircle, PhoneCall, MessageSquare } from "lucide-react";

interface HeroProps {
  onLearnMoreServices: () => void;
  onRequestQuote: () => void;
}

export default function Hero({ onLearnMoreServices, onRequestQuote }: HeroProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Header Area */}
      <div className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        {/* Abstract Background Design Element reminiscent of Geometric Balance */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-[450px] h-[450px] border-[35px] border-amber-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-5 right-1/3 w-[250px] h-[250px] border-[20px] border-blue-500 rounded-lg rotate-12"></div>
          <div className="absolute top-12 left-1/4 w-32 h-32 bg-slate-800 rounded-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col gap-6" id="hero-content">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-10 bg-blue-500"></span>
                <span className="text-amber-400 font-extrabold tracking-[0.2em] uppercase text-xs">
                  Your Protection, OUR COMMITMENT
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Protecting Today,<br />
                <span className="text-blue-500">Preserving Tomorrow.</span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Industry-leading cathodic protection & corrosion control engineering solutions. Restoring design specifications, testing integrity, and extending industrial assets life in oil & gas, marine, offshore, and petrochemical networks.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <button
                  onClick={onRequestQuote}
                  id="hero-cta-quote"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 font-extrabold uppercase tracking-wider text-xs rounded-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 stroke-[3]" />
                </button>
                <button
                  onClick={() => window.open("https://wa.me/2348064446220?text=Hello%20D%26E%20Dominion%20Technical%2C%20I%20am%20interested%20in%20a%20Cathodic%20Protection%20consultation.", "_blank")}
                  id="hero-cta-whatsapp"
                  className="bg-emerald-600 hover:bg-emerald-550 text-white border border-emerald-500 px-8 py-4 font-extrabold uppercase tracking-wider text-xs rounded-sm transition-all shadow-lg shadow-emerald-600/20 cursor-pointer flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4 stroke-[2.5]" />
                  WhatsApp Expert
                  <span className="w-2 w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                </button>
                <button
                  onClick={onLearnMoreServices}
                  id="hero-cta-solutions"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-350 border border-slate-700 hover:border-slate-600 px-8 py-4 font-black uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer"
                >
                  Our Solutions
                </button>
              </div>

              {/* Trust parameters */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-slate-400 text-xs">
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-300">
                  <Award className="h-4 w-4 text-amber-500" />
                  ISO 9001:2015 CERTIFIED
                </span>
                <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-300">
                  <span className="text-blue-500 font-extrabold font-mono">AMPP / NACE</span>
                  APPROVED ENGINEERING
                </span>
                <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                <span className="font-mono text-amber-500 tracking-wider">
                  Est. 2006
                </span>
              </div>
            </div>

            {/* Right Column: Geometric Card Visual Stack */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md bg-slate-800 p-8 rounded-sm border-t-8 border-amber-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full translate-x-12 -translate-y-12"></div>
                
                <h3 className="text-lg font-bold uppercase tracking-wider text-amber-400 border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-500" />
                  Why Partner With Us?
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Reliable Systems</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Custom materials engineered with high potential reserves for 30+ year service lives.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Expertise-Led Delivery</h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-sans">NACE Level 4 CP certification credentials guiding every single site calculation layout.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quality Materials</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Sourcing and assembly protocols complying with NACE/AMPP design standards.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Absolute Satisfaction</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Over 15,000 kilometers of operational gas-transmission pipelines fully protected.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center text-xs">
                  <div className="font-mono text-slate-400">
                    <p className="uppercase text-[9px]">Emergency Line</p>
                    <p className="font-bold text-white text-sm">09023918123</p>
                  </div>
                  <span className="bg-slate-900 border border-slate-700 px-3 py-1 text-slate-300 font-mono rounded text-[10px]">
                    24/7 Response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Bar with 4 Cards - Styled as solid Geometric Blocks */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-white text-center">
          <div className="p-8 border-b md:border-b-0 md:border-r border-slate-800 hover:bg-slate-800/50 transition">
            <span className="text-blue-500 font-black text-2xl font-mono block mb-1">20+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Years Industry Experience</span>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-slate-800 hover:bg-slate-800/50 transition">
            <span className="text-amber-500 font-black text-2xl font-mono block mb-1">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Rust Control Verification</span>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-slate-800 hover:bg-slate-800/50 transition">
            <span className="text-blue-500 font-black text-2xl font-mono block mb-1">15K+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Protected Pipeline KM</span>
          </div>
          <div className="p-8 hover:bg-slate-800/50 transition0">
            <span className="text-amber-500 font-black text-2xl font-mono block mb-1">AMPP</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Charter Standard Affiliate</span>
          </div>
        </div>
      </div>

      {/* Services Snapshot Feature Grid (Geometric Blocks) */}
      <div className="bg-slate-50 py-16 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-6 h-1 bg-blue-600"></span>
                <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-blue-700">EXPERTISE IN ACTION</span>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
                INDUSTRIAL INFRASTRUCTURE SHIELD
              </h2>
            </div>
            <button
              onClick={onLearnMoreServices}
              className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-sm shrink-0 transition"
            >
              Learn More Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-slate-200 bg-white">
            <div className="p-8 border-r border-b border-slate-200 flex flex-col gap-4 hover:bg-slate-50 transition">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-sm">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900">Cathodic Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert sacrificial & impressed current (ICCP) structures fully simulated to control environmental galvanic corrosion.
              </p>
            </div>

            <div className="p-8 border-r border-b border-slate-200 flex flex-col gap-4 hover:bg-slate-50 transition bg-slate-50/50">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 flex items-center justify-center rounded-sm">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900">Field Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Close Interval Potential Survey (CIS), soil resistivity contour sweeps, and DCVG pipeline coating holiday surveys.
              </p>
            </div>

            <div className="p-8 border-r border-b border-slate-200 flex flex-col gap-4 hover:bg-slate-50 transition">
              <div className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center rounded-sm">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900">Custom Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                NACE/AMPP baseline designs with rigorous current density, soil chemistry, and anode wear computations.
              </p>
            </div>

            <div className="p-8 border-r border-b border-slate-200 flex flex-col justify-between gap-4 bg-blue-600 text-white">
              <div className="space-y-2">
                <h3 className="font-black text-lg uppercase leading-tight">Need an Engineering Assessment?</h3>
                <p className="text-xs text-blue-100">Speak directly to our lead engineering officers today regarding custom soil audits.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-blue-200 block">CALL TO SPEAK</span>
                <span className="font-mono text-xl font-bold block">08064446220</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
