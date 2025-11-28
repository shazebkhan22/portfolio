import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shazeb Khan",
  initials: "SK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-Stack Developer turned Freelancer. Building websites, solving problems, and sharing the journey to all.",
  summary:"A highly motivated and skilled student with a strong foundation in web development and database management systems. Experienced in developing dynamic and responsive web applications using modern technologies and frameworks. Proven ability to lead and collaborate effectively in team environments. Passionate about creating intuitive, user-friendly digital experiences.",
  avatarUrl: "/me2.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "TailwindCSS",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "Strapi CMS",
    "Nginx",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kshazeb22sep@gmail.com",
    tel: "+91 9026477197",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shazebkhan22",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shazeb-khan-7a04a2271/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/919026477197",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cygnus AI",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/logo1.svg",
      start: "September 2025",
      end: "Present",
      description:
        "Built premium, production-ready websites for companies from scratch, managing the entire process myself—from UI design to development, optimization, and deployment.",
    },
    {
      company: "W.E. Matter PXT Pvt. Ltd.",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/we-logo.jpg",
      start: "January 2025",
      end: "August 2025",
      description:
        "Created a high-quality, responsive UI and handled the majority of the frontend architecture and developed backend functionality, integrated third-party services, and supported full-stack development across the project.",
    },
  ],
  education: [
    {
      school: "Somaiya Vidyavihar University",
      href: "https://www.somaiya.edu/en/",
      degree: "Bachelor's Degree of Computer Applications (BCA)",
      logoUrl: "/somaiya.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "City Montessori School",
      href: "https://cmseducation.org/",
      degree: "Class 12th - Science Stream - 91.75 %",
      logoUrl: "/cms.jpg",
      start: "2020",
      end: "2021",
    },
    {
      school: "City Montessori School",
      href: "https://cmseducation.org/",
      degree: "Class 10th - Science Stream - 91.00 %",
      logoUrl: "/cms.jpg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Cygnus AI",
      href: "https://analytics-website-sooty.vercel.app/",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "I designed and developed a modern, high-performance website for my company focused on AI and data analytics. It highlights our solutions and services through a clean, intuitive interface, simplifying complex technologies like machine learning, automation, and predictive insights for easy understanding.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Strapi CMS",
        "TailwindCSS",
        ,
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://analytics-website-sooty.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/caiv.mp4",
    },
    {
      title: "Cygnus Information Solutions",
      href: "https://cygnus-info.vercel.app",
      dates: "April 2025 - August 2025",
      active: true,
      description:
        "I built a modern, professional website for Cygnus, showcasing their AI, cloud, cybersecurity, and IT solutions with clear service pages, industry sections, strong branding, and an intuitive user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Strapi CMS",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://cygnus-info.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/cisv.mp4",
    },
    {
      title: "Himalaya Plast",
      href: "https://himalaya-frontend.vercel.app",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "TailwindCSS",
        ,
        "Strapi CMS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://himalaya-frontend.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/hpv.mp4",
    },
  ],
  hackathons: [
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
