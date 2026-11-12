export type Project = {
  slug: string;
  name: string;
  category: "Software" | "Hardware";
  kind: string;
  visual:
    "web" | "pipeline" | "retrieval" | "mobile" | "cache" | "chip" | "wave" | "process";
  summary: string;
  stack: string[];
  role: string;
  overview: string;
  work: string[];
  evidence: { value: string; label: string }[];
  repo?: string;
  note?: string;
  featured?: boolean;
};
export const projects: Project[] = [
  {
    slug: "education-platform",
    name: "Educational assessment platform",
    category: "Software",
    kind: "R&D internship",
    visual: "web",
    summary:
      "Student and administrator applications connected through a shared API and database.",
    stack: ["React", "Node.js", "PostgreSQL", "GitHub Actions"],
    role: "Research & Development Intern",
    overview:
      "Researched, developed and deployed an exam-preparation application during an R&D internship. The work covered requirements, content workflows, frontend and backend development, deployment and release checks.",
    work: [
      "Created separate React applications for student and administrator workflows, including onboarding, timed quizzes, answer review and content management.",
      "Developed Express APIs and a PostgreSQL/Prisma data model for content, sessions and administrative operations.",
      "Implemented Docker/Nginx deployment workflows, staging configuration, GitHub Actions validation/build gates and Playwright staging checks.",
      "Added an administrative section showing the status of important external services to help identify outages.",
    ],
    evidence: [
      {
        value: "React",
        label: "Student and administrator applications",
      },
      {
        value: "CI/CD",
        label: "Build gates and staging checks",
      },
    ],
    note: "Internship work. This overview describes the engineering contribution without publishing internal application or user data.",
    featured: true,
  },
  {
    slug: "pricexpert",
    name: "PriceXpert",
    category: "Software",
    kind: "Group final-year project",
    visual: "pipeline",
    summary:
      "Grocery data collection across stores, with a deployed comparison backend.",
    stack: ["Python", "Selenium", "FastAPI", "Azure"],
    role: "Scraper development and backend deployment",
    overview:
      "A grocery-price comparison project built as a team. I developed the store scrapers and deployed the backend, progressing from static HTML extraction to dynamic-site collection.",
    work: [
      "Implemented six store-specific collection modules with Requests, BeautifulSoup and Selenium, separating collection from parsing.",
      "Added threaded collection and parsing, reusable HTTP sessions, timeouts, retries and pagination handling.",
      "Refined parsing of current, original and per-unit prices to produce consistent comparison records.",
      "Deployed the backend to an Azure VM with API, PostgreSQL and Nginx services and persistent storage.",
    ],
    evidence: [
      {
        value: "6",
        label: "Store-specific collection modules",
      },
      {
        value: "Azure VM",
        label: "Backend deployment",
      },
    ],
    featured: true,
  },
  {
    slug: "fact-checker",
    name: "Fact-Checker",
    category: "Software",
    kind: "Group NLP project",
    visual: "retrieval",
    summary:
      "Evidence retrieval and classification for checking claims against source text.",
    stack: ["Python", "BM25", "TF-IDF", "NLP"],
    role: "NLP retrieval, feature engineering and classification",
    overview:
      "Implemented the core NLP pipeline for a group fact-checking project, joining evidence retrieval, sentence ranking and claim-evidence classification in one workflow.",
    work: [
      "Combined BM25 and TF-IDF retrieval with sentence ranking to find relevant evidence.",
      "Developed logistic-regression, Naive Bayes, KNN and Perceptron classifiers with a shared feature pipeline.",
      "Engineered features for negation, numeric differences and date/year relationships alongside lexical evidence signals.",
      "Built FEVER/SciFact adapters and integrated the pipeline into command-line and web workflows for reviewing claims and evidence.",
    ],
    evidence: [
      {
        value: "45",
        label: "Features in the experiment pipeline",
      },
      {
        value: "4",
        label: "Classifier implementations",
      },
    ],
    repo: "https://github.com/Saad1507/Fact-Checker",
    featured: true,
  },
  {
    slug: "private-assessment",
    name: "Private assessment application",
    category: "Software",
    kind: "R&D internship",
    visual: "web",
    summary:
      "Reusable React assessment screens with persistent sessions and backend services.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
    role: "Research & Development Intern",
    overview:
      "Researched and developed an assessment application during the internship and deployed it privately. The work brought together interactive interfaces, application state and API integration.",
    work: [
      "Built React workflows with forms, reusable question displays, timers, progress tracking and result views.",
      "Developed Express APIs and PostgreSQL/Prisma data storage for profiles, sessions and results.",
      "Integrated external AI services and handled provider fallback.",
    ],
    evidence: [
      {
        value: "React + APIs",
        label: "Connected application workflow",
      },
      {
        value: "Private",
        label: "Deployment",
      },
    ],
    note: "A general technical overview of confidential internship work.",
    featured: false,
  },
  {
    slug: "garageease",
    name: "GarageEase",
    category: "Software",
    kind: "Mobile application",
    visual: "mobile",
    summary:
      "Customer booking and administrator workflows for a garage-service application.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore"],
    role: "Application development",
    overview:
      "Built a Flutter/Firebase application connecting customer vehicle and appointment workflows with administrator views for jobs, customers and services.",
    work: [
      "Developed customer vehicle and appointment flows alongside administrator views.",
      "Organized Firebase authentication, Firestore access and typed data models.",
      "Created reusable interface components across customer and administrator journeys.",
    ],
    evidence: [
      {
        value: "Flutter",
        label: "Mobile interfaces",
      },
      {
        value: "Firebase",
        label: "Authentication and data",
      },
    ],
    repo: "https://github.com/Saad1507/garageease-app",
    featured: false,
  },
  {
    slug: "multi-me",
    name: "Multi_me",
    category: "Software",
    kind: "Mobile application",
    visual: "mobile",
    summary:
      "A persona-chat application with configurable prompts and an external AI API.",
    stack: ["Flutter", "Firestore", "OpenRouter", "Dart"],
    role: "Application development",
    overview:
      "Developed a Flutter chat application with persona selection, configurable system prompts and Firestore-backed persona creation.",
    work: [
      "Built routed chat screens, avatar presentation and persona selection.",
      "Integrated OpenRouter through a reusable HTTP service.",
      "Added user-supplied API-key configuration for running the application.",
    ],
    evidence: [
      {
        value: "HTTP / JSON",
        label: "External API integration",
      },
      {
        value: "go_router",
        label: "Application navigation",
      },
    ],
    repo: "https://github.com/Saad1507/Multi_me",
    featured: false,
  },
  {
    slug: "cpp-simulator",
    name: "C++ cache simulator",
    category: "Software",
    kind: "Systems programming",
    visual: "cache",
    summary:
      "A configurable cache model with replacement policies, traces and a wxWidgets interface.",
    stack: ["C++", "STL", "wxWidgets", "Computer architecture"],
    role: "Simulation logic and interface",
    overview:
      "Implemented a configurable C++ cache simulator that makes address decomposition and replacement behaviour visible through an interactive desktop interface.",
    work: [
      "Implemented LRU, FIFO and Random replacement policies with hit, miss and eviction statistics.",
      "Separated simulation logic from the wxWidgets interface.",
      "Displayed access traces, cache contents and replacement decisions so each operation can be inspected.",
    ],
    evidence: [
      {
        value: "3",
        label: "Replacement policies",
      },
      {
        value: "C++",
        label: "Simulation core",
      },
    ],
    repo: "https://github.com/Saad1507/cpp-for-digital-systems",
    featured: false,
  },
  {
    slug: "mini-os",
    name: "Mini operating-system simulator",
    category: "Software",
    kind: "Group coursework",
    visual: "process",
    summary:
      "Desktop utilities demonstrating processes, threads and queue-based communication.",
    stack: ["Python", "CustomTkinter", "threading", "multiprocessing"],
    role: "Core implementation and integration",
    overview:
      "Implemented the main components of a group operating-system simulator in Python during Semester 4, integrating desktop utilities in a CustomTkinter interface.",
    work: [
      "Integrated 16 desktop actions, including file utilities, process inspection and application launchers.",
      "Built subprocess execution and threaded matrix operations.",
      "Implemented queue-based communication between two processes to demonstrate operating-system concepts.",
    ],
    evidence: [
      {
        value: "16",
        label: "Desktop actions",
      },
      {
        value: "Threads + processes",
        label: "Systems concepts",
      },
    ],
    repo: "https://github.com/Saad1507/Mini-Operating-System",
    featured: false,
  },
  {
    slug: "dual-core-soc",
    name: "Dual-core RV32I SoC",
    category: "Hardware",
    kind: "Group training capstone",
    visual: "chip",
    summary:
      "Processor integration, shared AXI4-Lite fabric, peripherals and Sky130 physical implementation.",
    stack: ["Verilog", "AXI4-Lite", "LibreLane", "OpenROAD"],
    role: "RTL integration, directed testbenches and ASIC implementation",
    overview:
      "A three-person capstone from applied digital IC training. My work covered fabric and peripheral RTL, directed verification, final RTL integration and the ASIC physical-design flow.",
    work: [
      "Designed CPU adapters and transaction-locked round-robin arbiters for two RV32I processors sharing an AXI4-Lite fabric.",
      "Built address decoding, an error responder and an inter-core mailbox, with routing to SRAM and UART.",
      "Developed directed benches across the fabric and peripherals; archived results include 12 passing RTL regressions and two ASIC-source integration/core tests.",
      "Adapted memory interfaces for the ASIC variant and carried it through synthesis, floorplanning, placement, clock-tree synthesis, routing and parasitic extraction.",
    ],
    evidence: [
      {
        value: "12",
        label: "Passing RTL regression runs",
      },
      {
        value: "Sky130",
        label: "ASIC implementation flow",
      },
    ],
    featured: true,
  },
  {
    slug: "rv32i-processor",
    name: "RV32I single-cycle processor",
    category: "Hardware",
    kind: "Digital IC training",
    visual: "chip",
    summary:
      "A modular 32-bit processor datapath tested from individual blocks through integration.",
    stack: ["Verilog", "RISC-V", "Self-checking testbenches"],
    role: "Datapath implementation and directed verification",
    overview:
      "Implemented a modular single-cycle RV32I processor, connecting instruction decoding, arithmetic, control and memory access.",
    work: [
      "Implemented a 32-register file, ALU, instruction decode/control, program counter and branch comparison.",
      "Supported I/S/B/U/J immediate formats and byte, halfword and word memory operations.",
      "Verified the design with eight self-checking benches and a 21-instruction integration program.",
    ],
    evidence: [
      {
        value: "106",
        label: "Passing checks",
      },
      {
        value: "8",
        label: "Self-checking benches",
      },
    ],
    featured: false,
  },
  {
    slug: "uart-transceiver",
    name: "UART transceiver",
    category: "Hardware",
    kind: "Group training project",
    visual: "wave",
    summary:
      "Transmit and receive state machines, directed tests and ASIC physical implementation.",
    stack: ["Verilog", "FSM design", "Sky130", "LibreLane"],
    role: "TX/RX RTL, directed testbenches and ASIC flow",
    overview:
      "A three-person UART project using 8E1 framing. I implemented transmitter and receiver logic and testbenches, and carried the design through an ASIC physical-design flow.",
    work: [
      "Implemented transmit and receive FSMs with a configurable cycles-per-bit parameter and data, done and error outputs.",
      "Tested send/busy sequencing, normal reception, incorrect parity and malformed stop bits.",
      "Ran Sky130 synthesis, floorplanning, placement, routing and extraction. The archived run reports positive setup/hold slack under a 10 ns constraint with clean DRC and LVS.",
    ],
    evidence: [
      {
        value: "8E1",
        label: "UART framing",
      },
      {
        value: "DRC + LVS",
        label: "Clean archived physical checks",
      },
    ],
    repo: "https://github.com/Saad1507/uart-transceiver-verilog",
    featured: false,
  },
  {
    slug: "cache-controller",
    name: "Two-way SRAM cache controller",
    category: "Hardware",
    kind: "RTL and FPGA preparation",
    visual: "cache",
    summary:
      "A cache lookup/store model with explicit writes and registered hit, miss and data outputs.",
    stack: ["Verilog", "SRAM", "Yosys", "F4PGA"],
    role: "RTL design, directed tests and synthesis preparation",
    overview:
      "Designed a two-set, two-way cache model with tag and valid-bit storage and explicit per-way writes.",
    work: [
      "Implemented registered hit, miss and data outputs.",
      "Verified hits, misses and chip-disable behaviour through eight directed scenarios.",
      "Prepared board-facing wrappers and Arty target constraints, with archived Yosys/F4PGA synthesis artifacts.",
    ],
    evidence: [
      {
        value: "2-way",
        label: "Cache organization",
      },
      {
        value: "8",
        label: "Directed scenarios",
      },
    ],
    repo: "https://github.com/Saad1507/cache-controller-sram",
    featured: false,
  },
  {
    slug: "amba-apb",
    name: "Peripheral handshake controller",
    category: "Hardware",
    kind: "RTL training",
    visual: "wave",
    summary:
      "Read/write transaction handling with handshake signalling and finite-state control.",
    stack: ["Verilog", "FSM design", "Peripheral interfaces"],
    role: "RTL and testbench work",
    overview:
      "A peripheral-interface training project using ready/valid handshake signalling to explore transaction sequencing in Verilog.",
    work: [
      "Implemented state-based handling of peripheral transactions.",
      "Worked with request, response and handshake signals in modular RTL.",
      "Used simulation to inspect transaction sequencing and control behaviour.",
    ],
    evidence: [
      {
        value: "FSM",
        label: "Transaction control",
      },
      {
        value: "Verilog",
        label: "RTL implementation",
      },
    ],
    repo: "https://github.com/Saad1507/amba-apb-transceiver",
    featured: false,
  },
  {
    slug: "vga-display",
    name: "VGA timing controller",
    category: "Hardware",
    kind: "RTL and FPGA preparation",
    visual: "wave",
    summary:
      "Display timing and pixel-generation logic with a programmable colour palette.",
    stack: ["Verilog", "Counters", "Yosys", "F4PGA"],
    role: "RTL training and FPGA synthesis preparation",
    overview:
      "A digital-design project covering display timing, counters and pixel generation, prepared for FPGA synthesis on an Arty target.",
    work: [
      "Worked with horizontal and vertical timing counters and synchronization logic.",
      "Implemented a programmable colour palette for pixel output.",
      "Prepared the design for the open-source FPGA synthesis workflow.",
    ],
    evidence: [
      {
        value: "VGA",
        label: "Display timing",
      },
      {
        value: "Arty",
        label: "Synthesis target",
      },
    ],
    repo: "https://github.com/Saad1507/vga-controller-sram",
    featured: false,
  },
  {
    slug: "picorv32-asic",
    name: "PicoRV32 physical implementation",
    category: "Hardware",
    kind: "ASIC flow project",
    visual: "chip",
    summary:
      "LibreLane physical implementation of an upstream processor design.",
    stack: ["LibreLane", "OpenROAD", "Sky130"],
    role: "ASIC flow configuration and implementation",
    overview:
      "Ran the LibreLane ASIC flow on a PicoRV32 design obtained from GitHub. The processor RTL is upstream work; my contribution was the physical implementation flow.",
    work: [
      "Configured and ran the design through the LibreLane flow.",
      "Worked with implementation outputs and physical-design reports using the open-source toolchain.",
    ],
    evidence: [
      {
        value: "LibreLane",
        label: "Implementation flow",
      },
      {
        value: "Upstream RTL",
        label: "Processor design source",
      },
    ],
    repo: "https://github.com/Saad1507/rv32i-librelane",
    featured: false,
  },
];
export const findProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
export const cvs = [
  {
    id: "software",
    name: "Software engineering",
    label: "General software CV",
    description:
      "Application development, backend services, applied AI and data engineering.",
    file: "/cv/muhammad-saad-software.pdf",
    pages: 2,
  },
  {
    id: "hardware",
    name: "Digital hardware",
    label: "General hardware CV",
    description:
      "RTL design, directed verification and ASIC physical implementation.",
    file: "/cv/muhammad-saad-hardware.pdf",
    pages: 2,
  },
  {
    id: "systems",
    name: "Systems & architecture",
    label: "Combined software and hardware CV",
    description:
      "C++, Python, Linux deployment, computer architecture and RISC-V projects.",
    file: "/cv/muhammad-saad-systems.pdf",
    pages: 2,
  },
];
