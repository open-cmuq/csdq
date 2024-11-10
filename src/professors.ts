import { ProfessorProfile } from "./types";

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
      email: "cak@cmu.edu",
      website: "",
      googleScholar:
        "https://scholar.google.com/citations?user=VW8XujEAAAAJ&hl=en",
      phone: "+974 4454 8488",
      office: "CMB 1017",
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
      email: "efeoflus@andrew.cmu.edu",
      website: "https://www.efeoflushing.com/",
      googleScholar:
        "https://scholar.google.com/citations?user=Ov2iGjsAAAAJ&hl=en",
      phone: "+974 4454 6667",
      office: "CMB 1005",
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
        title:
          "Assessing the effectiveness of pedagogical techniques for a Computer Science outreach program",
        type: "Undergraduate research",
        status: "Completed 2023",
        description:
          "Designing and delivering educational workshops related to text-based programming concepts to high school students is still an open problem. Many approaches have been proposed, each with specific goals and time constraints. The focus of this study is the introduction of basic CS concepts and text-based programming (i.e., Python) in the form of workshops.\n\nThrough a comprehensive summary of previous research on this topic, this project identifies key ideas and stages undertaken to create a successful CS workshop: from research, design, development, testing, and execution. The project also analyzes over 2,000 student questionnaires received from students that attended the Mindcraft robotics workshops held from 2018 to 2020. This preliminary exploratory data analysis is used to formulate a series of research questions with the goal of getting accurate, actionable insights from the student feedback.",
        students: ["Mohamad El Ghali"],
        link: "https://kilthub.cmu.edu/articles/poster/Assessing_the_effectiveness_of_pedagogical_techniques_for_a_Computer_Science_outreach_program/24156081?file=42385602",
      },
      {
        title:
          "Indoor Mapmaking: From Map Drawing to Navigable Representations",
        type: "Senior Thesis",
        status: "Completed 2024",
        description:
          "Generating a navigable representation of indoor spaces has great potential to transform the experience of services indoors. The potential of indoor navigable representations is a reflection of the transformations brought forth by the digitization of outdoor maps, which enabled technological services to be enhanced with new information like localization and live navigation outdoors. To trigger a similar scale of transformation indoors, this thesis investigates methods that can be used to take widely available, engineering-class layout files of indoor spaces (known as CAD drawings, often exported to flattened PNG images), and convert them into a navigable representation that represents the information necessary to supplement systems that wish to map a located person to an area indoors and utilize our representation to navigate users from one indoor area to another. Through experimentation with existing indoor representation formats, we determine our navigable representation to be in the form of a graph structure that takes key indoor areas as its nodes and navigable links as its edges. To form this navigable graph structure, we explore many different methods and ultimately form a staged pipeline that combines our discovered methodologies to converge to an accurate graph representation of indoor spaces.",
        students: ["Huda Baig", "Ammar Karkour"],
        link: "https://kilthub.cmu.edu/articles/poster/Indoor_Mapmaking_From_Map_Drawing_to_Navigable_Representations/26129077?file=47314213",
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
      website: "http://www.giannidicaro.com/",
      googleScholar:
        "https://scholar.google.com/citations?user=bwzA5A0AAAAJ&hl=en",
      phone: "+974 4454 2177",
      office: "CMB 1007",
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
        title:
          "SampleLapNet: A Learnable Laplacian Approach for Task-Agnostic Point Cloud Downsampling",
        type: "Senior Thesis",
        status: "Completed 2024",
        description:
          "Advancements in 3D sensing technologies have led to an increased reliance on point cloud data for diverse applications ranging from autonomous navigation to environmental modeling. However, the sheer volume of data collected by these technologies poses significant challenges for real-time processing and analysis. This thesis introduces SampleLapNet, a novel neural network architecture designed to address the challenges of point cloud downsampling in a task-agnostic manner. By leveraging the Laplacian operator as a geometric measure of point importance, SampleLapNet learns to predict and preserve critical geometric features during the downsampling process, thereby ensuring minimal loss of relevant information. The architecture combines the robustness of transformer models with the efficiency of Laplacian-based importance scoring to facilitate efficient preprocessing that enhances subsequent point cloud analyses. We demonstrate the effectiveness of SampleLapNet through extensive experiments on benchmark datasets, showing significant improvements in downsampling efficiency without compromising the performance of downstream tasks such as semantic segmentation. This work not only proposes a method to reduce computational demands but also provides insights into the geometric processing of 3D data, suggesting pathways for future innovations in point cloud processing.",
        students: ["Diram Tabaa"],
        link: "https://kilthub.cmu.edu/articles/thesis/SampleLapNet_A_Learnable_Laplacian_Approach_for_Task-Agnostic_Point_Cloud_Downsampling/26932201?file=48991762",
      },
      {
        title:
          "Deep Learning for Automated Video Assistant Referee System (VARS) in Football",
        type: "Poster Presentation",
        status: "Completed 2024",
        description:
          "The goal of the research is to experiment with different approaches to increasing the accuracy of the existing system. As such, the work will proceed in parallel, comprising two sets of contributions, one from the side of automatic extraction of foul sequences from videos, and the other from side of a better performing learning architecture for automatic VAR.",
        students: ["Ahmad Alhallaq", "Ahmed Issaoui"],
        link: "https://kilthub.cmu.edu/articles/poster/Deep_Learning_for_Automated_Video_Assistant_Referee_System_VARS_in_Football/26169517?file=47414146",
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
      email: "giselle@cmu.edu",
      website: "https://gisellereis.com/",
      googleScholar:
        "https://scholar.google.com/citations?user=x3ayEEMAAAAJ&hl=en",
      phone: "+974 4454 2206",
      office: "CMB 1008",
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
        title: "Djed: The First Fully Decentralized Algorithmic Stablecoin",
        type: "Poster Presentation",
        status: "Completed 2023",
        description:
          "This study addresses the limitations of the Minimal Djed implementation, such as Fixed Fees and Zero Equity scenarios, which can hinder market responsiveness and create vulnerabilities during extreme conditions. By incorporating Variable Fees and Preventing Zero Equity, the Extended Djed protocol enhances adaptability and resilience. The findings aim to inspire innovative stablecoin designs, contributing to a more stable and secure cryptocurrency landscape for users and developers.",
        students: ["Demetre Devidze"],
        link: "https://kilthub.cmu.edu/articles/poster/Djed_The_First_Fully_Decentralized_Algorithmic_Stablecoin/24148893?file=42368145",
      },
      {
        title: "Executable Proofs for 15-150",
        type: "Senior Thesis",
        status: "Completed 2023",
        description:
          "Initially, proof assistants were targeted toward professional mathematicians, but interest has been rising regarding their potential use in undergraduate education. However, usability is still a major concern when it comes to introducing students to such systems. In this paper, we present Silkie, a system with an intuitive interface that would allow instructors to use proof assistants in undergraduate computer science education. It is built using SMLtoCoq, which translates SML code into Coq definitions, and an adapted version of JSCoq, a web-based implementation of the Coq theorem prover. Silkie is especially useful in courses that require students to write code and formally prove its correctness. Students can upload SML code into Silkie, and see the corresponding Coq definitions, which they can then use to prove properties about. The proof tactics were modified such that 'simple' steps that are typically expected from students need to be explicit, and the language resembles more what would be written on paper. Moreover, the interface will structure the proof script depending on the commands used, such that the hierarchy of each proof part is clear.",
        students: ["Abubakr Mohamed"],
        link: "https://kilthub.cmu.edu/articles/thesis/Executable_Proofs_for_15-150/23465054?file=41174381",
      },
      {
        title: "Design and Formalization of Blockchain Oracles",
        type: "Senior Thesis",
        status: "Completed 2023",
        description:
          "Oracles are crucial components that connect the smart contracts deployed on Blockchain to the external world. With the recent surge in popularity of decentralized finance (DeFi) applications, it is critical to provide assurances about the oracle implementations as they deal with high value transactions and a small mistake can lead to huge losses. We present a simple oracle implementation in Solidity, as well as a formalization in the Coq proof assistant where we prove that the oracle protocol satisfies certain desirable economic sustainability properties.",
        students: ["Mohammad Shaheer"],
        link: "https://kilthub.cmu.edu/articles/thesis/Design_and_Formalization_of_Blockchain_Oracles/23467967?file=41180120",
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
      email: "kharras@cs.cmu.edu",
      website: "http://nsl.qatar.cmu.edu/",
      googleScholar:
        "https://scholar.google.com/citations?user=V0UAZO0AAAAJ&hl=en",
      phone: "+974 4454 8617",
      office: "CMB 1020, 2120",
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
        title: "RealFL: A Realistic Platform for Federated Learning",
        type: "Undergraduate Research",
        status: "Completed 2024",
        description:
          "Federated Learning (FL) enabled creating models that are competitive to centralized Machine Learning models while preserving privacy by allowing clients to train data locally. Despite FL research growth, most of the work assessment and existing open-source FL testbeds/frameworks have drawbacks that prohibit convenient deployment over a large spectrum of heterogeneous clients in realistic environments. These drawbacks include simulations, unrealistic datasets, not supporting heterogeneity, and not having a realistic environment control in terms of network and client churn, for example. In this paper, we introduce RealFL, a novel, realistic, open-source, and extendable platform for FL that supports a large scale of heterogeneous clients. It enables realistic assessment of FL solutions by controlling various environmental parameters; e.g., network, client churn, data distribution, training complexity, and client heterogeneity. Using these parameters, we assess RealFL performance through an extensive evaluation. The results show a performance gap of up to 77.5% in training time and 23.9% in accuracy between FL unrealistic environments and RealFL.",
        students: ["Temoor Tanveer"],
        link: "https://kilthub.cmu.edu/articles/poster/RealFL_A_Realistic_Platform_for_Federated_Learning/26169496?file=47414035",
      },
      {
        title: "Exploiting Quantum Computing for Indoor Localization",
        type: "Undergraduate Research",
        status: "Completed 2023",
        description:
          "Quantum computing is a new efficient way of computing that utilizes the fundamental principles of quantum mechanics. It promises a huge leap forward in the time needed for solving a handful of important applied problems such as prime factorization, machine learning, quantum simulations, search, optimization, and many more. We tried to relate quantum computing methods to indoor localization problems. It is a problem of estimating objects’ location where the ordinary outdoor systems cannot be easily deployed because of obstacles for a transmitted signal. The potential improvements of exploiting quantum computing in solving this problem could increase accuracy and decrease the time required for location determination. We have found a preprint with a cosine similarity-based quantum algorithm for indoor localization that is exponentially better in both time and space than its classical version. In this report, we present our preliminary results in improving upon this algorithm that gives constant improvements with respect to the number of shots required.",
        students: ["Ulan Seitkaliyev"],
        link: "https://kilthub.cmu.edu/articles/poster/Exploiting_Quantum_Computing_for_Indoor_Localization/24148275?file=42367407",
      },
      {
        title:
          "Indoor Mapmaking: From Map Drawing to Navigable Representations",
        type: "Senior thesis",
        status: "Completed 2024",
        description:
          "Generating a navigable representation of indoor spaces has great potential to transform the experience of services indoors. The potential of indoor navigable representations is a reflection of the transformations brought forth by the digitization of outdoor maps, which enabled technological services to be enhanced with new information like localization and live navigation outdoors. To trigger a similar scale of transformation indoors, this thesis investigates methods that can be used to take widely available, engineering-class layout files of indoor spaces (known as CAD drawings, often exported to flattened PNG images), and convert them into a navigable representation that represents the information necessary to supplement systems that wish to map a located person to an area indoors and utilize our representation to navigate users from one indoor area to another. Through experimentation with existing indoor representation formats, we determine our navigable representation to be in the form of a graph structure that takes key indoor areas as its nodes and navigable links as its edges. To form this navigable graph structure, we explore many different methods and ultimately form a staged pipeline that combines our discovered methodologies to converge to an accurate graph representation of indoor spaces.",
        students: ["Huda Baig", "Ammar Karkour"],
        link: "https://kilthub.cmu.edu/articles/poster/Indoor_Mapmaking_From_Map_Drawing_to_Navigable_Representations/26129077?file=47314213",
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
      "Cloud Computing, Distributed Systems, Computer Architecture, and Database Systems.",
    keywords: [
      "cloud computing",
      "distributed systems",
      "computer architecture",
      "database systems",
    ],
    contact: {
      email: "mhhammoud@cmu.edu",
      website: "https://web2.qatar.cmu.edu/~mhhammou/",
      googleScholar:
        "https://scholar.google.com/citations?user=bnhiCMMAAAAJ&hl=en",
      phone: "+974 4454 8506",
      office: "CMB 1006",
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
      email: "rileyrd@cmu.edu",
      website: "https://www.cs.cmu.edu/~rdriley/",
      googleScholar:
        "https://scholar.google.com/citations?user=75JB_d0AAAAJ&hl=en",
      phone: "+974 4454 2138",
      office: "CMB 1019",
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
        title: "Vulnerabilities in Car Key Fobs",
        type: "Poster Presentation",
        status: "Completed 2023",
        description:
          "Car Key fobs transmit a one-time use code (known as a rolling code) to authenticate the unlock/lock commands of a car, but how secure are these protocols? We analyzed the packets sent out by car key fobs to decipher the commands being sent and their security. We discovered patterns in consecutive signals, and a noticeable difference between the unlock and lock command, along with the potential of encrypted information likely being stored within the signal's payload.",
        students: ["Mateo J. Correa"],
        link: "https://kilthub.cmu.edu/articles/poster/Vulnerabilities_in_Car_Key_Fobs/24149580?file=42368838",
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
