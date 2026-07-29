export interface Product {
  id: string;
  category: "rectifiers" | "junction-boxes" | "anodes" | "cables" | "gaskets" | "accessories";
  name: string;
  shortDesc: string;
  specs: Record<string, string>;
  features: string[];
  applications: string[];
  image: string;
  datasheetAvailable: boolean;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  industries: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: "Oil & Gas" | "Marine" | "Offshore" | "Industrial";
  challenge: string;
  solution: string;
  results: string;
  assetLifeExtension: string;
  efficiencyMTR: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: "Electrochemistry" | "Equipment" | "Operations";
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Installation" | "Maintenance";
}

export interface TechnicalArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}
