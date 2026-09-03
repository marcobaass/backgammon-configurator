import { MATERIAL_PRESETS as M } from "./materials";

export const meshes = {
  checkers: {
    classic: {
      meshParts: ["checkersClassicDark", "checkersClassicLight"],
      materials: {
        ivoryEbony: {
          classicDark: M.ebony,
          classicLight: M.ivory,
        },
        agedOak: {
          classicDark: M.walnut,
          classicLight: M.oak,
        },
        cyperpunk: {
          classicDark: M.neonMagenta,
          classicLight: M.neonYellow,
        },
        hyrule: {
          classicDark: M.hyruleGreen,
          classicLight: M.triforceGold,
        },
        matrix: {
          classicDark: M.matrixDark,
          classicLight: M.matrixGreen,
        },
        tron: {
          classicDark: M.tronBlack,
          classicLight: M.tronCyan,
        },
        dune: {
          classicDark: M.leather,
          classicLight: M.sand,
        },
        casinoRoyale: {
          classicDark: M.lacquerBlack,
          classicLight: M.champagne,
        },
        portal: {
          classicDark: M.portalBlue,
          classicLight: M.portalOrange,
        },
        starWars: {
          classicDark: M.lightsaberRed,
          classicLight: M.lightsaberBlue,
        },
      },
    },
    edging: {
      meshParts: [
        "checkersEdgeRingDark",
        "checkersEdgeRingLight",
        "checkersEdgeFaceDark",
        "checkersEdgeFaceLight",
      ],
      materials: {
        silverIvory: {
          EdgeRingDark: M.silver,
          EdgeRingLight: M.silver,
          EdgeFaceDark: M.ebony,
          EdgeFaceLight: M.ivory,
        },
        goldEbony: {
          EdgeRingDark: M.gold,
          EdgeRingLight: M.gold,
          EdgeFaceDark: M.ebony,
          EdgeFaceLight: M.ivory,
        },
        cyberpunk: {
          EdgeRingDark: M.neonCyan,
          EdgeRingLight: M.neonCyan,
          EdgeFaceDark: M.nightPurple,
          EdgeFaceLight: M.neonYellow,
        },
        hyrule: {
          EdgeRingDark: M.triforceGold,
          EdgeRingLight: M.triforceGold,
          EdgeFaceDark: M.sheikahBlue,
          EdgeFaceLight: M.cream,
        },
        matrix: {
          EdgeRingDark: M.matrixGreen,
          EdgeRingLight: M.matrixGreen,
          EdgeFaceDark: M.matrixDark,
          EdgeFaceLight: M.black,
        },
        tron: {
          EdgeRingDark: M.tronCyan,
          EdgeRingLight: M.tronOrange,
          EdgeFaceDark: M.tronBlack,
          EdgeFaceLight: M.white,
        },
        dune: {
          EdgeRingDark: M.spice,
          EdgeRingLight: M.spice,
          EdgeFaceDark: M.leather,
          EdgeFaceLight: M.sand,
        },
        casinoRoyale: {
          EdgeRingDark: M.gold,
          EdgeRingLight: M.gold,
          EdgeFaceDark: M.lacquerBlack,
          EdgeFaceLight: M.champagne,
        },
        portal: {
          EdgeRingDark: M.chrome,
          EdgeRingLight: M.chrome,
          EdgeFaceDark: M.portalBlue,
          EdgeFaceLight: M.portalOrange,
        },
        starWars: {
          EdgeRingDark: M.gunmetal,
          EdgeRingLight: M.gunmetal,
          EdgeFaceDark: M.black,
          EdgeFaceLight: M.imperialWhite,
        },
      },
    },
    dent: {
      meshParts: ["checkersDentDark", "checkersDentLight"],
      materials: {
        ivoryCream: {
          dentDark: M.ebony,
          dentLight: M.ivory,
        },
        agedOak: {
          dentDark: M.walnut,
          dentLight: M.oak,
        },
        cyberpunk: {
          dentDark: M.neonMagenta,
          dentLight: M.neonYellow,
        },
        hyrule: {
          dentDark: M.hyruleGreen,
          dentLight: M.cream,
        },
        matrix: {
          dentDark: M.matrixDark,
          dentLight: M.matrixGreen,
        },
        tron: {
          dentDark: M.tronBlack,
          dentLight: M.tronCyan,
        },
        dune: {
          dentDark: M.leather,
          dentLight: M.sand,
        },
        casinoRoyale: {
          dentDark: M.lacquerCrimson,
          dentLight: M.champagne,
        },
        portal: {
          dentDark: M.portalBlue,
          dentLight: M.sterileWhite,
        },
        starWars: {
          dentDark: M.gunmetal,
          dentLight: M.imperialWhite,
        },
      },
    },
  },

  boardBody: {
    classic: {
      meshParts: ["boardLeft", "boardLid"],
      materials: {
        agedWalnut: {
          boardFloor: M.walnut,
          boardLid: M.walnut,
        },
        paleOak: {
          boardFloor: M.oak,
          boardLid: M.oak,
        },
        cyberpunk: {
          boardFloor: M.nightPurple,
          boardLid: M.nightPurple,
        },
        hyrule: {
          boardFloor: M.hyruleGreen,
          boardLid: M.hyruleGreen,
        },
        matrix: {
          boardFloor: M.matrixDark,
          boardLid: M.matrixDark,
        },
        tron: {
          boardFloor: M.tronBlack,
          boardLid: M.tronBlack,
        },
        dune: {
          boardFloor: M.leather,
          boardLid: M.leather,
        },
        casinoRoyale: {
          boardFloor: M.lacquerBlack,
          boardLid: M.lacquerBlack,
        },
        portal: {
          boardFloor: M.sterileWhite,
          boardLid: M.sterileWhite,
        },
        starWars: {
          boardFloor: M.gunmetal,
          boardLid: M.gunmetal,
        },
      },
    },
  },

  boardInlays: {
    classic: {
      meshParts: [
        "inlayLeft",
        "inlayRight",
        "tongueLightLeft",
        "tongueDarkLeft",
        "tongueLightRight",
        "tongueDarkRight",
      ],
      materials: {
        classicFelt: {
          boardLidInlay: M["green-felt"],
          lidTongueLight: M.ivory,
          lidTongueDark: M.ebony,
        },
        crimsonTable: {
          boardLidInlay: M["red-felt"],
          lidTongueLight: M.cream,
          lidTongueDark: M.lacquerBlack,
        },
        cyberpunk: {
          boardLidInlay: M["purple-felt"],
          lidTongueLight: M.neonYellow,
          lidTongueDark: M.neonMagenta,
        },
        hyrule: {
          boardLidInlay: M["green-felt"],
          lidTongueLight: M.triforceGold,
          lidTongueDark: M.sheikahBlue,
        },
        matrix: {
          boardLidInlay: M.matrixDark,
          lidTongueLight: M.matrixGreen,
          lidTongueDark: M.black,
        },
        tron: {
          boardLidInlay: M["cyan-felt"],
          lidTongueLight: M.tronCyan,
          lidTongueDark: M.tronOrange,
        },
        dune: {
          boardLidInlay: M["orange-felt"],
          lidTongueLight: M.sand,
          lidTongueDark: M.spice,
        },
        casinoRoyale: {
          boardLidInlay: M["red-felt"],
          lidTongueLight: M.champagne,
          lidTongueDark: M.gold,
        },
        portal: {
          boardLidInlay: M["blue-felt"],
          lidTongueLight: M.portalOrange,
          lidTongueDark: M.portalBlue,
        },
        starWars: {
          boardLidInlay: M.black,
          lidTongueLight: M.lightsaberBlue,
          lidTongueDark: M.lightsaberRed,
        },
      },
    },
  },

  hinges: {
    classic: {
      meshParts: [
        "hingeLeftTop",
        "hingeLeftBottom",
        "hingeRightTop",
        "hingeRightBottom",
      ],
      materials: {
        brass: {
          lidHingeBottom: M.brass,
          lidHingeTop: M.brass,
        },
        silver: {
          lidHingeBottom: M.silver,
          lidHingeTop: M.silver,
        },
        gold: {
          lidHingeBottom: M.gold,
          lidHingeTop: M.gold,
        },
        cyberpunk: {
          lidHingeBottom: M.chrome,
          lidHingeTop: M.chrome,
        },
        hyrule: {
          lidHingeBottom: M.triforceGold,
          lidHingeTop: M.triforceGold,
        },
        matrix: {
          lidHingeBottom: M.matrixGreen,
          lidHingeTop: M.matrixGreen,
        },
        tron: {
          lidHingeBottom: M.tronCyan,
          lidHingeTop: M.tronCyan,
        },
        dune: {
          lidHingeBottom: M.copper,
          lidHingeTop: M.copper,
        },
        casinoRoyale: {
          lidHingeBottom: M.gold,
          lidHingeTop: M.gold,
        },
        portal: {
          lidHingeBottom: M.chrome,
          lidHingeTop: M.chrome,
        },
        starWars: {
          lidHingeBottom: M.gunmetal,
          lidHingeTop: M.gunmetal,
        },
      },
    },
  },

  dice: {
    classic: {
      meshParts: ["diePips", "diePips2"],
      materials: {
        ivoryEbony: {
          die: M.ivory,
          pips: M.black,
        },
        agedOak: {
          die: M.oak,
          pips: M.walnut,
        },
        cyberpunk: {
          die: M.neonYellow,
          pips: M.neonMagenta,
        },
        hyrule: {
          die: M.cream,
          pips: M.triforceGold,
        },
        matrix: {
          die: M.matrixDark,
          pips: M.matrixGreen,
        },
        tron: {
          die: M.tronBlack,
          pips: M.tronCyan,
        },
        dune: {
          die: M.sand,
          pips: M.spice,
        },
        casinoRoyale: {
          die: M.lacquerBlack,
          pips: M.gold,
        },
        portal: {
          die: M.sterileWhite,
          pips: M.portalOrange,
        },
        starWars: {
          die: M.imperialWhite,
          pips: M.lightsaberRed,
        },
        mario: {
          die: M.marioRed,
          pips: M.coinGold,
        },
      },
    },
  },

  doublingCube: {
    classic: {
      meshParts: ["doublingCube"],
      materials: {
        agedOak: {
          doublingCube: M.oak,
          doublingNumbers: M.cream,
        },
        walnutGold: {
          doublingCube: M.walnut,
          doublingNumbers: M.gold,
        },
        cyberpunk: {
          doublingCube: M.nightPurple,
          doublingNumbers: M.neonCyan,
        },
        hyrule: {
          doublingCube: M.sheikahBlue,
          doublingNumbers: M.triforceGold,
        },
        matrix: {
          doublingCube: M.matrixDark,
          doublingNumbers: M.matrixGreen,
        },
        tron: {
          doublingCube: M.tronBlack,
          doublingNumbers: M.tronOrange,
        },
        dune: {
          doublingCube: M.leather,
          doublingNumbers: M.spice,
        },
        casinoRoyale: {
          doublingCube: M.lacquerCrimson,
          doublingNumbers: M.gold,
        },
        portal: {
          doublingCube: M.sterileWhite,
          doublingNumbers: M.portalBlue,
        },
        starWars: {
          doublingCube: M.gunmetal,
          doublingNumbers: M.imperialWhite,
        },
      },
    },
  },
};
