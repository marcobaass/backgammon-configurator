# Backgammon Configurator

A 3D backgammon set configurator built with React Three Fiber. Users pick materials and mesh variants in the UI; the loaded GLB model updates in real time.

## What the app does

User picks options in the UI → those choices are stored → the 3D model updates (show/hide parts, change colors).

## The flow

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  UI         │     │  Zustand     │     │ applyConfig │     │  3D model    │
│  (buttons)  │ ──► │  (memory)    │ ──► │  (worker)   │ ──► │  (GLB)       │
└─────────────┘     └──────────────┘     └─────────────┘     └──────────────┘
                           ▲                     │                   |
                           │                     │                   |
                    reads defaults          reads rules        reads clickMap.js
                           │                     │
                    ┌──────┴──────┐       ┌──────┴──────┐
                    │  parts.js   │       │  meshes.js  │
                    │             │       │ materials.js│
                    └─────────────┘       └─────────────┘
                                                ▲
                                                │
                                         ┌──────┴──────┐
                                         │  sceneMap   │
                                         │ (phone book)│
                                         └─────────────┘
```

## File responsibilities

### Config files (the rules — you write these)

| File                      | Job                                   | Think of it as                  |
| ------------------------- | ------------------------------------- | ------------------------------- |
| `src/config/materials.js` | Defines what colors look like         | Paint swatches: `oak = #c4a574` |
| `src/config/meshes.js`    | Maps GLB names → which presets to use | Wiring diagram for the 3D file  |
| `src/config/parts.js`     | Lists what the user can configure     | Product menu for the UI         |

### Runtime files (code that runs)

| File                                     | Job                                          | Think of it as                                                      |
| ---------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| `src/state/useConfiguratorStore.js`      | Remembers user choices                       | Shopping cart: `{ dice: { style: "classic", look: "ivoryCream" } }` |
| `src/lib/sceneMap.js`                    | Indexes the loaded GLB by name               | Phone book: `"diePips"` → that 3D object                            |
| `src/lib/applyConfig.js`                 | Reads choices + rules, updates the model     | The worker that actually paints and shows/hides                     |
| `src/components/scene/BackgammonSet.jsx` | Loads GLB, builds sceneMap, runs applyConfig | Glue between 3D and config                                          |

### UI / display

| File                                   | Job                                    |
| -------------------------------------- | -------------------------------------- |
| `src/components/ui/ConfigPanel.jsx`    | Sidebar shell                          |
| `src/components/ui/MeshPicker.jsx`     | Style picker (classic / edging / dent) |
| `src/components/ui/MaterialPicker.jsx` | Color / look picker                    |
| `src/components/scene/Scene.jsx`       | Canvas, lights, camera                 |

## Two naming systems in the GLB

The GLB has two different kinds of names. The config uses both:

| Name type          | Example                          | Used for                 |
| ------------------ | -------------------------------- | ------------------------ |
| **Object names**   | `diePips`, `checkersClassicDark` | Show / hide whole pieces |
| **Material names** | `die`, `pips`, `classicDark`     | Change colors            |

- `meshParts` in `meshes.js` = object names (visibility)
- Keys inside `materials` = material names (colors)

`diePips` is the die object. `pips` is the dot color on that die. Different things.

## Walkthrough: user picks ivory dice

**1. Store** (`useConfiguratorStore.js`) holds:

```js
selections.dice = { style: "classic", look: "ivoryCream" };
```

**2. `applyConfig` loops over `PARTS` from `parts.js`**

For dice it reads `meshes.js`:

```js
meshParts: ["diePips", "diePips2"]              // which objects to show
materials.ivoryCream: { die: ivory, pips: black }  // which colors
```

**3. Visibility** — uses `sceneMap.objectsByName`:

- Hide all dice objects
- Show `diePips` and `diePips2`

**4. Colors** — traverses those objects:

- Mesh with material `"die"` → apply ivory preset
- Mesh with material `"pips"` → apply black preset

**5. `materials.js`** supplies the actual values:

```js
ivory: { color: "#fffff0", roughness: 0.4 }
black: { color: "#1a1a1a", roughness: 0.5 }
```

## Why so many files?

| If merged…                        | Problem                                 |
| --------------------------------- | --------------------------------------- |
| Everything in `BackgammonSet.jsx` | 3D component becomes huge and messy     |
| Colors only in Blender            | User can't change anything in the app   |
| No `sceneMap`                     | Search the whole 3D tree on every click |
| No Zustand                        | UI and 3D can't share state cleanly     |

Split is:

- **What things look like** → `materials.js`
- **What connects to what** → `meshes.js`
- **What user can pick** → `parts.js`
- **What user picked** → store
- **How to apply it** → `applyConfig` + `sceneMap`

## What each file does NOT do

| File                | Does NOT                     |
| ------------------- | ---------------------------- |
| `materials.js`      | Know about dice vs checkers  |
| `meshes.js`         | Store user selections        |
| `parts.js`          | Touch the 3D model           |
| `sceneMap.js`       | Decide colors or visibility  |
| `applyConfig.js`    | Render React or load the GLB |
| `BackgammonSet.jsx` | Define color presets         |

## Mental model

```
materials.js  →  WHAT colors exist
meshes.js     →  WHICH GLB names get WHICH colors
parts.js      →  WHAT the user sees in the menu
store         →  WHAT the user picked
sceneMap      →  WHERE things are in the loaded file
applyConfig   →  MAKES IT HAPPEN on the 3D model
```

## Material config shape

Each look option in `meshes.js` is an object keyed by **GLB material name**:

```js
ivoryCream: {
  die: MATERIAL_PRESETS.ivory,
  pips: MATERIAL_PRESETS.black,
}
```

`applyConfig` traverses visible `meshParts`, reads each mesh's `material.name`, and applies the matching preset.
