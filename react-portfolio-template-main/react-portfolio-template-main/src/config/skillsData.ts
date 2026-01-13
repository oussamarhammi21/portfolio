// config/skillsData.ts
export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  name: string;
  level: ProficiencyLevel;
  experience?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    items: [
      {
        name: 'C++',
        level: 'Advanced',
        experience: '4 months at Ubisoft',
        description: 'Game development, UI frameworks, Anvil/Scimitar pipeline, performance optimization'
      },
      {
        name: 'C#',
        level: 'Advanced',
        experience: '4 months at Humanware',
        description: 'Assistive technology development, MVVM architecture, Visual Studio, cross-platform solutions'
      },
      {
        name: 'Java',
        level: 'Advanced',
        experience: 'University coursework + personal projects',
        description: 'Object-oriented programming, Java Beans, Spring Framework, enterprise applications'
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Full-stack web development, ES6+, modern frameworks, Node.js ecosystem'
      },
      {
        name: 'TypeScript',
        level: 'Intermediate',
        description: 'Type-safe JavaScript, Angular/React development, enterprise applications'
      },
      {
        name: 'Python',
        level: 'Advanced',
        description: 'AI model design, data processing, automation scripts, scientific computing'
      },
      {
        name: 'C',
        level: 'Intermediate',
        experience: 'System programming coursework',
        description: 'Low-level programming, memory management, system calls, embedded systems'
      },
      {
        name: 'Haskell',
        level: 'Beginner',
        experience: 'Functional programming course',
        description: 'Functional programming concepts, pure functions, lazy evaluation'
      },
      {
        name: 'Racket',
        level: 'Intermediate',
        description: 'Functional programming concepts, academic coursework, Scheme dialect'
      },
      {
        name: 'ARM8 Assembly',
        level: 'Intermediate',
        experience: 'System programming course',
        description: 'Low-level programming, computer architecture, SPARC assembly, instruction sets'
      },
      {
        name: 'SQL',
        level: 'Advanced',
        description: 'Database design, complex queries, optimization, transactions, relational algebra'
      }
    ]
  },
  {
    category: 'Web Development',
    items: [
      {
        name: 'HTML',
        level: 'Expert',
        description: 'Semantic markup, accessibility standards, responsive design, HTML5 APIs'
      },
      {
        name: 'CSS',
        level: 'Expert',
        description: 'Styling, animations, responsive layouts, modern frameworks, CSS Grid/Flexbox'
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Frontend development, DOM manipulation, AJAX, modern ES6+ features'
      },
      {
        name: 'React',
        level: 'Advanced',
        description: 'Hooks, Context API, component lifecycle, state management, React Router'
      },
      {
        name: 'Angular',
        level: 'Intermediate',
        description: 'Component-based architecture, TypeScript, RxJS, dependency injection'
      },
      {
        name: 'Node.js',
        level: 'Intermediate',
        description: 'Server-side JavaScript, REST APIs, package management, Express.js'
      },
      {
        name: 'jQuery',
        level: 'Intermediate',
        description: 'DOM manipulation, AJAX requests, event handling, legacy code maintenance'
      },
      {
        name: 'Next.js',
        level: 'Beginner',
        description: 'React framework, server-side rendering, static site generation'
      },
      {
        name: 'Tailwind CSS',
        level: 'Intermediate',
        description: 'Utility-first CSS framework, responsive design, component styling'
      }
    ]
  },
  {
    category: 'Mobile Development',
    items: [
      {
        name: 'Android',
        level: 'Intermediate',
        description: 'Java/Kotlin development, Android Studio, mobile UI/UX, Android SDK'
      },
      {
        name: 'iOS',
        level: 'Beginner',
        description: 'Swift programming, Xcode, Apple ecosystem, mobile development basics'
      },
      {
        name: 'Flutter',
        level: 'Intermediate',
        description: 'Cross-platform mobile development, Dart language, widget-based UI'
      },
      {
        name: 'React Native',
        level: 'Beginner',
        description: 'Cross-platform mobile apps using React, JavaScript ecosystem'
      }
    ]
  },
  {
    category: 'Backend Development',
    items: [
      {
        name: 'Spring Boot',
        level: 'Intermediate',
        description: 'Java framework, microservices, REST APIs, dependency injection'
      },
      {
        name: '.NET',
        level: 'Intermediate',
        description: 'C# framework, desktop and web applications, ASP.NET Core'
      },
      {
        name: 'Node.js',
        level: 'Intermediate',
        description: 'JavaScript runtime, Express.js, RESTful APIs, real-time applications'
      },
      {
        name: 'Quarkus',
        level: 'Beginner',
        description: 'Kubernetes-native Java framework, cloud-native applications, GraalVM'
      }
    ]
  },
  {
    category: 'Databases',
    items: [
      {
        name: 'PostgreSQL',
        level: 'Intermediate',
        description: 'Advanced SQL features, JSON support, performance tuning, transactions'
      },
      {
        name: 'MySQL',
        level: 'Intermediate',
        description: 'Relational database management, SQL queries, database administration'
      },
      {
        name: 'Oracle',
        level: 'Intermediate',
        description: 'Enterprise database management, PL/SQL, Oracle database administration'
      },
      {
        name: 'MongoDB',
        level: 'Beginner',
        description: 'NoSQL database, document storage, JSON-like documents'
      },
      {
        name: 'Redis',
        level: 'Beginner',
        description: 'In-memory data structure store, caching, message broker'
      },
      {
        name: 'Firebase',
        level: 'Intermediate',
        description: 'Real-time database, authentication, cloud functions, mobile backend'
      },
      {
        name: 'SQL Server',
        level: 'Beginner',
        description: 'Microsoft relational database, T-SQL, enterprise data management'
      }
    ]
  },
  {
    category: 'System Programming & OS',
    items: [
      {
        name: 'Operating Systems',
        level: 'Intermediate',
        experience: 'University coursework',
        description: 'Process management, memory management, file systems, concurrency'
      },
      {
        name: 'Linux/Unix',
        level: 'Intermediate',
        description: 'Command line, shell scripting, system administration, package management'
      },
      {
        name: 'Windows',
        level: 'Intermediate',
        description: 'Windows administration, PowerShell, Active Directory, system management'
      },
      {
        name: 'Active Directory',
        level: 'Intermediate',
        description: 'User management, group policies, security architecture, domain services'
      },
      {
        name: 'System Security',
        level: 'Intermediate',
        description: 'Security architecture, threat modeling, access control, system hardening'
      },
      {
        name: 'Multi-threading',
        level: 'Intermediate',
        description: 'Concurrent programming, thread synchronization, deadlock prevention'
      }
    ]
  },
  {
    category: 'Game Development',
    items: [
      {
        name: 'OpenGL',
        level: 'Intermediate',
        description: '3D graphics programming, game development, shader programming, graphics pipeline'
      },
      {
        name: 'Game Engines',
        level: 'Intermediate',
        description: 'Game development frameworks, graphics rendering, physics simulation'
      },
      {
        name: 'C++ Game Dev',
        level: 'Advanced',
        experience: 'Ubisoft internship',
        description: 'Game development, UI frameworks, Anvil/Scimitar pipeline, performance optimization'
      },
      {
        name: 'Computer Graphics',
        level: 'Intermediate',
        experience: 'University course',
        description: '2D/3D graphics, transformations, rendering algorithms, shader programming'
      }
    ]
  },
  {
    category: 'AI & Machine Learning',
    items: [
      {
        name: 'AI Algorithms',
        level: 'Intermediate',
        experience: 'University coursework',
        description: 'Search algorithms (A*, BFS, DFS), constraint satisfaction, adversarial search'
      },
      {
        name: 'Machine Learning',
        level: 'Intermediate',
        description: 'Supervised learning, unsupervised learning, reinforcement learning, model training'
      },
      {
        name: 'TensorFlow',
        level: 'Beginner',
        description: 'Deep learning framework, neural networks, Keras API, model deployment'
      },
      {
        name: 'AI Model Design',
        level: 'Intermediate',
        description: 'Model architecture, feature engineering, training pipelines, evaluation metrics'
      },
      {
        name: 'Neural Networks',
        level: 'Beginner',
        description: 'Artificial neurons, backpropagation, CNNs, RNNs, deep learning basics'
      },
      {
        name: 'Data Analysis',
        level: 'Intermediate',
        description: 'Statistical analysis, data visualization, hypothesis testing, Python libraries'
      }
    ]
  },
  {
    category: 'Cybersecurity',
    items: [
      {
        name: 'Cryptography',
        level: 'Intermediate',
        experience: 'University course',
        description: 'Symmetric/asymmetric encryption, hash functions, digital signatures, PKI'
      },
      {
        name: 'Network Security',
        level: 'Intermediate',
        description: 'Protocol security, firewalls, IDS/IPS, VPNs, network monitoring'
      },
      {
        name: 'Penetration Testing',
        level: 'Beginner',
        description: 'Ethical hacking, vulnerability assessment, security testing methodologies'
      },
      {
        name: 'Secure Coding',
        level: 'Intermediate',
        description: 'OWASP Top 10, input validation, authentication, authorization, session management'
      },
      {
        name: 'Security Architecture',
        level: 'Intermediate',
        description: 'System security design, defense in depth, security controls, risk assessment'
      },
      {
        name: 'Incident Response',
        level: 'Beginner',
        description: 'Security incident handling, forensics, log analysis, recovery procedures'
      }
    ]
  },
  {
    category: 'Software Engineering',
    items: [
      {
        name: 'Data Structures',
        level: 'Advanced',
        experience: 'University coursework',
        description: 'Arrays, linked lists, stacks, queues, trees, graphs, hash tables, algorithms'
      },
      {
        name: 'Algorithms',
        level: 'Advanced',
        description: 'Sorting, searching, graph algorithms, dynamic programming, greedy algorithms'
      },
      {
        name: 'Design Patterns',
        level: 'Intermediate',
        description: 'Creational, structural, behavioral patterns, software architecture patterns'
      },
      {
        name: 'UML Modeling',
        level: 'Intermediate',
        description: 'Class diagrams, sequence diagrams, use case diagrams, software design documentation'
      },
      {
        name: 'Software Testing',
        level: 'Intermediate',
        description: 'Unit testing, integration testing, test-driven development, JUnit, Selenium'
      },
      {
        name: 'Agile/Scrum',
        level: 'Advanced',
        experience: 'Professional experience',
        description: 'Sprint planning, daily standups, retrospectives, product backlog management'
      },
      {
        name: 'Version Control',
        level: 'Advanced',
        description: 'Git, GitHub, branching strategies, collaborative workflows, CI/CD'
      }
    ]
  },
  {
    category: 'Networking',
    items: [
      {
        name: 'TCP/IP',
        level: 'Intermediate',
        experience: 'University course',
        description: 'Network protocols, IP addressing, routing, transport layer protocols'
      },
      {
        name: 'Network Protocols',
        level: 'Intermediate',
        description: 'HTTP/HTTPS, DNS, DHCP, SMTP, FTP, network architecture fundamentals'
      },
      {
        name: 'Network Security',
        level: 'Intermediate',
        description: 'Firewalls, VPNs, intrusion detection, network monitoring, security protocols'
      },
      {
        name: 'Network Programming',
        level: 'Intermediate',
        description: 'Socket programming, client-server applications, network APIs'
      }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      {
        name: 'Docker',
        level: 'Intermediate',
        description: 'Containerization, Dockerfiles, image management, container orchestration basics'
      },
      {
        name: 'Git',
        level: 'Advanced',
        description: 'Version control, branching, merging, rebasing, collaborative development'
      },
      {
        name: 'CI/CD',
        level: 'Intermediate',
        description: 'Continuous integration, continuous deployment, pipeline automation, GitHub Actions'
      },
      {
        name: 'Cloud Platforms',
        level: 'Beginner',
        description: 'AWS/Azure/GCP basics, cloud services, infrastructure as a service'
      },
      {
        name: 'Linux Administration',
        level: 'Intermediate',
        description: 'System administration, shell scripting, package management, service management'
      }
    ]
  },
  {
    category: 'Mathematics & Theory',
    items: [
      {
        name: 'Discrete Mathematics',
        level: 'Advanced',
        experience: 'University coursework',
        description: 'Logic, set theory, combinatorics, graph theory, proof techniques'
      },
      {
        name: 'Linear Algebra',
        level: 'Intermediate',
        description: 'Vectors, matrices, linear transformations, eigenvalues, computer graphics applications'
      },
      {
        name: 'Statistics',
        level: 'Intermediate',
        description: 'Probability, statistical inference, hypothesis testing, data analysis'
      },
      {
        name: 'Algorithm Analysis',
        level: 'Advanced',
        description: 'Big O notation, time/space complexity, asymptotic analysis, algorithm efficiency'
      },
      {
        name: 'Formal Languages',
        level: 'Intermediate',
        description: 'Automata theory, regular expressions, context-free grammars, compilers theory'
      },
      {
        name: 'Computability Theory',
        level: 'Intermediate',
        description: 'Turing machines, computational complexity, P vs NP, decidability'
      }
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      {
        name: 'Visual Studio',
        level: 'Advanced',
        experience: 'Professional use',
        description: 'C# development, debugging, extensions, .NET ecosystem'
      },
      {
        name: 'IntelliJ IDEA',
        level: 'Intermediate',
        description: 'Java development, debugging, refactoring, productivity tools'
      },
      {
        name: 'VS Code',
        level: 'Advanced',
        description: 'Code editor, extensions, debugging, version control integration'
      },
      {
        name: 'Android Studio',
        level: 'Intermediate',
        description: 'Android development, emulator, debugging, UI design tools'
      },
      {
        name: 'Postman',
        level: 'Intermediate',
        description: 'API testing, REST client, automated testing, API documentation'
      },
      {
        name: 'Figma',
        level: 'Beginner',
        description: 'UI/UX design, prototyping, design systems, collaboration tools'
      },
      {
        name: 'JUnit',
        level: 'Intermediate',
        description: 'Unit testing framework, test automation, TDD practices'
      },
      {
        name: 'Selenium',
        level: 'Beginner',
        description: 'Web automation testing, browser testing, test automation frameworks'
      }
    ]
  },
  {
    category: 'Project Management',
    items: [
      {
        name: 'IT Project Coordination',
        level: 'Intermediate',
        experience: 'CHUS internship',
        description: 'Project planning, vendor management, resource allocation, healthcare IT projects'
      },
      {
        name: 'Agile Methodology',
        level: 'Advanced',
        description: 'Scrum framework, sprint planning, backlog grooming, retrospective facilitation'
      },
      {
        name: 'Team Collaboration',
        level: 'Expert',
        description: 'Cross-functional teamwork, communication, conflict resolution, leadership'
      },
      {
        name: 'Documentation',
        level: 'Advanced',
        description: 'Technical documentation, project documentation, API documentation, user manuals'
      },
      {
        name: 'Requirements Analysis',
        level: 'Intermediate',
        description: 'Requirement gathering, use case analysis, stakeholder communication'
      }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      {
        name: 'Bilingual Communication',
        level: 'Expert',
        description: 'French and English proficiency, technical documentation, client communication'
      },
      {
        name: 'Problem Solving',
        level: 'Advanced',
        description: 'Analytical thinking, technical troubleshooting, creative solutions, debugging'
      },
      {
        name: 'Time Management',
        level: 'Advanced',
        description: 'Task prioritization, deadline management, efficiency, multi-tasking'
      },
      {
        name: 'Adaptability',
        level: 'Expert',
        description: 'Quick learning, flexibility in changing environments, technology adoption'
      },
      {
        name: 'Teamwork',
        level: 'Expert',
        description: 'Collaboration, peer programming, knowledge sharing, team leadership'
      },
      {
        name: 'Communication',
        level: 'Advanced',
        description: 'Technical presentations, documentation, client interaction, team meetings'
      },
      {
        name: 'Leadership',
        level: 'Intermediate',
        description: 'Project leadership, mentoring, decision making, team motivation'
      },
      {
        name: 'Critical Thinking',
        level: 'Advanced',
        description: 'Analytical reasoning, logical analysis, decision making, problem decomposition'
      }
    ]
  }
];