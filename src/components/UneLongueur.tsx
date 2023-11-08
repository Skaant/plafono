import React, { useCallback } from "react";
import { Longueur } from "../types/Longueur";
import { PlaqueOsb } from "../types/PlaqueOsb";

export default function UneLongueur({
  index,
  longueur,
  plaqueOsb,
  nbPlaquesOsb,
  nbTassaux1Vis,
  nbTassaux2Vis,
  nbVis,
  nbClous,
  updateLongueur,
}: {
  index: number;
  longueur: Longueur;
  plaqueOsb: PlaqueOsb;
  nbPlaquesOsb: number;
  nbTassaux1Vis: number;
  nbTassaux2Vis: number;
  nbVis: number;
  nbClous: number;
  updateLongueur: (index: number, longueur: Longueur) => void;
}) {
  const updateLongueurProp = useCallback(
    (prop: keyof Longueur, value: number) => {
      const longueurUpdated = { ...longueur, [prop]: value };
      updateLongueur(index, longueurUpdated);
    },
    [longueur]
  );
  return (
    <tr className="une-longueur">
      <td>{longueur.id}</td>
      <td className="cell-md">
        <input
          type="text"
          value={longueur.longueur}
          onChange={(e) =>
            updateLongueurProp("longueur", parseInt(e.target.value || "0"))
          }
        />
      </td>
      <td className="cell-md">
        <input
          type="text"
          value={longueur.largeurMax}
          onChange={(e) =>
            updateLongueurProp("largeurMax", parseInt(e.target.value || "0"))
          }
        />
      </td>
      <td className="cell-md">
        <input
          type="text"
          value={longueur.largeurMin}
          onChange={(e) =>
            updateLongueurProp("largeurMin", parseInt(e.target.value || "0"))
          }
        />
      </td>
      <td className="cell-sm">{longueur.largeurMax - longueur.largeurMin}</td>
      <td className="cell-md">{nbPlaquesOsb}</td>
      <td className="cell-md">
        {plaqueOsb.longueur - (longueur.longueur % plaqueOsb.longueur)}
      </td>
      <td className="cell-md">
        {plaqueOsb.largeur - (longueur.largeurMax % plaqueOsb.largeur)}/
        {plaqueOsb.largeur - (longueur.largeurMin % plaqueOsb.largeur)}
      </td>
      <td className="cell-md">{nbTassaux1Vis}</td>
      <td className="cell-md">{nbTassaux2Vis}</td>
      <td className="cell-md">{nbVis}</td>
      <td className="cell-md">{nbClous}</td>
    </tr>
  );
}
