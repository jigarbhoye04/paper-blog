import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blogsbyjigar.vercel.app/",
  author: "Jigar",
  desc: "A minimal blog site.",
  title: "Stuff!",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", 
  langTag: ["en-EN"], 
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jigarbhoye04/paper-blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/JigarBhoyeOfficial",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iamjigx/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jigar-bhoye-188667251/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "jigarbhoye04@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@iamjigx",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "PhotoBlog",
    href: "https://candid-canvas.vercel.app",
    linkTitle: `Candid Canvas`,
    active: true,
  }
  /*
  {
    name: "CodePen",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/jigarbhoye04/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  */
];
