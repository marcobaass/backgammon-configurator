import { useState } from "react";
import { useConfiguratorStore } from "../../state/useConfiguratorStore";
import { PARTS } from "../../config/parts.js";
import "./ConfigPanel.css";

export default function ConfigPanel() {
  const focusedPartId = useConfiguratorStore((state) => state.focusedPartId);
  const clearFocus = useConfiguratorStore((state) => state.clearFocus);
  const selections = useConfiguratorStore((state) => state.selections);
  const setLook = useConfiguratorStore((state) => state.setLook);
  const setStyle = useConfiguratorStore((state) => state.setStyle);

  const [panelPartId, setPanelPartId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPartId, setPendingPartId] = useState(null);
  const [prevFocusedPartId, setPrevFocusedPartId] = useState(focusedPartId);

  // Sync open/close when store focus changes (React: adjust state during render)
  if (focusedPartId !== prevFocusedPartId) {
    setPrevFocusedPartId(focusedPartId);

    if (focusedPartId === null) {
      setPendingPartId(null);
      setIsOpen(false);
    } else if (!isOpen) {
      setPendingPartId(null);
      setPanelPartId(focusedPartId);
      setIsOpen(true);
    } else if (panelPartId !== focusedPartId) {
      setPendingPartId(focusedPartId);
      setIsOpen(false);
    }
  }

  function handleTransitionEnd(e) {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;

    if (pendingPartId) {
      const next = pendingPartId;
      setPendingPartId(null);
      setPanelPartId(next);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsOpen(true));
      });
      return;
    }

    if (!focusedPartId) {
      setPanelPartId(null);
    }
  }

  const focusedPart = panelPartId
    ? PARTS.find((part) => part.id === panelPartId)
    : null;

  const style = panelPartId ? selections[panelPartId].style : null;

  const lookOptions =
    focusedPart && style
      ? Object.keys(focusedPart.meshes[style].materials)
      : [];

  const styleOptions = focusedPart ? Object.keys(focusedPart.meshes) : [];

  function splitLookOptionsString(name) {
    return name.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  function swatchBackground(lookMats) {
    const colors = Object.values(lookMats).map((m) => m.color);
    if (colors.length === 1) return colors[0];
    if (colors.length === 2) {
      return `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)`;
    }
    if (colors.length > 2) {
      return `linear-gradient(
        135deg,
        ${colors[0]} 0%,
        ${colors[0]} 33.33%,
        ${colors[1]} 33.33%,
        ${colors[1]} 66.66%,
        ${colors[2]} 66.66%,
        ${colors[2]} 100%
      )`;
    }
  }

  return (
    <div
      className={`panel ${isOpen ? "open" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      {focusedPart && style && (
        <>
          <h2>Choose your {focusedPart.label}</h2>
          <div className="style-options">
            {styleOptions.length > 1 && (
              <select
                value={style}
                onChange={(e) => setStyle(panelPartId, e.target.value)}
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
              <div className="swatchContainer" key={`${panelPartId}-${option}`}>
                <button
                  onClick={() => setLook(panelPartId, option)}
                  style={{
                    background: swatchBackground(
                      focusedPart.meshes[style].materials[option],
                    ),
                  }}
                  className="swatch"
                />
                <p className="lookLabel">{splitLookOptionsString(option)}</p>
              </div>
            ))}
          </div>
          <button onClick={clearFocus} className="closePanelButton">
            <p>Back</p>
          </button>
        </>
      )}
    </div>
  );
}
