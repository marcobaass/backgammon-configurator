import { useConfiguratorStore } from "../../state/useConfiguratorStore";
import "./ConfigPanel.css";

export default function ConfigPanel() {
  const focusedPartId = useConfiguratorStore((state) => state.focusedPartId);
  if (focusedPartId === null) return null;

  if (focusedPartId)
    return <div className="panel">Editing: {focusedPartId}</div>;
}
