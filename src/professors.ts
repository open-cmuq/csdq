interface ProfessorProfile {
  name: string;
  id: string;
  pic: string;
  researchDesc: string;
}

const professorProfiles: ProfessorProfile[] = [
  {
    name: "Dr. John Smith",
    id: "jsmith",
    pic: "/images/cs_logo.png",
    researchDesc:
      "Expert in artificial intelligence and machine learning, focusing on neural networks and deep learning applications in healthcare.",
  },
  {
    name: "Dr. Emily Johnson",
    id: "ejohnson",
    pic: "https://example.com/professors/emily-johnson.jpg",
    researchDesc:
      "Specializes in data science and big data analytics with a focus on predictive modeling and data visualization techniques.",
  },
  {
    name: "Dr. Michael Williams",
    id: "mwilliams",
    pic: "https://example.com/professors/michael-williams.jpg",
    researchDesc:
      "Researches cybersecurity and cryptography, with a focus on blockchain technology and secure communication protocols.",
  },
  {
    name: "Dr. Sarah Brown",
    id: "sbrown",
    pic: "https://example.com/professors/sarah-brown.jpg",
    researchDesc:
      "Focuses on environmental science and sustainability, working on renewable energy technologies and climate change mitigation.",
  },
  {
    name: "Dr. David Miller",
    id: "dmiller",
    pic: "https://example.com/professors/david-miller.jpg",
    researchDesc:
      "Specializes in computational biology, exploring bioinformatics and the development of algorithms for genetic data analysis.",
  },
  {
    name: "Dr. Laura Wilson",
    id: "lwilson",
    pic: "https://example.com/professors/laura-wilson.jpg",
    researchDesc:
      "Expert in robotics and automation, with research centered on human-robot interaction and autonomous vehicle technologies.",
  },
  {
    name: "Dr. Robert Davis",
    id: "rdavis",
    pic: "https://example.com/professors/robert-davis.jpg",
    researchDesc:
      "Researcher in quantum computing, working on quantum algorithms and the practical applications of quantum theory in computation.",
  },
  {
    name: "Dr. Jennifer Garcia",
    id: "jgarcia",
    pic: "https://example.com/professors/jennifer-garcia.jpg",
    researchDesc:
      "Specializes in human-computer interaction, focusing on user experience design and the development of accessible technology.",
  },
  {
    name: "Dr. James Martinez",
    id: "jmartinez",
    pic: "https://example.com/professors/james-martinez.jpg",
    researchDesc:
      "Researches renewable energy systems, with a focus on solar energy optimization and smart grid technologies.",
  },
  {
    name: "Dr. Elizabeth Lee",
    id: "elee",
    pic: "https://example.com/professors/elizabeth-lee.jpg",
    researchDesc:
      "Expert in bioengineering and medical devices, working on the development of wearable health monitoring systems.",
  },
];

export async function getProfessor(
  id: string
): Promise<ProfessorProfile | null> {
  console.log(id);
  const professor = professorProfiles.find((prof) => prof.id === id);
  return professor || null; // Return null if not found
}

export async function getProfessors(): Promise<ProfessorProfile[]> {
  return professorProfiles;
}
