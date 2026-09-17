import { MATERIAL_PRESETS as M } from "./materials";

export const meshes = {
  checkers: {
    classic: {
      meshParts: ["checkersClassicDark", "checkersClassicLight"],
      materials: {
        IvoryEbony: {
          classicDark: M.ebony,
          classicLight: M.ivory,
        },
        AgedOak: {
          classicDark: M.walnut,
          classicLight: M.oak,
        },
        Cyberpunk: {
          classicDark: M.neonMagenta,
          classicLight: M.neonYellow,
        },
        Hyrule: {
          classicDark: M.hyruleGreen,
          classicLight: M.triforceGold,
        },
        Matrix: {
          classicDark: M.matrixDark,
          classicLight: M.matrixGreen,
        },
        Tron: {
          classicDark: M.tronBlack,
          classicLight: M.tronCyan,
        },
        Dune: {
          classicDark: M.leather,
          classicLight: M.sand,
        },
        CasinoRoyale: {
          classicDark: M.lacquerBlack,
          classicLight: M.champagne,
        },
        Portal: {
          classicDark: M.portalBlue,
          classicLight: M.portalOrange,
        },
        StarWars: {
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
        SilverIvory: {
          EdgeRingDark: M.silver,
          EdgeRingLight: M.silver,
          EdgeFaceDark: M.ebony,
          EdgeFaceLight: M.ivory,
        },
        GoldEbony: {
          EdgeRingDark: M.gold,
          EdgeRingLight: M.gold,
          EdgeFaceDark: M.ebony,
          EdgeFaceLight: M.ivory,
        },
        Cyberpunk: {
          EdgeRingDark: M.neonCyan,
          EdgeRingLight: M.neonCyan,
          EdgeFaceDark: M.nightPurple,
          EdgeFaceLight: M.neonYellow,
        },
        Hyrule: {
          EdgeRingDark: M.triforceGold,
          EdgeRingLight: M.triforceGold,
          EdgeFaceDark: M.sheikahBlue,
          EdgeFaceLight: M.cream,
        },
        Matrix: {
          EdgeRingDark: M.matrixGreen,
          EdgeRingLight: M.matrixGreen,
          EdgeFaceDark: M.matrixDark,
          EdgeFaceLight: M.black,
        },
        Tron: {
          EdgeRingDark: M.tronCyan,
          EdgeRingLight: M.tronOrange,
          EdgeFaceDark: M.tronBlack,
          EdgeFaceLight: M.white,
        },
        Dune: {
          EdgeRingDark: M.spice,
          EdgeRingLight: M.spice,
          EdgeFaceDark: M.leather,
          EdgeFaceLight: M.sand,
        },
        CasinoRoyale: {
          EdgeRingDark: M.gold,
          EdgeRingLight: M.gold,
          EdgeFaceDark: M.lacquerBlack,
          EdgeFaceLight: M.champagne,
        },
        Portal: {
          EdgeRingDark: M.chrome,
          EdgeRingLight: M.chrome,
          EdgeFaceDark: M.portalBlue,
          EdgeFaceLight: M.portalOrange,
        },
        StarWars: {
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
        IvoryCream: {
          dentDark: M.ebony,
          dentLight: M.ivory,
        },
        AgedOak: {
          dentDark: M.walnut,
          dentLight: M.oak,
        },
        Cyberpunk: {
          dentDark: M.neonMagenta,
          dentLight: M.neonYellow,
        },
        Hyrule: {
          dentDark: M.hyruleGreen,
          dentLight: M.cream,
        },
        Matrix: {
          dentDark: M.matrixDark,
          dentLight: M.matrixGreen,
        },
        Tron: {
          dentDark: M.tronBlack,
          dentLight: M.tronCyan,
        },
        Dune: {
          dentDark: M.leather,
          dentLight: M.sand,
        },
        CasinoRoyale: {
          dentDark: M.lacquerCrimson,
          dentLight: M.champagne,
        },
        Portal: {
          dentDark: M.portalBlue,
          dentLight: M.sterileWhite,
        },
        StarWars: {
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
        AgedWalnut: {
          boardFloor: M.walnut,
          boardLid: M.walnut,
        },
        PaleOak: {
          boardFloor: M.oak,
          boardLid: M.oak,
        },
        Cyberpunk: {
          boardFloor: M.nightPurple,
          boardLid: M.nightPurple,
        },
        Hyrule: {
          boardFloor: M.hyruleGreen,
          boardLid: M.hyruleGreen,
        },
        Matrix: {
          boardFloor: M.matrixDark,
          boardLid: M.matrixDark,
        },
        Tron: {
          boardFloor: M.tronBlack,
          boardLid: M.tronBlack,
        },
        Dune: {
          boardFloor: M.leather,
          boardLid: M.leather,
        },
        CasinoRoyale: {
          boardFloor: M.lacquerBlack,
          boardLid: M.lacquerBlack,
        },
        Portal: {
          boardFloor: M.sterileWhite,
          boardLid: M.sterileWhite,
        },
        StarWars: {
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
        ClassicFelt: {
          boardLidInlay: M["green-felt"],
          lidTongueLight: M.ivory,
          lidTongueDark: M.ebony,
        },
        CrimsonTable: {
          boardLidInlay: M["red-felt"],
          lidTongueLight: M.cream,
          lidTongueDark: M.lacquerBlack,
        },
        Cyberpunk: {
          boardLidInlay: M["purple-felt"],
          lidTongueLight: M.neonYellow,
          lidTongueDark: M.neonMagenta,
        },
        Cyrule: {
          boardLidInlay: M["green-felt"],
          lidTongueLight: M.triforceGold,
          lidTongueDark: M.sheikahBlue,
        },
        Matrix: {
          boardLidInlay: M.matrixDark,
          lidTongueLight: M.matrixGreen,
          lidTongueDark: M.black,
        },
        Tron: {
          boardLidInlay: M["cyan-felt"],
          lidTongueLight: M.tronCyan,
          lidTongueDark: M.tronOrange,
        },
        Dune: {
          boardLidInlay: M["orange-felt"],
          lidTongueLight: M.sand,
          lidTongueDark: M.spice,
        },
        CasinoRoyale: {
          boardLidInlay: M["red-felt"],
          lidTongueLight: M.champagne,
          lidTongueDark: M.gold,
        },
        Portal: {
          boardLidInlay: M["blue-felt"],
          lidTongueLight: M.portalOrange,
          lidTongueDark: M.portalBlue,
        },
        StarWars: {
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
        Brass: {
          lidHingeBottom: M.brass,
          lidHingeTop: M.brass,
        },
        Silver: {
          lidHingeBottom: M.silver,
          lidHingeTop: M.silver,
        },
        Gold: {
          lidHingeBottom: M.gold,
          lidHingeTop: M.gold,
        },
        Cyberpunk: {
          lidHingeBottom: M.nightPurple,
          lidHingeTop: M.nightPurple,
        },
        Hyrule: {
          lidHingeBottom: M.triforceGold,
          lidHingeTop: M.triforceGold,
        },
        matrix: {
          lidHingeBottom: M.matrixGreen,
          lidHingeTop: M.matrixGreen,
        },
        Tron: {
          lidHingeBottom: M.tronCyan,
          lidHingeTop: M.tronCyan,
        },
        Dune: {
          lidHingeBottom: M.copper,
          lidHingeTop: M.copper,
        },
        CasinoRoyale: {
          lidHingeBottom: M.champagne,
          lidHingeTop: M.champagne,
        },
        Portal: {
          lidHingeBottom: M.portalOrange,
          lidHingeTop: M.portalOrange,
        },
        StarWars: {
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
        IvoryEbony: {
          die: M.ivory,
          pips: M.black,
        },
        AgedOak: {
          die: M.oak,
          pips: M.walnut,
        },
        Cyberpunk: {
          die: M.neonYellow,
          pips: M.neonMagenta,
        },
        Hyrule: {
          die: M.cream,
          pips: M.triforceGold,
        },
        Matrix: {
          die: M.matrixDark,
          pips: M.matrixGreen,
        },
        Tron: {
          die: M.tronBlack,
          pips: M.tronCyan,
        },
        Dune: {
          die: M.sand,
          pips: M.spice,
        },
        CasinoRoyale: {
          die: M.lacquerBlack,
          pips: M.gold,
        },
        Portal: {
          die: M.sterileWhite,
          pips: M.portalOrange,
        },
        StarWars: {
          die: M.imperialWhite,
          pips: M.lightsaberRed,
        },
        Mario: {
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
        AgedOak: {
          doublingCube: M.oak,
          doublingNumbers: M.cream,
        },
        WalnutGold: {
          doublingCube: M.walnut,
          doublingNumbers: M.gold,
        },
        Cyberpunk: {
          doublingCube: M.nightPurple,
          doublingNumbers: M.neonCyan,
        },
        Hyrule: {
          doublingCube: M.sheikahBlue,
          doublingNumbers: M.triforceGold,
        },
        Matrix: {
          doublingCube: M.matrixDark,
          doublingNumbers: M.matrixGreen,
        },
        Tron: {
          doublingCube: M.tronBlack,
          doublingNumbers: M.tronOrange,
        },
        Dune: {
          doublingCube: M.leather,
          doublingNumbers: M.spice,
        },
        CasinoRoyale: {
          doublingCube: M.lacquerCrimson,
          doublingNumbers: M.gold,
        },
        Portal: {
          doublingCube: M.sterileWhite,
          doublingNumbers: M.portalBlue,
        },
        StarWars: {
          doublingCube: M.gunmetal,
          doublingNumbers: M.imperialWhite,
        },
      },
    },
  },
};
