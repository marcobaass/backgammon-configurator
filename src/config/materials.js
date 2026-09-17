// material presets (colors, roughness, metalness, optional opacity)

export const MATERIAL_PRESETS = {
  // --- Woods & naturals ---
  oak: {
    color: "#c4a574",
    roughness: 0.7,
    metalness: 0,
    transparent: false,
  },
  walnut: {
    color: "#5c3d2e",
    roughness: 0.65,
    metalness: 0,
    transparent: false,
  },
  ebony: {
    color: "#2a1f1a",
    roughness: 0.6,
    metalness: 0,
    transparent: false,
  },
  ivory: {
    color: "#fffff0",
    roughness: 0.6,
    metalness: 0,
    transparent: false,
  },
  cream: {
    color: "#f5f0e6",
    roughness: 0.9,
    metalness: 0,
    transparent: false,
  },
  wood: {
    color: "#8b6914",
    roughness: 0.7,
    metalness: 0,
    transparent: false,
  },
  sand: {
    color: "#d4b483",
    roughness: 0.85,
    metalness: 0,
    transparent: false,
  },
  spice: {
    color: "#c45c26",
    roughness: 0.55,
    metalness: 0.15,
  },
  leather: {
    color: "#3b2416",
    roughness: 0.8,
    metalness: 0,
    transparent: false,
  },

  // --- Felts / soft ---
  "red-felt": {
    color: "#8b2942",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },
  "green-felt": {
    color: "#1e4d2b",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },
  "blue-felt": {
    color: "#1a3a5c",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },
  "purple-felt": {
    color: "#3d1f4a",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },
  "orange-felt": {
    color: "#c45a1a",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },
  "cyan-felt": {
    color: "#0d7377",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },

  // --- Metals ---
  brass: {
    color: "#b5a642",
    roughness: 0.35,
    metalness: 0.85,
    transparent: false,
  },
  silver: {
    color: "#c0c0c0",
    roughness: 0.25,
    metalness: 0.9,
    transparent: false,
  },
  gold: {
    color: "#d4af37",
    roughness: 0.3,
    metalness: 0.9,
    transparent: false,
  },
  "black-metal": {
    color: "#1a1a1a",
    roughness: 0.4,
    metalness: 0.8,
    transparent: false,
  },
  gunmetal: {
    color: "#4a4e54",
    roughness: 0.45,
    metalness: 0.85,
    transparent: false,
  },
  chrome: {
    color: "#e8eef2",
    roughness: 0.35,
    metalness: 1,
    transparent: false,
  },
  copper: {
    color: "#b87333",
    roughness: 0.4,
    metalness: 0.85,
    transparent: false,
  },
  roseGold: {
    color: "#b76e79",
    roughness: 0.3,
    metalness: 0.9,
    transparent: false,
  },

  // --- Solids ---
  black: {
    color: "#1a1a1a",
    roughness: 0.5,
    metalness: 0,
    transparent: false,
  },
  white: {
    color: "#ffffff",
    roughness: 0.5,
    metalness: 0,
    transparent: false,
  },
  red: {
    color: "#8b2942",
    roughness: 0.95,
    metalness: 0,
    transparent: false,
  },
  lacquerBlack: {
    color: "#0a0a0a",
    roughness: 0.15,
    metalness: 0.35,
    transparent: false,
  },
  lacquerCrimson: {
    color: "#6b0f1a",
    roughness: 0.2,
    metalness: 0.25,
    transparent: false,
  },
  sterileWhite: {
    color: "#f4f7fa",
    roughness: 0.35,
    metalness: 0.1,
    transparent: false,
  },

  // --- Blade Runner / neon ---
  neonYellow: {
    color: "#f8e908",
    roughness: 0.25,
    metalness: 0.75,
    transparent: true,
    opacity: 0.85,
  },
  neonMagenta: {
    color: "#ff2d95",
    roughness: 0.25,
    metalness: 0.75,
    transparent: true,
    opacity: 0.85,
  },
  neonCyan: {
    color: "#00f0ff",
    roughness: 0.2,
    metalness: 0.8,
    transparent: true,
    opacity: 0.85,
  },
  nightPurple: {
    color: "#2a1040",
    roughness: 0.4,
    metalness: 0.5,
    transparent: false,
  },

  // --- Matrix ---
  matrixGreen: {
    color: "#00ff41",
    roughness: 0.3,
    metalness: 0.4,
    transparent: false,
  },
  matrixDark: {
    color: "#0a0f0a",
    roughness: 0.55,
    metalness: 0.2,
    transparent: false,
  },

  // --- Tron ---
  tronBlack: {
    color: "#05080f",
    roughness: 0.35,
    metalness: 0.7,
  },
  tronCyan: {
    color: "#18f0ff",
    roughness: 0.2,
    metalness: 0.85,
    transparent: false,
  },
  tronOrange: {
    color: "#ff6a00",
    roughness: 0.25,
    metalness: 0.8,
    transparent: false,
  },

  // --- Hyrule / Zelda ---
  hyruleGreen: {
    color: "#2d6a4f",
    roughness: 0.7,
    metalness: 0.1,
    transparent: false,
  },
  triforceGold: {
    color: "#e6b422",
    roughness: 0.28,
    metalness: 0.9,
    transparent: false,
  },
  sheikahBlue: {
    color: "#1b3a4b",
    roughness: 0.45,
    metalness: 0.55,
    transparent: false,
  },
  sheikahOrange: {
    color: "#ff8c42",
    roughness: 0.35,
    metalness: 0.5,
    transparent: false,
  },

  // --- Portal ---
  portalOrange: {
    color: "#ff6a00",
    roughness: 0.4,
    metalness: 0.3,
    transparent: false,
  },
  portalBlue: {
    color: "#1e90ff",
    roughness: 0.4,
    metalness: 0.3,
    transparent: false,
  },

  // --- Mario ---
  marioRed: {
    color: "#e52521",
    roughness: 0.45,
    metalness: 0.15,
    transparent: false,
  },
  marioBlue: {
    color: "#049cd8",
    roughness: 0.45,
    metalness: 0.15,
    transparent: false,
  },
  coinGold: {
    color: "#f7d51d",
    roughness: 0.3,
    metalness: 0.85,
    transparent: false,
  },

  // --- Star Wars ---
  lightsaberBlue: {
    color: "#2e67f8",
    roughness: 0.25,
    metalness: 0.7,
    transparent: false,
  },
  lightsaberRed: {
    color: "#d10000",
    roughness: 0.25,
    metalness: 0.7,
    transparent: false,
  },
  imperialWhite: {
    color: "#e8e4dc",
    roughness: 0.4,
    metalness: 0.2,
    transparent: false,
  },

  // --- Bond / Casino ---
  champagne: {
    color: "#f7e7ce",
    roughness: 0.35,
    metalness: 0.25,
    transparent: false,
  },

  // keep old cyberpunk aliases used elsewhere
  cyberpunkYellow: {
    color: "#F8E908",
    roughness: 0.3,
    metalness: 0.7,
    transparent: true,
    opacity: 0.75,
  },
  cyberpunkRed: {
    color: "#8A1D44",
    roughness: 0.3,
    metalness: 0.7,
    transparent: true,
    opacity: 0.75,
  },
};
