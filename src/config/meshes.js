import { MATERIAL_PRESETS } from "./materials";

export const meshes = {
  checkers: {
    classic: {
      meshParts: ["checkersClassicDark", "checkersClassicLight"],
      materials: {
        ivoryCream: [MATERIAL_PRESETS.ebony, MATERIAL_PRESETS.ivory],
        wooden: [MATERIAL_PRESETS.oak, MATERIAL_PRESETS.walnut],
      },
    },
    edging: {
      meshParts: ["checkersEdgingDark", "checkersEdgingLight"],
      materials: {
        ivoryCream: [MATERIAL_PRESETS.ivory, MATERIAL_PRESETS.cream],
      },
    },
    dent: {
      meshParts: ["checkersDentDark", "checkersDentLight"],
      materials: {
        ivoryCream: [MATERIAL_PRESETS.ivory, MATERIAL_PRESETS.cream],
      },
    },
  },
  boardBody: {
    classic: {
      meshParts: ["boardLeft", "boardLid"],
      materials: {
        ivoryCream: [MATERIAL_PRESETS.walnut, MATERIAL_PRESETS.walnut],
        oakWalnut: [MATERIAL_PRESETS.oak, MATERIAL_PRESETS.walnut],
      },
    },
  },
  boardInlays: {
    classic: {
      meshParts: ["inlayLeft", "inlayRight"],
      materials: {
        ivoryCream: [
          MATERIAL_PRESETS["green-felt"],
          MATERIAL_PRESETS["green-felt"],
        ],
        oakWalnut: [MATERIAL_PRESETS.oak, MATERIAL_PRESETS.walnut],
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
        brass: [MATERIAL_PRESETS.brass],
      },
    },
  },
  tongues: {
    classic: {
      meshParts: [
        "tongueLightLeft",
        "tongueDarkLeft",
        "tongueLightRight",
        "tongueDarkRight",
      ],
      materials: {
        ivoryCream: [MATERIAL_PRESETS.ivory, MATERIAL_PRESETS.ebony],
        oakWalnut: [MATERIAL_PRESETS.oak, MATERIAL_PRESETS.walnut],
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
        ivoryCream: [MATERIAL_PRESETS.oak, MATERIAL_PRESETS.cream],
        oakWalnut: [MATERIAL_PRESETS.oak, MATERIAL_PRESETS.walnut],
      },
    },
  },
};
