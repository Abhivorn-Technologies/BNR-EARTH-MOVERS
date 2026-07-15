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
  phone: "9052136136",
  phoneDisplay: "+91 90521 36136",
  whatsapp: "9052136136",
  whatsappUrl: "https://wa.me/919052136136?text=Hi%20BNR%20Earth%20Movers!%20I%20am%20interested%20in%20your%20earthmoving%20services%20and%20would%20like%20to%20get%20a%20free%20quote.",
  phoneUrl: "tel:+919052136136",
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
      { q: "Diamond wire sawing for heavy concrete structures", a: "Our advanced diamond wire sawing technique is ideal for cleanly slicing through massively thick concrete foundations and walls without compromising structural integrity." },
      { q: "Vibration-free and noiseless cutting solutions", a: "We utilize specialized rope cutting methods that generate zero vibration and minimal noise, making it perfect for occupied buildings and sensitive environments." },
      { q: "Precision slicing of large rock formations", a: "Our diamond wire can be looped around large boulders or bedrock to slice them into manageable, perfectly smooth blocks for easy removal." },
      { q: "Cutting thick foundations, bridges, and dams", a: "Equipped to handle the most demanding infrastructure projects, our wire saws can cut through steel-reinforced concrete of virtually unlimited thickness." },
      { q: "Safe structural modifications in restricted spaces", a: "The flexibility of wire sawing allows us to perform major structural cuts in tight, confined areas where traditional heavy machinery cannot operate." },
      { q: "Clean, exact cuts with minimal debris", a: "Unlike impact breaking, rope cutting leaves a polished, flush surface requiring no further finishing, while significantly reducing dust and debris." },
    ]
  },
  {
    id: "rock-excavation",
    title: "Rock Excavation",
    image: "/services/rock-excavation-1.png",
    description: "Comprehensive rock excavation and controlled blasting solutions for complex terrains.",
    points: [
      { q: "Rock Excavation using Licensed Control Blasting methods", a: "Our licensed experts use calculated explosive charges to fracture hard rock safely and efficiently, minimizing ground vibration and flyrock." },
      { q: "Rock Excavation using Non Blasting methods (Without Explosives)", a: "For sensitive areas, we employ chemical expansion compounds and hydraulic splitters to break apart solid rock silently and safely." },
      { q: "Soft Rock Excavation and Breaking Services", a: "We deploy heavy-duty excavators with specialized ripper attachments to quickly tear through weathered and semi-hard rock layers." },
      { q: "Rock Breaking in Footings, Trenches, Foundations, Pits Etc", a: "Our precision equipment allows us to excavate exact dimensions for foundations and utility trenches without over-breaking the surrounding rock." },
      { q: "Rock Excavation in Pipeline Projects, Canals and Dam projects", a: "We handle massive linear excavations for infrastructure, ensuring consistent depth and rapid progress through varying geological conditions." },
      { q: "Fast track rock excavation works in industrial, commercial and residential projects", a: "Leveraging our large fleet and experienced crew, we accelerate project timelines to prepare your site for construction ahead of schedule." },
    ]
  },
  {
    id: "soil-excavation",
    title: "Soil Excavation",
    image: "/services/SOIL EXCAVATION.png",
    description: "Rapid and reliable mass soil excavation for all types of infrastructure projects.",
    points: [
      { q: "Mass Soil Excavation for residential, commercial, industrial and infrastructure projects", a: "We provide rapid bulk earthmoving services, utilizing high-capacity excavators and dumpers to clear large sites efficiently." },
      { q: "Soil excavation and dumping within the site premises", a: "Our logistics team optimizes cut-and-fill operations to balance earthworks on-site, saving you significant transportation and disposal costs." },
      { q: "Soil excavation for pipelines, trenches, footings, pits and foundations", a: "We execute precise trenching and deep footing excavations with exact grading to meet your structural engineering requirements." },
      { q: "Soil excavation for canal projects, road works, and layout formations", a: "We handle extensive linear excavations, ensuring proper slopes, compaction, and subgrade preparation for major infrastructure." },
      { q: "Soil excavation for hydro power, thermal power, wind power and solar power projects", a: "Experienced in the energy sector, we prepare expansive sites and deep foundations required for massive power generation facilities." },
      { q: "Rapid excavation services in all types of soil", a: "Whether it's loose sand, dense clay, or expansive black cotton soil, our diverse fleet is equipped to excavate and manage any soil condition." },
    ]
  },
  {
    id: "site-preparation",
    title: "Site Preparation",
    image: "/services/Site preparation.png",
    description: "Complete site preparation, from jungle clearing to high-quality soil supplying and compaction.",
    points: [
      { q: "Jungle Cleaning, tree cutting and Land leveling works", a: "We rapidly clear overgrown vegetation, safely remove large trees, and rough-grade the terrain to provide a clean slate for your project." },
      { q: "Layout formation works", a: "Our surveyors and operators work in tandem to establish precise roads, plots, and drainage slopes for new residential and commercial layouts." },
      { q: "Soil supplying, soil filling, and soil compaction works", a: "We import high-quality fill material, spreading it in controlled lifts and thoroughly compacting it to achieve required bearing capacities." },
      { q: "Supply of high-quality soil based on your exact project requirements", a: "Whether you need red soil for landscaping or specific structural fill, we source and deliver the exact material specified by your engineers." },
      { q: "Filling of soil to level land, behind retaining walls, or in excess excavation areas", a: "We expertly place and compact backfill in critical areas like retaining walls and deep trenches to prevent future settlement issues." },
      { q: "Extensive network of excavation contractors across Karnataka", a: "Our vast logistical network ensures we can source machinery and materials rapidly, keeping your site preparation running without delays." },
    ]
  },
  {
    id: "concrete-breaking",
    title: "Concrete Breaking",
    image: "/services/Concrete Breaking.png",
    description: "Advanced structural breaking for RCC/PCC floors, dams, bridges, and retaining walls.",
    points: [
      { q: "Breaking of RCC Floor, footings, slab, columns, structures, Roads, retaining walls", a: "We systematically demolish heavily reinforced concrete elements using powerful hydraulic breakers attached to our excavators." },
      { q: "Breaking of PCC floor, size stone masonry, and concrete block masonry", a: "Our teams quickly dismantle plain concrete and masonry structures, segregating materials for efficient disposal or recycling." },
      { q: "Breaking of concrete structures, dams, bridges, and concrete beds", a: "We tackle massive civil structures with a combination of heavy breakers and precision cutting to safely bring down old infrastructure." },
      { q: "Concrete Breaking using Electrical concrete chippers", a: "For indoor or confined tasks, we use low-emission electrical chippers to break concrete safely without compromising air quality." },
      { q: "Concrete Breaking using tractor-mounted Pneumatic Jack hammers", a: "Our mobile pneumatic systems deliver high-impact force, ideal for quickly breaking up concrete roads, pavements, and shallow slabs." },
      { q: "Concrete breaking using JCB/Excavator mounted Hydraulic Breakers", a: "When raw power is needed, our heavy excavator breakers shatter the thickest concrete foundations and industrial floors with ease." },
    ]
  },
  {
    id: "demolition-works",
    title: "Demolition Works",
    image: "/services/Demolition Works.png",
    description: "Safe and efficient structural demolition services utilizing heavy machinery.",
    points: [
      { q: "Complete demolition of commercial and residential structures", a: "We provide end-to-end teardown services, safely bringing down multi-story buildings in dense urban environments with surgical precision." },
      { q: "Industrial building teardowns and site clearance", a: "Our crew dismantles complex industrial facilities, handling heavy steel structures and massive concrete bases while ensuring site safety." },
      { q: "Selective demolition and interior strip-outs", a: "We carefully remove specific walls, floors, or interior fixtures without damaging the structural integrity of the remaining building." },
      { q: "Safe handling and disposal of demolition debris", a: "We rigorously sort rubble, steel, and waste, hauling it away to certified disposal or recycling facilities to keep your site pristine." },
      { q: "Controlled dismantling of complex structures", a: "For hazardous or delicate structures, we employ top-down dismantling techniques to safely deconstruct the building piece by piece." },
      { q: "Compliance with rigorous safety and environmental standards", a: "Every demolition is meticulously planned with dust suppression, noise control, and strict safety protocols to protect workers and neighbors." },
    ]
  },
  {
    id: "rig-blasting",
    title: "Rig Blasting",
    image: "/services/RIG BALSTING.png",
    description: "Precision drilling and controlled rig blasting for large-scale earthmoving projects.",
    points: [
      { q: "High-efficiency crawler drill rig operations", a: "Our advanced crawler rigs navigate rough terrain to rapidly drill deep, precise blast holes, significantly accelerating the rock breaking process." },
      { q: "Deep hole drilling for controlled blasting", a: "We execute deep, large-diameter drilling to accommodate calculated explosive charges, ensuring maximum rock fragmentation." },
      { q: "Vibration-controlled blasting near sensitive structures", a: "Using advanced delay detonators and micro-blasting techniques, we fracture rock safely even in close proximity to existing buildings." },
      { q: "Specialized blasting for quarry and mining sectors", a: "We design and execute massive bench blasts to optimize yield and fragmentation for aggregate quarries and mining operations." },
      { q: "Massive rock volume fragmentation", a: "Our large-scale rig blasting can reduce thousands of cubic meters of solid bedrock into easily excavatable rubble in a single blast." },
      { q: "Strict adherence to blasting safety protocols", a: "From explosive storage to site evacuation and seismograph monitoring, we maintain a zero-compromise approach to blasting safety." },
    ]
  },
  {
    id: "tractor-jack-hammer",
    title: "Tractor Jack Hammer",
    image: "/services/tractor jack hammer blasting 1.png",
    description: "Heavy-duty tractor-mounted pneumatic jack hammers for rapid rock and concrete breaking.",
    points: [
      { q: "High-impact breaking using tractor-mounted compressors", a: "Our specialized tractor-mounted compressors deliver immense striking force, making them perfect for breaking up stubborn rock and concrete surfaces efficiently." },
      { q: "Efficient demolition of hard rock and concrete", a: "The sustained pneumatic power ensures rapid penetration and shattering of dense geological formations and reinforced concrete slabs." },
      { q: "Rapid deployment for emergency breaking requirements", a: "Highly mobile and versatile, our tractor setups can be quickly driven to any site to address urgent excavation or blockage issues." },
      { q: "Ideal for roadworks and trenching in hard strata", a: "They excel in linear projects, easily moving along roadways to break hard surfaces for utility trenches and pipeline installations." },
      { q: "Pneumatic drilling and breaking in confined sites", a: "With extensive hose reach, our operators can take the pneumatic breakers into tight spaces where larger excavators cannot fit." },
      { q: "Cost-effective alternative to explosive blasting in certain conditions", a: "When blasting is restricted, our high-volume pneumatic breakers provide a safe, economical, and highly effective mechanical breaking solution." },
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
  "Telangana",
  "Pune",
  "Chandanagar",
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
