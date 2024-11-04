// src/types/project.ts

export interface Project {
  title: string;
  type: string;
  status: string;
  description: string;
  applyBy?: string;
  students?: string[]; // New Field
  link?: string; // New Field
}
