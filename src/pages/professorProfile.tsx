import React from "react";
import { getProfessor } from "../professors";
import { useLoaderData } from "react-router-dom";

interface ProfessorProfile {
  name: string;
  pic: string;
  researchDesc: string;
}

interface ProfessorProfileProp {
  professor: ProfessorProfile;
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

export function ProfessorProfile() {
  const data: ProfileLoaderData | null =
    useLoaderData() as ProfileLoaderData | null;

  if (!data) {
    // error handling
    throw new Response("Not Found", { status: 404 });
  }

  const { professor } = data;

  return (
    <div className="p-8">
      <h1>{professor.name}</h1>
      <img
        src={professor.pic}
        alt={professor.name}
        style={{ width: "150px", height: "200px" }}
      />
      <p>{professor.researchDesc}</p>
    </div>
  );
}
