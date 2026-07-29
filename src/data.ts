import { Product, Service, CaseStudy, TeamMember, Milestone, GlossaryTerm, FAQItem, TechnicalArticle } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-tr-local",
    category: "rectifiers",
    name: "Dominion Heavy-Duty Transformer Rectifier (Local)",
    shortDesc: "Robust, oil-cooled or air-cooled manual/automatic transformer rectifiers assembled locally in our ISO-compliant facility.",
    specs: {
      "Input Voltage": "220V - 415V AC, Single or 3-Phase, 50/60 Hz",
      "Output Rating": "10A to 150A continuous, 12V to 100V DC",
      "Weatherproof Class": "IP65 or IP66",
      "Control Mode": "Constant Current, Constant Voltage, or Auto-Potential",
      "Cooling Method": "Natural Air Cooled or Oil Immersed"
    },
    features: [
      "Heavy duty build suited for harsh tropical coastal environments",
      "Stepless adjustment or automatic potential servo controller options",
      "Comprehensive lightning & surge protection on AC input and DC output",
      "Clear analog or optional smart digital LED parameter gauges"
    ],
    applications: [
      "Onshore cross-country steel pipeline networks",
      "Harbor sheet pile walls & wharf structures",
      "Industrial tank farms and processing plants"
    ],
    image: "/Transformer installation.jpeg",
    datasheetAvailable: true
  },
  {
    id: "prod-tr-foreign",
    category: "rectifiers",
    name: "Premium Legacy TR Unit (Foreign Source)",
    shortDesc: "High-tier, digitally integrated foreign import rectifier units sourced from certified international manufacturers.",
    specs: {
      "Input Voltage": "110V - 440V AC, auto-ranging",
      "Output Rating": "Up to 200A, 120V DC",
      "Telemetry Integration": "Modbus, RS485, Web Interface, GSM Cloud Sync",
      "Enclosure Material": "316 Marine Grade Stainless Steel",
      "Efficiency Rating": ">92% at full load"
    },
    features: [
      "Built-in remote GSM telemetry for automated cathodic performance reports",
      "Extremely tight ripple filter (<5% standard, custom options <2%)",
      "Multi-circuit modular outputs for multi-zone tank bottom anodes",
      "Underwriters Laboratories (UL) or CE international certifications"
    ],
    applications: [
      "Critical airport aviation fuel line infrastructure",
      "Deep offshore marine production terminals",
      "Urban municipal water mains and cooling towers"
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  },
  {
    id: "prod-jb-positive",
    category: "junction-boxes",
    name: "Dominion Corrosion Junction Boxes (Positive/Negative)",
    shortDesc: "High integrity distribution junction boxes fitted with variable slide resistors and current shunts.",
    specs: {
      "IP Enclosure Rating": "IP65 IP66 Weatherproof rated",
      "Materials": "Fiberglass Reinforced Polyester (FRP) or 316 Stainless Steel",
      "Shunt Type": "Manganin Shunts (0.01 Ohm or custom)",
      "Resistors": "Corrosion-resistant adjustable slide band power resistors",
      "Terminals": "Tinned copper busbars and double-nut terminals"
    },
    features: [
      "Allows fine current distribution tuning across individual anode groundbeds",
      "Impact resistant, UV-stabilized weatherproof shell",
      "Removable gland plates for ease of cable pulling and termination",
      "Built-in MOV lightning suppressors on critical terminal points"
    ],
    applications: [
      "Splitting DC output current to up to 12 separate anode circuits",
      "Consolidating multiple structure test point cables securely",
      "Pipeline cross-bonding and stray current interference mitigation"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  },
  {
    id: "prod-anode-mag",
    category: "anodes",
    name: "High Potential Magnesium Anodes",
    shortDesc: "Specially alloyed sacrificial anodes providing strong driving voltage for pipelines, storage tanks, and municipal mains.",
    specs: {
      "Driving Voltage": "1.70 to 1.75 Volts (vs Cu/CuSO4 reference)",
      "Open Circuit Value": "-1.77V (vs CSE)",
      "Current Capacity": "1230 Amps-hours per kg",
      "Alloy Composition": "High purity Mg with controlled impurities",
      "Packaging": "Available bare or prepackaged in sulfur/bentonite backfill"
    },
    features: [
      "Extremely reactive - ideal for high resistivity soils and rapid polarization",
      "Packaged in heavy-duty cotton bags with moisture-absorbing backing material",
      "Equipped with standard 3m of #10 AWG TW/THHN copper tail wire",
      "Compliant with international ISO 15589-1 and AMPP guidelines"
    ],
    applications: [
      "Temporary pipeline protection before rectifier commissioning",
      "Well casings, gas distribution networks, and industrial plant pipes",
      "Hot-spot protection along old corroded bare pipe sections"
    ],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  },
  {
    id: "prod-anode-mmo",
    category: "anodes",
    name: "Mixed Metal Oxide (MMO) Titanium Anodes",
    shortDesc: "Incredibly durable, high-efficiency dimensionally stable anodes for impressed current (ICCP) systems.",
    specs: {
      "Anode Coating": "Iridium/Tantalum Oxide (IrO2/Ta2O5) catalytic layers",
      "Substrate Material": "Grade 1 or Grade 2 Titanium ASTM B348",
      "Design Lifespan": "20 to 50 years at continuous rated current density",
      "Maximum Output": "Up to 100 A/m2 in soil, 600 A/m2 in seawater",
      "Configurations": "Canisters, tubular strings, ribbon meshes, or wire probes"
    },
    features: [
      "Negligible wear rate (less than 1 milligram per Ampere-year)",
      "Lightweight construct restricts shipping costs and simplifies underground well layout",
      "Superior electrical performance even inside acidic carbonaceous coke environments",
      "Custom engineered tubular string cables with double heat-shrink seals"
    ],
    applications: [
      "Deep well anode groundbeds for land pipelines (up to 150m depths)",
      "Condenser water boxes and marine cooling seawater intakes",
      "Concrete rebar cathodization in bridge decks and coastal piers"
    ],
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  },
  {
    id: "prod-anode-zinc",
    category: "anodes",
    name: "Zinc Sacrificial Anodes (Mil-Spec-18001K)",
    shortDesc: "Highly reliable sacrificial anodes designed block galvanic corrosion on vessel hulls, harbor piers, marine piles, and saline tanks.",
    specs: {
      "Open Circuit Potential": "-1.10 Volts (vs CSE)",
      "Efficiency Rating": ">= 90% in seawater environment",
      "Current Output": "780 Ampere-hours per kg",
      "Standard Spec": "US Military Specification MIL-A-18001K / ASTM B418 Type I"
    },
    features: [
      "Self-regulating utility - zero risk of overprotecting or paint lifting",
      "Long shelf life without passive scale formation in open marine tides",
      "Available with steel strapping inserts for direct weld-on mounting on piles",
      "High chemical purity ensuring consistent structural consumption rates"
    ],
    applications: [
      "Ship hull bottom structures, rudders, ballast tanks, and thrusters",
      "Undersea flowline pipelines passing through low-resistivity saline clay",
      "Internal lining protection of crude water separation vessels"
    ],
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  },
  {
    id: "prod-cable-cp",
    category: "cables",
    name: "PVDF/Halar Cathodic Protection Cables",
    shortDesc: "Chemically inert dual-jacketed copper cables specifically resistant to chlorine and acidic underground products.",
    specs: {
      "Conductor Size": "2.5 mm² to 120 mm² stranded copper",
      "Inner Insulation": "PVDF (Polyvinylidene Fluoride) 100% thick barrier",
      "Outer Jacket": "HMA (High Molecular Weight Polyethylene)",
      "Voltage Rating": "600V / 1000V DC Rating",
      "Chemical Resistance": "Hydrocarbons, Chlorine gas, Hydrogen Sulfide, strong acids"
    },
    features: [
      "Dual casing guards conductor wire against corrosive deepwell chemical gases",
      "Superior mechanical toughness - resists ground settling strains",
      "Standard safety black finish with distinct custom identity tracking stripes",
      "High dielectric strength ensuring absolute insulating integrity"
    ],
    applications: [
      "Deepwell MMO anode feeder tails inside carbonaceous backfill cells",
      "Negative return cable links to pipelines and storage tanks",
      "Inter-terminal signal lines for remote sensor tracking modules"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  },
  {
    id: "prod-gasket-ip",
    category: "gaskets",
    name: "Monolithic Insulating Gasket Kits",
    shortDesc: "High dielectric strength gasket kits designed to electrically isolate and prevent galvanic corrosion in piping systems.",
    specs: {
      "Material Base": "GRE (Glass Reinforced Epoxy) G10/G11 bonded to 316SS core",
      "Pressure Ratings": "ANSI Class 150 to Class 2500, API 2K-10K",
      "Dielectric Strength": ">= 20 KV/mm breakdown voltage",
      "Seal Core": "Dual spring-energized PTFE or Viton seals"
    },
    features: [
      "Inert structure isolates distinct pipeline sectors protecting rectifier circuits",
      "Prevents hazardous stray electro-potential transitions to safe terminal points",
      "High mechanical load ceiling eliminates flange crushing errors",
      "Supplied in a complete pack with isolator sleeves, washers, and steel backing rings"
    ],
    applications: [
      "Isolating onshore pipelines from refinery refinery processing manifolds",
      "Separating offshore platforms from submerged submarine pipeline risers",
      "Dissimilar metal flange joints (e.g., carbon steel to stainless steel)"
    ],
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600",
    datasheetAvailable: true
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-eng-design",
    title: "Engineering & Design",
    iconName: "DraftingCompass",
    shortDesc: "Custom cathodic protection system designs (ICCP & Sacrificial) engineered by AMPP/NACE certified subject experts.",
    fullDesc: "Dominion Technical Limited provides comprehensive cathodic protection designs that comply strictly with BS EN, ISO, and NACE/AMPP standard recommendations. We perform extensive baseline analyses to custom engineer the absolute most efficient layout.",
    deliverables: [
      "Soil resistivity contour surveying & site groundbed evaluations",
      "Detailed material specifications, calculations, and bills of materials (BOM)",
      "Cathodic protection design blueprints, wiring maps, and schematic drawings",
      "Stray current interference mitigation and computer-modeled performance simulations"
    ],
    industries: [
      "Oil & Gas Pipeline Operators",
      "Offshore Platform & Jetty Owners",
      "Municipal Water Infrastructure Boards",
      "Chemical Refinery Processing Plants"
    ],
    image: "/reading.jpeg"
  },
  {
    id: "serv-install-commission",
    title: "Installation & Commissioning",
    iconName: "Hammer",
    shortDesc: "Execution of anode groundbed drilling, rectifier mounting, carbonaceous backfilling, and structured electrical hookups.",
    fullDesc: "We provide end-to-end installation logistics. From high-depth deepwell drilling (up to 150m) to trenching, backfilling with calcined petroleum coke, mounting heavy-duty weatherproof rectifiers, terminating dual-insulated PVDF cables, and conducting initial hot-activation system turn-on.",
    deliverables: [
      "Deepwell or shallow trench anode groundbed drilling and custom casing setups",
      "Transformer Rectifier mounting, AC supply integration, and junction box cabling",
      "Thermite weld attachment of test leads to structures with high integrity epoxy coating seals",
      "System baseline potential testing and step-by-step startup polarization tests"
    ],
    industries: [
      "Cross-country Pipeline Developers",
      "Seaport Harbor Authorities",
      "Tank Farm Contractors",
      "Energy & Power Plant Erectors"
    ],
    image: "/work2.jpeg"
  },
  {
    id: "serv-maint-monitor",
    title: "Maintenance & Monitoring",
    iconName: "Activity",
    shortDesc: "Annual surveys, CIS (Close Interval Survey), DCVG diagnostics, and remote monitoring data telemetry management.",
    fullDesc: "Ensure your valuable steel structures remain protected year-round. Our NACE-qualified field teams conduct precise surveys including Close Interval Surveys (CIS), Direct Current Voltage Gradient (DCVG) for pipe coating defect pinpointing, soil resistivity audits, rectifier tuning, and remote GSM/cloud logging setup.",
    deliverables: [
      "Close Interval Survey (CIS) potential profiling with high precision GPS alignment",
      "Direct Current Voltage Gradient (DCVG) holidays detection tracking coating degradation",
      "Monthly/Quarterly Transformer Rectifier diagnostic calibrations and functional audits",
      "Automated GSM remote telemetry installations and corrosion performance dashboards"
    ],
    industries: [
      "Subsea Pipeline Operators",
      "National Gas Distribution Boards",
      "Industrial Plant Facilities Directors",
      "Offshore Rig Operators"
    ],
    image: "/work1.jpeg"
  },
  {
    id: "serv-repair-rehab",
    title: "Repair & Rehabilitation Services",
    iconName: "ShieldAlert",
    shortDesc: "Rectifier upgrades, deepwell retrofitting, depletion replacements, and aging coating repairs.",
    fullDesc: "CP systems degrade over 20-30 years. When anodes deplete or cables tear, Dominion Technical delivers rapid retrofits. We design and install high-density MMO replacements, repair and modernize depleted rectifiers with state-of-the-art automatic digital servos, and integrate wrap coatings to return protection to 100%.",
    deliverables: [
      "Detailed root-cause analysis of failing cathodic systems",
      "Retrofitting depleted sacrificial anode systems on harbor wharf structures",
      "Replacing dead carbonaceous deepwell streams with modern MMO canister setups",
      "Re-insulating flanges and repairing structure bypass routes"
    ],
    industries: [
      "Refineries & Storage Depots",
      "Offshore Jetty Owners",
      "Gas Storage Facility Managers",
      "Undersea Line Operators"
    ],
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-pipeline-45km",
    clientName: "Midstream Gas Pipeline Operator",
    industry: "Oil & Gas",
    challenge: "A vital 45km 24-inch gas transmission pipeline was showing severe active corrosion holidays. Existing sacrificial magnesium anodes had entirely depleted, leading to potential values dropping below the safety limit of -850mV. The operator faced imminent regulatory shutdown risks or catastrophic failure.",
    solution: "Dominion Technical Limited engineered and installed a comprehensive Impressed Current Cathodic Protection (ICCP) system. We drilled four 120-meter deepwell anode groundbeds containing MMO tubular anode strings, installed three 80A/48V oil-cooled locally assembled automatic potential rectifiers, and integrated 15 active monitoring test station points.",
    results: "Re-polarized the entire 45km pipeline within 48 hours to a stable, safe potential of -1050mV CSE. Coating defect spots were tracked via DCVG and addressed. The asset's operational life was extended by an estimated 35 years.",
    assetLifeExtension: "35 Years",
    efficiencyMTR: "98.5% Polarization Up-time",
    image: "/work1.jpeg"
  },
  {
    id: "case-storage-tanks",
    clientName: "National Bulk Fuel Storage Depot",
    industry: "Industrial",
    challenge: "Twelve massive above-ground hydrocarbon storage tank bottoms (each 45m diameter) were experiencing aggressive undersoil galvanic corrosion. High local water table soil conductivity accelerated tank floor pitting, prompting thickness alarms during ultrasound audits.",
    solution: "We designed a custom ICCP sand-bed system. Prior to tank plate renewals, we installed MMO ribbon anode grids configured in concentric rings directly beneath the tank floor, wired through custom IP66 positive junction boxes to oil-cooled automated transformer rectifiers with reference cell feedback loops.",
    results: "Provided absolute, uniform current distribution across all bottom plates. Standardized the potential field to a safe -950mV vs copper/copper-sulfate reference cells, eliminating sand-bed hot-spot currents.",
    assetLifeExtension: "40+ Years Protected",
    efficiencyMTR: "100% Rust Halt Rate",
    image: "/work2.jpeg"
  },
  {
    id: "case-marine-jetty",
    clientName: "Deepsea Liquid Cargo Terminal",
    industry: "Marine",
    challenge: "High-saline tidal flow combined with mechanical wave scraping was wearing away the structural steel foundation piles of a critical marine jetty, exposing the terminal structure to heavy structural failure risks.",
    solution: "Dominion Technical mounted high-grade, weld-on Mil-Spec Zinc sacrificial anodes directly to the underwater pile spans. In the tidal splash zone, we utilized long-life MMO mesh anodes wrapped in fiberglass protective jackets to shield vulnerable high-oxygen steel interfaces.",
    results: "Jetty pile oxidation halted entirely. High precision silver/silver-chloride reference surveys confirmed absolute polarization compliance of all underwater steel piles. Annual metal loss rate dropped to zero.",
    assetLifeExtension: "25 Years Extension",
    efficiencyMTR: "0.0 mm/year metal loss",
    image: "/reading.jpeg"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Kenneth Egbu",
    role: "Managing Director / Principal CP Specialist",
    qualifications: ["PhD Electrochemistry", "AMPP Fellow", "NACE Level 4 CP Specialist #34510", "25+ Years Experience"],
    bio: "Dr. Egbu is an internationally recognized authority in maritime & terrestrial corrosion science. He has authored over 15 papers on deepwell MMO groundbed optimization and leads Dominion's primary design engineering operations.",
    image: "/Founder.jpg"
  },
  {
    name: "Engr. Dave Osei",
    role: "Technical Director / Lead ICCP Engineer",
    qualifications: ["M.Sc. Pipeline Integrity", "NACE Level 4 CP Specialist", "COREN Certified Engineer", "18+ Years Experience"],
    bio: "Engr. Osei oversees all major field installations. He specializes in designing intelligent automated potential-controlled Transformer Rectifiers and has managed cathodic installations for thousands of kilometers of gas pipelines.",
    image: "/CTO.jpg"
  },
  {
    name: "Engr. Clara Briggs",
    role: "Senior Field Integrity Engineer",
    qualifications: ["B.Eng. Materials Science", "AMPP Level 3 CP Commissioning Professional", "10+ Years Experience"],
    bio: "Engr. Briggs directs the technical survey operations, specializing in GPS-synchronized Close Interval Surveys (CIS), Direct Current Voltage Gradient (DCVG), and soil resistivity profile modeling using advanced diagnostic software.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2006",
    title: "Company Founded",
    description: "D&E Dominion Technical Limited was established as specialized corrosion consulting firm focused on serving the marine sector in Port Harcourt, Nigeria."
  },
  {
    year: "2010",
    title: "ISO Certification & Facility Launch",
    description: "Expanded into custom product assembly. Our local manufacturing facility launched, achieving ISO 9001:2008 and localizing the manufacturing of specialized multi-zone junction boxes and Transformer Rectifiers."
  },
  {
    year: "2016",
    title: "Major Cross-Country Milestones",
    description: "Successfully commissioned our 100th land-based deepwell pipeline ICCP system, extending the company’s servicing coverage across all oil and gas hubs in the sub-region."
  },
  {
    year: "2021",
    title: "Smart Telemetry Integration",
    description: "Pioneered remote GSM/IoT connected Transformer Rectifiers, giving major operators instant, live digital insights into structure potential statuses."
  },
  {
    year: "2026",
    title: "Protecting Today, Preserving Tomorrow",
    description: "Entering 20 years of active operational excellence, maintaining over 15,000 km of vital pipeline infrastructure and half-a-million tons of steel tank storage bottoms."
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "Cathodic Protection (CP)",
    definition: "An electrochemical corrosion prevention technique where a metal surface is made the cathode of an electrochemical cell, suppressing anodic oxidation reactions.",
    category: "Electrochemistry"
  },
  {
    term: "Impressed Current Cathodic Protection (ICCP)",
    definition: "A CP system that utilizes a continuous, external direct current (DC) power source (typically a Transformer Rectifier) to drive current through persistent MMO or graphite anodes onto the target steel structure.",
    category: "Equipment"
  },
  {
    term: "Sacrificial Anode (Galvanic)",
    definition: "A highly active metal anode (usually magnesium, zinc, or aluminum) electrically bonded to a structure. It naturally discharges electrical potential onto the structure, corroding preferentially (sacrifically) to protect it.",
    category: "Electrochemistry"
  },
  {
    term: "Transformer Rectifier (TR)",
    definition: "The power engine of an ICCP system. It steps down local alternating current (AC) high voltage and converts (rectifies) it into low-ripple, controllable direct current (DC).",
    category: "Equipment"
  },
  {
    term: "Close Interval Potential Survey (CIS)",
    definition: "A diagnostic testing method for buried pipeline networks where potential readings vs a reference CSE cell are logged at compact, continuous intervals (usually 1 to 2 meters) using synced GPS dataloggers.",
    category: "Operations"
  },
  {
    term: "Direct Current Voltage Gradient (DCVG)",
    definition: "A sensitive field-survey diagnostic technique that utilizes ground potential voltage gradients to locate pipeline coating holidays (defects) and measure cathodic current direction.",
    category: "Operations"
  },
  {
    term: "Reference Electrode (Half-Cell)",
    definition: "An electrochemical electrode with a stable, highly reproducible potential. The standard standard for pipeline is Copper/Copper-Sulfate (CSE); for seawater, Silver/Silver-Chloride (Ag/AgCl) is preferred.",
    category: "Equipment"
  },
  {
    term: "Hydrogen Embrittlement",
    definition: "A dangerous condition where excessive negative potential causes atomic hydrogen absorption into steel structure lattices, inducing structural brittle fractures. Prevented by tight automatic TR voltage controls.",
    category: "Electrochemistry"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the difference between Sacrificial Anodes and ICCP?",
    answer: "Sacrificial systems utilize the natural electrochemical voltage of active metals (Mg, Zn, Al) to protect a structure. They are self-powered, maintenance-limiting, and simple, but fail to cover very large structures or high-resistivity soils. Impressed Current (ICCP) systems utilize external AC power rectified to DC to force protective current from highly durable MMO anodes. ICCP covers large structures of any size and can be regulated, but requires an AC supply and annual monitoring.",
    category: "General"
  },
  {
    question: "Why does Dominion emphasize locally assembled Transformer Rectifiers?",
    answer: "Our tropical coastal climate exhibits high humidity and heavy salinity, which rapidly destroys standard imported enclosures. Our locally built TR units feature reinforced IP65 air or oil-cooled chambers, locally rewound low-temperature rise copper transformers, and industrial-grade lightning surge protectives suited specifically for severe regional conditions. This eliminates supply delays and extends equipment lifespans.",
    category: "Installation"
  },
  {
    question: "What potentials verify that a steel pipeline is fully protected against rusting?",
    answer: "According to AMPP and ISO 15589-1 criteria, a steel pipeline is considered fully polarized when we record a potential of at least -850 millivolts (mV) versus a Copper/Copper-Sulfate Reference Electrode (CSE) under an 'instant-off' state. In highly aggressive anaerobic soils fitted with sulfate-reducing bacteria (SRB), a higher safety polarization potential of -950mV CSE is mandated.",
    category: "Maintenance"
  },
  {
    question: "How long do MMO anodes typically last in deepwell structures?",
    answer: "Mixed Metal Oxide (MMO) titanium tubular or wire probes are highly durable. Because the electro-catalytic reaction occurs on the specialized surface oxide coating without wearing the substrate structure, current discharges wear the anode down sluggishly. In carbonaceous coke backfills, MMO anodes are conservatively designed to deliver continuous rated outputs for 30 to 50 years.",
    category: "General"
  },
  {
    question: "When should our industrial firm run a DCVG survey?",
    answer: "A DCVG (Direct Current Voltage Gradient) survey is premium for older networks or newly commissioned backfilled pipelines. If your monthly monitoring notes increased current demand to sustain minimum safe pipeline potentials, it points to coating decay or 'holidays'. Running a DCVG lets our field crews pinpoint holidays down to a few centimeters, allowing targeted wrap repairs instead of expensive wide trench excavations.",
    category: "Maintenance"
  }
];

export const TECHNICAL_ARTICLES: TechnicalArticle[] = [
  {
    id: "art-001",
    title: "Understanding Cathodic Protection: A Field Engineer's Guide",
    summary: "A practical guide outlining thermodynamics, electrochemical calculations, and key reference criteria for preserving buried assets.",
    date: "May 10, 2026",
    readTime: "7 min read",
    author: "Dr. Kenneth Egbu",
    content: `### Introduction to Corrosion Physics

Corrosion of steel under soil or seawater is primarily an electrochemical oxidation reaction. Iron molecules release valence electrons to the oxygen and moisture around them, yielding iron hydroxide—commonly known as rust:

$$Fe \\rightarrow Fe^{2+} + 2e^-$$

To stop this natural degradation cycle, Cathodic Protection (CP) forces a protective direct electrical current (DC) onto the steel structure. This shift changes the potential of the metal, altering the thermodynamical state of the metal so it behaves purely as a **Cathode** (accepting current), which entirely prevents iron atoms from shedding electrons.

### The Two Methods of Cathodic Current Delivery

1. **Sacrificial Anode Cathodic Protection (SACP)**
   Uses highly active galvanic metals such as Magnesium (Mg), Zinc (Zn), or Aluminum (Al). These metals naturally possess higher negative electro-potentials than iron. When physically bonded to steel, current discharges from the sacrificial material, causing it to preferentially corrode to dust while keeping the steel intact.
   
2. **Impressed Current Cathodic Protection (ICCP)**
   Ideal for modern cross-country steel pipeline networks or deep oil well casings. We connect the steel structure to the negative pole of an external DC power source (Transformer Rectifier). The positive side links to highly stable titanium anodes (MMO) buried in a local carbon coke backbed. This pushes high, regulated current onto the steel.

### Crucial Survey Criteria

To confirm absolute immunity from rust, field engineers evaluate the structure-to-soil potential against known international standards (ISO 15589-1 and AMPP SP0169):

* **-850mV 'Instant-Off' Potential**: The structure potential measured key milliseconds after interrupting all DC current supplies. This eliminates soil IR voltage drops from calculation.
* **100 millivolt Polarization Decay**: If anodic interference or high temperature blocks a full -850mV polarization, confirming a 100mV decay curve from the instant-off value is acceptable.
* **Overprotection Safety Limit**: Never allow potentials to fall more negative than **-1150mV CSE**. Going lower induces excessive hydrogen evolution, causing paint bubble lift-offs and dangerous hydrogen embrittlement in high-strength alloys.

At D&E Dominion Technical Limited, our engineers verify on-site conditions using GPS-synced data recorders to maintain absolute compliance. Remember: *\"Your Protection, OUR COMMITMENT.\"*`
  },
  {
    id: "art-002",
    title: "Sacrificial vs. Impressed Current: Choosing the Right Protection Matrix",
    summary: "Evaluating soil resistivity, power availability, installation costs, and long-term lifespan projections to choose the optimized corrosion control topology.",
    date: "April 18, 2026",
    readTime: "9 min read",
    author: "Engr. Dave Osei",
    content: `### Selecting the Ideal Corrosion Control System

Choosing between a Sacrificial/Galvanic system (SACP) and an Impressed Current Cathodic Protection (ICCP) system is a critical engineering decision. The selection dictates long-term construction budgets, field maintenance overhead, and asset lifetime security. 

Here is the design matrix our corrosion teams utilize to guide asset managers in Nigeria and West Africa:

### 1. Soil Resistivity Parameters
The soil's electrical抵抗 defines how easily protective currents migrate through the ground to reach a buried pipeline:

* **SACP (Sacrificial Anodes)**: Generally limited to **low resistivity soils** (under 3,000 Ohm-cm). Since sacrificial anodes rely solely on their natural chemical driving voltage, high-resistance dry or rocky clays choke current discharge.
* **ICCP (Impressed Current)**: Fits **any soil resistivity** (tested up to 50,000 Ohm-cm or more). The external Transformer Rectifier can apply up to 100V DC driving potential, effectively pushing current through high-resistance dry sandy soil layers.

### 2. Output Current Demands
* **Small structures** (short tanks, oil well casings, or insulated manifolds) require minimal current (usually < 2 Amperes). Here, a simple Magnesium or Aluminum sacrificial anode pack is highly cost-effective.
* **Massive structures** (40km oil pipelines, industrial plant bottom arrays, or cargo jetties) have high bare surface profiles demanding up to 100 Amperage of protective flow. ICCP is mandatory to handle these high volumes.

### 3. Power Infrastructure and Accessibility
* **SACP**: Requires **zero AC grid connection**. Perfect for isolated bush pipelines, subsea flowlines, and unmanned terminal sites.
* **ICCP**: Requires **continuous AC power** (or reliable solar arrays/thermoelectric generators). Necessary near populated stations, plant sites, or easily accessible utility grids.

| Feature Matrix | Sacrificial Anodes (SACP) | Impressed Current (ICCP) |
| :--- | :--- | :--- |
| **Power Engine** | None (Electrochemically Powered) | Transformer Rectifier (AC to DC) |
| **Lifespan** | 5 to 15 years (Requires frequent replaced digs) | 30 to 50 years (Highly durable MMO anodes) |
| **Initial Cost** | Low | Moderate to High |
| **Yearly Auditing** | Minimal visual spot checks | Monthly telemetry / Annual CIS sweeps |
| **Risk of Stray Current** | Zero | High (Requires Bond Engineering) |

By assessing these boundaries, Dominion Technical Limited ensures robust design matching that safeguards your assets for decades. Speak with our team today to analyze your site soil data!`
  },
  {
    id: "art-003",
    title: "Common Cathodic Protection Failures and Predictive Prevention",
    summary: "Analyzing field audits of anode passivation, electrical masking, and rectifier lightning failures, with remediation guidelines.",
    date: "March 12, 2026",
    readTime: "8 min read",
    author: "Engr. Clara Briggs",
    content: `### Identifying and Resolving CP Failure Modes

During regular close-interval structure surveys, pipeline operators occasionally uncover zones where protective potentials drop to unsafe atmospheric rusting levels. 

Understanding why these system failures crop up is the first step toward safeguarding critical infrastructure. Here are the three most common field failure modes our integrity surveyors encounter:

### 1. Electrical Isolation Failure (Short Circuits)
Buried pipes must remain electrically isolated from surrounding grounded plant equipment, rebar foundations, or lightning grounding grids. 
If a monolithic insulating gasket kit fails, protective currents leak onto massive structural steel complexes, draining the Transformer Rectifier.

* **Symptom**: Current outputs spike on the TR gauges, but pipeline potential tests fall close to zero.
* **Dominion Prevention**: Annual flange testing via isolation radio detectors and mounting surge protection diverters across isolating kits.

### 2. Sacrificial Anode Passivation
In highly calcareous marine environments or alkaline soil basins, zinc or magnesium anodes occasionally form a hard, non-conductive limestone layer over their active faces. This scale cuts off the electrolytic pathway, passivating the metal anode.

* **Symptom**: Sacrificial current drops to zero despite structure potential remaining highly unpolarized.
* **Dominion Prevention**: Specifying prepackaged backfill compounds (calcined petroleum coke mixed with plaster gypsum) to maintain a moist, highly active surface around the anode shell.

### 3. Rectifier Lightning & Electric Surge Failures
Tropical regions experience aggressive summer thunderstorms. Because CP wires span several miles underground, they act as massive collectors for high-voltage lightning induction pulses. If the TR unit lacks adequate defense systems, power diodes melt instantly.

* **Symptom**: Dead, blank TR control screens or blown circuit fuses after storm events.
* **Dominion Prevention**: Integrating high-capacity Metal Oxide Varistor (MOV) lightning arrestors on both the incoming AC side and the outgoing DC lines, alongside earth rods.

Ensuring regular field diagnostics is the best preservation strategy. Contact Dominion Technical Limited for a comprehensive "CIS / DCVG" survey to predict and eliminate these issues.`
  }
];
