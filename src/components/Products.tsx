import React, { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { Check, Filter, ArrowRight, Download, HelpCircle, Loader, DollarSign } from "lucide-react";

interface ProductsProps {
  onSelectProductForRFQ: (prodName: string) => void;
}

export default function Products({ onSelectProductForRFQ }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProduct, setActiveProduct] = useState<Product | null>(PRODUCTS[0]);
  const [downloadTracker, setDownloadTracker] = useState<Record<string, boolean>>({});
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Filter logic
  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Items" },
    { id: "rectifiers", label: "Transformer Rectifiers" },
    { id: "junction-boxes", label: "Junction Boxes" },
    { id: "anodes", label: "Anodes (Sacrificial & MMO)" },
    { id: "cables", label: "CP Specialty Cables" },
    { id: "gaskets", label: "Insulating Gaskets" }
  ];

  const handleProductSelect = (product: Product) => {
    setActiveProduct(product);
  };

  const simulateDownload = (id: string, name: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadTracker(prev => ({ ...prev, [id]: true }));
      setDownloadingId(null);
      // Trigger user-friendly alert simulation
      alert(`[TECHNICAL INFRASTRUSTURE REGISTRY]
Successfully downloaded Datasheet for "${name}".

Reference: DOM-DS-2026-${id.toUpperCase()}
Size: 1.84 MB
Format: Secure Technical PDF`);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-16" id="products-catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 gap-4">
          <div>
            <span className="text-blue-600 font-mono text-xs font-bold uppercase block tracking-widest">
              OFFICIAL EQUIPMENT REGISTRY
            </span>
            <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900 mt-1">
              Cathodic Protection Materials & solutions
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              All items comply with ASTM, NACE SP0169, and ISO certification standards. Click on any item for full specs.
            </p>
          </div>
          
          {/* Quick Filter control */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 shadow-sm text-xs font-bold rounded">
            <Filter className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-slate-500 uppercase">Interactive Filter</span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto" id="product-category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                // Set first element of the list as active product to prevent crash
                const first = PRODUCTS.find(p => cat.id === "all" || p.category === cat.id);
                if (first) {
                  setActiveProduct(first);
                }
              }}
              className={`px-4 py-2 font-mono text-xs font-bold rounded-sm border cursor-pointer transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Interface Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of filtered products */}
          <div className="lg:col-span-5 space-y-4 max-h-[640px] overflow-y-auto pr-2" id="products-lists">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              {filteredProducts.length} Items Matching Selected Category
            </span>

            {filteredProducts.map((p) => {
              const active = activeProduct?.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleProductSelect(p)}
                  className={`p-4 border transition-all duration-200 cursor-pointer flex gap-4 items-center rounded-sm ${
                    active
                      ? "bg-white border-l-8 border-l-blue-600 border-slate-300 shadow-md"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                  id={`prod-card-${p.id}`}
                >
                  <div className="w-16 h-16 bg-slate-100 overflow-hidden rounded shrink-0 relative border border-slate-200">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-slate-900 uppercase leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 font-sans">
                      {p.shortDesc}
                    </p>
                  </div>
                  <ArrowRight className={`h-4 w-4 shrink-0 transition ${active ? "text-blue-600 translate-x-1" : "text-slate-300"}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Product Deep-Dive Specifications Panel */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 md:p-8 shadow-md rounded-sm space-y-6" id="product-detail-deepdive">
            {activeProduct ? (
              <>
                {/* Product Header */}
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex justify-between items-start gap-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded inline-block">
                      Category ID: {activeProduct.category.toUpperCase()}
                    </span>
                    <button
                      onClick={() => onSelectProductForRFQ(activeProduct.name)}
                      className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition uppercase tracking-wider"
                      title="Add to Quote proposal"
                    >
                      <DollarSign className="h-3.5 w-3.5" />
                      Add to RFQ Form
                    </button>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-black text-slate-900 uppercase tracking-tight mt-2">
                    {activeProduct.name}
                  </h2>
                </div>

                {/* Imagery + ShortDesc */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 h-44 bg-slate-100 overflow-hidden border border-slate-200 rounded">
                    <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition duration-300 animate-fade-in" />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs italic text-slate-500 font-sans leading-relaxed">
                      "{activeProduct.shortDesc}"
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => onSelectProductForRFQ(activeProduct.name)}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold uppercase py-3 px-4 rounded-sm tracking-wider text-center cursor-pointer transition shadow"
                      >
                        Request Corporate Pricing
                      </button>
                    </div>
                  </div>
                </div>

                {/* Spec Table */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-extrabold tracking-wide text-slate-900 border-b border-slate-200 pb-1">
                    Technical Design Specifications
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600 border-collapse">
                      <tbody>
                        {Object.entries(activeProduct.specs).map(([specKey, specVal]) => (
                          <tr key={specKey} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-2.5 font-bold text-[#1e293b] w-1/3">{specKey}</td>
                            <td className="py-2.5 font-mono text-[11px] text-blue-700">{specVal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Features & Applications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs bg-slate-50 p-4 rounded border border-slate-100">
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">System Features</h4>
                    <ul className="space-y-1.5 text-slate-600 font-sans">
                      {activeProduct.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="h-3 w-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">On-Site Applications</h4>
                    <ul className="space-y-1.5 text-slate-600 font-sans">
                      {activeProduct.applications.map((ap, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="h-3 w-3 text-blue-600 shrink-0 mt-0.5" />
                          <span>{ap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download PDF section (Tracking verification tool) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-blue-100 bg-blue-50/50 rounded">
                  <div className="text-center sm:text-left">
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Need full technical datasheet?</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-sans">Download our secure authenticated PDF spec manual immediately.</p>
                  </div>
                  
                  <button
                    onClick={() => simulateDownload(activeProduct.id, activeProduct.name)}
                    disabled={downloadingId !== null}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-black uppercase rounded-sm cursor-pointer disabled:opacity-50"
                  >
                    {downloadingId === activeProduct.id ? (
                      <>
                        <Loader className="h-3.5 w-3.5 animate-spin" />
                        Downloading...
                      </>
                    ) : downloadTracker[activeProduct.id] ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        Downloaded
                      </>
                    ) : (
                      <>
                        <Download className="h-3.5 w-3.5" />
                        Download Datasheet PDF
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="p-16 text-center text-slate-400">
                <HelpCircle className="h-10 w-10 mx-auto stroke-1" />
                <p className="mt-2 text-xs">Select any item from the inventory registry list to view specs.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
