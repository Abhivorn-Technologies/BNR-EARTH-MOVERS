export const SITE = {
  name: "BNR Earth Movers",
  tagline: "Advanced Rock Cutting, Blasting & Earthworks",
  description:
    "Specialized rock rope cutting, chemical breaking, controlled blasting, and precise excavation services for complex site development.",
  email: "earthmoversbnr@gmail.com",
  emailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=earthmoversbnr@gmail.com&su=${encodeURIComponent("New Project Inquiry - BNR Earth Movers")}&body=${encodeURIComponent(`BNR EARTH MOVERS
Official Project Inquiry

Hello BNR Team,

I would like to request a free quote for a potential project. My project requirements are provided below.


PROJECT DETAILS

[ Please describe your project requirements, timeline, and specific needs here ]



Looking forward to hearing from you.

Sincerely,`)}`,
  instagramUrl: "https://www.instagram.com/earthmoversbnr/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61591169862708",
  phone: "9059648878",
  phoneDisplay: "+91 90596 48878",
  whatsapp: "9059648878",
  whatsappUrl: "https://wa.me/919059648878?text=Hi%20BNR%20Earth%20Movers!%20I%20am%20interested%20in%20your%20earthmoving%20services%20and%20would%20like%20to%20get%20a%20free%20quote.",
  phoneUrl: "tel:+919059648878",
  address: "Andhra Pradesh, Telangana & Major Hubs",
  availability: "24/7 Emergency Earthworks",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Machinery", href: "/machinery" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 20, suffix: "+", label: "Projects Done" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
] as const;

export const SERVICES = [
  {
    id: "rope-cutting",
    title: "Rope Cutting",
    image: "/services/Rope Cutting.png",
    description: "Advanced diamond wire rope cutting for precise, vibration-free concrete and rock slicing.",
    points: [
      "Diamond wire sawing for heavy concrete structures",
      "Vibration-free and noiseless cutting solutions",
      "Precision slicing of large rock formations",
      "Cutting thick foundations, bridges, and dams",
      "Safe structural modifications in restricted spaces",
      "Clean, exact cuts with minimal debris",
    ]
  },
  {
    id: "rock-excavation",
    title: "Rock Excavation",
    image: "/services/ROCK EXCAVATION 1.png",
    description: "Comprehensive rock excavation and controlled blasting solutions for complex terrains.",
    points: [
      "Rock Excavation using Licensed Control Blasting methods",
      "Rock Excavation using Non Blasting methods (Without Explosives)",
      "Soft Rock Excavation and Breaking Services",
      "Rock Breaking in Footings, Trenches, Foundations, Pits Etc",
      "Rock Excavation in Pipeline Projects, Canals and Dam projects",
      "Fast track rock excavation works in industrial, commercial and residential projects",
    ]
  },
  {
    id: "soil-excavation",
    title: "Soil Excavation",
    image: "/services/SOIL EXCAVATION.png",
    description: "Rapid and reliable mass soil excavation for all types of infrastructure projects.",
    points: [
      "Mass Soil Excavation for residential, commercial, industrial and infrastructure projects",
      "Soil excavation and dumping within the site premises",
      "Soil excavation for pipelines, trenches, footings, pits and foundations",
      "Soil excavation for canal projects, road works, and layout formations",
      "Soil excavation for hydro power, thermal power, wind power and solar power projects",
      "Rapid excavation services in all types of soil",
    ]
  },
  {
    id: "site-preparation",
    title: "Site Preparation",
    image: "/services/Site preparation.png",
    description: "Complete site preparation, from jungle clearing to high-quality soil supplying and compaction.",
    points: [
      "Jungle Cleaning, tree cutting and Land leveling works",
      "Layout formation works",
      "Soil supplying, soil filling, and soil compaction works",
      "Supply of high-quality soil based on your exact project requirements",
      "Filling of soil to level land, behind retaining walls, or in excess excavation areas",
      "Extensive network of excavation contractors across Karnataka",
    ]
  },
  {
    id: "concrete-breaking",
    title: "Concrete Breaking",
    image: "/services/Concrete Breaking.png",
    description: "Advanced structural breaking for RCC/PCC floors, dams, bridges, and retaining walls.",
    points: [
      "Breaking of RCC Floor, footings, slab, columns, structures, Roads, retaining walls",
      "Breaking of PCC floor, size stone masonry, and concrete block masonry",
      "Breaking of concrete structures, dams, bridges, and concrete beds",
      "Concrete Breaking using Electrical concrete chippers",
      "Concrete Breaking using tractor-mounted Pneumatic Jack hammers",
      "Concrete breaking using JCB/Excavator mounted Hydraulic Breakers",
    ]
  },
  {
    id: "demolition-works",
    title: "Demolition Works",
    image: "/services/Demolition Works.png",
    description: "Safe and efficient structural demolition services utilizing heavy machinery.",
    points: [
      "Complete demolition of commercial and residential structures",
      "Industrial building teardowns and site clearance",
      "Selective demolition and interior strip-outs",
      "Safe handling and disposal of demolition debris",
      "Controlled dismantling of complex structures",
      "Compliance with rigorous safety and environmental standards",
    ]
  },
  {
    id: "rig-blasting",
    title: "Rig Blasting",
    image: "/services/RIG BALSTING.png",
    description: "Precision drilling and controlled rig blasting for large-scale earthmoving projects.",
    points: [
      "High-efficiency crawler drill rig operations",
      "Deep hole drilling for controlled blasting",
      "Vibration-controlled blasting near sensitive structures",
      "Specialized blasting for quarry and mining sectors",
      "Massive rock volume fragmentation",
      "Strict adherence to blasting safety protocols",
    ]
  },

  {
    id: "tractor-jack-hammer",
    title: "Tractor Jack Hammer",
    image: "/services/tractor jack hammer blasting 1.png",
    description: "Heavy-duty tractor-mounted pneumatic jack hammers for rapid rock and concrete breaking.",
    points: [
      "High-impact breaking using tractor-mounted compressors",
      "Efficient demolition of hard rock and concrete",
      "Rapid deployment for emergency breaking requirements",
      "Ideal for roadworks and trenching in hard strata",
      "Pneumatic drilling and breaking in confined sites",
      "Cost-effective alternative to explosive blasting in certain conditions",
    ]
  }
] as const;

export const GALLERY_IMAGES = [
  // The 8 Services Images
  { src: "/services/ROCK EXCAVATION 1.png", title: "Rock Excavation", category: "Services" },
  { src: "/services/SOIL EXCAVATION.png", title: "Soil Excavation", category: "Services" },
  { src: "/services/Site preparation.png", title: "Site Preparation", category: "Services" },
  { src: "/services/Concrete Breaking.webp", title: "Concrete Breaking", category: "Services" },
  { src: "/services/demolition-works.jpg", title: "Demolition Works", category: "Services" },
  { src: "/services/RIG BALSTING.png", title: "Rig Blasting", category: "Services" },
  { src: "/services/Rope Cutting.png", title: "Rope Cutting", category: "Services" },
  { src: "/services/tractor-jack-hammer.jpg", title: "Tractor Jack Hammer", category: "Services" },
  
  // Other Public Images
  { src: "/gallery/photos/Rock Excavations.avif", title: "Heavy Rock Cutting", category: "Projects" },
  { src: "/services/Soil Excavations.jpg", title: "Mass Excavation Site", category: "Projects" },
  { src: "/services/Site Preparations.jpeg", title: "Land Leveling", category: "Projects" },
  { src: "/gallery/photos/Equipments for Hire.jpg", title: "Fleet Ready for Hire", category: "Machinery" },
  { src: "/gallery/photos/about-excavator-premium.png", title: "Premium Excavator", category: "Machinery" },
  { src: "/gallery/photos/cbn.avif", title: "Heavy Construction Machinery", category: "Machinery" },
  { src: "/gallery/photos/image.webp", title: "Site Operations", category: "Projects" },
  { src: "/gallery/photos/image2.jpg", title: "Earthmoving in Action", category: "Projects" },
] as const;

export const NEW_GALLERY_PHOTOS = Array.from({ length: 15 }, (_, i) => ({
  src: `/gallery/photos/photo${i + 1}.jpeg`,
  title: `Site Operation ${i + 1}`,
  category: "Projects",
}));

export const NEW_GALLERY_VIDEOS = Array.from({ length: 17 }, (_, i) => ({
  src: `/gallery/videos/video${i + 1}.mp4`,
  title: `Video Showcase ${i + 1}`,
  category: "Projects",
}));


export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consult",
    description: "Tell us about your project, site and timeline.",
  },
  {
    step: "02",
    title: "Quote",
    description: "Receive a clear, transparent estimate within 24 hours.",
  },
  {
    step: "03",
    title: "Execute",
    description: "Our crew arrives on schedule and gets to work.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Site cleared, graded, and ready for next phase.",
  },
] as const;

export const WHY_US = [
  {
    title: "Licensed & Insured",
    description: "Fully compliant with safety regulations on every site.",
  },
  {
    title: "On-Time Delivery",
    description: "We respect your timeline and project milestones.",
  },
  {
    title: "Skilled Operators",
    description: "Trained crew with decades of combined experience.",
  },
  {
    title: "Modern Fleet",
    description: "Latest excavators, loaders, dozers and dump trucks.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "BNR Earth Movers delivered our 3-acre site prep ahead of schedule with zero issues. True professionals.",
    name: "Rajesh Mehta",
    role: "Project Manager, BuildPro",
    initial: "R",
  },
  {
    quote:
      "Their demolition team was meticulous, safe and surprisingly affordable. Hired again the next month.",
    name: "Anita Sharma",
    role: "Real Estate Developer",
    initial: "A",
  },
  {
    quote:
      "Modern equipment, skilled operators and clear communication. They've become our go-to earthworks partner.",
    name: "Karthik Reddy",
    role: "Civil Contractor",
    initial: "K",
  },
] as const;

export const SERVICE_AREAS = [
  "Bangalore",
  "Hyderabad",
  "Andhra Pradesh",
  "Mumbai",
  "Amaravathi",
  "Visakhapatnam",
  "Vijayawada",
  "Chennai",
] as const;

export const MACHINERY = [
  { name: "Excavators", desc: "For large-scale digging, trenching, and grading.", category: "Excavation" },
  { name: "Dumpers", desc: "To efficiently transport materials and debris across the site.", category: "Transport" },
  { name: "Dewatering Pumps", desc: "For efficient water removal from excavation sites and trenches.", category: "Support" },
  { name: "Backhoe", desc: "A versatile machine for digging, lifting, and handling materials.", category: "Excavation" },
  { name: "Wagon Drills", desc: "Ideal for creating precise boreholes for blasting and excavation work.", category: "Drilling & Blasting" },
  { name: "Explosives Mobile Magazines", desc: "Secure storage for explosives, ensuring safe and controlled blasting operations.", category: "Drilling & Blasting" },
  { name: "Blasting Mats / Rubber Mats", desc: "Used to control flying debris during hard rock blasting.", category: "Drilling & Blasting" },
  { name: "Water Tanker with Sprinklers", desc: "To control dust and keep the site hydrated.", category: "Support" },
  { name: "Seismographs", desc: "Essential for stringent monitoring during controlled blasting, ensuring safety and compliance.", category: "Drilling & Blasting" },
  { name: "Dozers", desc: "Powerful machines for clearing land, grading, and pushing materials.", category: "Excavation" },
  { name: "Pile Load Testing Equipment", desc: "Used to test the load-bearing capacity of piles in foundation construction.", category: "Specialized" },
  { name: "Hydraulic Rotary Rig", desc: "Used for drilling, especially in challenging ground conditions, for precise boreholes.", category: "Drilling & Blasting" },
  { name: "Diamond Rope Cutting Units", desc: "Specialized cutting equipment for precise and clean cuts in tough materials.", category: "Specialized" },
  { name: "Jack Hammer Drills", desc: "Used for heavy-duty drilling in tough ground conditions.", category: "Drilling & Blasting" },
] as const;
