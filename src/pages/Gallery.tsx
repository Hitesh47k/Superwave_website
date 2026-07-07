/**
 * File: Gallery.tsx
 * Purpose: Page component for Gallery. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, ImageIcon, Search, Filter, SortDesc, Calendar, MapPin, Users } from 'lucide-react';

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: string;
  type: MediaType;
  src: string;
  thumbnail?: string;
  title: string;
  categories: string[];
  department?: string;
  designation?: string;
  employeeName?: string;
  description?: string;
  date?: string;
  location?: string;
  tags?: string[];
  timestamp: number;
}

const DEPARTMENTS = [
  "All Departments",
  "Software Development",
  "AI & Innovation",
  "Maintenance",
  "Operations",
  "Toll Operations",
  "Technical Support",
  "Network & Infrastructure",
  "Sales & Marketing",
  "Accountancy & Finance",
  "Human Resources (HR)",
  "Administration",
  "Project Management",
  "Quality Assurance (QA)",
  "Higher Authority / Management",
  "Training & Workshops",
  "Events & Celebrations"
];

const CATEGORIES = [
  "All Categories",
  ,
  "Infrastructure",
  "Events",
  "Technology",
  "Office",
  "Training",
  "Site Visit",
  "Corporate",
  "Team Activities",
  "Client Meetings"
];

const MEDIA: GalleryItem[] = [
  {
    "id": "1",
    "type": "image",
    "src": "../images/team/image_one",
    "title": "Software Development Update 1",
    "categories": [
      ,
      "Infrastructure"
    ],
    "department": "Software Development",
    "designation": "Engineer",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-3-2",
    "location": "Corporate Office",
    "tags": [
      ,
      "Infrastructure"
    ],
    "timestamp": 1781259568736
  },
  {
    "id": "2",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 2",
    "categories": [
      "Corporate"
    ],
    "department": "Software Development",
    "designation": "Lead",
    "employeeName": "David Lee",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-9-3",
    "location": "Corporate Office",
    "tags": [
      "Corporate"
    ],
    "timestamp": 1781016446868
  },
  {
    "id": "3",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 3",
    "categories": [
      "Events",
      "Team Activities"
    ],
    "department": "Software Development",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-8-21",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Team Activities"
    ],
    "timestamp": 1775540850272
  },
  {
    "id": "4",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 4",
    "categories": [
      ,
      "Infrastructure"
    ],
    "department": "Software Development",
    "designation": "Technician",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-9-15",
    "location": "Corporate Office",
    "tags": [
      ,
      "Infrastructure"
    ],
    "timestamp": 1775385621833
  },
  {
    "id": "5",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 5",
    "categories": [
      "Site Visit",
      "Office"
    ],
    "department": "Software Development",
    "designation": "Lead",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-4-14",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Office"
    ],
    "timestamp": 1781551308469
  },
  {
    "id": "6",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 6",
    "categories": [
      "Site Visit",
      "Infrastructure"
    ],
    "department": "Software Development",
    "designation": "Coordinator",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-10-24",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Infrastructure"
    ],
    "timestamp": 1775414250035
  },
  {
    "id": "7",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1503694978374-8a2fa6873b21?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 7",
    "categories": [
      "Team Activities"
    ],
    "department": "Software Development",
    "designation": "Specialist",
    "employeeName": "David Lee",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-12-10",
    "location": "Corporate Office",
    "tags": [
      "Team Activities"
    ],
    "timestamp": 1776262591941
  },
  {
    "id": "8",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Software Development Update 8",
    "categories": [
      "Corporate",
      "Technology"
    ],
    "department": "Software Development",
    "designation": "Technician",
    "description": "Exploring the latest developments and team achievements in Software Development.",
    "date": "2024-9-1",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Technology"
    ],
    "timestamp": 1780490009791
  },
  {
    "id": "9",
    "type": "image",
    "src": "../images/team/image_twelve.jpeg",
    "title": "AI & Innovation Update 1",
    "categories": [
      "Technology",
      "Infrastructure"
    ],
    "department": "AI & Innovation",
    "designation": "Specialist",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-4-17",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Infrastructure"
    ],
    "timestamp": 1782478065595
  },
  {
    "id": "10",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 2",
    "categories": [
      "Office",
      "Team Activities"
    ],
    "department": "AI & Innovation",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-6-7",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Team Activities"
    ],
    "timestamp": 1779110277677
  },
  {
    "id": "11",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 3",
    "categories": [
      "Team Activities",
      "Corporate"
    ],
    "department": "AI & Innovation",
    "designation": "Coordinator",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-6-21",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Corporate"
    ],
    "timestamp": 1776011021672
  },
  {
    "id": "12",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1503694978374-8a2fa6873b21?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 4",
    "categories": [
      "Office",
      "Client Meetings"
    ],
    "department": "AI & Innovation",
    "designation": "Lead",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-12-6",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Client Meetings"
    ],
    "timestamp": 1778902728873
  },
  {
    "id": "13",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 5",
    "categories": [
      "Site Visit",
      "Client Meetings"
    ],
    "department": "AI & Innovation",
    "designation": "Analyst",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-10-2",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Client Meetings"
    ],
    "timestamp": 1776505388653
  },
  {
    "id": "14",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 6",
    "categories": [
      "Training",
      "Team Activities"
    ],
    "department": "AI & Innovation",
    "designation": "Engineer",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-5-1",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Team Activities"
    ],
    "timestamp": 1775438641732
  },
  {
    "id": "15",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 7",
    "categories": [
      "Events",
      "Infrastructure"
    ],
    "department": "AI & Innovation",
    "designation": "Engineer",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-5-22",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Infrastructure"
    ],
    "timestamp": 1773575350698
  },
  {
    "id": "16",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1673847401561-fcd73a78a946?q=80&w=800&auto=format&fit=crop",
    "title": "AI & Innovation Update 8",
    "categories": [
      "Corporate"
    ],
    "department": "AI & Innovation",
    "designation": "Technician",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in AI & Innovation.",
    "date": "2024-7-8",
    "location": "Corporate Office",
    "tags": [
      "Corporate"
    ],
    "timestamp": 1774117700764
  },
  {
    "id": "17",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 1",
    "categories": [
      "Site Visit",
      "Events"
    ],
    "department": "Maintenance",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-4-28",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Events"
    ],
    "timestamp": 1778265460892
  },
  {
    "id": "18",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 2",
    "categories": [
      "Site Visit",
      "Corporate"
    ],
    "department": "Maintenance",
    "designation": "Analyst",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-9-4",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Corporate"
    ],
    "timestamp": 1775189767578
  },
  {
    "id": "19",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 3",
    "categories": [
      "Office",
      "Corporate"
    ],
    "department": "Maintenance",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-10-12",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Corporate"
    ],
    "timestamp": 1776487640018
  },
  {
    "id": "20",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 4",
    "categories": [
      "Client Meetings",
      "Training"
    ],
    "department": "Maintenance",
    "designation": "Director",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-9-13",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Training"
    ],
    "timestamp": 1781861386520
  },
  {
    "id": "21",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 5",
    "categories": [
      "Team Activities",
      "Office"
    ],
    "department": "Maintenance",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-5-12",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Office"
    ],
    "timestamp": 1774837886215
  },
  {
    "id": "22",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 6",
    "categories": [
      "Events",
      "Corporate"
    ],
    "department": "Maintenance",
    "designation": "Director",
    "employeeName": "David Lee",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-3-28",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Corporate"
    ],
    "timestamp": 1779082048216
  },
  {
    "id": "23",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 7",
    "categories": [
      "Client Meetings",
      
    ],
    "department": "Maintenance",
    "designation": "Specialist",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-11-5",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      
    ],
    "timestamp": 1775230855652
  },
  {
    "id": "24",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Maintenance Update 8",
    "categories": [
      "Technology",
      "Infrastructure"
    ],
    "department": "Maintenance",
    "designation": "Technician",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Maintenance.",
    "date": "2024-6-25",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Infrastructure"
    ],
    "timestamp": 1776825536193
  },
  {
    "id": "25",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    "title": "Operations Update 1",
    "categories": [
      ,
      "Office"
    ],
    "department": "Operations",
    "designation": "Specialist",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-2-17",
    "location": "Corporate Office",
    "tags": [
      ,
      "Office"
    ],
    "timestamp": 1775377697286
  },
  {
    "id": "26",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Operations Update 2",
    "categories": [
      "Site Visit",
      "Office"
    ],
    "department": "Operations",
    "designation": "Director",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-4-10",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Office"
    ],
    "timestamp": 1781835756154
  },
  {
    "id": "27",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    "title": "Operations Update 3",
    "categories": [
      "Technology",
      "Corporate"
    ],
    "department": "Operations",
    "designation": "Analyst",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-10-23",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Corporate"
    ],
    "timestamp": 1780251318965
  },
  {
    "id": "28",
    "type": "image",
    "src": "../images/team/image_two.jpg",
    "title": "Operations Update 4",
    "categories": [
      "Corporate",
      "Site Visit"
    ],
    "department": "Operations",
    "designation": "Director",
    "employeeName": "Olivia Parker",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-10-1",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Site Visit"
    ],
    "timestamp": 1782931257672
  },
  {
    "id": "29",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Operations Update 5",
    "categories": [
      "Client Meetings",
      "Events"
    ],
    "department": "Operations",
    "designation": "Specialist",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-1-20",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Events"
    ],
    "timestamp": 1774824450639
  },
  {
    "id": "30",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Operations Update 6",
    "categories": [
      "Events",
      "Training"
    ],
    "department": "Operations",
    "designation": "Analyst",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-10-13",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Training"
    ],
    "timestamp": 1781953727360
  },
  {
    "id": "31",
    "type": "image",
    "src": "../images/team/image_nineteen.jpeg",
    "title": "Operations Update 7",
    "categories": [
      "Events",
      "Technology"
    ],
    "department": "Operations",
    "designation": "Manager",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-4-2",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Technology"
    ],
    "timestamp": 1782376186443
  },
  {
    "id": "32",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Operations Update 8",
    "categories": [
      "Infrastructure",
      "Events"
    ],
    "department": "Operations",
    "designation": "Manager",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Operations.",
    "date": "2024-12-27",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Events"
    ],
    "timestamp": 1778582488979
  },
  {
    "id": "33",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Toll Operations Update 1",
    "categories": [
      "Team Activities",
      
    ],
    "department": "Toll Operations",
    "designation": "Lead",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-8-25",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      
    ],
    "timestamp": 1776190677877
  },
  {
    "id": "34",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Toll Operations Update 2",
    "categories": [
      "Client Meetings",
      
    ],
    "department": "Toll Operations",
    "designation": "Lead",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-12-24",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      
    ],
    "timestamp": 1779511246089
  },
  {
    "id": "35",
    "type": "image",
    "src": "../images/team/image_thirteen.jpeg",
    "title": "Toll Operations Update 3",
    "categories": [
      "Corporate",
      "Events"
    ],
    "department": "Toll Operations",
    "designation": "Manager",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-11-19",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Events"
    ],
    "timestamp": 1782410218181
  },
  {
    "id": "36",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Toll Operations Update 4",
    "categories": [
      "Client Meetings",
      
    ],
    "department": "Toll Operations",
    "designation": "Director",
    "employeeName": "Olivia Parker",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-2-2",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      
    ],
    "timestamp": 1782201372031
  },
  {
    "id": "37",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Toll Operations Update 5",
    "categories": [
      "Events",
      "Training"
    ],
    "department": "Toll Operations",
    "designation": "Lead",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-11-16",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Training"
    ],
    "timestamp": 1773599760885
  },
  {
    "id": "38",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    "title": "Toll Operations Update 6",
    "categories": [
      "Technology",
      "Office"
    ],
    "department": "Toll Operations",
    "designation": "Coordinator",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-12-7",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Office"
    ],
    "timestamp": 1773660074175
  },
  {
    "id": "39",
    "type": "image",
    "src": "../images/team/image_nineteen.jpeg",
    "title": "Toll Operations Update 7",
    "categories": [
      "Training",
      "Infrastructure"
    ],
    "department": "Toll Operations",
    "designation": "Technician",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-4-16",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Infrastructure"
    ],
    "timestamp": 1775454752250
  },
  {
    "id": "40",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Toll Operations Update 8",
    "categories": [
      "Training",
      
    ],
    "department": "Toll Operations",
    "designation": "Engineer",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Toll Operations.",
    "date": "2024-10-13",
    "location": "Corporate Office",
    "tags": [
      "Training",
      
    ],
    "timestamp": 1781002076040
  },
  {
    "id": "41",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 1",
    "categories": [
      ,
      "Infrastructure"
    ],
    "department": "Technical Support",
    "designation": "Engineer",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-7-22",
    "location": "Corporate Office",
    "tags": [
      ,
      "Infrastructure"
    ],
    "timestamp": 1781530107880
  },
  {
    "id": "42",
    "type": "image",
    "src": "../images/team/image_ten.jpeg",
    "title": "Technical Support Update 2",
    "categories": [
      "Events",
      "Corporate"
    ],
    "department": "Technical Support",
    "designation": "Engineer",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-1-28",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Corporate"
    ],
    "timestamp": 1782590429771
  },
  {
    "id": "43",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 3",
    "categories": [
      "Team Activities",
      
    ],
    "department": "Technical Support",
    "designation": "Director",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-1-12",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      
    ],
    "timestamp": 1776790721609
  },
  {
    "id": "44",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1673847401561-fcd73a78a946?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 4",
    "categories": [
      "Technology",
      "Events"
    ],
    "department": "Technical Support",
    "designation": "Coordinator",
    "employeeName": "Olivia Parker",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-6-19",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Events"
    ],
    "timestamp": 1782071151956
  },
  {
    "id": "45",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 5",
    "categories": [
      "Technology",
      "Events"
    ],
    "department": "Technical Support",
    "designation": "Director",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-5-8",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Events"
    ],
    "timestamp": 1776205844215
  },
  {
    "id": "46",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 6",
    "categories": [
      ,
      "Events"
    ],
    "department": "Technical Support",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-7-21",
    "location": "Corporate Office",
    "tags": [
      ,
      "Events"
    ],
    "timestamp": 1774929285082
  },
  {
    "id": "47",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 7",
    "categories": [
      "Infrastructure",
      "Site Visit"
    ],
    "department": "Technical Support",
    "designation": "Director",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-6-6",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Site Visit"
    ],
    "timestamp": 1775532987636
  },
  {
    "id": "48",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    "title": "Technical Support Update 8",
    "categories": [
      "Client Meetings",
      "Infrastructure"
    ],
    "department": "Technical Support",
    "designation": "Engineer",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Technical Support.",
    "date": "2024-11-11",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Infrastructure"
    ],
    "timestamp": 1781361111857
  },
  {
    "id": "49",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 1",
    "categories": [
      "Training",
      "Client Meetings"
    ],
    "department": "Network & Infrastructure",
    "designation": "Analyst",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-8-17",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Client Meetings"
    ],
    "timestamp": 1778757242709
  },
  {
    "id": "50",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 2",
    "categories": [
      "Technology",
      "Training"
    ],
    "department": "Network & Infrastructure",
    "designation": "Engineer",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-2-10",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Training"
    ],
    "timestamp": 1781654375247
  },
  {
    "id": "51",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 3",
    "categories": [
      "Infrastructure",
      "Site Visit"
    ],
    "department": "Network & Infrastructure",
    "designation": "Technician",
    "employeeName": "Olivia Parker",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-5-10",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Site Visit"
    ],
    "timestamp": 1778041757602
  },
  {
    "id": "52",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 4",
    "categories": [
      "Infrastructure",
      "Office"
    ],
    "department": "Network & Infrastructure",
    "designation": "Analyst",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-3-21",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Office"
    ],
    "timestamp": 1774171522257
  },
  {
    "id": "53",
    "type": "image",
    "src": "../images/team/image_five.png",
    "title": "Network & Infrastructure Update 5",
    "categories": [
      "Office",
      "Team Activities"
    ],
    "department": "Network & Infrastructure",
    "designation": "Analyst",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-4-15",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Team Activities"
    ],
    "timestamp": 1782438573989
  },
  {
    "id": "54",
    "type": "video",
    "src": "../images/team/image_six.jpeg",
    "thumbnail": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 6",
    "categories": [
      "Client Meetings",
      "Training"
    ],
    "department": "Network & Infrastructure",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-4-11",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Training"
    ],
    "timestamp": 1782265607032
  },
  {
    "id": "55",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 7",
    "categories": [
      "Events"
    ],
    "department": "Network & Infrastructure",
    "designation": "Manager",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-2-23",
    "location": "Corporate Office",
    "tags": [
      "Events"
    ],
    "timestamp": 1777999042997
  },
  {
    "id": "56",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Network & Infrastructure Update 8",
    "categories": [
      "Site Visit",
      "Team Activities"
    ],
    "department": "Network & Infrastructure",
    "designation": "Technician",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Network & Infrastructure.",
    "date": "2024-1-20",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Team Activities"
    ],
    "timestamp": 1777002441603
  },
  {
    "id": "57",
    "type": "image",
    "src": "../images/team/image_sixteen.jpeg",
    "title": "Sales & Marketing Update 1",
    "categories": [
      "Technology",
      "Corporate"
    ],
    "department": "Sales & Marketing",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-10-21",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Corporate"
    ],
    "timestamp": 1782231735638
  },
  {
    "id": "58",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 2",
    "categories": [
      "Training",
      "Events"
    ],
    "department": "Sales & Marketing",
    "designation": "Director",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-3-6",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Events"
    ],
    "timestamp": 1779499123823
  },
  {
    "id": "59",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1673847401561-fcd73a78a946?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 3",
    "categories": [
      "Site Visit",
      
    ],
    "department": "Sales & Marketing",
    "designation": "Analyst",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-8-13",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      
    ],
    "timestamp": 1774355696098
  },
  {
    "id": "60",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1503694978374-8a2fa6873b21?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 4",
    "categories": [
      "Site Visit"
    ],
    "department": "Sales & Marketing",
    "designation": "Director",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-3-28",
    "location": "Corporate Office",
    "tags": [
      "Site Visit"
    ],
    "timestamp": 1781206435262
  },
  {
    "id": "61",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 5",
    "categories": [
      "Team Activities",
      
    ],
    "department": "Sales & Marketing",
    "designation": "Technician",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-5-10",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      
    ],
    "timestamp": 1778972931601
  },
  {
    "id": "62",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 6",
    "categories": [
      "Team Activities",
      "Technology"
    ],
    "department": "Sales & Marketing",
    "designation": "Specialist",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-11-9",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Technology"
    ],
    "timestamp": 1780088808498
  },
  {
    "id": "63",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 7",
    "categories": [
      "Training"
    ],
    "department": "Sales & Marketing",
    "designation": "Engineer",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-5-22",
    "location": "Corporate Office",
    "tags": [
      "Training"
    ],
    "timestamp": 1777046326071
  },
  {
    "id": "64",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Sales & Marketing Update 8",
    "categories": [
      "Office",
      "Team Activities"
    ],
    "department": "Sales & Marketing",
    "designation": "Director",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Sales & Marketing.",
    "date": "2024-5-23",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Team Activities"
    ],
    "timestamp": 1774096253518
  },
  {
    "id": "65",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 1",
    "categories": [
      "Events",
      "Site Visit"
    ],
    "department": "Accountancy & Finance",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-4-13",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Site Visit"
    ],
    "timestamp": 1774240162536
  },
  {
    "id": "66",
    "type": "image",
    "src": "../images/team/image_four.jpg",
    "title": "Accountancy & Finance Update 2",
    "categories": [
      "Events",
      "Team Activities"
    ],
    "department": "Accountancy & Finance",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-8-26",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Team Activities"
    ],
    "timestamp": 1782093980925
  },
  {
    "id": "67",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 3",
    "categories": [
      "Site Visit"
    ],
    "department": "Accountancy & Finance",
    "designation": "Manager",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-7-20",
    "location": "Corporate Office",
    "tags": [
      "Site Visit"
    ],
    "timestamp": 1775819409407
  },
  {
    "id": "68",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 4",
    "categories": [
      "Events",
      "Technology"
    ],
    "department": "Accountancy & Finance",
    "designation": "Engineer",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-9-5",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Technology"
    ],
    "timestamp": 1780142742520
  },
  {
    "id": "69",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 5",
    "categories": [
      "Events"
    ],
    "department": "Accountancy & Finance",
    "designation": "Lead",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-9-19",
    "location": "Corporate Office",
    "tags": [
      "Events"
    ],
    "timestamp": 1776307566470
  },
  {
    "id": "70",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 6",
    "categories": [
      "Corporate",
      "Infrastructure"
    ],
    "department": "Accountancy & Finance",
    "designation": "Coordinator",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-7-25",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Infrastructure"
    ],
    "timestamp": 1773283571382
  },
  {
    "id": "71",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 7",
    "categories": [
      "Team Activities",
      "Site Visit"
    ],
    "department": "Accountancy & Finance",
    "designation": "Specialist",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-2-27",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Site Visit"
    ],
    "timestamp": 1773441092745
  },
  {
    "id": "72",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Accountancy & Finance Update 8",
    "categories": [
      
    ],
    "department": "Accountancy & Finance",
    "designation": "Analyst",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Accountancy & Finance.",
    "date": "2024-7-10",
    "location": "Corporate Office",
    "tags": [
      
    ],
    "timestamp": 1773133655525
  },
  {
    "id": "73",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 1",
    "categories": [
      ,
      "Technology"
    ],
    "department": "Human Resources (HR)",
    "designation": "Manager",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-11-11",
    "location": "Corporate Office",
    "tags": [
      ,
      "Technology"
    ],
    "timestamp": 1773323488381
  },
  {
    "id": "74",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 2",
    "categories": [
      "Technology"
    ],
    "department": "Human Resources (HR)",
    "designation": "Specialist",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-1-17",
    "location": "Corporate Office",
    "tags": [
      "Technology"
    ],
    "timestamp": 1780521044841
  },
  {
    "id": "75",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 3",
    "categories": [
      ,
      "Client Meetings"
    ],
    "department": "Human Resources (HR)",
    "designation": "Coordinator",
    "employeeName": "Olivia Parker",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-7-7",
    "location": "Corporate Office",
    "tags": [
      ,
      "Client Meetings"
    ],
    "timestamp": 1773508473271
  },
  {
    "id": "76",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 4",
    "categories": [
      "Office",
      "Events"
    ],
    "department": "Human Resources (HR)",
    "designation": "Lead",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-9-20",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Events"
    ],
    "timestamp": 1776129391562
  },
  {
    "id": "77",
    "type": "image",
    "src": "../images/team/image_seventeen.jpeg",
    "title": "Human Resources (HR) Update 5",
    "categories": [
      "Office",
      "Client Meetings"
    ],
    "department": "Human Resources (HR)",
    "designation": "Analyst",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-11-3",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Client Meetings"
    ],
    "timestamp": 1782360277321
  },
  {
    "id": "78",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 6",
    "categories": [
      ,
      "Site Visit"
    ],
    "department": "Human Resources (HR)",
    "designation": "Specialist",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-1-15",
    "location": "Corporate Office",
    "tags": [
      ,
      "Site Visit"
    ],
    "timestamp": 1779584436596
  },
  {
    "id": "79",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 7",
    "categories": [
      "Infrastructure",
      "Training"
    ],
    "department": "Human Resources (HR)",
    "designation": "Manager",
    "employeeName": "David Lee",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-1-27",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Training"
    ],
    "timestamp": 1777801755067
  },
  {
    "id": "80",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Human Resources (HR) Update 8",
    "categories": [
      "Office",
      
    ],
    "department": "Human Resources (HR)",
    "designation": "Technician",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Human Resources (HR).",
    "date": "2024-6-3",
    "location": "Corporate Office",
    "tags": [
      "Office",
      
    ],
    "timestamp": 1777686036854
  },
  {
    "id": "81",
    "type": "image",
    "src": "../images/team/image_three.jpg",
    "title": "Administration Update 1",
    "categories": [
      "Training",
      "Events"
    ],
    "department": "Administration",
    "designation": "Technician",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-10-8",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Events"
    ],
    "timestamp": 1782809212740
  },
  {
    "id": "82",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Administration Update 2",
    "categories": [
      "Training",
      "Team Activities"
    ],
    "department": "Administration",
    "designation": "Lead",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-2-6",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Team Activities"
    ],
    "timestamp": 1781163736500
  },
  {
    "id": "83",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Administration Update 3",
    "categories": [
      "Client Meetings",
      
    ],
    "department": "Administration",
    "designation": "Technician",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-8-28",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      
    ],
    "timestamp": 1774249640943
  },
  {
    "id": "84",
    "type": "image",
    "src": "../images/team/image_seven.jpeg",
    "title": "Administration Update 4",
    "categories": [
      "Infrastructure",
      "Technology"
    ],
    "department": "Administration",
    "designation": "Manager",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-9-7",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Technology"
    ],
    "timestamp": 1782206558405
  },
  {
    "id": "85",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1673847401561-fcd73a78a946?q=80&w=800&auto=format&fit=crop",
    "title": "Administration Update 5",
    "categories": [
      "Technology",
      "Events"
    ],
    "department": "Administration",
    "designation": "Coordinator",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-10-6",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Events"
    ],
    "timestamp": 1781692131891
  },
  {
    "id": "86",
    "type": "image",
    "src": "../images/team/image_one.jpg",
    "title": "Administration Update 6",
    "categories": [
      "Client Meetings"
    ],
    "department": "Administration",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-5-10",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings"
    ],
    "timestamp": 1783031043654
  },
  {
    "id": "87",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1503694978374-8a2fa6873b21?q=80&w=800&auto=format&fit=crop",
    "title": "Administration Update 7",
    "categories": [
      "Training",
      "Technology"
    ],
    "department": "Administration",
    "designation": "Engineer",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-11-12",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Technology"
    ],
    "timestamp": 1774863698003
  },
  {
    "id": "88",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Administration Update 8",
    "categories": [
      "Events",
      
    ],
    "department": "Administration",
    "designation": "Engineer",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Administration.",
    "date": "2024-12-19",
    "location": "Corporate Office",
    "tags": [
      "Events",
      
    ],
    "timestamp": 1779645551327
  },
  {
    "id": "89",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 1",
    "categories": [
      "Office",
      
    ],
    "department": "Project Management",
    "designation": "Coordinator",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-7-12",
    "location": "Corporate Office",
    "tags": [
      "Office",
      
    ],
    "timestamp": 1776791101325
  },
  {
    "id": "90",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 2",
    "categories": [
      "Office",
      
    ],
    "department": "Project Management",
    "designation": "Technician",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-8-25",
    "location": "Corporate Office",
    "tags": [
      "Office",
      
    ],
    "timestamp": 1774759476525
  },
  {
    "id": "91",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 3",
    "categories": [
      "Client Meetings",
      "Site Visit"
    ],
    "department": "Project Management",
    "designation": "Analyst",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-10-18",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Site Visit"
    ],
    "timestamp": 1781469478191
  },
  {
    "id": "92",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 4",
    "categories": [
      "Office",
      "Corporate"
    ],
    "department": "Project Management",
    "designation": "Director",
    "employeeName": "David Lee",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-11-6",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Corporate"
    ],
    "timestamp": 1774465280660
  },
  {
    "id": "93",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 5",
    "categories": [
      ,
      "Technology"
    ],
    "department": "Project Management",
    "designation": "Technician",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-12-1",
    "location": "Corporate Office",
    "tags": [
      ,
      "Technology"
    ],
    "timestamp": 1775048383151
  },
  {
    "id": "94",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 6",
    "categories": [
      "Site Visit",
      
    ],
    "department": "Project Management",
    "designation": "Coordinator",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-6-28",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      
    ],
    "timestamp": 1779312949221
  },
  {
    "id": "95",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 7",
    "categories": [
      "Office",
      "Events"
    ],
    "department": "Project Management",
    "designation": "Technician",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-11-28",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Events"
    ],
    "timestamp": 1779270388713
  },
  {
    "id": "96",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Project Management Update 8",
    "categories": [
      "Technology",
      "Infrastructure"
    ],
    "department": "Project Management",
    "designation": "Manager",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Project Management.",
    "date": "2024-7-6",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Infrastructure"
    ],
    "timestamp": 1780686616131
  },
  {
    "id": "97",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 1",
    "categories": [
      "Technology",
      
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Coordinator",
    "employeeName": "Elena Rodriguez",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-5-3",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      
    ],
    "timestamp": 1773622665919
  },
  {
    "id": "98",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 2",
    "categories": [
      "Training",
      "Technology"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Technician",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-6-9",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Technology"
    ],
    "timestamp": 1778327278729
  },
  {
    "id": "99",
    "type": "image",
    "src": "../images/team/image_fifteen.jpeg",
    "title": "Quality Assurance (QA) Update 3",
    "categories": [
      "Corporate",
      "Infrastructure"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Specialist",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-10-2",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Infrastructure"
    ],
    "timestamp": 1782632507253
  },
  {
    "id": "100",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 4",
    "categories": [
      "Site Visit",
      "Office"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Analyst",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-10-9",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Office"
    ],
    "timestamp": 1780703041862
  },
  {
    "id": "101",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 5",
    "categories": [
      "Office",
      "Site Visit"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Engineer",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-9-20",
    "location": "Corporate Office",
    "tags": [
      "Office",
      "Site Visit"
    ],
    "timestamp": 1780762103509
  },
  {
    "id": "102",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 6",
    "categories": [
      ,
      "Client Meetings"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Director",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-11-6",
    "location": "Corporate Office",
    "tags": [
      ,
      "Client Meetings"
    ],
    "timestamp": 1776442251764
  },
  {
    "id": "103",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 7",
    "categories": [
      ,
      "Technology"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Coordinator",
    "employeeName": "John Doe",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-6-1",
    "location": "Corporate Office",
    "tags": [
      ,
      "Technology"
    ],
    "timestamp": 1776940602124
  },
  {
    "id": "104",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Quality Assurance (QA) Update 8",
    "categories": [
      "Team Activities",
      "Client Meetings"
    ],
    "department": "Quality Assurance (QA)",
    "designation": "Engineer",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Quality Assurance (QA).",
    "date": "2024-2-16",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Client Meetings"
    ],
    "timestamp": 1781812222448
  },
  {
    "id": "105",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 1",
    "categories": [
      "Events",
      
    ],
    "department": "Higher Authority / Management",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-3-4",
    "location": "Corporate Office",
    "tags": [
      "Events",
      
    ],
    "timestamp": 1773626601801
  },
  {
    "id": "106",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 2",
    "categories": [
      "Corporate",
      "Infrastructure"
    ],
    "department": "Higher Authority / Management",
    "designation": "Engineer",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-9-25",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Infrastructure"
    ],
    "timestamp": 1779046950657
  },
  {
    "id": "107",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 3",
    "categories": [
      "Site Visit",
      "Team Activities"
    ],
    "department": "Higher Authority / Management",
    "designation": "Specialist",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-12-24",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Team Activities"
    ],
    "timestamp": 1779542968926
  },
  {
    "id": "108",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 4",
    "categories": [
      "Site Visit",
      "Training"
    ],
    "department": "Higher Authority / Management",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-4-21",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Training"
    ],
    "timestamp": 1779357344248
  },
  {
    "id": "109",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 5",
    "categories": [
      "Corporate",
      "Team Activities"
    ],
    "department": "Higher Authority / Management",
    "designation": "Engineer",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-10-17",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Team Activities"
    ],
    "timestamp": 1774040529971
  },
  {
    "id": "110",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1503694978374-8a2fa6873b21?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 6",
    "categories": [
      "Team Activities",
      "Training"
    ],
    "department": "Higher Authority / Management",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-1-2",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Training"
    ],
    "timestamp": 1780918214026
  },
  {
    "id": "111",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1673847401561-fcd73a78a946?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 7",
    "categories": [
      "Training",
      
    ],
    "department": "Higher Authority / Management",
    "designation": "Engineer",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-10-6",
    "location": "Corporate Office",
    "tags": [
      "Training",
      
    ],
    "timestamp": 1774912469088
  },
  {
    "id": "112",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "title": "Higher Authority / Management Update 8",
    "categories": [
      "Team Activities",
      "Corporate"
    ],
    "department": "Higher Authority / Management",
    "designation": "Coordinator",
    "employeeName": "David Lee",
    "description": "Exploring the latest developments and team achievements in Higher Authority / Management.",
    "date": "2024-12-14",
    "location": "Corporate Office",
    "tags": [
      "Team Activities",
      "Corporate"
    ],
    "timestamp": 1781344414095
  },
  {
    "id": "113",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 1",
    "categories": [
      "Client Meetings",
      "Office"
    ],
    "department": "Training & Workshops",
    "designation": "Specialist",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-6-25",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Office"
    ],
    "timestamp": 1773857083905
  },
  {
    "id": "114",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 2",
    "categories": [
      "Client Meetings",
      "Events"
    ],
    "department": "Training & Workshops",
    "designation": "Coordinator",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-4-27",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Events"
    ],
    "timestamp": 1773894940152
  },
  {
    "id": "115",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 3",
    "categories": [
      "Client Meetings",
      "Infrastructure"
    ],
    "department": "Training & Workshops",
    "designation": "Director",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-11-19",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings",
      "Infrastructure"
    ],
    "timestamp": 1781366781612
  },
  {
    "id": "116",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1503694978374-8a2fa6873b21?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 4",
    "categories": [
      ,
      "Corporate"
    ],
    "department": "Training & Workshops",
    "designation": "Manager",
    "employeeName": "James Bond",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-1-1",
    "location": "Corporate Office",
    "tags": [
      ,
      "Corporate"
    ],
    "timestamp": 1777122266711
  },
  {
    "id": "117",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 5",
    "categories": [
      "Infrastructure",
      "Site Visit"
    ],
    "department": "Training & Workshops",
    "designation": "Analyst",
    "employeeName": "Olivia Parker",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-2-28",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Site Visit"
    ],
    "timestamp": 1775419194466
  },
  {
    "id": "118",
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 6",
    "categories": [
      "Site Visit",
      "Training"
    ],
    "department": "Training & Workshops",
    "designation": "Manager",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-2-22",
    "location": "Corporate Office",
    "tags": [
      "Site Visit",
      "Training"
    ],
    "timestamp": 1776897575449
  },
  {
    "id": "119",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 7",
    "categories": [
      "Infrastructure",
      "Team Activities"
    ],
    "department": "Training & Workshops",
    "designation": "Engineer",
    "employeeName": "Sarah Connor",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-7-22",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Team Activities"
    ],
    "timestamp": 1774749026823
  },
  {
    "id": "120",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "title": "Training & Workshops Update 8",
    "categories": [
      "Technology"
    ],
    "department": "Training & Workshops",
    "designation": "Coordinator",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Training & Workshops.",
    "date": "2024-8-18",
    "location": "Corporate Office",
    "tags": [
      "Technology"
    ],
    "timestamp": 1777219907380
  },
  {
    "id": "121",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 1",
    "categories": [
      "Corporate",
      "Site Visit"
    ],
    "department": "Events & Celebrations",
    "designation": "Lead",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-6-28",
    "location": "Corporate Office",
    "tags": [
      "Corporate",
      "Site Visit"
    ],
    "timestamp": 1773618321954
  },
  {
    "id": "122",
    "type": "image",
    "src": "../images/team/image_eight.jpeg",
    "title": "Events & Celebrations Update 2",
    "categories": [
      "Events",
      "Infrastructure"
    ],
    "department": "Events & Celebrations",
    "designation": "Manager",
    "employeeName": "Alice Smith",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-11-23",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Infrastructure"
    ],
    "timestamp": 1782800649133
  },
  {
    "id": "123",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 3",
    "categories": [
      "Client Meetings"
    ],
    "department": "Events & Celebrations",
    "designation": "Technician",
    "employeeName": "Robert Vance",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-6-20",
    "location": "Corporate Office",
    "tags": [
      "Client Meetings"
    ],
    "timestamp": 1777073105180
  },
  {
    "id": "124",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 4",
    "categories": [
      "Training",
      "Client Meetings"
    ],
    "department": "Events & Celebrations",
    "designation": "Manager",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-11-2",
    "location": "Corporate Office",
    "tags": [
      "Training",
      "Client Meetings"
    ],
    "timestamp": 1775525271628
  },
  {
    "id": "125",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 5",
    "categories": [
      "Technology",
      "Training"
    ],
    "department": "Events & Celebrations",
    "designation": "Coordinator",
    "employeeName": "Emily Davis",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-6-7",
    "location": "Corporate Office",
    "tags": [
      "Technology",
      "Training"
    ],
    "timestamp": 1776962598691
  },
  {
    "id": "126",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 6",
    "categories": [
      "Events",
      "Infrastructure"
    ],
    "department": "Events & Celebrations",
    "designation": "Technician",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-4-4",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Infrastructure"
    ],
    "timestamp": 1777286901535
  },
  {
    "id": "127",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 7",
    "categories": [
      "Infrastructure",
      "Technology"
    ],
    "department": "Events & Celebrations",
    "designation": "Coordinator",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-2-13",
    "location": "Corporate Office",
    "tags": [
      "Infrastructure",
      "Technology"
    ],
    "timestamp": 1776050285331
  },
  {
    "id": "128",
    "type": "image",
    "src": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    "title": "Events & Celebrations Update 8",
    "categories": [
      "Events",
      "Infrastructure"
    ],
    "department": "Events & Celebrations",
    "designation": "Manager",
    "employeeName": "Michael Johnson",
    "description": "Exploring the latest developments and team achievements in Events & Celebrations.",
    "date": "2024-1-2",
    "location": "Corporate Office",
    "tags": [
      "Events",
      "Infrastructure"
    ],
    "timestamp": 1775561680941
  }
];

const DEPARTMENT_COLORS: Record<string, string> = {
  "Software Development": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "AI & Innovation": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  "Maintenance": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  "Operations": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "Toll Operations": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  "Technical Support": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800",
  "Network & Infrastructure": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  "Sales & Marketing": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  "Accountancy & Finance": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
  "Human Resources (HR)": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 border-fuchsia-200 dark:border-fuchsia-800",
  "Administration": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  "Project Management": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "Quality Assurance (QA)": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200 dark:border-teal-800",
  "Higher Authority / Management": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  "Training & Workshops": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
  "Events & Celebrations": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  "Default": "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400 border-brand-200 dark:border-brand-800"
};

type SortOption = 'newest' | 'oldest' | 'a-z' | 'department';

/**
 * Component: Gallery
 * 
 * Defines the Gallery component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Gallery() {
  // Local state to manage activeCategory
  const [activeCategory, setActiveCategory] = useState<string>("All Categories");
  // Local state to manage activeDepartment
  const [activeDepartment, setActiveDepartment] = useState<string>("All Departments");
  // Local state to manage searchQuery
  const [searchQuery, setSearchQuery] = useState("");
  // Local state to manage sortBy
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  
  // Local state to manage selectedIndex
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredMedia = useMemo(() => {
    let result = MEDIA;

    if (activeCategory !== "All Categories") {
      result = result.filter(item => item.categories.includes(activeCategory));
    }
    if (activeDepartment !== "All Departments") {
      result = result.filter(item => item.department === activeDepartment);
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(item => 
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.department && item.department.toLowerCase().includes(q)) ||
        (item.employeeName && item.employeeName.toLowerCase().includes(q)) ||
        (item.designation && item.designation.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.categories && item.categories.some(c => c.toLowerCase().includes(q))) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case 'newest': return b.timestamp - a.timestamp;
        case 'oldest': return a.timestamp - b.timestamp;
        case 'a-z': return a.title.localeCompare(b.title);
        case 'department': return (a.department || "").localeCompare(b.department || "");
        default: return 0;
      }
    });
  }, [activeCategory, activeDepartment, searchQuery, sortBy]);

  // Compute counts
  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    DEPARTMENTS.forEach(dept => {
      if (dept === "All Departments") {
        counts[dept] = MEDIA.length;
      } else {
        counts[dept] = MEDIA.filter(m => m.department === dept).length;
      }
    });
    return counts;
  }, []);

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach(cat => {
      if (cat === "All Categories") {
        counts[cat] = MEDIA.filter(m => activeDepartment === "All Departments" || m.department === activeDepartment).length;
      } else {
        counts[cat] = MEDIA.filter(m => 
          (activeDepartment === "All Departments" || m.department === activeDepartment) && 
          m.categories.includes(cat)
        ).length;
      }
    });
    return counts;
  }, [activeDepartment]);

  // Key navigation for lightbox
  // Side effect executed on mount or dependency change
  useEffect(() => {
    // Handler function for KeyDown events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredMedia.length]);

  // Lock body scroll
  // Side effect executed on mount or dependency change
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  // Handler function for Prev events

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredMedia.length - 1));
  };

  // Handler function for Next events

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < filteredMedia.length - 1 ? prev! + 1 : 0));
  };

  const selectedItem = selectedIndex !== null ? filteredMedia[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="container-custom">
        
        {/* Header */}
        <div className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4"
          >
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
          >
            Explore our infrastructure, team activities, and departmental highlights through our comprehensive media gallery.
          </motion.p>
        </div>

        {/* Filters and Controls Area */}
        <div className="glass-panel p-6 md:p-8 shadow-sm border-transparent mb-10 space-y-8">
          
          {/* Top Bar: Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative w-full md:w-96 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by department, name, designation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border-transparent rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all outline-none"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <SortDesc className="w-5 h-5 text-slate-400 shrink-0" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full md:w-auto px-4 py-3 bg-slate-50 dark:bg-slate-950 border-transparent rounded-xl text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer font-medium"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A-Z by Title</option>
                <option value="department">By Department</option>
              </select>
            </div>
          </div>

          {/* Department Filter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-brand-500" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Departments</h3>
            </div>
            <div className="flex gap-2 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar scroll-smooth">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={`relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDepartment === dept
                      ? "text-white shadow-md shadow-brand-500/20"
                      : "bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border-transparent"
                  }`}
                >
                  {activeDepartment === dept && (
                    <motion.div 
                      layoutId="activeDeptTab"
                      className="absolute inset-0 bg-brand-600 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {dept} <span className="ml-1.5 opacity-70 text-xs">({deptCounts[dept]})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Filter className="w-4 h-4 text-cyan-500" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Categories</h3>
            </div>
            <div className="flex gap-2 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar scroll-smooth">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "text-white shadow-md shadow-cyan-500/20"
                      : "bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border-transparent"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="activeCatTab"
                      className="absolute inset-0 bg-cyan-600 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {category} <span className="ml-1.5 opacity-70 text-xs">({catCounts[category]})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Grid / Empty State */}
        {filteredMedia.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 glass-panel border-dashed"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <ImageIcon className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No images found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-center mb-6">
              We couldn't find any media matching your selected filters. Try adjusting your search criteria.
            </p>
            <button 
              onClick={() => {
                setActiveCategory("All Categories");
                setActiveDepartment("All Departments");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl font-semibold hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors shadow-sm"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item, index) => {
                const deptColorClass = item.department ? (DEPARTMENT_COLORS[item.department] || DEPARTMENT_COLORS["Default"]) : DEPARTMENT_COLORS["Default"];
                
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer glass-card shadow-sm border-transparent hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-[400px]"
                    onClick={() => setSelectedIndex(index)}
                  >
                    {/* Image Area */}
                    <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                      <img 
                        src={item.type === 'video' ? item.thumbnail : item.src} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                          <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                            <Play className="w-5 h-5 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
                         {item.department && (
                           <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${deptColorClass}`}>
                             {item.department}
                           </span>
                         )}
                      </div>
                      
                      <div className="absolute top-3 right-3 z-20">
                         <div className="w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                            <Maximize2 className="w-4 h-4" />
                         </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                         {item.employeeName && (
                           <h4 className="text-white font-bold text-lg mb-1">{item.employeeName}</h4>
                         )}
                         {item.designation && (
                           <p className="text-brand-300 text-sm font-medium mb-3">{item.designation}</p>
                         )}
                         {item.description && (
                           <p className="text-slate-300 text-xs line-clamp-3 mb-4">{item.description}</p>
                         )}
                         <span className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
                           <Maximize2 className="w-3.5 h-3.5" /> View Image
                         </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-1 relative z-20 glass-card">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {item.categories.slice(0, 2).map((cat, i) => (
                          <span key={i} className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        {item.date && (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1.5 max-w-[50%] truncate">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-950/95 flex flex-col p-4 md:p-8"
              onClick={() => setSelectedIndex(null)}
            >
              <div className="flex justify-between items-start mb-4 z-10 w-full container-custom">
                <div className="text-white max-w-3xl pr-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedItem.department && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DEPARTMENT_COLORS[selectedItem.department] || DEPARTMENT_COLORS["Default"]}`}>
                        {selectedItem.department}
                      </span>
                    )}
                    {selectedItem.categories.map((cat, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedItem.title}</h3>
                  {(selectedItem.employeeName || selectedItem.designation) && (
                    <div className="mt-2 text-brand-300 font-medium text-lg">
                      {selectedItem.employeeName} {selectedItem.employeeName && selectedItem.designation && " • "} {selectedItem.designation}
                    </div>
                  )}
                  {selectedItem.description && (
                    <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}
                  <div className="mt-3 flex gap-4 text-xs text-slate-400">
                    {selectedItem.date && (
                       <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {selectedItem.date}</div>
                    )}
                    {selectedItem.location && (
                       <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {selectedItem.location}</div>
                    )}
                  </div>
                </div>
                <button 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors shrink-0"
                  onClick={() => setSelectedIndex(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 relative flex items-center justify-center min-h-0 w-full container-custom" onClick={(e) => e.stopPropagation()}>
                
                {/* Navigation */}
                {filteredMedia.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="absolute left-0 md:-left-6 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 -ml-1" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-0 md:-right-6 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 -mr-1" />
                    </button>
                  </>
                )}

                {selectedItem.type === 'video' ? (
                  <motion.div 
                    key={selectedItem.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative"
                  >
                    <video 
                      src={selectedItem.src} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.img 
                    key={selectedItem.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={selectedItem.src}
                    className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
                  />
                )}
              </div>
              
              <div className="mt-4 text-center text-slate-400 text-sm z-10">
                {selectedIndex! + 1} of {filteredMedia.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
