/**
 * File: projectsData.ts
 * Purpose: Data file: projectsData. Contains static data, configuration, or mock information used across the application.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

export type ProjectCategory = 
  | "All"
  | "Highway Lighting"
  | "Toll Plaza"
  | "Smart Traffic"
  | "Solar Lighting"
  | "Street Lighting"
  | "High Mast"
  | "Infrastructure";

export interface ProjectData {
  id: string;
  name: string;
  location: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "p1",
    name: "Kawardha–Sigma",
    location: "Chhattisgarh",
    description: "Deployment of comprehensive highway lighting and safety infrastructure for the Kawardha–Sigma corridor.",
    category: "Highway Lighting",
    tags: ["Highway", "Lighting", "Safety"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p2",
    name: "Shahdol",
    location: "Madhya Pradesh",
    description: "Installation of high mast lighting and toll management systems at key junctions in Shahdol.",
    category: "High Mast",
    tags: ["High Mast", "Toll", "Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1513828742140-ccaa28f337d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p3",
    name: "Jabalpur–Barela",
    location: "Madhya Pradesh",
    description: "Implementation of advanced street lighting and smart traffic monitoring systems.",
    category: "Street Lighting",
    tags: ["Street Lighting", "Smart City"],
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p4",
    name: "Haata",
    location: "Uttar Pradesh",
    description: "Development of infrastructure including solar lighting solutions for rural and semi-urban connectivity.",
    category: "Solar Lighting",
    tags: ["Solar", "Rural", "Green Energy"],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p5",
    name: "Mandla–Chilpi",
    location: "Madhya Pradesh / Chhattisgarh",
    description: "Highway illumination project aimed at reducing nighttime accidents along the forested corridor.",
    category: "Highway Lighting",
    tags: ["Highway", "Illumination"],
    imageUrl: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p6",
    name: "Amritsar Road Project",
    location: "Punjab",
    description: "Comprehensive toll plaza construction and smart traffic management system deployment.",
    category: "Toll Plaza",
    tags: ["Toll Plaza", "Traffic Management"],
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p7",
    name: "Lumding–Maibong (NH-54E)",
    location: "Assam",
    description: "Infrastructure development including slope stabilization and high mast lighting in hilly terrain.",
    category: "Infrastructure",
    tags: ["NH-54E", "Hill Terrain"],
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p8",
    name: "Sitarganj",
    location: "Uttarakhand",
    description: "Industrial estate infrastructure upgrade with smart traffic and street lighting.",
    category: "Smart Traffic",
    tags: ["Industrial", "Smart Traffic"],
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p9",
    name: "Uncha Nagla–Dholpur (NH123)",
    location: "Rajasthan",
    description: "Highway expansion support with advanced toll plaza systems and highway lighting.",
    category: "Toll Plaza",
    tags: ["NH123", "Toll Solutions"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p10",
    name: "Bongaigaon",
    location: "Assam",
    description: "City-wide street lighting modernization using energy-efficient LED and solar solutions.",
    category: "Street Lighting",
    tags: ["City", "LED", "Modernization"],
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p11",
    name: "Manoharpur–Dausa",
    location: "Rajasthan",
    description: "Implementation of smart traffic monitoring and incident detection systems on the highway.",
    category: "Smart Traffic",
    tags: ["Highway", "Monitoring"],
    imageUrl: "https://images.unsplash.com/photo-1513828742140-ccaa28f337d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p12",
    name: "Cooch Behar",
    location: "West Bengal",
    description: "High mast lighting installation at major intersections and public squares.",
    category: "High Mast",
    tags: ["Intersections", "Public Square"],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p13",
    name: "Eastern Peripheral Expressway PKG III – Dasna",
    location: "Uttar Pradesh",
    description: "Complete intelligent transportation system (ITS) and toll plaza infrastructure.",
    category: "Infrastructure",
    tags: ["Expressway", "ITS", "Toll"],
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p14",
    name: "Hapur Bypass–Moradabad Section (NH24)",
    location: "Uttar Pradesh",
    description: "Highway lighting and toll management system upgrade for heavy traffic volume.",
    category: "Highway Lighting",
    tags: ["NH24", "Bypass", "Heavy Traffic"],
    imageUrl: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p15",
    name: "Silchar (NH44)",
    location: "Assam",
    description: "Critical infrastructure deployment including slope protection and solar lighting.",
    category: "Solar Lighting",
    tags: ["NH44", "Solar", "Protection"],
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p16",
    name: "Tallewal–Barnala–Silos (NH71)",
    location: "Punjab",
    description: "Advanced toll plaza construction and weigh-in-motion system installation.",
    category: "Toll Plaza",
    tags: ["NH71", "Weigh-in-Motion"],
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p17",
    name: "Faizabad Road Project (NH330)",
    location: "Uttar Pradesh",
    description: "Smart traffic management and incident detection along the NH330 corridor.",
    category: "Smart Traffic",
    tags: ["NH330", "Incident Detection"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p18",
    name: "Sisiya–Nanpara Section (NH730)",
    location: "Uttar Pradesh",
    description: "Installation of high mast lighting and street lighting for improved visibility.",
    category: "High Mast",
    tags: ["NH730", "Visibility"],
    imageUrl: "https://images.unsplash.com/photo-1513828742140-ccaa28f337d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p19",
    name: "Puranpur–Khutar Section (NH730)",
    location: "Uttar Pradesh",
    description: "Comprehensive highway lighting project spanning the entire section.",
    category: "Highway Lighting",
    tags: ["NH730", "Lighting"],
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p20",
    name: "Krishna Nagar–Berhampur (NH34)",
    location: "West Bengal",
    description: "Toll plaza management system and IT infrastructure deployment.",
    category: "Toll Plaza",
    tags: ["NH34", "IT Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p21",
    name: "Salasar–Nagaur (NH65)",
    location: "Rajasthan",
    description: "Solar street lighting installation across the arid highway stretch.",
    category: "Solar Lighting",
    tags: ["NH65", "Arid", "Solar"],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p22",
    name: "Dudu–Malpura–Toda Rai Singh–Chhan Road",
    location: "Rajasthan",
    description: "State highway infrastructure upgrade including smart traffic systems.",
    category: "Infrastructure",
    tags: ["State Highway", "Upgrade"],
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p23",
    name: "Lucknow Outer Ring Road",
    location: "Uttar Pradesh",
    description: "Major ITS deployment, toll plazas, and comprehensive highway lighting.",
    category: "Infrastructure",
    tags: ["Ring Road", "ITS", "Toll"],
    imageUrl: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p24",
    name: "Kota–Darah Section (NH12)",
    location: "Rajasthan",
    description: "High mast lighting and street lighting at critical junctions.",
    category: "High Mast",
    tags: ["NH12", "Junctions"],
    imageUrl: "https://images.unsplash.com/photo-1513828742140-ccaa28f337d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p25",
    name: "Gorakhpur Bypass (NH28)",
    location: "Uttar Pradesh",
    description: "Highway illumination and traffic monitoring for the bypass route.",
    category: "Highway Lighting",
    tags: ["NH28", "Bypass", "Monitoring"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p26",
    name: "Fatuah",
    location: "Bihar",
    description: "Smart city street lighting and intersection traffic management.",
    category: "Smart Traffic",
    tags: ["Smart City", "Intersection"],
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p27",
    name: "Talgaon–Kalmath",
    location: "Maharashtra",
    description: "Rural connectivity infrastructure including solar lighting solutions.",
    category: "Solar Lighting",
    tags: ["Rural", "Connectivity"],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p28",
    name: "Bhopal–Biaora (NH12)",
    location: "Madhya Pradesh",
    description: "Toll plaza construction and highway lighting along the NH12 corridor.",
    category: "Toll Plaza",
    tags: ["NH12", "Toll", "Lighting"],
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
  }
];
