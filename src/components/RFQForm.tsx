import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Send, Upload, ShieldCheck, Loader, FileText, CheckCircle2 } from "lucide-react";
import { StorageService } from "../storage";

interface RFQFormProps {
  preselectedProduct?: string;
  onRFQSuccess: () => void;
}

export default function RFQForm({ preselectedProduct = "", onRFQSuccess }: RFQFormProps) {
  const [step, setStep] = useState(1);

  // Step 1: Contact
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2: Project Info
  const [projectType, setProjectType] = useState("New Installation");
  const [estimatedSize, setEstimatedSize] = useState("");
  const [timeline, setTimeline] = useState("3 Months");
  const [budgetRange, setBudgetRange] = useState("$25k - $50k");
  const [description, setDescription] = useState("");

  // Step 3: Product/Service Selection
  const availableServices = [
    "Cathodic Protection System Design",
    "On-site Soil Resistivity Surveying",
    "Transformer Rectifiers Installation",
    "Anodes Groundbed Construction",
    "DCVG Holiday Coating Diagnostics",
    "Annual Close-Interval Potential Survey (CIS)",
    "Thermite Welded Structure Leads",
    "Insulating Gaskets Commissioning"
  ];

  const [selectedItems, setSelectedItems] = useState<string[]>(
    preselectedProduct ? [preselectedProduct] : []
  );

  // Step 4: Mock File drop
  const [uploadedDocName, setUploadedDocName] = useState<string | null>(null);

  // Status
  const [loading, setLoading] = useState(false);
  const [rfqResult, setRfqResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleItemSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleNextStep = () => {
    if (step === 1 && (!fullName || !email)) {
      alert("Please complete required contact details (Full Name and Email address).");
      return;
    }
    if (step === 2 && !description) {
      alert("Please provide a short summary description of your structures or project requirements.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleDocManualUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedDocName(e.target.files[0].name);
    }
  };

  const handleRfqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      // Realistic simulation delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newLead = StorageService.addRFQ({
        fullName,
        companyName,
        email,
        phone,
        projectType,
        estimatedSize,
        timeline,
        budgetRange,
        description,
        selectedProducts: selectedItems
      });

      setRfqResult({
        success: true,
        rfqId: newLead.id,
        autoReply: "Your custom quotation request has been mapped successfully to local CRM registers. Our NACE Level 4 specialist will compile a detailed design sheet baseline and return an official PDF bill of materials.",
        rfq: newLead
      });

      // Clean Form
      setFullName("");
      setCompanyName("");
      setEmail("");
      setPhone("");
      setEstimatedSize("");
      setDescription("");
      setSelectedItems([]);
      setUploadedDocName(null);
      setStep(5);

      onRFQSuccess();
    } catch (err: any) {
      setErrorMessage(err.message || "Unable to save your RFQ data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-16" id="rfq-stepper-viewport">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* RFQ title banner */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-blue-600 font-mono text-xs font-black uppercase tracking-widest block">
            ESTIMATE REQUEST CENTER
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
            Request an RFQ Proposal
          </h1>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Fill out our streamlined multi-step form to generate a formal industrial quote callback.
          </p>
          
          {/* Steps Indicator slider bar */}
          {step <= 4 && (
            <div className="flex justify-between items-center max-w-md mx-auto pt-4 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
              <div
                className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-300"
                style={{ width: `${(step - 1) * 33}%` }}
              ></div>

              {[1, 2, 3, 4].map((sNum) => (
                <div
                  key={sNum}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-black border-2 z-10 transition-colors ${
                    step >= sNum
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-400 border-slate-200"
                  }`}
                >
                  {sNum}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Master Card container */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm rounded-sm">
          
          {errorMessage && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-800 rounded flex gap-2 font-sans font-extrabold text-xs">
              <span className="text-red-600 font-mono">[ERROR]</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Step Router */}
          {step === 1 && (
            <div className="space-y-6 text-xs text-slate-700 animate-fade-in">
              <h3 className="text-sm font-black text-slate-950 uppercase border-b border-slate-100 pb-2 flex items-center gap-1">
                <FileText className="h-4 w-4 text-blue-600" />
                Step 1: Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Full Name (Required)</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Chief Engineer Williams"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Niger Delta Marine Corp"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Email Address (Required)</label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. williams@deltamarine.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Phone Number</label>
                  <input
                    type="text"
                    placeholder="e.g. 08031122334"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-mono text-xs font-black uppercase py-3.5 px-6 rounded-sm cursor-pointer flex items-center gap-1"
                >
                  Review Project Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 text-xs text-slate-700 animate-fade-in">
              <h3 className="text-sm font-black text-slate-950 uppercase border-b border-slate-100 pb-2">
                Step 2: Project Parameters & Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Project Category Type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                  >
                    <option value="New Installation">New Cathodic Installation (ICCP)</option>
                    <option value="Sacrificial Galvanic">Sacrificial Anodes Commissioning</option>
                    <option value="System Audit / Survey">Field Diagnostic Survey (CIS / DCVG)</option>
                    <option value="Upgrades / Repairs">Upgrade or Anode Depletion Rehab</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Estimated Structure Size</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 offshore platforms / 45km pipeline / 2 fluid tanks"
                    value={estimatedSize}
                    onChange={(e) => setEstimatedSize(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Desired Construction Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none"
                  >
                    <option value="Immediate">Immediate Delivery required (Within 1 Month)</option>
                    <option value="3 Months">Conservative (1 to 3 Months)</option>
                    <option value="6 Months">Project Planning stage (3 to 6 Months)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase block">Budget Allowance Bracket</label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none"
                  >
                    <option value="Under $25k">Budget bracket Under $25,000</option>
                    <option value="$25k - $50k">Moderate $25,000 to $50,000</option>
                    <option value="$50k - $100k">Corporate $50,000 to $100,000</option>
                    <option value="$100k+">Heavy Industrial $100,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-900 uppercase block">Detailed Structural Specifications (Required)</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the structure being protected. What is the current potential level? Are there any coating decay signs?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-slate-100 hover:bg-slate-205 text-slate-700 font-mono text-xs font-black uppercase py-3.5 px-6 rounded-sm cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Contact Info
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-mono text-xs font-black uppercase py-3.5 px-6 rounded-sm cursor-pointer flex items-center gap-1"
                >
                  Select Services/Products
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-xs text-slate-700 animate-fade-in">
              <h3 className="text-sm font-black text-slate-950 uppercase border-b border-slate-100 pb-2">
                Step 3: Specialized Equipment & Service Requirements
              </h3>

              <div className="space-y-3">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold block">
                  Select all components being requested in quote proposal:
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="rfq-services-checklist">
                  {availableServices.map((srv) => {
                    const selected = selectedItems.includes(srv);
                    return (
                      <div
                        key={srv}
                        onClick={() => toggleItemSelection(srv)}
                        className={`p-3 border rounded-sm cursor-pointer transition select-none flex items-center justify-between ${
                          selected
                            ? "border-blue-600 bg-blue-50/50"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <span className="font-bold text-slate-800">{srv}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition ${
                            selected ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 text-transparent"
                          }`}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-slate-100 hover:bg-slate-205 text-slate-700 font-mono text-xs font-black uppercase py-3.5 px-6 rounded-sm cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Project specs
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-mono text-xs font-black uppercase py-3.5 px-6 rounded-sm cursor-pointer flex items-center gap-1"
                >
                  Document upload
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 text-xs text-slate-700 animate-fade-in">
              <h3 className="text-sm font-black text-slate-950 uppercase border-b border-slate-100 pb-2">
                Step 4: Specifications & Document upload
              </h3>

              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block tracking-widest">
                  Attach isometric designs, CAD pipelines drawings, or site soil charts:
                </span>

                <div className="border bg-slate-50 border-slate-200 p-8 text-center rounded">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto" />
                  <div className="mt-2 font-sans text-xs">
                    <label htmlFor="file-rfq-dwg" className="text-blue-600 font-bold underline cursor-pointer">
                      Click to browse your local CAD drawing files
                    </label>
                    <input
                      type="file"
                      id="file-rfq-dwg"
                      className="hidden"
                      onChange={handleDocManualUpload}
                      accept=".pdf,.dwg,.jpeg,.xls,.xlsx"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">Accepted: PDF, AutoCAD DWG, Microsoft Excel, maximum size 10MB.</p>
                  </div>
                  
                  {uploadedDocName && (
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3 py-1 font-bold rounded text-[11px] font-mono">
                      <span>✓ Secure File Loaded: {uploadedDocName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Multi-Step Review summary block */}
              <div className="bg-slate-50 p-4 border border-slate-100 text-xs rounded space-y-2">
                <h4 className="font-extrabold text-slate-900 uppercase">RFQ Executive Summary Review</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-sans text-slate-650">
                  <p>Inquirer: <span className="font-bold text-slate-900">{fullName} ({companyName || "Personal"})</span></p>
                  <p>Budget Allocation: <span className="font-bold text-slate-900">{budgetRange}</span></p>
                  <p>Project Classification: <span className="font-bold text-slate-900">{projectType}</span></p>
                  <p>Selected Material items: <span className="font-bold text-slate-900">{selectedItems.length} requested</span></p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-slate-100 hover:bg-slate-205 text-slate-700 font-mono text-xs font-black uppercase py-3.5 px-6 rounded-sm cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Services choice
                </button>
                
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleRfqSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase py-3.5 px-8 rounded-sm cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader className="h-4 w-4 animate-spin" />
                      Saving to CRM Database...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 text-white" />
                      Generate Official RFQ Proposal
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 5 && rfqResult && (
            <div className="space-y-6 text-xs text-slate-700 text-center py-6 animate-fade-in" id="rfq-submission-success">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
                  Request for Quote Generated Successfully!
                </h3>
                <p className="text-slate-600 font-sans">
                  {rfqResult.autoReply}
                </p>
              </div>

              {/* Structured Metadata Receipt Copy */}
              <div className="max-w-md bg-slate-50 border border-slate-200 p-5 rounded mx-auto text-left font-mono text-[11px] space-y-1.5">
                <p className="font-sans font-extrabold text-[#1e293b] border-b border-slate-200 pb-1 flex justify-between">
                  <span>RFQ Secure Receipt Metadata</span>
                  <span className="text-blue-700 font-mono">CODE-OK</span>
                </p>
                <p>RFQ Security ID: <span className="font-bold text-slate-900">{rfqResult.rfqId}</span></p>
                <p>Client Full Name: {rfqResult.rfq.fullName}</p>
                <p>Project Classification: {rfqResult.rfq.projectType}</p>
                <p>Status: <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">{rfqResult.rfq.status}</span></p>
                <p className="font-sans text-[10px] text-slate-400 mt-1">Receipt copy triggered successfully to Client & dominiontechnical@gmail.com.</p>
              </div>

              <div className="pt-4 max-w-xs mx-auto">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setRfqResult(null);
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-mono text-xs font-black uppercase py-3.5 rounded-sm cursor-pointer shadow"
                >
                  Generate New Industrial RFQ
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
