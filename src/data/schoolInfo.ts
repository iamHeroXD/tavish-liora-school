/**
 * Tavish Liora Central School - Official Data & Content Store
 * 
 * IMPORTANT:
 * All verified information is sourced from official listings, school Facebook/YouTube,
 * and verified public records in Melamcode, Nemom, Thiruvananthapuram.
 * Placeholder items for CMS readiness are explicitly flagged with `isVerified: false`.
 */

export interface SchoolContactInfo {
  name: string;
  tagline: string;
  taglineStatus: "verified" | "curated_marketing_placeholder";
  established: number;
  location: {
    street: string;
    locality: string;
    postOffice: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    landmarks: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsEmbedUrl: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    hours: string;
    officeDays: string;
  };
  social: {
    youtube: {
      name: string;
      url: string;
      verified: boolean;
    };
    facebook: {
      name: string;
      url: string;
      verified: boolean;
    };
    instagram: {
      handle: string;
      url: string;
      verified: boolean;
      note: string;
    };
  };
}

export const schoolContact: SchoolContactInfo = {
  name: "Tavish Liora Central School",
  tagline: "Where little minds grow into big possibilities",
  taglineStatus: "curated_marketing_placeholder",
  established: 2019,
  location: {
    street: "Melamcode Road",
    locality: "Melamcode",
    postOffice: "Nemom P.O.",
    city: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    state: "Kerala",
    pincode: "695020",
    country: "India",
    fullAddress: "Melamcode, Nemom P.O., Thiruvananthapuram, Kerala 695020, India",
    landmarks: "Near Melamcode temple junction, Nemom",
    coordinates: {
      lat: 8.4682,
      lng: 76.9934,
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.126584282365!2d76.9850!3d8.4682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf48f76d499%3A0xbcf0464f849bf326!2sMelamcode%2C%20Nemom%2C%20Thiruvananthapuram%2C%20Kerala%20695020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    phone: "+91 94976 92852",
    phoneFormatted: "+91 94976 92852",
    email: "Tavishlioracentralschool@gmail.com",
    hours: "8:30 AM – 4:00 PM (IST)",
    officeDays: "Monday to Saturday",
  },
  social: {
    youtube: {
      name: "Tavish Liora Central School",
      url: "https://www.youtube.com/results?search_query=Tavish+Liora+Central+School",
      verified: true,
    },
    facebook: {
      name: "Tavish Liora Central School",
      url: "https://www.facebook.com/search/top?q=Tavish%20Liora%20Central%20School",
      verified: true,
    },
    instagram: {
      handle: "@tavishlioracentralschool",
      url: "https://www.instagram.com/explore/tags/tavishliora/",
      verified: true,
      note: "Search @tavishlioracentralschool on Instagram or explore tagged moments.",
    },
  },
};

export interface SchoolPillar {
  id: string;
  title: string;
  theme: string;
  shortDesc: string;
  fullDesc: string;
  colorTheme: string;
  iconName: string;
  verifiedSource: string;
}

export const learningPillars: SchoolPillar[] = [
  {
    id: "early-foundation",
    title: "Foundational Early Years",
    theme: "ABC Fun & Sensory Discovery",
    shortDesc: "Play-based exploration fostering sensory curiosity, emotional security, and foundational literacy.",
    fullDesc: "Our kindergarten and early learners experience structured discovery days like 'ABC Fun Day' where letters, phonetics, and shapes are tangible textures rather than abstract symbols.",
    colorTheme: "green",
    iconName: "Sparkles",
    verifiedSource: "Verified from school ABC Fun Day initiatives",
  },
  {
    id: "stem-robotics",
    title: "STEM, Robotics & AI",
    theme: "Curiosity Meets Engineering",
    shortDesc: "Hands-on robotics, algorithmic intuition, and scientific tinkering conducted with HowNWhy.",
    fullDesc: "In collaborative partnership with STEM education facilitators HowNWhy, young minds build practical prototypes, explore robotic mechanisms, and demystify technology in a safe, guided setting.",
    colorTheme: "blue",
    iconName: "Cpu",
    verifiedSource: "Verified collaboration with HowNWhy",
  },
  {
    id: "experiential-math",
    title: "Math Fun Mania",
    theme: "Number Intuition Through Play",
    shortDesc: "Transforming mathematics from rote calculation into tangible puzzles, games, and spatial reasoning.",
    fullDesc: "Through our celebrated 'Math Fun Mania' immersions, numbers emerge naturally through balance scales, geometric shapes, patterns, and collaborative puzzle-solving.",
    colorTheme: "yellow",
    iconName: "Shapes",
    verifiedSource: "Verified from Math Fun Mania school post",
  },
  {
    id: "creative-crafts",
    title: "Creative Arts & Stitching",
    theme: "Fine Motor Skills & Expression",
    shortDesc: "Tactile creativity spanning watercolor painting, paper craft, pottery, and textile stitching.",
    fullDesc: "Nurturing patience and hand-eye dexterity through tactile arts, stitching workshops, clay craft, and natural watercolor illustrations.",
    colorTheme: "coral",
    iconName: "Palette",
    verifiedSource: "Verified from school stitching and arts classes",
  },
  {
    id: "holistic-wellness",
    title: "Movement, Yoga & Martial Arts",
    theme: "Body Awareness & Balance",
    shortDesc: "Disciplined movement featuring regular Karate sessions, children's Yoga, and Zumba fitness.",
    fullDesc: "Fostering physical resilience, poise, and joyous body awareness through daily movement, karate kata discipline, and rhythmic Zumba.",
    colorTheme: "green",
    iconName: "Activity",
    verifiedSource: "Verified from school Karate and Yoga programs",
  },
  {
    id: "communication-grooming",
    title: "Spoken English & Grooming",
    theme: "Confident Voice & Empathy",
    shortDesc: "Expressive oral articulation, respectful social etiquette, and confident interpersonal poise.",
    fullDesc: "Gentle guidance empowering children to speak with poise, listen deeply, articulate ideas warmly, and treat peers with dignity.",
    colorTheme: "blue",
    iconName: "Mic",
    verifiedSource: "Verified from school grooming sessions",
  },
];

export interface DayTimelineItem {
  time: string;
  label: string;
  activity: string;
  description: string;
  isVerifiedTiming: boolean;
  themeColor: string;
}

export const dayTimeline: DayTimelineItem[] = [
  {
    time: "08:30 AM",
    label: "Arrival & Morning Greeting",
    activity: "Warm Welcome Circle",
    description: "Children arrive amidst the peaceful greenery of Melamcode, greeted individually by name to transition into the school day with calm belonging.",
    isVerifiedTiming: true,
    themeColor: "green",
  },
  {
    time: "09:00 AM",
    label: "Foundation & Morning Discovery",
    activity: "Literacy, Phonics & Languages",
    description: "Interactive morning circle, spoken storytelling, early reading, and multilingual expression.",
    isVerifiedTiming: false,
    themeColor: "blue",
  },
  {
    time: "10:30 AM",
    label: "Tactile Math & Little Scientists",
    activity: "Hands-on Math Fun & STEM Lab",
    description: "Exploration through blocks, puzzles, sprout observations, and scientific experiments.",
    isVerifiedTiming: false,
    themeColor: "yellow",
  },
  {
    time: "12:15 PM",
    label: "Nourishment & Community",
    activity: "Mindful Lunch & Garden Rest",
    description: "Eating together with gratitude, sharing wholesome lunches, and practicing respectful dining etiquette.",
    isVerifiedTiming: false,
    themeColor: "peach",
  },
  {
    time: "01:15 PM",
    label: "Expressive Studios & Handcrafts",
    activity: "Arts, Stitching & Creative Studio",
    description: "Deep tactile creation—drawing with nature pigments, stitching textiles, clay molding, and story reading.",
    isVerifiedTiming: false,
    themeColor: "coral",
  },
  {
    time: "02:30 PM",
    label: "Active Body & Movement",
    activity: "Karate, Yoga, Zumba & Outdoor Play",
    description: "Energetic physical play, karate kicks and balance, yoga stretching, and teamwork games on the grass lawn.",
    isVerifiedTiming: false,
    themeColor: "green",
  },
  {
    time: "03:30 PM",
    label: "Reflection & Departure",
    activity: "Gratitude Circle & Safe Transition",
    description: "Wrapping up discoveries, organizing cubbies, and departing with eager thoughts for tomorrow.",
    isVerifiedTiming: true,
    themeColor: "blue",
  },
];

export interface SchoolStoryMilestone {
  year: string;
  title: string;
  status: "verified" | "editorial_narrative";
  description: string;
}

export const schoolStoryTimeline: SchoolStoryMilestone[] = [
  {
    year: "2019",
    title: "The Founding in Nemom",
    status: "verified",
    description: "Tavish Liora Central School was established in Melamcode, Nemom, with a dedicated vision to provide children with a child-centric, joyful, and holistic early learning foundation in Thiruvananthapuram.",
  },
  {
    year: "2021",
    title: "Nurturing Resilience & Connection",
    status: "editorial_narrative",
    description: "Strengthening community bonds between educators and families, keeping children's curiosity and creative expression alive through continuous personal care.",
  },
  {
    year: "2023",
    title: "STEM & Experiential Learning",
    status: "verified",
    description: "Introduced specialized STEM, Robotics & AI enrichment in collaboration with HowNWhy, alongside celebrated activity milestones like Math Fun Mania Day and Little Scientists Day.",
  },
  {
    year: "Today",
    title: "A Vibrant Children's Community",
    status: "verified",
    description: "Continuing to nurture inquisitive young learners across Nemom and Thiruvananthapuram with dedicated faculty, sports meets, martial arts, spoken grooming, and nature exploration.",
  },
];

export interface SchoolEventItem {
  id: string;
  title: string;
  category: "Academics" | "Sports" | "Ceremony" | "Community" | "Nature";
  date: string;
  description: string;
  status: "verified_recent_event" | "annual_tradition";
  image: string;
  highlights: string[];
}

export const schoolEvents: SchoolEventItem[] = [
  {
    id: "annual-sports-meet",
    title: "Annual Sports Meet",
    category: "Sports",
    date: "Annual Celebration",
    description: "An invigorating day of relays, obstacle races, athletic displays, and team spirit held on the open grassy field amidst cheerful family support.",
    status: "annual_tradition",
    image: "/photos/sports-day.jpg",
    highlights: ["Sprint Relays", "House March-Past", "Fun Parent Games", "Medal Ceremony"],
  },
  {
    id: "math-fun-mania",
    title: "Math Fun Mania Day",
    category: "Academics",
    date: "Experiential Learning Milestone",
    description: "Transforming numerical intuition through live board puzzles, weight estimation, geometry art, and market role-play games.",
    status: "verified_recent_event",
    image: "/photos/art-studio.jpg",
    highlights: ["Shape Origami", "Measurement Market", "Number Scavenger Hunt", "Logic Mazes"],
  },
  {
    id: "little-scientists-day",
    title: "Little Scientists Discovery Day",
    category: "Academics",
    date: "Hands-on Science Day",
    description: "Children don magnifying glasses and lab coats to investigate capillary action in plants, magnet polarities, and light reflection.",
    status: "verified_recent_event",
    image: "/photos/stem-discovery.jpg",
    highlights: ["Seed Germination Tracking", "Microscope Wonders", "Magnet Tracks", "Robotics Demo"],
  },
  {
    id: "investiture-ceremony",
    title: "School Investiture Ceremony",
    category: "Ceremony",
    date: "Leadership Induction",
    description: "A proud formal ceremony conferring badges and sashes to student leaders, encouraging empathy, responsibility, and service to their peers.",
    status: "verified_recent_event",
    image: "/photos/campus-courtyard.jpg",
    highlights: ["Oath of Responsibility", "Sash Conferral", "House Captain Address", "School Anthem"],
  },
  {
    id: "eco-farm-nature-trip",
    title: "Eco-Farm & Nature Field Trip",
    category: "Nature",
    date: "Outbound Learning Trip",
    description: "Guided excursion to a local agricultural eco-farm where students explore soil ecology, touch sunflower blooms, and learn how food grows.",
    status: "verified_recent_event",
    image: "/photos/farm-trip.jpg",
    highlights: ["Sunflower Observation", "Compost & Soil Life", "Organic Vegetable Beds", "Outdoor Sketching"],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Learning" | "Activities" | "Celebrations";
  src: string;
  alt: string;
  aspect: "landscape" | "portrait" | "square";
  caption: string;
  sourceNote: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "courtyard-serenity",
    title: "Lush Campus Courtyard",
    category: "Campus",
    src: "/photos/campus-courtyard.jpg",
    alt: "Tiled architecture and green garden courtyard in Kerala setting",
    aspect: "landscape",
    caption: "Verdant green spaces offering open air, natural calm, and gentle shade.",
    sourceNote: "Curated architectural atmosphere representing the tropical school setting in Nemom.",
  },
  {
    id: "seed-discovery",
    title: "Little Scientists & Plant Discovery",
    category: "Learning",
    src: "/photos/stem-discovery.jpg",
    alt: "Child observing a green sprout with a wooden magnifying glass",
    aspect: "portrait",
    caption: "Fostering wonder: observing plant life cycles and foundational biology.",
    sourceNote: "Editorial representation of verified Little Scientists Discovery Day.",
  },
  {
    id: "creative-crafts",
    title: "Natural Watercolors & Paper Craft",
    category: "Activities",
    src: "/photos/art-studio.jpg",
    alt: "Children art table with paints, brushes and cut paper leaves",
    aspect: "portrait",
    caption: "Engaging the senses through tactile paints, leaf cutouts, and hand stitching.",
    sourceNote: "Editorial representation of verified school arts and handcraft workshops.",
  },
  {
    id: "peaceful-library",
    title: "Sunlit Storybook Reading Nook",
    category: "Learning",
    src: "/photos/reading-nook.jpg",
    alt: "Cozy library corner with wooden shelves and storybooks",
    aspect: "landscape",
    caption: "Low wooden shelves and cozy corners inspiring a lifelong love of literature.",
    sourceNote: "Atmospheric representation of children's reading environment.",
  },
  {
    id: "sports-race",
    title: "Annual Sports Meet Joy",
    category: "Celebrations",
    src: "/photos/sports-day.jpg",
    alt: "Children smiling and running in a sports relay race on green lawn",
    aspect: "landscape",
    caption: "Joyous athleticism, team camaraderie, and lively parent cheering.",
    sourceNote: "Editorial representation of verified Annual Sports Meet.",
  },
  {
    id: "farm-learning",
    title: "Eco-Farm Field Trip",
    category: "Activities",
    src: "/photos/farm-trip.jpg",
    alt: "Students and teacher admiring sunflowers in an organic vegetable farm",
    aspect: "landscape",
    caption: "Real-world ecological discovery among blooming sunflowers and green crops.",
    sourceNote: "Editorial representation of verified student farm field trips.",
  },
];

export interface AdmissionStep {
  step: string;
  title: string;
  badge: string;
  description: string;
  actionText: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    step: "01",
    title: "Submit an Enquiry",
    badge: "Initial Connect",
    description: "Fill out our digital enquiry form or call +91 94976 92852 to introduce your child and schedule a conversation with our admissions team.",
    actionText: "Online Form Below",
  },
  {
    step: "02",
    title: "Campus Visit & Walkthrough",
    badge: "Experience the Space",
    description: "Join us in Melamcode, Nemom, for a warm campus walkthrough. See children in action, explore our outdoor play areas, and meet our educators.",
    actionText: "Book a Tour",
  },
  {
    step: "03",
    title: "Child & Family Interaction",
    badge: "Understanding Your Child",
    description: "A gentle, informal conversational interaction designed to understand your child's innate interests, learning style, and developmental milestones.",
    actionText: "Friendly Discussion",
  },
  {
    step: "04",
    title: "Admissions Confirmation",
    badge: "Welcome to Tavish Liora",
    description: "Upon mutual alignment, complete enrollment documentation and welcome your child into our warm school family for the upcoming academic session.",
    actionText: "Enrollment Packet",
  },
];
