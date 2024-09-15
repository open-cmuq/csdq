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

const professorProfiles: ProfessorProfile[] = [
  {
    name: "Dr. John Smith",
    id: "jsmith",
    pic: "/images/cs_logo.png",
    researchDesc:
      "Expert in artificial intelligence and machine learning, focusing on neural networks and deep learning applications in healthcare.",
    contact: {
      email: "johnsmith@cmu.edu",
      website: "https://johnsmithwebsite.com",
      googleScholar: "https://scholar.google.com/johnsmith",
      phone: "+974 4454 2206",
      office: "1008",
    },
    currentProjects: [
      {
        title: "AI in Healthcare Optimization",
        type: "SURA, Independent Study",
        status: "Open for SURA and Independent Study",
        description:
          "Researching the application of AI to optimize patient care.",
        applyBy: "April 15, 2024",
      },
      {
        title: "Machine Learning for Climate Prediction",
        type: "Senior Thesis, Summer Job",
        status: "Ongoing",
        description:
          "Developing models to predict climate change effects using machine learning.",
      },
    ],
    pastProjects: [
      {
        title: "Deep Learning in Image Recognition",
        type: "Senior Thesis",
        status: "Completed 2023",
        description:
          "Developed a neural network that improved image classification by 20%.",
      },
      {
        title: "Robotics and Automation",
        type: "Independent Study",
        status: "Completed 2022",
        description: "Created an autonomous robot for sorting recyclables.",
      },
    ],
  },
];

export async function getProfessor(
  id: string
): Promise<ProfessorProfile | null> {
  console.log(id);
  const professor = professorProfiles.find((prof) => prof.id === id);
  return professor || null;
}

export async function getProfessors(): Promise<ProfessorProfile[]> {
  return professorProfiles;
}
