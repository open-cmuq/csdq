import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getProfessor } from "../professors";

import { ProfessorProfile } from "../types";
import ProfessorImage from "../components/ProfessorImage";
import ProjectCard from "../components/ProjectCard";

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
      <div className="flex items-center justify-center md:items-start ">
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
                ? "bg-skibo-red text-white border-skibo-red"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } hover:bg-scots-rose hover:text-white transition`}
          >
            Current
          </button>

          <button
            onClick={() => {
              handleTabSwitch(Tab.Past);
            }}
            className={`m-2 p-2 font-bold border rounded-t-md ${
              tab === Tab.Past
                ? "bg-skibo-red text-white border-skibo-red"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } hover:bg-scots-rose hover:text-white transition`}
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
