import { MATERIAL_PRESETS } from "./materials";

export const meshes = {
  checkers: {
    classic: {
      meshParts: ["checkersClassicDark", "checkersClassicLight"],
      materials: {
        ivoryCream: {
          classicDark: MATERIAL_PRESETS.ebony,
          classicLight: MATERIAL_PRESETS.ivory,
        },
        wooden: {
          classicDark: MATERIAL_PRESETS.oak,
          classicLight: MATERIAL_PRESETS.walnut,
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
        silver: {
          EdgeRingDark: MATERIAL_PRESETS.silver,
          EdgeRingLight: MATERIAL_PRESETS.silver,
          EdgeFaceLight: MATERIAL_PRESETS.ivory,
          EdgeFaceDark: MATERIAL_PRESETS.ebony,
        },
        gold: {
          EdgeRingDark: MATERIAL_PRESETS.gold,
          EdgeRingLight: MATERIAL_PRESETS.gold,
          EdgeFaceLight: MATERIAL_PRESETS.ivory,
          EdgeFaceDark: MATERIAL_PRESETS.ebony,
        },
      },
    },
    dent: {
      meshParts: ["checkersDentDark", "checkersDentLight"],
      materials: {
        ivoryCream: {
          dentDark: MATERIAL_PRESETS.ivory,
          dentLight: MATERIAL_PRESETS.cream,
        },
      },
    },
  },
  boardBody: {
    classic: {
      meshParts: ["boardLeft", "boardLid"],
      materials: {
        ivoryCream: {
          boardFloor: MATERIAL_PRESETS.walnut,
          boardLid: MATERIAL_PRESETS.walnut,
        },
        oakWalnut: {
          boardFloor: MATERIAL_PRESETS.oak,
          boardLid: MATERIAL_PRESETS.walnut,
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
        ivoryCream: {
          boardLidInlay: MATERIAL_PRESETS["green-felt"],
          lidTongueLight: MATERIAL_PRESETS.ivory,
          lidTongueDark: MATERIAL_PRESETS.ebony,
        },
        oakWalnut: {
          boardLidInlay: MATERIAL_PRESETS.oak,
          lidTongueLight: MATERIAL_PRESETS.oak,
          lidTongueDark: MATERIAL_PRESETS.walnut,
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
          lidHingeBottom: MATERIAL_PRESETS.brass,
          lidHingeTop: MATERIAL_PRESETS.brass,
        },
      },
    },
  },
  dice: {
    classic: {
      meshParts: ["diePips", "diePips2"],
      materials: {
        ivoryCream: {
          die: MATERIAL_PRESETS.ivory,
          pips: MATERIAL_PRESETS.black,
        },
        oakWalnut: {
          die: MATERIAL_PRESETS.oak,
          pips: MATERIAL_PRESETS.gold,
        },
      },
    },
  },
  doublingCube: {
    classic: {
      meshParts: ["doublingCube"],
      materials: {
        ivoryCream: {
          doublingCube: MATERIAL_PRESETS.oak,
          doublingNumbers: MATERIAL_PRESETS.cream,
        },
        oakWalnut: {
          doublingCube: MATERIAL_PRESETS.oak,
          doublingNumbers: MATERIAL_PRESETS.walnut,
        },
      },
    },
  },
};
