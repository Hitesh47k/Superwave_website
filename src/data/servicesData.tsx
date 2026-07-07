/**
 * File: servicesData.tsx
 * Purpose: Data file: servicesData. Contains static data, configuration, or mock information used across the application.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { 
  Car, Activity, Camera, Network, Database, Globe, LayoutDashboard, Calculator, ShieldCheck,
  Code2, Cloud, Smartphone, PieChart, Briefcase, Bot, 
  BrainCircuit, Zap, BarChart3, LineChart, FileText, Search,
  Server, Cpu, Lock, HeadphonesIcon, Settings, CheckCircle2
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: "toll",
    title: "Toll Solutions",
    description: "Advanced toll collection and management systems designed to optimize traffic flow, reduce revenue leakage, and enhance operational efficiency at toll plazas nationwide.",
    bannerTitle: "Next-Generation Toll Management",
    bannerSubtitle: "Streamline operations with our comprehensive ETC and FASTag solutions.",
    intro: [
      "Superwave Communication & InfraSolution Limited (SCAIL) brings over a decade of expertise in delivering end-to-end Toll Management Systems. We specialize in automating toll collection, ensuring high-speed processing, and integrating modern payment mechanisms.",
      "Our systems are built to handle high-volume traffic with 99.9% accuracy, offering real-time analytics, central monitoring, and seamless FASTag integration. We empower toll operators to reduce wait times, prevent fraud, and maximize revenue capture."
    ],
    whyChooseUs: [
      "Proven track record with 500+ ETC lanes deployed.",
      "99.9% system uptime and accuracy.",
      "In-house hardware and software integration.",
      "24/7 centralized monitoring and support."
    ],
    services: [
      {
        id: "etc",
        title: "Electronic Toll Collection (ETC)",
        icon: <Car className="w-8 h-8" />,
        shortDesc: "Automated tolling systems for seamless vehicle passage without cash transactions.",
        features: ["RFID Integration", "Cashless Transactions", "Real-time Vehicle Classification"],
        benefits: ["Reduced congestion", "Lower operational costs", "Enhanced transparency"],
        industries: ["Highways", "Expressways", "Bridges"],
        technologies: ["RFID", "IoT Sensors", "Edge Computing"]
      },
      {
        id: "fastag",
        title: "FASTag Integration & Management",
        icon: <Zap className="w-8 h-8" />,
        shortDesc: "End-to-end FASTag solutions including acquiring, issuing, and processing.",
        features: ["NPCI Integration", "Wallet Management", "Instant Deduction"],
        benefits: ["Interoperability", "Quick processing", "Cashless convenience"],
        industries: ["Toll Plazas", "Parking Operations"],
        technologies: ["NPCI APIs", "Secure Payment Gateways"]
      },
      {
        id: "tms",
        title: "Toll Plaza Automation",
        icon: <Settings className="w-8 h-8" />,
        shortDesc: "Comprehensive hardware and software automation for plaza operations.",
        features: ["Boom Barrier Control", "User Fare Display (UFD)", "Traffic Light Control"],
        benefits: ["Eliminate manual errors", "Faster throughput", "Audit trails"],
        industries: ["Transport Infrastructure"],
        technologies: ["PLC/SCADA", "Embedded Systems"]
      },
      {
        id: "automation",
        title: "Toll Lane Control Systems",
        icon: <ShieldCheck className="w-8 h-8" />,
        shortDesc: "Intelligent systems to monitor and control individual toll lanes.",
        features: ["Lane Computer software", "Violation Alarm", "Receipt Printers"],
        benefits: ["Revenue security", "Operator efficiency", "Fraud prevention"],
        industries: ["Toll Operators"],
        technologies: ["Real-time OS", "Industrial PCs"]
      },
      {
        id: "anpr",
        title: "Automatic Number Plate Recognition (ANPR)",
        icon: <Camera className="w-8 h-8" />,
        shortDesc: "High-accuracy plate reading for tolling and security.",
        features: ["99%+ Accuracy", "Night Vision IR", "Multi-lane capturing"],
        benefits: ["Automated auditing", "Law enforcement integration", "Blacklist tracking"],
        industries: ["Highways", "Smart Cities"],
        technologies: ["Deep Learning", "Optical Character Recognition"]
      },
      {
        id: "avc",
        title: "Vehicle Classification Systems (AVC)",
        icon: <Activity className="w-8 h-8" />,
        shortDesc: "Profile-based classification to determine accurate toll fares.",
        features: ["Treadle & Light Curtain", "Axle Counting", "Volumetric Profiling"],
        benefits: ["Accurate tariff application", "No revenue leakage", "Audit-proof operations"],
        industries: ["Toll Agencies"],
        technologies: ["LiDAR", "Infrared Sensors"]
      },
      {
        id: "analytics",
        title: "Traffic Monitoring & Analytics",
        icon: <PieChart className="w-8 h-8" />,
        shortDesc: "Data-driven insights into traffic patterns and plaza performance.",
        features: ["Peak Hour Analysis", "Revenue Forecasting", "Queue Length Detection"],
        benefits: ["Better resource planning", "Data-driven decisions"],
        industries: ["Transport Authorities"],
        technologies: ["Big Data", "Predictive Analytics"]
      },
      {
        id: "revenue",
        title: "Toll Revenue Management",
        icon: <Briefcase className="w-8 h-8" />,
        shortDesc: "Secure systems to track, reconcile, and audit collected tolls.",
        features: ["Cash & Cashless Reconciliation", "Shift Management", "Financial Reporting"],
        benefits: ["Financial accuracy", "Simplified audits", "Fraud detection"],
        industries: ["Toll Concessionaires"],
        technologies: ["Enterprise Database", "Secure Encryption"]
      },
      {
        id: "monitoring",
        title: "Central Monitoring Dashboard",
        icon: <BarChart3 className="w-8 h-8" />,
        shortDesc: "Single pane of glass for multi-plaza monitoring.",
        features: ["Live Video Feeds", "Equipment Status", "Alert Management"],
        benefits: ["Remote troubleshooting", "Rapid incident response"],
        industries: ["NHAI", "State Roadways"],
        technologies: ["React", "WebSockets", "Cloud Hosting"]
      },
      {
        id: "support",
        title: "Maintenance & Support Services",
        icon: <HeadphonesIcon className="w-8 h-8" />,
        shortDesc: "Round-the-clock technical support and field maintenance.",
        features: ["Preventive Maintenance", "SLA-driven Support", "Spare Parts Management"],
        benefits: ["Maximized uptime", "Extended hardware life"],
        industries: ["All Infrastructure Projects"],
        technologies: ["Ticketing Systems", "Field Service Apps"]
      }
    ]
  },
  {
    id: "hardware",
    title: "Hardware Solutions",
    description: "Robust, industrial-grade hardware infrastructure for smart cities, highways, and enterprise environments.",
    bannerTitle: "Enterprise-Grade Hardware Infrastructure",
    bannerSubtitle: "Reliable, scalable, and secure hardware for critical operations.",
    intro: [
      "We provide robust hardware solutions that form the backbone of modern infrastructure. From high-definition surveillance networks to data center deployments, SCAIL delivers hardware that performs under the most demanding conditions.",
      "Our partnerships with leading global OEMs ensure that you receive state-of-the-art equipment backed by our expert installation, integration, and maintenance services."
    ],
    whyChooseUs: [
      "End-to-end procurement, installation, and integration.",
      "Industrial-grade equipment for harsh environments.",
      "Seamless integration with existing IT systems.",
      "Comprehensive warranties and AMC support."
    ],
    services: [
      {
        id: "cctv",
        title: "CCTV Surveillance Systems",
        icon: <Camera className="w-8 h-8" />,
        shortDesc: "High-definition IP surveillance for wide-area monitoring.",
        features: ["PTZ Cameras", "Night Vision", "Centralized VMS"],
        benefits: ["Enhanced security", "Incident evidence", "Deterrence"],
        industries: ["Smart Cities", "Highways", "Campuses"],
        technologies: ["IP Networking", "Video Analytics"]
      },
      {
        id: "biometric",
        title: "Access Control & Biometric Systems",
        icon: <Lock className="w-8 h-8" />,
        shortDesc: "Secure access management for restricted areas.",
        features: ["Fingerprint/Face Recognition", "Turnstiles", "Visitor Management"],
        benefits: ["Prevent unauthorized entry", "Time & attendance tracking"],
        industries: ["Corporate Offices", "Data Centers"],
        technologies: ["Biometric Scanners", "RFID"]
      },
      {
        id: "network",
        title: "Network Infrastructure",
        icon: <Network className="w-8 h-8" />,
        shortDesc: "High-speed wired and wireless network deployments.",
        features: ["Fiber Optics", "Managed Switches", "Wi-Fi 6"],
        benefits: ["Reliable connectivity", "High bandwidth", "Low latency"],
        industries: ["Enterprises", "Toll Plazas"],
        technologies: ["Cisco", "Aruba", "Optical Fiber"]
      },
      {
        id: "servers",
        title: "Servers & Storage",
        icon: <Server className="w-8 h-8" />,
        shortDesc: "Enterprise computing and data storage solutions.",
        features: ["Rack/Blade Servers", "SAN/NAS Storage", "Virtualization"],
        benefits: ["High performance", "Data redundancy", "Scalability"],
        industries: ["Data Centers", "IT Hubs"],
        technologies: ["RAID", "VMware", "Intel Xeon"]
      },
      {
        id: "smartcity",
        title: "Smart City Hardware",
        icon: <Globe className="w-8 h-8" />,
        shortDesc: "IoT devices and sensors for urban automation.",
        features: ["Environmental Sensors", "Smart Poles", "Public Address Systems"],
        benefits: ["Improved citizen services", "Resource optimization"],
        industries: ["Municipalities"],
        technologies: ["IoT", "LoRaWAN"]
      },
      {
        id: "traffic",
        title: "Traffic Monitoring Equipment",
        icon: <Activity className="w-8 h-8" />,
        shortDesc: "Sensors and displays for roadway management.",
        features: ["Variable Message Signs (VMS)", "Radar Speed Signs", "Weather Stations"],
        benefits: ["Driver information", "Speed reduction", "Weather alerts"],
        industries: ["Highways"],
        technologies: ["LED Displays", "Doppler Radar"]
      },
      {
        id: "industrial",
        title: "Industrial Networking Devices",
        icon: <Cpu className="w-8 h-8" />,
        shortDesc: "Ruggedized switches and routers for harsh environments.",
        features: ["Extreme Temperature Tolerance", "Din-rail Mounting", "PoE+ Support"],
        benefits: ["Uninterrupted operation in harsh weather", "Reduced failure rate"],
        industries: ["Manufacturing", "Outdoor Infrastructure"],
        technologies: ["Ruggedized Electronics"]
      }
    ]
  },
  {
    id: "software",
    title: "Software Solutions",
    description: "Custom software applications tailored to optimize your business processes, enhance customer engagement, and drive digital transformation.",
    bannerTitle: "Bespoke Software Engineering",
    bannerSubtitle: "Transform your business with intelligent, scalable software applications.",
    intro: [
      "In a digital-first world, off-the-shelf software rarely fits unique business needs. We build custom software solutions designed exactly for your workflows, ensuring seamless adoption and immediate ROI.",
      "From complex ERP systems to sleek mobile applications, our engineering teams use modern tech stacks to deliver secure, fast, and scalable software products."
    ],
    whyChooseUs: [
      "Agile development methodology.",
      "Modern tech stack (React, Node.js, Python).",
      "Focus on UI/UX and user adoption.",
      "Stringent security and QA testing."
    ],
    services: [
      {
        id: "custom-software",
        title: "Custom Software Development",
        icon: <Code2 className="w-8 h-8" />,
        shortDesc: "Tailor-made software to solve your specific business challenges.",
        features: ["Requirements Engineering", "Custom Workflows", "Legacy Modernization"],
        benefits: ["Perfect fit for your process", "Competitive advantage"],
        industries: ["All Industries"],
        technologies: ["Java", ".NET", "Python", "Node.js"]
      },
      {
        id: "web-mobile",
        title: "Web & Mobile Applications",
        icon: <Smartphone className="w-8 h-8" />,
        shortDesc: "Responsive web apps and native/cross-platform mobile apps.",
        features: ["PWA", "iOS & Android", "High-performance UI"],
        benefits: ["Reach customers anywhere", "Enhanced engagement"],
        industries: ["Retail", "Logistics", "Healthcare"],
        technologies: ["React", "React Native", "Flutter"]
      },
      {
        id: "erp-crm",
        title: "ERP & CRM Solutions",
        icon: <Database className="w-8 h-8" />,
        shortDesc: "Centralized systems to manage resources and customer relationships.",
        features: ["Inventory Management", "Sales Tracking", "HR Modules"],
        benefits: ["Data centralization", "Process automation"],
        industries: ["Manufacturing", "Services"],
        technologies: ["PostgreSQL", "Cloud Architecture"]
      },
      {
        id: "dashboards",
        title: "Dashboard & Reporting Systems",
        icon: <LayoutDashboard className="w-8 h-8" />,
        shortDesc: "Interactive data visualization for business intelligence.",
        features: ["Custom Metrics", "Real-time Data", "Export Capabilities"],
        benefits: ["Actionable insights", "Performance tracking"],
        industries: ["Management", "Finance"],
        technologies: ["D3.js", "Recharts", "PowerBI Integration"]
      },
      {
        id: "api",
        title: "API Integration",
        icon: <Zap className="w-8 h-8" />,
        shortDesc: "Connect disparate systems for seamless data flow.",
        features: ["REST/GraphQL APIs", "Third-party Integrations", "Secure Gateways"],
        benefits: ["Automated sync", "Eliminate double-entry"],
        industries: ["Fintech", "E-commerce"],
        technologies: ["OAuth", "GraphQL", "RESTful Architecture"]
      },
      {
        id: "cloud-apps",
        title: "Cloud-Based Applications",
        icon: <Cloud className="w-8 h-8" />,
        shortDesc: "Scalable SaaS applications hosted on modern cloud infrastructure.",
        features: ["Multi-tenant Architecture", "Auto-scaling", "High Availability"],
        benefits: ["Lower IT overhead", "Global accessibility"],
        industries: ["SaaS Providers", "Enterprises"],
        technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
      },
      {
        id: "maintenance",
        title: "Software Maintenance & Support",
        icon: <Settings className="w-8 h-8" />,
        shortDesc: "Ongoing updates, bug fixes, and feature enhancements.",
        features: ["Security Patches", "Performance Tuning", "Version Upgrades"],
        benefits: ["Maximized lifespan", "Reduced downtime"],
        industries: ["All Software Users"],
        technologies: ["CI/CD", "Automated Testing"]
      }
    ]
  },
  {
    id: "ai",
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions to automate tasks, generate insights, and build smarter products.",
    bannerTitle: "Applied Artificial Intelligence",
    bannerSubtitle: "Leverage the power of AI to transform data into intelligence.",
    intro: [
      "Artificial Intelligence is no longer a future concept—it's a present necessity. We help organizations integrate AI into their daily operations, from intelligent computer vision systems on highways to generative AI tools in the back office.",
      "Our AI solutions are practical, focused on ROI, and designed to work securely with your proprietary data."
    ],
    whyChooseUs: [
      "Expertise in Deep Learning and Generative AI.",
      "Custom model training on your data.",
      "Seamless integration with existing software.",
      "Ethical and secure AI implementations."
    ],
    services: [
      {
        id: "ai-assistant",
        title: "AI Assistant",
        icon: <Bot className="w-8 h-8" />,
        shortDesc: "Intelligent conversational agents for customer support and internal workflows.",
        features: ["Context-Aware Responses", "Multi-language Support", "Task Automation"],
        benefits: ["24/7 availability", "Reduced support costs", "Faster resolution"],
        industries: ["Customer Service", "IT Helpdesk"],
        technologies: ["LLMs", "RAG", "NLP"]
      },
      {
        id: "chatbot",
        title: "AI Chatbot Development",
        icon: <HeadphonesIcon className="w-8 h-8" />,
        shortDesc: "Custom chatbots trained on your company knowledge base.",
        features: ["Website Integration", "Omnichannel", "Human Handoff"],
        benefits: ["Lead generation", "Instant customer engagement"],
        industries: ["E-commerce", "Real Estate"],
        technologies: ["Vector Databases", "Conversational AI"]
      },
      {
        id: "proposal",
        title: "AI Proposal Generator",
        icon: <FileText className="w-8 h-8" />,
        shortDesc: "Automate the creation of complex business proposals.",
        features: ["Template Matching", "Auto-formatting", "Content Suggestion"],
        benefits: ["Save hours of manual work", "Consistent quality"],
        industries: ["B2B Sales", "Consulting"],
        technologies: ["Generative AI", "Document Parsing"]
      },
      {
        id: "cost-estimator",
        title: "AI Project Cost Estimator",
        icon: <Calculator className="w-8 h-8" />,
        shortDesc: "Predict project costs based on historical data and parameters.",
        features: ["Variable Input Analysis", "Risk Factoring", "Confidence Scoring"],
        benefits: ["More accurate bidding", "Higher profit margins"],
        industries: ["Construction", "IT Services"],
        technologies: ["Machine Learning", "Regression Models"]
      },
      {
        id: "computer-vision",
        title: "Computer Vision Solutions",
        icon: <Camera className="w-8 h-8" />,
        shortDesc: "Extract insights from images and video feeds in real-time.",
        features: ["Object Detection", "Facial Recognition", "Anomaly Detection"],
        benefits: ["Automated inspection", "Enhanced security"],
        industries: ["Manufacturing", "Security"],
        technologies: ["OpenCV", "PyTorch", "TensorFlow"]
      },
      {
        id: "anpr-intelligence",
        title: "ANPR Intelligence",
        icon: <Search className="w-8 h-8" />,
        shortDesc: "AI-enhanced number plate recognition with fuzzy matching.",
        features: ["Damaged Plate Recognition", "State-wise Formatting", "Speed Calculation"],
        benefits: ["Higher accuracy than standard ANPR", "Less manual review"],
        industries: ["Tolling", "Traffic Police"],
        technologies: ["Deep Neural Networks", "Edge AI"]
      },
      {
        id: "vehicle-ai",
        title: "Vehicle Classification AI",
        icon: <Car className="w-8 h-8" />,
        shortDesc: "Visual classification of vehicles using camera feeds.",
        features: ["Make/Model Recognition", "Color Detection", "Axle Counting via Video"],
        benefits: ["Reduces need for hardware sensors", "Visual proof of class"],
        industries: ["Highways", "Parking"],
        technologies: ["CNNs", "Video Analytics"]
      },
      {
        id: "incident",
        title: "Incident Detection",
        icon: <ShieldCheck className="w-8 h-8" />,
        shortDesc: "Automatic detection of accidents, wrong-way driving, or stopped vehicles.",
        features: ["Real-time Alerts", "Traffic Jam Detection", "Pedestrian Tracking"],
        benefits: ["Faster emergency response", "Prevent secondary accidents"],
        industries: ["Smart Highways", "Tunnels"],
        technologies: ["Real-time Video Processing"]
      },
      {
        id: "predictive",
        title: "Predictive Analytics",
        icon: <LineChart className="w-8 h-8" />,
        shortDesc: "Forecast trends, maintenance needs, and revenue.",
        features: ["Time Series Forecasting", "Churn Prediction", "Demand Planning"],
        benefits: ["Proactive decision making", "Optimized inventory"],
        industries: ["Retail", "Logistics", "Maintenance"],
        technologies: ["Scikit-Learn", "XGBoost"]
      },
      {
        id: "knowledge",
        title: "AI Knowledge Search",
        icon: <Search className="w-8 h-8" />,
        shortDesc: "Semantic search across your enterprise documents.",
        features: ["Natural Language Queries", "Source Citation", "Access Control"],
        benefits: ["Find information instantly", "Eliminate data silos"],
        industries: ["Legal", "Research", "Enterprise"],
        technologies: ["Semantic Search", "Embeddings"]
      }
    ]
  },
  {
    id: "it",
    title: "IT Services",
    description: "Comprehensive IT consulting, management, and support to ensure your technology infrastructure is secure, reliable, and aligned with your business goals.",
    bannerTitle: "Managed IT Services & Consulting",
    bannerSubtitle: "Empowering your business with robust IT infrastructure and support.",
    intro: [
      "Managing IT infrastructure shouldn't distract you from your core business. We provide end-to-end IT services, acting as your trusted technology partner to ensure seamless operations.",
      "From strategic consulting and cloud migration to 24/7 helpdesk support and cybersecurity, our certified experts keep your systems running securely and efficiently."
    ],
    whyChooseUs: [
      "Certified IT professionals and engineers.",
      "Proactive monitoring to prevent issues before they occur.",
      "Customized SLAs tailored to your business needs.",
      "Comprehensive approach covering infrastructure to cybersecurity."
    ],
    services: [
      {
        id: "consulting",
        title: "IT Consulting",
        icon: <Briefcase className="w-8 h-8" />,
        shortDesc: "Strategic guidance to align IT with your business objectives.",
        features: ["Digital Transformation Roadmaps", "IT Audits", "Vendor Management"],
        benefits: ["Optimized IT spend", "Future-proof technology strategy"],
        industries: ["All Sectors"],
        technologies: ["ITIL", "Enterprise Architecture"]
      },
      {
        id: "cloud",
        title: "Cloud Solutions",
        icon: <Cloud className="w-8 h-8" />,
        shortDesc: "Migration, management, and optimization of cloud environments.",
        features: ["IaaS / PaaS", "Cloud Migration", "Cost Optimization"],
        benefits: ["Scalability", "Reduced CAPEX", "Accessibility"],
        industries: ["Startups", "Enterprises"],
        technologies: ["AWS", "Azure", "Google Cloud"]
      },
      {
        id: "security",
        title: "Cybersecurity Services",
        icon: <ShieldCheck className="w-8 h-8" />,
        shortDesc: "Protect your data and infrastructure from cyber threats.",
        features: ["Vulnerability Assessments", "Endpoint Protection", "Security Awareness Training"],
        benefits: ["Data protection", "Compliance adherence", "Risk mitigation"],
        industries: ["Finance", "Healthcare", "Government"],
        technologies: ["Firewalls", "SIEM", "Zero Trust Architecture"]
      },
      {
        id: "network-management",
        title: "Network Management",
        icon: <Network className="w-8 h-8" />,
        shortDesc: "Proactive monitoring and administration of corporate networks.",
        features: ["Performance Monitoring", "Bandwidth Management", "VPN Setup"],
        benefits: ["High availability", "Optimized performance", "Secure remote access"],
        industries: ["Corporate Offices", "Distributed Teams"],
        technologies: ["SNMP", "SD-WAN"]
      },
      {
        id: "backup",
        title: "Data Backup & Disaster Recovery",
        icon: <Database className="w-8 h-8" />,
        shortDesc: "Ensure business continuity in the face of data loss or disasters.",
        features: ["Automated Backups", "Failover Systems", "Recovery Testing"],
        benefits: ["Minimized downtime", "Data integrity", "Peace of mind"],
        industries: ["All Businesses"],
        technologies: ["Cloud Storage", "Replication"]
      },
      {
        id: "managed-it",
        title: "Managed IT Services",
        icon: <Settings className="w-8 h-8" />,
        shortDesc: "Outsourced management of your IT operations.",
        features: ["24/7 Monitoring", "Patch Management", "Asset Tracking"],
        benefits: ["Predictable IT costs", "Focus on core business"],
        industries: ["SMEs", "Enterprises"],
        technologies: ["RMM Tools", "ITSM Platforms"]
      },
      {
        id: "support",
        title: "Technical Support",
        icon: <HeadphonesIcon className="w-8 h-8" />,
        shortDesc: "Responsive helpdesk for end-user issues.",
        features: ["Tier 1/2/3 Support", "Remote Troubleshooting", "Ticketing System"],
        benefits: ["Quick issue resolution", "Improved employee productivity"],
        industries: ["All Workplaces"],
        technologies: ["Zendesk", "Jira Service Desk", "Remote Desktop"]
      },
      {
        id: "amc",
        title: "Annual Maintenance Contracts (AMC)",
        icon: <CheckCircle2 className="w-8 h-8" />,
        shortDesc: "Scheduled maintenance and priority support for hardware and software.",
        features: ["Preventive Maintenance Visits", "Priority Response Times", "Component Replacement"],
        benefits: ["Extended asset lifecycle", "Budget predictability"],
        industries: ["Infrastructure", "Corporate Facilities"],
        technologies: ["CMMS"]
      }
    ]
  }
];
