import React from "react";
import "../styles/research.css";

interface ProfessorProfile {
  name: string;
  pic: string;
  researchDesc: string;
}

const professorProfiles: ProfessorProfile[] = [
  {
    name: "Dr. John Smith",
    pic: "https://example.com/professors/john-smith.jpg",
    researchDesc:
      "Expert in artificial intelligence and machine learning, focusing on neural networks and deep learning applications in healthcare.",
  },
  {
    name: "Dr. Emily Johnson",
    pic: "https://example.com/professors/emily-johnson.jpg",
    researchDesc:
      "Specializes in data science and big data analytics with a focus on predictive modeling and data visualization techniques.",
  },
  {
    name: "Dr. Michael Williams",
    pic: "https://example.com/professors/michael-williams.jpg",
    researchDesc:
      "Researches cybersecurity and cryptography, with a focus on blockchain technology and secure communication protocols.",
  },
  {
    name: "Dr. Sarah Brown",
    pic: "https://example.com/professors/sarah-brown.jpg",
    researchDesc:
      "Focuses on environmental science and sustainability, working on renewable energy technologies and climate change mitigation.",
  },
  {
    name: "Dr. David Miller",
    pic: "https://example.com/professors/david-miller.jpg",
    researchDesc:
      "Specializes in computational biology, exploring bioinformatics and the development of algorithms for genetic data analysis.",
  },
  {
    name: "Dr. Laura Wilson",
    pic: "https://example.com/professors/laura-wilson.jpg",
    researchDesc:
      "Expert in robotics and automation, with research centered on human-robot interaction and autonomous vehicle technologies.",
  },
  {
    name: "Dr. Robert Davis",
    pic: "https://example.com/professors/robert-davis.jpg",
    researchDesc:
      "Researcher in quantum computing, working on quantum algorithms and the practical applications of quantum theory in computation.",
  },
  {
    name: "Dr. Jennifer Garcia",
    pic: "https://example.com/professors/jennifer-garcia.jpg",
    researchDesc:
      "Specializes in human-computer interaction, focusing on user experience design and the development of accessible technology.",
  },
  {
    name: "Dr. James Martinez",
    pic: "https://example.com/professors/james-martinez.jpg",
    researchDesc:
      "Researches renewable energy systems, with a focus on solar energy optimization and smart grid technologies.",
  },
  {
    name: "Dr. Elizabeth Lee",
    pic: "https://example.com/professors/elizabeth-lee.jpg",
    researchDesc:
      "Expert in bioengineering and medical devices, working on the development of wearable health monitoring systems.",
  },
];

interface ProfessorCardProps {
  professor: ProfessorProfile;
}

const ProfessorCard: React.FC<ProfessorCardProps> = ({ professor }) => {
  return (
    <div className="flex border-black border-2 p-8 m-4 max-w-sm rounded ">
      <div className="flex flex-shrink-0 items-center">
        <img
          src="/images/cs_logo.png"
          style={{ width: "80px", height: "100px" }}
        />
      </div>
      <div className="flex items-center">{professor.researchDesc}</div>
    </div>
  );
};

export default function Research() {
  return (
    <>
      <div className="events-background bg-indigo-200"></div>

      <div className="ml-96">
        <div className="profiles-container grid grid-cols-2 gap-8 box-border">
          {professorProfiles.map((professor) => (
            <ProfessorCard professor={professor} />
          ))}
        </div>
      </div>
    </>
  );
}
