import { siteConfig } from "./config";

const hasItems = (list?: unknown[]) => Boolean(list && list.length > 0);

// Sections hide themselves when their config list is empty, so their links do too
export const navLinks = [
  { href: "#about", label: "About", show: true },
  { href: "#skills", label: "Skills", show: hasItems(siteConfig.skills) },
  { href: "#projects", label: "Projects", show: hasItems(siteConfig.projects) },
  { href: "#achievements", label: "Achievements", show: hasItems(siteConfig.achievements) },
  { href: "#experience", label: "Experience", show: hasItems(siteConfig.experience) },
  { href: "#education", label: "Education", show: hasItems(siteConfig.education) },
  { href: "#github", label: "GitHub", show: hasItems(siteConfig.githubStats) },
].filter((link) => link.show);
