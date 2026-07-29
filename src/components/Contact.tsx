import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ShieldAlert, CheckCircle2, Paperclip, AlertTriangle, Loader, MessageSquare } from "lucide-react";
import { StorageService } from "../storage";

interface ContactProps {
  initialServiceInterest?: string;
  onFormSuccess: () => void;
}

export default function Contact({ initialServiceInterest = "General Inquiry", onFormSuccess }: ContactProps) {
  // Input fields
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(initialServiceInterest);
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState<"Email" | "Phone">("Email");
  
  // Custom file upload states
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  // Captcha anti-spam
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<any | null>(null);

  const interestCategories = [
    "General Inquiry",
    "Engineering & Design",
    "Installation & Commissioning",
    "Maintenance & Monitoring",
    "Repair & Rehabilitation",
    "Transformer Rectifiers",
    "Anodes Supply",
    "CP Cables",
    "Insulating Gaskets"
  ];

  // Drag-and-drop file mockup handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      triggerFileUploadSimulation(file.name);
    }
  };

  const handleManualFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      triggerFileUploadSimulation(e.target.files[0].name);
    }
  };

  const triggerFileUploadSimulation = (name: string) => {
    setUploadedFileName(name);
    setUploadProgress(10);
    // Mimic progressive upload
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 30;
      });
    }, 200);
  };

  // Handle local submit and post directly to simulated localStorage client-side DB
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Anti-spam validation (Math prompt: 4 + 7)
    if (captchaAnswer.trim() !== "11") {
      setSubmitError("Anti-Spam Verification answer is incorrect. Please calculate '4 + 7' correctly.");
      return;
    }

    setSubmitting(true);

    try {
      // Simulate slight network lag for realism
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newLead = StorageService.addContact({
        fullName,
        companyName,
        email,
        phone,
        serviceInterest: interest,
        message,
        preferredMethod: contactMethod
      });

      setSuccessResponse({
        success: true,
        lead: newLead,
        autoReply: "Your consultation inquiry has been submitted and cataloged successfully! Our NACE Level 4 principal specialists will review your infrastructure coordinates and respond within one business hour."
      });

      // Clear all inputs
      setFullName("");
      setCompanyName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCaptchaAnswer("");
      setUploadedFileName(null);
      setUploadProgress(null);
      
      onFormSuccess();
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit contact request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-16" id="contact-section-viewport">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Head Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest block">
            GET IN CONTACT RIGHT AWAY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            Consult With Our Team
          </h1>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            Have an active corrosion concern or need a material specification quotation? Complete our structural lead intake form below.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        {/* Layout: Sidebar and Form Row split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Left: Details, Business hours, Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Parameters */}
            <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm space-y-4">
              <h3 className="text-sm font-black uppercase text-slate-900 border-b border-slate-100 pb-2">
                Corporate Address Details
              </h3>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 uppercase block tracking-wider">Facility Address</span>
                    <span className="text-slate-600 font-sans mt-0.5 block">7 Unity Drive, Satellite Village, Ogbovires-State</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 uppercase block tracking-wider">Direct Hotline Numbers</span>
                    <span className="text-slate-600 font-mono mt-0.5 block">
                      <a href="tel:08064446220" className="hover:text-blue-600">08064446220</a> | <a href="tel:09023918123" className="hover:text-blue-600">09023918123</a>
                    </span>
                    <span className="text-[10px] text-slate-400 font-sans block mt-0.5">Click directly on mobile to auto-dial emergency lines</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 uppercase block tracking-wider">Engineering Email Link</span>
                    <a href="mailto:dominiontechnical@gmail.com" className="text-blue-600 hover:text-blue-800 font-mono mt-0.5 block underline">
                      dominiontechnical@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Consultation Section */}
            <div className="bg-emerald-600 hover:bg-emerald-700 text-white p-6 rounded-sm shadow-sm space-y-3.5 transition-colors cursor-pointer group" id="whatsapp-integration-block" onClick={() => window.open("https://wa.me/2348064446220?text=Hello%20D%26E%20Dominion%20Technical%2C%20I%20am%20interested%20in%20a%20Cathodic%20Protection%20consultation.", "_blank")}>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-[22px] w-[22px] text-emerald-100 animate-pulse stroke-[2.5]" />
                <h3 className="text-xs font-black uppercase tracking-widest text-emerald-100">
                  Direct WhatsApp Portal
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-emerald-50">
                Need answers fast? Connect with our cathodic specialists instantly on WhatsApp. Send pictures, location drafts, or specifications for real-time mobile expert guidance.
              </p>
              <div className="pt-2 border-t border-emerald-500 flex justify-between items-center text-xs font-mono">
                <span className="text-[10px] bg-slate-900/30 px-2 py-0.5 rounded font-extrabold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  OPERATIONAL: LIVE
                </span>
                <span className="font-extrabold text-white group-hover:underline">
                  START CHAT NOW →
                </span>
              </div>
            </div>

            {/* Business hours Card */}
            <div className="bg-slate-900 text-white p-6 rounded-sm shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-amber-500 border-b border-slate-800 pb-2 flex items-center gap-1.5">
                <Clock className="h-4.5 w-4.5 text-amber-500" />
                Intake Business Hours
              </h3>
              
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-sans">Monday – Friday:</span>
                  <span className="font-bold text-white">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-sans">Saturday Operational:</span>
                  <span className="font-bold text-white">9:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-2 text-[10px] text-amber-400">
                  <span className="font-sans">Emergency Line:</span>
                  <span>Available 24 Hours / 7 Days</span>
                </div>
              </div>
            </div>

            {/* Simulated Clean Map Embedding Layout with exact coordinate text */}
            <div className="bg-white border border-slate-200 p-4 rounded-sm shadow-sm space-y-2">
              <div className="h-44 bg-slate-100 rounded border border-slate-200 overflow-hidden relative flex flex-col justify-end">
                {/* Standard high density map frame */}
                <iframe 
                  title="Dominion Technical Facility Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11342.3489110!2d6.2132!3d5.4219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNSIyNScyNi44Ik4gNisxMicsNTUuMiJF!5e0!3m2!1sen!2sng!4v1622349129480!5m2!1sen!2sng" 
                  className="w-full h-full border-0 absolute inset-0" 
                  allowFullScreen={false} 
                  loading="lazy"
                ></iframe>
                
                {/* overlay addressing tag */}
                <div className="bg-slate-950/90 text-white p-2 text-[10px] font-mono relative z-10 flex justify-between items-center w-full">
                  <span>GPS: 5.4219° N, 6.2132° E</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 font-bold underline hover:text-amber-300"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Form Content Right */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 shadow-sm rounded-sm">
            <h3 className="text-sm font-black uppercase text-slate-900 border-b border-slate-100 pb-3 mb-6 flex items-center gap-1.5">
              <Send className="h-4 w-4 text-blue-600" />
              Corporate Consultation Form
            </h3>

            {successResponse ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded space-y-4 font-sans text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="font-extrabold text-slate-900 uppercase">Consultation Inquiry Received Successfully!</span>
                </div>
                <p>{successResponse.autoReply}</p>
                <div className="bg-white p-3 border border-emerald-100 rounded font-mono text-[11px] space-y-1">
                  <p className="font-sans font-bold text-slate-500">Intake Metadata Summary Key:</p>
                  <p>Inquiry ID: <span className="font-bold text-slate-900">{successResponse.lead.id}</span></p>
                  <p>Client Full Name: {successResponse.lead.fullName}</p>
                  <p>Service Interest: {successResponse.lead.serviceInterest}</p>
                </div>
                <button
                  onClick={() => setSuccessResponse(null)}
                  className="bg-slate-900 text-white px-4 py-2 font-bold font-mono text-[10px] uppercase rounded-sm cursor-pointer"
                >
                  Submit Another Consultation Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs text-slate-700">
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded flex gap-2 font-sans font-bold">
                    <ShieldAlert className="h-4 w-4 text-red-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5Col">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">Full Name (Required)</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Engr. Clara Briggs"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:border-blue-500 font-sans focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Atlantic Refinery Corp"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:border-blue-500 font-sans focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">Email Address (Required)</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. c.briggs@atlantic.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:border-blue-500 font-sans focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">Phone Number</label>
                    <input
                      type="text"
                      placeholder="e.g. 08064446220"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:border-blue-500 font-sans focus:outline-none"
                    />
                  </div>
                </div>

                {/* Dropdown Selection */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase tracking-wider block">Service Category of Interest</label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:border-blue-500 font-sans focus:outline-none font-bold"
                  >
                    {interestCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message text description */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-900 uppercase tracking-wider block">Project Description / Message (Required)</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide corrosion challenges, estimated asset length, line parameters, water salinity, etc..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:border-blue-500 font-sans focus:outline-none"
                  ></textarea>
                </div>

                {/* Contact mechanism and Document Upload slider split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  
                  {/* Preferred contact option */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      {(["Email", "Phone"] as const).map((method) => (
                        <label key={method} className="flex items-center gap-1.5 font-bold cursor-pointer">
                          <input
                            type="radio"
                            name="method"
                            checked={contactMethod === method}
                            onChange={() => setContactMethod(method)}
                            className="accent-blue-600"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Document Upload Simulator */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block flex items-center gap-1">
                      <Paperclip className="h-3.5 w-3.5 text-blue-600" />
                      Upload Drawings / Specs (Optional)
                    </label>
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`p-3 border-2 border-dashed rounded text-center transition cursor-pointer relative ${
                        dragActive ? "border-amber-500 bg-amber-50/20" : "border-slate-300 hover:border-blue-500 bg-slate-50"
                      }`}
                    >
                      <input
                        type="file"
                        id="document-file-picker"
                        className="hidden"
                        onChange={handleManualFileSelect}
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.jpeg,.png"
                      />
                      <label htmlFor="document-file-picker" className="cursor-pointer font-sans block text-[10px] text-slate-500">
                        {uploadedFileName ? (
                          <span className="font-bold text-slate-900 block truncate">
                            📎 {uploadedFileName}
                          </span>
                        ) : (
                          "Drag specifications here or click to browse"
                        )}
                      </label>

                      {uploadProgress !== null && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
                          <div
                            className="h-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Anti Spam & Submit button row */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Captcha prompt */}
                  <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 font-extrabold bg-slate-100 p-2 border border-slate-200 rounded">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                    <span>SPAM SHIELD: 4 + 7 =</span>
                    <input
                      required
                      type="text"
                      placeholder="?"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="w-10 p-1 bg-white text-slate-900 font-black border border-slate-200 rounded text-center focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-amber-400 font-mono text-xs font-black uppercase py-3.5 px-8 rounded-sm tracking-wider cursor-pointer flex justify-center items-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin text-amber-400" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        Send Consultation Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
