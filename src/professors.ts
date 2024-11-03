interface ProfessorProfile {
  name: string;
  id: string;
  pic: string;
  researchDesc: string;
  researchBrief: string;
  keywords: string[];
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
    name: "Dr. Christos Kapoutsis",
    id: "ckapoutsis",
    pic: "/images/professors/cak.jpg",
    researchDesc:
      "Kapoutsis’ main research area is the size complexity of two-way finite automata (2FA). Since 2001, he has worked extensively on the so-called Sakoda-Sipser conjecture. This is a question about the power of non-determinism in size-limited 2FA, which can be viewed as a miniature version of complexity theory's deep open questions on the power of non-determinism. Since 2009, he has also been working on a general size-complexity theory for 2FA, which he likes to call 'minicomplexity'. Here, the aim is to show that many properties of computation that we observe in standard complexity theory emerge already in machines as weak as the 2FA.",
    researchBrief:
      "Computational Complexity, Descriptional Complexity, and the Theory of Computation, 2FAs.",
    keywords: [
      "descriptional complexity",
      "computational complexity",
      "descriptive complexity",
      "theory of computation",
      "size complexity",
      "two-way finite automata",
      "exact trade-offs",
      "minicomplexity",
      "space complexity",
      "extremal combinatorics",
    ],
    contact: {
      email: "ckapoutsis@cmu.edu",
      website: "https://www.example.com/ckapoutsis",
      googleScholar: "https://scholar.google.com/ckapoutsis",
      phone: "+974 4454 2201",
      office: "Room 101",
    },
    currentProjects: [
      {
        title: "Investigating the Sakoda-Sipser Conjecture",
        type: "Independent Study",
        status: "Open for Independent Study",
        description:
          "Exploring the power of non-determinism in size-limited two-way finite automata.",
        applyBy: "March 31, 2024",
      },
    ],
    pastProjects: [
      {
        title: "Minicomplexity in Two-Way Finite Automata",
        type: "Research Project",
        status: "Completed 2023",
        description:
          "Developed a size-complexity theory for 2FA, revealing computational properties in minimal machines.",
      },
    ],
  },
  {
    name: "Dr. Eduardo Feo Flushing",
    id: "efeoflushing",
    pic: "/images/professors/efeoflus.jpg",
    researchDesc:
      "Cyber-Physical Systems, Artificial Intelligence, Intelligent Systems, and Mobile Robotics.",
    researchBrief:
      "Cyber-Physical Systems, Artificial Intelligence, Intelligent Systems, and Mobile Robotics.",
    keywords: [
      "cyber-physical systems",
      "artificial intelligence",
      "intelligent systems",
      "mobile robotics",
    ],
    contact: {
      email: "efeoflushing@cmu.edu",
      website: "https://www.example.com/efeoflus",
      googleScholar: "https://scholar.google.com/efeoflushing",
      phone: "+974 4454 2202",
      office: "Room 102",
    },
    currentProjects: [
      {
        title: "AI Integration in Mobile Robotics",
        type: "SURA, Independent Study",
        status: "Open",
        description:
          "Researching intelligent systems for enhancing mobile robot autonomy.",
        applyBy: "May 15, 2024",
      },
    ],
    pastProjects: [
      {
        title: "Cyber-Physical Systems Security",
        type: "Senior Thesis",
        status: "Completed 2022",
        description:
          "Analyzed security vulnerabilities in interconnected physical systems.",
      },
    ],
  },
  {
    name: "Dr. Gianni Di Caro",
    id: "gdicaro",
    pic: "/images/professors/gdicaro.jpg",
    researchDesc:
      "Di Caro has a truly multi- and interdisciplinary expertise. In the past 25 years, he has been working on a number of research topics in the domains of parallel and distributed computing, artificial intelligence, swarm intelligence, combinatorial optimization, telecommunication networks, modeling of biological systems, autonomous robotics, distributed and swarm robotics, and human-robot interaction. He co-authored the work that laid down the formal foundations of the Ant Colony Optimization metaheuristic, and he developed algorithms that are de facto the main references for swarm intelligence in network optimization. Di Caro has co-authored pioneering research in swarm robotics, in particular networked swarms and human-swarm interaction. His recent work focuses on planning and coordination in mobile multi-robot systems, integration of networking and control, and use of learning techniques for robot recognition and navigation tasks. In a new research project, he will explore various interaction and coordination issues in heterogeneous teams of autonomous aerial and aquatic robots.",
    researchBrief:
      "Swarm Intelligence, Swarm Robotics, Multi-Robot Systems, and Human-Robot Interaction.",
    keywords: [
      "swarm intelligence",
      "swarm robotics",
      "multi-robot systems",
      "autonomous robotics",
      "human-robot interaction",
      "optimization",
      "artificial intelligence",
      "networked systems",
    ],
    contact: {
      email: "gdicaro@cmu.edu",
      website: "https://www.example.com/gdicaro",
      googleScholar: "https://scholar.google.com/gdicaro",
      phone: "+974 4454 2203",
      office: "Room 103",
    },
    currentProjects: [
      {
        title: "Swarm Robotics for Environmental Monitoring",
        type: "SURA, Independent Study",
        status: "Open",
        description:
          "Developing swarm intelligence algorithms for autonomous environmental data collection.",
        applyBy: "June 30, 2024",
      },
      {
        title: "Human-Swarm Interaction Techniques",
        type: "Senior Thesis",
        status: "Ongoing",
        description:
          "Exploring new methods for efficient interaction between humans and robot swarms.",
      },
    ],
    pastProjects: [
      {
        title: "Ant Colony Optimization in Networks",
        type: "Research Project",
        status: "Completed 2021",
        description:
          "Implemented ACO algorithms for optimizing network routing protocols.",
      },
    ],
  },
  {
    name: "Dr. Giselle Reis",
    id: "greis",
    pic: "/images/professors/greis.jpg",
    researchDesc:
      "Reis has extensive experience, both as a developer and user, with tools and methods used in formal verification. Formal verification of software, hardware, or any other type of system, is used to provide strong guarantees (i.e., proofs) that the system satisfies certain properties, thus making them more reliable and robust. Examples of such properties include: specification and requirements are satisfied, data is kept confidential, or certain bugs will never occur. Such methodology is especially valuable for safety-critical systems (e.g., in health, nuclear power, or aviation), in which an error could be catastrophic.",
    researchBrief: "Formal Verification methods for Safety-Critical Systems.",
    keywords: ["formal verification", "safety-critical systems"],
    contact: {
      email: "greis@cmu.edu",
      website: "https://www.example.com/greis",
      googleScholar: "https://scholar.google.com/greis",
      phone: "+974 4454 2204",
      office: "Room 104",
    },
    currentProjects: [
      {
        title: "Formal Verification of Safety-Critical Systems",
        type: "Independent Study",
        status: "Open",
        description:
          "Applying formal methods to verify and validate safety-critical software systems.",
        applyBy: "February 28, 2024",
      },
    ],
    pastProjects: [
      {
        title: "Automated Theorem Proving Tools",
        type: "Research Project",
        status: "Completed 2022",
        description:
          "Developed tools to automate the process of formal verification in software engineering.",
      },
    ],
  },
  {
    name: "Dr. Khaled Harras",
    id: "kharras",
    pic: "/images/professors/kharras.jpg",
    researchDesc:
      "For nearly two decades, Harras has been working on the areas of challenged and opportunistic networks, video sensor networks, unmanned air vehicles (UAVs), ubiquitous and pervasive systems, mobile edge computation/networked architectures, and cybersecurity. He also has expertise in the domains of wireless and mobile networks measurement, building real systems and testbeds, designing and implementing architectures and frameworks based on real data.",
    researchBrief:
      "IoT, Computer Networking, Mobile and Pervasive Computing, Distributed Systems, and Cybersecurity.",
    keywords: [
      "Internet of Things",
      "computer networking",
      "mobile computing",
      "pervasive computing",
      "distributed systems",
      "cybersecurity",
    ],
    contact: {
      email: "kharras@cmu.edu",
      website: "http://nsl.qatar.cmu.edu/",
      googleScholar: "https://scholar.google.com/kharras",
      phone: "+974 4454 2205",
      office: "Room 105",
    },
    currentProjects: [
      {
        title: "Edge Computing in IoT Networks",
        type: "SURA, Independent Study",
        status: "Open",
        description:
          "Investigating architectures for efficient edge computation in Internet of Things networks.",
        applyBy: "April 10, 2024",
      },
    ],
    pastProjects: [
      {
        title: "Security in Unmanned Aerial Vehicles",
        type: "Senior Thesis",
        status: "Completed 2023",
        description:
          "Analyzed and enhanced security protocols for UAV communication systems.",
      },
    ],
  },
  {
    name: "Dr. Mohammad Hammoud",
    id: "mhammoud",
    pic: "/images/professors/mhhamoud.jpg",
    researchDesc:
      "Cloud Computing, Distributed Systems, Computer Architecture, and Database Systems.",
    researchBrief:
      "Cloud Computing, Distributed Systems, Computer Architecture, and Database Systems. AI in Medicine",
    keywords: [
      "cloud computing",
      "distributed systems",
      "computer architecture",
      "database systems",
    ],
    contact: {
      email: "mhammoud@cmu.edu",
      website: "https://www.example.com/mhammoud",
      googleScholar: "https://scholar.google.com/mhammoud",
      phone: "+974 4454 2206",
      office: "Room 106",
    },
    currentProjects: [
      {
        title: "Scalable Distributed Databases",
        type: "Independent Study",
        status: "Open",
        description:
          "Designing distributed database systems optimized for cloud environments.",
        applyBy: "May 1, 2024",
      },
    ],
    pastProjects: [
      {
        title: "Performance Optimization in Cloud Computing",
        type: "Research Project",
        status: "Completed 2022",
        description:
          "Developed techniques to improve computational efficiency in cloud infrastructures.",
      },
    ],
  },
  {
    name: "Dr. Ryan Riley",
    id: "rriley",
    pic: "/images/professors/rdriley.jpg",
    researchDesc:
      "Operating System Security, Computer Architecture, and Intrusion Detection.",
    researchBrief:
      "Operating System Security, Computer Architecture, and Intrusion Detection.",
    keywords: [
      "operating system security",
      "computer architecture",
      "intrusion detection",
    ],
    contact: {
      email: "rriley@cmu.edu",
      website: "https://www.example.com/rriley",
      googleScholar: "https://scholar.google.com/rriley",
      phone: "+974 4454 2207",
      office: "Room 107",
    },
    currentProjects: [
      {
        title: "Advanced Intrusion Detection Systems",
        type: "SURA, Independent Study",
        status: "Open",
        description:
          "Developing next-generation intrusion detection mechanisms for modern operating systems.",
        applyBy: "March 15, 2024",
      },
    ],
    pastProjects: [
      {
        title: "Secure Operating System Architectures",
        type: "Senior Thesis",
        status: "Completed 2021",
        description:
          "Investigated architectural enhancements to improve OS security against emerging threats.",
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
