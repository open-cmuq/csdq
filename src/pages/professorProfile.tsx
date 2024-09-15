import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getProfessor } from "../professors";

interface ProfessorProfile {
  name: string;
  id: string;
  pic: string;
  researchDesc: string;
  contact: {
    email: string;
    website: string;
    googleScholar: string;
    phone: string;
    office: string;
  };
  currentProjects: Project[];
  pastProjects: Project[];
}

interface Project {
  title: string;
  type: string;
  status: string;
  description: string;
  applyBy?: string;
}

interface ProfileLoaderData {
  professor: ProfessorProfile;
}

export async function loader({
  params,
}: any): Promise<ProfileLoaderData | null> {
  const professor: ProfessorProfile | null = await getProfessor(
    params.professorId
  );
  if (professor === null) {
    return null;
  }
  return { professor };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="font-semibold">{project.title}</h2>
      <p>Type: {project.type}</p>
      <p>Status: {project.status}</p>
      <p>{project.description}</p>
      {project.applyBy && <p>Apply By: {project.applyBy}</p>}
    </div>
  );
};

interface ProfessorImageProps {
  professor: ProfessorProfile;
}
const ProfessorImage: React.FC<ProfessorImageProps> = ({ professor }) => {
  return (
    <>
      <img
        src={professor.pic}
        alt={professor.name}
        className="w-40 h-52 rounded mb-4"
      />
      <div className="text-left space-y-2">
        <p>
          Email:{" "}
          <a
            href={`mailto:${professor.contact.email}`}
            className="text-blue-500"
          >
            {professor.contact.email}
          </a>
        </p>
        <p>
          <a href={professor.contact.website} className="text-blue-500">
            Professional Website
          </a>
        </p>
        <p>
          <a href={professor.contact.googleScholar} className="text-blue-500">
            Google Scholar
          </a>
        </p>
        <p>Phone: {professor.contact.phone}</p>
        <p>Office: {professor.contact.office}</p>
      </div>
    </>
  );
};

enum Tab {
  Current = 1,
  Past,
}

export function ProfessorProfilePage() {
  const data: ProfileLoaderData | null =
    useLoaderData() as ProfileLoaderData | null;

  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }

  const { professor } = data;
  const [tab, setTab] = useState<Tab>(Tab.Current);
  const [isExiting, setIsExiting] = useState(false);

  const handleTabSwitch = (newTab: Tab) => {
    if (tab !== newTab) {
      setIsExiting(true);
      setTimeout(() => {
        setTab(newTab);
        setIsExiting(false);
      }, 200);
    }
  };
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center md:items-start">
        <ProfessorImage professor={professor} />
      </div>

      {/* Middle Section: Description */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-2">{professor.name}</h1>
        <p className="mb-4">{professor.researchDesc}</p>

        <div>
          <button
            onClick={() => {
              handleTabSwitch(Tab.Current);
            }}
            className={`m-2 p-2 font-bold border rounded-t-md ${
              tab === Tab.Current
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } hover:bg-indigo-400 hover:text-white transition`}
          >
            Current
          </button>

          <button
            onClick={() => {
              handleTabSwitch(Tab.Past);
            }}
            className={`m-2 p-2 font-bold border rounded-t-md ${
              tab === Tab.Past
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } hover:bg-indigo-400 hover:text-white transition`}
          >
            Past
          </button>
        </div>

        {/* Current Projects */}
        <div
          className={`${tab === Tab.Current ? (isExiting ? "animate-fadeOut" : "animate-fadeIn") : "hidden"}`}
        >
          {professor.currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Past Projects */}
        <div
          className={`${tab === Tab.Past ? (isExiting ? "animate-fadeOut" : "animate-fadeIn") : "hidden"}`}
        >
          {professor.pastProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfessorProfilePage;
