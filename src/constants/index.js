import {
  mobile,
  backend,
  creator,
  web,
  blender,
  canva,
  gimp,
  gravit,
  illustrator,
  indesign,
  procreate,
  sketch,
  pixlr,
  krita,
  photoshop,
  git,
  figma,
  honeywell,
  leadway,
  insurance,
  carrent,
  jobit,
  tripguide,
  honeywelll,
  sovereignn,
  leadwayy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX",
    icon: web,
  },
  {
    title: "Social Media",
    icon: mobile,
  },
  {
    title: "Visual Identity",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Gimp",
    icon: gimp,
  },
  {
    name: "Gravit",
    icon: gravit,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "InDesign",
    icon: indesign,
  },
  {
    name: "Procreate",
    icon: procreate,
  },
  {
    name: "Sketch",
    icon: sketch,
  },
  {
    name: "Pixlr",
    icon: pixlr,
  },
  {
    name: "Krita",
    icon: krita,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Content Focus & Social Media Management",
    company_name: "Honeywell Pasta",
    icon: honeywell,
    iconBg: "#383E56",
    date: "November 2022 - June 2023",
    points: [
      "Implemented responsive design and ensuring cross-platform compatibility.",
      "Created content calendars for Honeywell Pasta's social media.",
      "Creating a summary of marketing activities helping the stakeholders understand where all efforts were made in achieving the brand's KPI and understand how their money was invested monthly.",
      "Made actionable plans based on the data expressed",
      "I engaged with prospects, manage comments and Direct messages to ensure continous flow each month.",
    ],
  },
  {
    title: "Content Focus & Social Media Management",
    company_name: "Sovereign Trust Insurance",
    icon: insurance,
    iconBg: "#E6DEDD",
    date: "May 2022 - June 2023",
    points: [
      "I prepare the strategy for each month detailing the type of content to be posted throughout the month. Content is created along these pillars: Product-focused, Engagement, Educational, Lifestyle & Commemorative.",
      "I prepare concrete insights and analytical reports which enables the company to continously meet and exceed their KPI's.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-platform compatibility.",
      "Performed competitor analysis which gave insight as to how our competitor performed on social media as well as the kind of content pillars and strategy are utilized for that month.",
    ],
  },
  {
    title: "Head Designer",
    company_name: "Leadway Assurance",
    icon: leadway,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Designed and facilitated newsletters for Leadway Assurance which was utilized to visually engage and educate their audience through E-mails.",
      "Designed webinar flyers that improved learning for their audience on various benefits of insurance for multiple platforms.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Martins has the best designs in the biz. He has improved our organizations visivility.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I fuck with that nigga sensei. He's gonna design my next album cover. Hit me up Sensei.",
    name: "Chris Brown",
    designation: "CEO",
    company: "Black Pyramid",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Martins optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Honeywell Pasta",
    description:
      "I created content calendars for Honeywell Pasta's social media. These contents were in form of Static creatives, Motion graphics, videos and User-enerated content that visually engaged their target audiences and generated leads for the brand.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "green-text-gradient",
      },
      {
        name: "Social Media",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://drive.google.com/file/d/18xiPdHE9ePpK38A-0ot3cgh4vYaGBpDA/view?usp=drive_link",
  },
  {
    name: "Sovereign Trust Insurance",
    description:
      "Created content pillars and strategy for Various platforms. Contents are created along the following pillars: Profuct-focused, Engagement, Educational, & Lifestyle.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "green-text-gradient",
      },
      {
        name: "Social Media",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://drive.google.com/file/d/18xiPdHE9ePpK38A-0ot3cgh4vYaGBpDA/view?usp=drive_link",
  },
  {
    name: "Leadway Assurance",
    description:
      "The newsletters I designed for leadway, currated particularly for their audience achieved and exceeded brands metrics and KPI's for their various platforms. This in turn improved performance and growth for the business.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "green-text-gradient",
      },
      {
        name: "Social Media",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://drive.google.com/file/d/18xiPdHE9ePpK38A-0ot3cgh4vYaGBpDA/view?usp=drive_link",
  },
  {
    name: "Leadway Assurance",
    description:
      "The newsletters I designed for leadway, currated particularly for their audience achieved and exceeded brands metrics and KPI's for their various platforms. This in turn improved performance and growth for the business.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "green-text-gradient",
      },
      {
        name: "Social Media",
        color: "pink-text-gradient",
      },
    ],
    image: honeywelll,
    source_code_link:
      "https://drive.google.com/file/d/18xiPdHE9ePpK38A-0ot3cgh4vYaGBpDA/view?usp=drive_link",
  },
  {
    name: "Sovereign Trust Insurance",
    description:
      "Created content pillars and strategy for Various platforms. Contents are created along the following pillars: Profuct-focused, Engagement, Educational, & Lifestyle.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "green-text-gradient",
      },
      {
        name: "Socia Media",
        color: "pink-text-gradient",
      },
    ],
    image: sovereignn,
    source_code_link:
      "https://drive.google.com/file/d/18xiPdHE9ePpK38A-0ot3cgh4vYaGBpDA/view?usp=drive_link",
  },
  {
    name: "Leadway Assurance",
    description:
      "The newsletters I designed for leadway, currated particularly for their audience achieved and exceeded brands metrics and KPI's for their various platforms. This in turn improved performance and growth for the business.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "green-text-gradient",
      },
      {
        name: "Social Media",
        color: "pink-text-gradient",
      },
    ],
    image: leadwayy,
    source_code_link:
      "https://drive.google.com/file/d/18xiPdHE9ePpK38A-0ot3cgh4vYaGBpDA/view?usp=drive_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
