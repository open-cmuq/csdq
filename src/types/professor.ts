// src/types/professor.ts

import { Project } from "./project";

export interface ContactInfo {
  email: string;
  website: string;
  googleScholar: string;
  phone: string;
  office: string;
}

export interface ProfessorProfile {
  name: string;
  id: string;
  pic: string;
  researchDesc: string;
  researchBrief: string;
  keywords: string[];
  contact: ContactInfo;
  currentProjects: Project[];
  pastProjects: Project[];
}
