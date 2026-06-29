import re

with open('src/lib/constants.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# I will use a regex to replace the entire SERVICES array.
# First, let's locate the SERVICES array.
start_idx = content.find('export const SERVICES = [')
end_idx = content.find('] as const;', start_idx) + 11

new_services_str = """export const SERVICES = [
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
] as const;"""

new_content = content[:start_idx] + new_services_str + content[end_idx:]

with open('src/lib/constants.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated constants.ts")
