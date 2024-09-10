import React from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/research.css";
import { getProfessors } from "../professors";
import { Link } from "react-router-dom";

interface ProfessorProfile {
  name: string;
  id: string;
  pic: string;
  researchDesc: string;
}

interface ProfessorCardProps {
  professor: ProfessorProfile;
}

interface LoaderData {
  professors: ProfessorProfile[];
}

export async function loader(): Promise<LoaderData> {
  const professors = await getProfessors();
  return { professors };
}

const ProfessorCard: React.FC<ProfessorCardProps> = ({ professor }) => {
  return (
    <Link to={`${professor.id}`}>
      <div
        className="flex border-black border-2 p-8 m-4 max-w-sm rounded 
                    hover:bg-opacity-70 hover:bg-slate-100 hover:cursor-pointer"
      >
        <div className="flex flex-shrink-0 items-center">
          <img
            src="/images/cs_logo.png"
            style={{ width: "80px", height: "100px" }}
          />
        </div>
        <div className="flex items-center">{professor.researchDesc}</div>
      </div>
    </Link>
  );
};

export default function Research() {
  const { professors }: LoaderData = useLoaderData() as LoaderData;

  return (
    <>
      <div className="events-background bg-indigo-200"></div>

      <div className="ml-96">
        <div className="profiles-container grid grid-cols-2 gap-8 box-border">
          {professors &&
            professors.map((professor: ProfessorProfile, idx: number) => (
              <ProfessorCard professor={professor} key={idx} />
            ))}
        </div>
      </div>
    </>
  );
}
