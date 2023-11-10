import React from "react";
import { UIState } from "../types/ui/UIState";

export default function LongueursTableUIState({
  uiState,
  setUiState,
}: {
  uiState: UIState;
  setUiState: (uiState: UIState) => void;
}) {
  const toggleMode =
    uiState.lainesBois &&
    uiState.plaquesOsb &&
    uiState.tasseaux &&
    uiState.visEtClous;
  const toggle = () => {
    if (toggleMode) {
      setUiState({
        lainesBois: false,
        lainesBoisChutes: false,
        plaquesOsb: false,
        plaquesOsbChutes: false,
        tasseaux: false,
        visEtClous: false,
      });
    } else {
      setUiState({
        lainesBois: true,
        lainesBoisChutes: false,
        plaquesOsb: true,
        plaquesOsbChutes: false,
        tasseaux: true,
        visEtClous: true,
      });
    }
  };
  return (
    <div id="longueurs-table-ui-state">
      <button onClick={toggle}>
        {toggleMode ? "Tout désactiver" : "Tout activer"}
      </button>
      <input
        type="checkbox"
        checked={uiState.lainesBois}
        onChange={(e) =>
          setUiState({ ...uiState, lainesBois: e.target.checked })
        }
      />
      <label>Laine de bois</label>
      <input
        type="checkbox"
        checked={uiState.plaquesOsb}
        onChange={(e) =>
          setUiState({ ...uiState, plaquesOsb: e.target.checked })
        }
      />
      <label>Plaques OSB</label>
      <input
        type="checkbox"
        checked={uiState.tasseaux}
        onChange={(e) => setUiState({ ...uiState, tasseaux: e.target.checked })}
      />
      <label>Tasseaux</label>
      <input
        type="checkbox"
        checked={uiState.visEtClous}
        onChange={(e) =>
          setUiState({ ...uiState, visEtClous: e.target.checked })
        }
      />
      <label>Vis et clous</label>
    </div>
  );
}
