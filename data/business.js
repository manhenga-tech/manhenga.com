export const business = {
  name: "Manhenga Tech", location: "Bindura, Zimbabwe", phone: "+263 77 931 3243", phoneHref: "tel:+263779313243", email: "info@manhenga.com", url: "https://manhenga.com", whatsapp: "https://wa.me/263779313243",
  title: "Manhenga Tech | Starlink, CCTV & IT Support in Bindura",
  description: "Manhenga Tech provides Starlink installation, Wi-Fi networks, CCTV, IT support, business software and email solutions in Bindura and across Zimbabwe.",
};
export const services = [
  { id: "starlink", name: "Starlink & Connectivity", icon: "fa-satellite-dish", image: "connectivity", alt: "Rectangular satellite internet dish installed on a rooftop", description: "Starlink kit supply, installation, activation assistance and technical support for homes and businesses." },
  { id: "networks", name: "Networks & Wi-Fi", icon: "fa-wifi", image: "network", alt: "Organised network switches with Ethernet patch cables", description: "Wired and wireless networks, business Wi-Fi, hotspot and voucher systems, and point-to-point wireless links." },
  { id: "security", name: "CCTV & Alarm Systems", icon: "fa-video", image: "security", alt: "CCTV camera with neat conduit installed on an exterior wall", description: "CCTV camera installation, alarm systems, remote viewing setup and maintenance for homes and workplaces." },
  { id: "support", name: "IT Support & Maintenance", icon: "fa-laptop", image: "support", alt: "IT technician checking desktop computer components at a workbench", description: "Computer troubleshooting, hardware and software support, routine maintenance and ongoing technical assistance." },
  { id: "software", name: "Business Software", icon: "fa-cogs", image: "support", alt: "Computer equipment at a technology support workbench", description: "Point-of-sale, school management and ERP system setup and support to simplify daily operations." },
  { id: "cloud", name: "Business Email & Cloud", icon: "fa-cloud", image: "network", alt: "Connected network equipment supporting business communication", description: "Professional business email, domain registration and hosting, Microsoft 365 setup and support." },
];
export const reasons = ["Solutions matched to your needs and budget.", "Clear advice and straightforward communication.", "Professional installation and configuration.", "Local support and ongoing maintenance."];
export function enquiryLink(service) { return `${business.whatsapp}?text=${encodeURIComponent(`Hello Manhenga Tech, I would like to request a quotation for ${service}.`)}`; }
