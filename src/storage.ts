import { Service, CaseStudy } from "./types";
import { SERVICES, CASE_STUDIES } from "./data";

export interface RFQLead {
  id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  projectType: string;
  estimatedSize: string;
  timeline: string;
  budgetRange: string;
  description: string;
  selectedProducts: string[];
  status: "Pending" | "Under Review" | "Quote Sent" | "Closed";
  createdAt: string;
}

export interface ContactLead {
  id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  message: string;
  preferredMethod: "Email" | "Phone";
  status: "Pending" | "Under Review" | "Quote Sent" | "Closed";
  createdAt: string;
}

const STORAGE_KEYS = {
  RFQS: "dominion_rfqs_db",
  CONTACTS: "dominion_contacts_db",
  SERVICES: "dominion_services_db",
  PROJECTS: "dominion_projects_db",
  PASSCODE: "dominion_passcode_db",
};

// Seed initial RFQs to make the CRM look complete and authentic
const DEFAULT_RFQS: RFQLead[] = [
  {
    id: "RFQ-2026-A91B",
    fullName: "Chief Engr. Williams Alabi",
    companyName: "Niger Delta Marine Corp",
    email: "williams@deltamarine.com",
    phone: "08031122334",
    projectType: "New Installation",
    estimatedSize: "5 offshore pile structures & 1 harbor jetty",
    timeline: "3 Months",
    budgetRange: "$50k - $100k",
    description: "Requires complete splash zone MMO mesh installation and weld-on Mil-Spec Zinc anodes for structural foundation pilings.",
    selectedProducts: ["Mixed Metal Oxide (MMO) Titanium Anodes", "Zinc Sacrificial Anodes (Mil-Spec-18001K)"],
    status: "Under Review",
    createdAt: "2026-06-01T10:14:00Z"
  },
  {
    id: "RFQ-2026-C85F",
    fullName: "Engr. Clara Briggs",
    companyName: "Atlantic Refinery Corp",
    email: "c.briggs@atlantic.com",
    phone: "08064446220",
    projectType: "System Audit / Survey",
    estimatedSize: "45km 24-inch transmission line",
    timeline: "Immediate",
    budgetRange: "$25k - $50k",
    description: "Conduct high resolution Close Interval Potential Survey (CIS) and Direct Current Voltage Gradient (DCVG) check on active gas trunk line.",
    selectedProducts: ["Cathodic Protection Specialty Cables", "Monolithic Insulating Gasket Kits"],
    status: "Pending",
    createdAt: "2026-06-03T15:30:00Z"
  }
];

// Seed initial Contacts
const DEFAULT_CONTACTS: ContactLead[] = [
  {
    id: "CON-2026-X112",
    fullName: "Dr. Kenneth Egbu",
    companyName: "Federal Ministry of Water Infrastructure",
    email: "kenneth.egbu@gov.ng",
    phone: "08061112223",
    serviceInterest: "Engineering & Design",
    message: "Seeking complete engineering design proposal and bill of materials (BOM) for soil resistivity profiling along the newly planned cross-state potable water pipeline layout.",
    preferredMethod: "Email",
    status: "Pending",
    createdAt: "2026-06-04T09:41:00Z"
  },
  {
    id: "CON-2026-M405",
    fullName: "Engr. Dave Osei",
    companyName: "Petroleum Depot Terminal (West Tech)",
    email: "d.osei@westdepot.org",
    phone: "09023918123",
    serviceInterest: "Maintenance & Monitoring",
    message: "Requested monthly automated diagnostic auditing calibration on twelve oil-cooled Transformer Rectifier groundbeds. Please respond on standard pricing models.",
    preferredMethod: "Phone",
    status: "Quote Sent",
    createdAt: "2026-06-05T12:00:00Z"
  }
];

export function initLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.RFQS)) {
    localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(DEFAULT_RFQS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CONTACTS)) {
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(DEFAULT_CONTACTS));
  }
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(SERVICES));
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(CASE_STUDIES));
}

// Ensure database is initialized
initLocalStorage();

export const StorageService = {
  // Passcode Auth Simulation
  verifyPasscode(passcode: string): boolean {
    // Standard secure passcode
    const defaultPasscode = "Dominion2026Admin";
    return passcode === defaultPasscode;
  },

  // RFQ Leads
  getRFQs(): RFQLead[] {
    const data = localStorage.getItem(STORAGE_KEYS.RFQS);
    return data ? JSON.parse(data) : [];
  },

  addRFQ(rfq: Omit<RFQLead, "id" | "status" | "createdAt">): RFQLead {
    const list = this.getRFQs();
    const idSuffix = Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase();
    const newLead: RFQLead = {
      ...rfq,
      id: `RFQ-2026-${idSuffix}`,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    list.unshift(newLead);
    localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(list));
    return newLead;
  },

  // Contact Leads
  getContacts(): ContactLead[] {
    const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    return data ? JSON.parse(data) : [];
  },

  addContact(contact: Omit<ContactLead, "id" | "status" | "createdAt">): ContactLead {
    const list = this.getContacts();
    const idSuffix = Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase();
    const newLead: ContactLead = {
      ...contact,
      id: `CON-2026-${idSuffix}`,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    list.unshift(newLead);
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(list));
    return newLead;
  },

  // Update Status of Lead (RFQ or Contact)
  updateLeadStatus(id: string, status: "Pending" | "Under Review" | "Quote Sent" | "Closed"): boolean {
    // Check RFQs first
    const rfqs = this.getRFQs();
    const rfqIdx = rfqs.findIndex(r => r.id === id);
    if (rfqIdx !== -1) {
      rfqs[rfqIdx].status = status;
      localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(rfqs));
      return true;
    }

    // Check Contacts
    const contacts = this.getContacts();
    const contactIdx = contacts.findIndex(c => c.id === id);
    if (contactIdx !== -1) {
      contacts[contactIdx].status = status;
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
      return true;
    }

    return false;
  },

  // Services
  getServices(): Service[] {
    const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return data ? JSON.parse(data) : SERVICES;
  },

  saveService(service: Service): Service {
    const list = this.getServices();
    const idx = list.findIndex(s => s.id === service.id);
    if (idx !== -1) {
      list[idx] = service;
    } else {
      list.push(service);
    }
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(list));
    return service;
  },

  deleteService(id: string): boolean {
    const list = this.getServices();
    const filtered = list.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(filtered));
    return list.length !== filtered.length;
  },

  // Projects / Case Studies
  getProjects(): CaseStudy[] {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return data ? JSON.parse(data) : CASE_STUDIES;
  },

  saveProject(project: CaseStudy): CaseStudy {
    const list = this.getProjects();
    const idx = list.findIndex(p => p.id === project.id);
    if (idx !== -1) {
      list[idx] = project;
    } else {
      list.push(project);
    }
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(list));
    return project;
  },

  deleteProject(id: string): boolean {
    const list = this.getProjects();
    const filtered = list.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(filtered));
    return list.length !== filtered.length;
  },
};
