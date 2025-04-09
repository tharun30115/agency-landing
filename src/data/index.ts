import badge1 from "../assets/images/badge1.svg";
import badge2 from "../assets/images/badge2.svg";
import badge3 from "../assets/images/badge3.svg";

export const bars = [
  {
    title: "Usability",
    percentage: 60,
    barheight: "362px",
    shadowheight: "426px",
    color: "#8740FF",
  },
  {
    title: "Efficiency",
    percentage: 30,
    barheight: "237px",
    shadowheight: "306px",
    color: "#7422FF",
  },
  {
    title: "Marketing",
    percentage: 10,
    barheight: "151px",
    shadowheight: "215px",
    color: "#5F00FF",
  },
];

export const stats = [
  { value: "24", label: "Years Experience" },
  { value: "1M", label: "Happy Customers" },
  { value: "10K", label: "Completed Projects" },
];
export const cards = [
  {
    title: "Best interactive co-operation award",
    description: "Granted in 2024",
    icon: badge1,
  },
  {
    title: "First multi-national company in country",
    description: "With 120k+ active projects",
    icon: badge2,
  },
  {
    title: "We reached 1M users in just 6 months!",
    description: "We got 12 record in tech industry",
    icon: badge3,
  },
];

export const menuItems = ["Home", "Services", "Achievement", "About"];

export const initialTabs = [
  { title: "Company Benefits", active: true },
  { title: "Team Management", active: false },
  { title: "Road Map", active: false },
];

export const footerLinks = [
  {
    title: "Pages",
    items: [
      { title: "Home", link: "/" },
      { title: "Services", link: "#" },
      { title: "Achivements", link: "#" },
      { title: "About", link: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "Customer", link: "#" },
      { title: "Enterprise", link: "#" },
      { title: "Partners", link: "#" },
      { title: "Jobs", link: "#" },
    ],
  },
];
