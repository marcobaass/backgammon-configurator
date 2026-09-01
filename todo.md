# Backgammon Configurator - Todo

## Goal

- A UI-driven backgammon configurator where:
  - Checkers can switch between 3 mesh variants (only selected variant is visible)
  - All other elements use material/color presets
  - Zustand is the single source of truth for UI selections

## Phase 1: GLB Inventory

- [x] Inspect `board15-animation.glb` scene graph:
  - [x] List mesh node names
  - [x] List material names
  - [x] Identify which meshes correspond to checker variant A/B/C
- [x] Decide how to target non-checker changes:
  - [x] Prefer targeting by material name (if stable)
  - [x] Otherwise target by mesh name + material index

## Phase 2: Configuration Catalog

- [x] Fill in `src/config/parts.js` with part definitions
  - [x] Add checkers part: `type: meshVariant`
    - [x] Map `variantId -> [meshNames...]`
  - [x] Add non-checker parts: `type: material` (or `color`)
    - [x] For each part, define how it targets meshes/materials
- [x] Create `src/config/materials.js`:
  - [x] Add preset IDs and their material parameters
  - [x] Ensure preset IDs referenced by `parts.js` exist

## Phase 3: Zustand Store

- [x] Add Zustand dependency (if not present)
- [x] Implement `src/state/useConfiguratorStore.js`
  - [x] `selections: { [partId]: optionId }`
  - [x] `setPart(partId, optionId)`
  - [x] `reset()` to defaults
  - [x] Provide sensible initial defaults (selected checker variant + default materials)

## Phase 4: Scene Apply Logic

- [ ] Implement `src/lib/buildSceneMap.js`
  - [ ] Traverse GLB scene once after load
  - [ ] Build lookup tables for meshes/materials by name
- [ ] Implement `src/lib/applyConfig.js`
  - [ ] For `meshVariant` parts:
    - [ ] show selected variant meshes
    - [ ] hide non-selected variant meshes
  - [ ] For `material` parts:
    - [ ] apply selected preset to targeted material(s)/slot(s)
    - [ ] clone materials as needed to avoid global side-effects

## Phase 5: React Three Fiber Integration

- [ ] Update `BackgammonSet` to:
  - [ ] build scene map once on GLB load
  - [ ] call `applyConfig` when relevant selections change

## Phase 6: UI

- [ ] Create UI components that read `parts.js`:
  - [ ] `MeshVariantPicker` for checkers (3 options)
  - [ ] `MaterialPresetPicker` for other parts
- [ ] Build `ConfigPanel`:
  - [ ] Renders controls from catalog
  - [ ] Calls `setPart` on user selection

## Phase 7: Verify Behavior

- [ ] Switching checker variants:
  - [ ] Only one variant visible at a time
  - [ ] Switching does not break material changes
- [ ] Changing material presets:
  - [ ] Visual changes match expected presets
- [ ] Reset button (if added):
  - [ ] Restores default selections correctly

## Phase 8: Polish (optional)

- [ ] Add persistence (store selections in URL or localStorage)
- [ ] Add “randomize” or “save configuration” if desired
