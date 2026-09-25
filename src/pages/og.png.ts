import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";
import sharp from "sharp";
import { siteConfig } from "../config";

// Link-preview card (LinkedIn, Slack, X), rendered once at build time from
// the same name, title, and colours as the site. Uses the light theme values
// from src/styles/global.css.
const WIDTH = 1200;
const HEIGHT = 630;
const INK = "#111827";
const BODY = "#4b5563";
const LINE = "#e5e7eb";
const ACCENT = siteConfig.accentColor;

// satori reads woff but not woff2, so load the font from @fontsource
const require = createRequire(import.meta.url);
const loadFont = (weight: 400 | 700) =>
  readFile(
    require.resolve(`@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-${weight}-normal.woff`),
  );

type Node = { type: string; props: Record<string, unknown> };
const el = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

const initials = siteConfig.name
  .split(/\s+/)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

const card = el(
  "div",
  {
    width: WIDTH,
    height: HEIGHT,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "72px 88px",
    fontFamily: "IBM Plex Mono",
    color: INK,
    backgroundColor: "#ffffff",
    // Same corner glow as the hero
    backgroundImage: `radial-gradient(circle at 0% 0%, ${ACCENT}38 0%, ${ACCENT}24 20%, ${ACCENT}12 40%, ${ACCENT}06 60%, #ffffff00 80%)`,
  },
  [
    el("div", { display: "flex", alignItems: "center", justifyContent: "space-between" }, [
      el(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 72,
          height: 72,
          borderRadius: 16,
          backgroundColor: INK,
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
        },
        initials,
      ),
      el("div", { display: "flex", fontSize: 28, color: ACCENT }, new URL(siteConfig.url).host),
    ]),
    el("div", { display: "flex", flexDirection: "column" }, [
      el(
        "div",
        { display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 },
        siteConfig.name,
      ),
      el("div", {
        display: "flex",
        width: 96,
        height: 8,
        marginTop: 20,
        borderRadius: 999,
        backgroundColor: ACCENT,
      }),
      el("div", { display: "flex", alignItems: "center", marginTop: 36, fontSize: 48, color: BODY }, [
        el("div", { display: "flex" }, siteConfig.title),
        // The block caret from the hero's streaming title
        el("div", { display: "flex", width: 26, height: 54, marginLeft: 10, backgroundColor: ACCENT }),
      ]),
    ]),
  ],
);

export const GET: APIRoute = async () => {
  const [regular, bold] = await Promise.all([loadFont(400), loadFont(700)]);
  const svg = await satori(card as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: "IBM Plex Mono", data: regular, weight: 400, style: "normal" },
      { name: "IBM Plex Mono", data: bold, weight: 700, style: "normal" },
    ],
  });
  // A hairline frame keeps the white card distinct on white feeds
  const framed = svg.replace(
    "</svg>",
    `<rect x="0.5" y="0.5" width="${WIDTH - 1}" height="${HEIGHT - 1}" fill="none" stroke="${LINE}"/></svg>`,
  );
  const png = await sharp(Buffer.from(framed)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
