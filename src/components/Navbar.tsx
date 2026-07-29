import { useState } from "react";
import { Shield, Phone, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-2 xl:gap-3 cursor-pointer shrink-0" 
            onClick={() => handleNavClick("home")}
            id="nav-logo"
          >
            <div className="bg-amber-500 text-slate-950 p-1.5 xl:p-2 rounded-lg flex items-center justify-center shadow-lg border border-amber-400 shrink-0">
              <Shield className="h-5 w-5 xl:h-6 xl:w-6 stroke-[2.5]" />
            </div>
            <div className="shrink-0">
              <div className="font-extrabold text-xs sm:text-sm xl:text-lg tracking-tight flex items-center gap-1 xl:gap-1.5 leading-none">
                <span className="text-white">D&E DOMINION</span>
                <span className="text-amber-400">TECHNICAL</span>
              </div>
              <span className="text-[9px] xl:text-[10px] text-slate-400 tracking-widest uppercase font-mono mt-0.5 block">
                Your Protection, OUR COMMITMENT
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-0.5 xl:space-x-2 text-xs xl:text-sm font-medium shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === item.id
                    ? "bg-amber-500 text-slate-950 font-semibold shadow-inner"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3.5 shrink-0">
            {/* Quote CTA */}
            <button
              onClick={() => {
                setActiveTab("rfq");
              }}
              id="cta-rfq-top"
              className={`flex items-center gap-1 px-2.5 py-1.5 xl:gap-1.5 xl:px-4 xl:py-2 text-[11px] xl:text-xs font-semibold rounded-lg tracking-wide shadow-md border transition-all duration-200 cursor-pointer active:scale-[0.97] shrink-0 whitespace-nowrap ${
                activeTab === "rfq" 
                  ? "bg-slate-700 text-amber-400 border-amber-500"
                  : "bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 hover:border-amber-300"
              }`}
            >
              <FileText className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden xl:inline">Request a Quote</span>
              <span className="xl:hidden">Get Quote</span>
            </button>

            {/* Quick Click-to-Call */}
            <a
              href="tel:08064446220"
              className="flex items-center gap-1 xl:gap-1.5 text-slate-300 hover:text-amber-400 transition ml-0.5 xl:ml-1 text-[11px] xl:text-xs font-mono font-semibold shrink-0 whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span>08064446220</span>
            </a>
          </div>

          {/* Mobile responsive toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-slate-800 hover:text-white text-slate-400 transition cursor-pointer"
              id="btn-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 pt-2 pb-6 space-y-2 relative shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all ${
                activeTab === item.id
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setActiveTab("rfq");
                setIsOpen(false);
              }}
              className="w-full flex justify-center items-center gap-2 bg-amber-500 text-slate-950 py-3 rounded-lg font-bold shadow-md hover:bg-amber-400"
            >
              <FileText className="h-4 w-4" />
              Request a Quote
            </button>

            <div className="flex justify-around pt-3 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-amber-500" />
                08064446220
              </span>
              <span>•</span>
              <span>mon-fri: 8am-5pm</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
