import { useConfiguratorStore } from "../../state/useConfiguratorStore";
import { PARTS } from "../../config/parts.js";
import "./ConfigPanel.css";

console.log("PARTS", PARTS);

export default function ConfigPanel() {
  const focusedPartId = useConfiguratorStore((state) => state.focusedPartId);
  const clearFocus = useConfiguratorStore((state) => state.clearFocus);
  const selections = useConfiguratorStore((state) => state.selections);
  const setLook = useConfiguratorStore((state) => state.setLook);
  const setStyle = useConfiguratorStore((state) => state.setStyle);

  if (focusedPartId === null) return null;

  const focusedPart = PARTS.find((part) => part.id === focusedPartId);
  if (!focusedPart) return null;

  const { style, look } = selections[focusedPartId];
  const lookOptions = Object.keys(focusedPart.meshes[style].materials);
  const styleOptions = Object.keys(focusedPart.meshes);

  if (focusedPartId)
    return (
      <div className="panel">
        <button onClick={clearFocus}>x</button>
        <h2>Editing: {focusedPart.label}</h2>
        <p>CurrentLook: {look}</p>
        <div className="style-options">
          {styleOptions.length > 1 && (
            <select
              value={style}
              onChange={(e) => setStyle(focusedPartId, e.target.value)}
            >
              {styleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="look-options">
          {lookOptions.map((option) => (
            <button key={option} onClick={() => setLook(focusedPartId, option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
}
