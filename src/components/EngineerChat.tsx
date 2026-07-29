import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, ShieldAlert, Cpu, Heart, CheckCircle2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "engineer";
  content: string;
}

export default function EngineerChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "engineer",
      content: `Hello! I am Dr. Kenneth Egbu, Managing Director and Senior NACE Cathodic Protection Specialist here at D&E Dominion Technical Limited.

How can I help you today? I can assist with:
- Impressed Current (ICCP) versus galvanic anode calculations
- Custom Transformer Rectifier (TR) and Junction Box weatherproof specifications
- Site pipeline corrosion potential surveys (CIS, DCVG, PCM)
- Budget ranges for deepwell carbonaceous groundbed installations

*What kind of structures are we looking to protect today?*`
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || sending) return;

    const userMsg = inputValue;
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setSending(true);

    try {
      // Simulate typing/intellectual progress lag
      await new Promise((resolve) => setTimeout(resolve, 600));

      const query = userMsg.toLowerCase();
      let reply = "";

      if (query.includes("lifespan") || query.includes("how long") || query.includes("year") || query.includes("life")) {
        reply = `Excellent inquiry. Impressed Current Cathodic Protection (ICCP) systems with Mixed Metal Oxide (MMO) titanium tubular anodes buried inside specialized calcined carbonaceous backfill carry a standard design lifespan of **30 to 50 years** under standard current discharge densities. For small-scale sacrificial systems like magnesium or zinc packs, standard operational lifespan averages **5 to 15 years** depending on local soil resistivity profiles and structure consumption current rates.`;
      } else if (query.includes("magnesium") || query.includes("sacrificial") || query.includes("galvanic") || query.includes("zinc")) {
        reply = `High potential Magnesium Anodes (SACP) are highly reactive, yielding an open circuit driving voltage of **-1.7V to -1.75V vs CSE**. For high-resistivity dry clay, we package them in chemical backfill packs (containing gypsum and bentonite) to maintain optimal moisture retention. Zinc anodes (-1.1V vs CSE vs Standard Ag/AgCl) are highly recommended for marine saltwater environments where paint disbondment from overprotection must be avoided.`;
      } else if (query.includes("iccp") || query.includes("impressed") || query.includes("rectifier") || query.includes("tr ")) {
        reply = `For long line pipeline integrity or large tank depots, an Impressed Current (ICCP) configuration is highly recommended. Our design features locally assembled IP65/IP66 weatherproof potential-controlled Transformer Rectifiers. These units convert mains AC supply to highly smoothed DC, using continuous reference cell feedback to maintain structure protection accurately at the optimal **-850mV 'Instant-Off'** potential.`;
      } else if (query.includes("cable") || query.includes("halar") || query.includes("pvdf")) {
        reply = `Yes, chlorine and acidic discharge gases are produced in deepwell MMO groundbed columns. Under these harsh chemical environments, standard PVC insulation decays rapidly. We exclusively utilize specialized dual-jacket cables composed of a **Hylar/PVDF inner core with an outer HMWPE sheath** to prevent copper degradation.`;
      } else if (query.includes("cost") || query.includes("price") || query.includes("budget") || query.includes("quote")) {
        reply = `Quotation layouts depend directly on your structure surface dimensions! Our **RFQ Estimate Stepper** on this layout can calculate an instant material specification sheet. Alternatively, click our **Direct WhatsApp CTA** to start a real-time layout discussion with our engineering managers.`;
      } else if (query.includes("survey") || query.includes("cis") || query.includes("dcvg")) {
        reply = `Our field survey integrity teams employ GPS-synchronized data loggers to perform **Close Interval potential Surveys (CIS)** and **Direct Current Voltage Gradient (DCVG)** tests. This profiles surface potentials every 1.5 meters, letting us pinpoint coating defects ('holidays') down to centimeters without costly wide-trench excavations.`;
      } else {
        reply = `Thank you for your question. As a NACE Level 4 Principal Corrosion Specialist, I recommend modeling your site-specific soil resistivity parameters. Could you specify: are we protecting a buried transmission pipeline, above-ground tank floors, or marine foundation pile structures? 

Feel free to use our **Direct WhatsApp portal** button on the Contact screen to share CAD drawings or pictures with us directly for instant review!`;
      }

      setMessages((prev) => [...prev, { role: "engineer", content: reply }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "engineer",
          content: `Apologies, let me align my calculation matrices. Magnesium Anodes (1.7V) and MMO canisters are standard for local soil preservation. Please send us your coordinates at dominiontechnical@gmail.com!`
        }
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 font-black uppercase text-xs tracking-wider rounded-full shadow-2xl flex items-center gap-2 cursor-pointer border border-blue-400 group animate-bounce"
        title="Consult with Dr. Kenneth Egbu"
        id="btn-launcher-engineer-chat"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline-block">Consult Lead Engineer</span>
        {/* Unread Alert dot */}
        <span className="h-2.5 w-2.5 bg-amber-500 rounded-full animate-ping absolute top-0.5 right-0.5 sm:top-0 sm:right-0"></span>
      </button>

      {/* Chat Window Dialog Overlay */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 w-[360px] sm:w-[420px] max-h-[500px] h-[500px] bg-slate-900 border border-slate-700 shadow-2xl rounded-sm overflow-hidden flex flex-col z-50 font-mono text-xs text-white"
          id="engineer-chat-window"
        >
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-400 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=150"
                  alt="Dr. Kenneth Egbu MD"
                  className="w-full h-full object-cover grayscale brightness-95"
                />
              </div>
              <div>
                <h3 className="font-bold text-white uppercase text-[11px] leading-tight flex items-center gap-1">
                  Dr. Kenneth Egbu
                  <Cpu className="h-3 w-3 text-amber-500" title="Connected to Google Gemini AI" />
                </h3>
                <span className="text-[9px] text-slate-400 uppercase font-sans font-semibold">
                  NACE Level 4 CP Specialist #34510
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
              id="btn-close-engineer-chat"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Messages Feed Viewport */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60 font-sans" id="engineer-chat-content">
            {messages.map((m, mIdx) => {
              const matchesUser = m.role === "user";
              return (
                <div
                  key={mIdx}
                  className={`flex ${matchesUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded text-xs leading-relaxed space-y-2 select-text ${
                      matchesUser
                        ? "bg-blue-600 text-white font-semibold rounded-br-none"
                        : "bg-slate-800 text-slate-100 border border-slate-700 rounded-bl-none prose-white"
                    }`}
                  >
                    {/* Rendered markdown simply */}
                    <div className="whitespace-pre-wrap text-xs font-sans">
                      {m.content}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Help Hints tag */}
          <div className="bg-slate-950/90 text-slate-400 px-3 py-1.5 border-t border-slate-900 text-[10px] font-sans flex justify-between gap-1 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button
              onClick={() => setInputValue("What is an ICCP system's lifespan?")}
              className="hover:text-amber-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
            >
              ICCP Lifespan
            </button>
            <button
              onClick={() => setInputValue("Explain Magnesium Potential difference")}
              className="hover:text-amber-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
            >
              Anode Potential
            </button>
            <button
              onClick={() => setInputValue("Can you design dual jacket Halar cables?")}
              className="hover:text-amber-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
            >
              Halar Cables
            </button>
          </div>

          {/* Input field */}
          <form onSubmit={handleSendMessage} className="bg-slate-950 p-3 border-t border-slate-800 flex gap-2 shrink-0">
            <input
              required
              type="text"
              placeholder={sending ? "Dr. Kenneth is typing research..." : "Ask Dr. Kenneth about anode selections..."}
              disabled={sending}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-slate-900 text-white p-2.5 text-xs rounded border border-slate-800 focus:outline-none focus:border-blue-500 font-sans"
            />
            <button
              type="submit"
              disabled={sending || !inputValue.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded flex items-center justify-center transition disabled:opacity-50 cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
