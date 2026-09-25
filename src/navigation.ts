import { siteConfig } from "./config";

const hasItems = (list?: unknown[]) => Boolean(list && list.length > 0);

// Kept short on purpose: the main chapters only. Other sections are still on
// the page, just not in the nav. Sections hide themselves when their config
// list is empty, so their links do too.
export const navLinks = [
  { href: "#about", label: "About", show: true },
  { href: "#experience", label: "Experience", show: hasItems(siteConfig.experience) },
  {
    href: "#projects",
    label: "Projects",
    show: hasItems(siteConfig.projects) || hasItems(siteConfig.achievements),
  },
].filter((link) => link.show);

// The footer holds the contact details
export const contactLink = { href: "#contact", label: "Contact" };
