import React, { useCallback, useMemo } from "react";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { Longueur } from "../types/Longueur";
import { Piece } from "../types/Piece";

export default function UneLongueur({
  index,
  longueur,
  piece,
  updateLongueur,
}: {
  index: number;
  longueur: Longueur;
  piece: Piece;
  updateLongueur: (index: number, longueur: Longueur) => void;
}) {
  const plaqueOsb = useMemo(
    () => PLAQUES_OSB_DATA[piece.plaqueOsb],
    [piece.plaqueOsb]
  );
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
      <td className="cell-md">
        {Math.ceil(longueur.longueur / plaqueOsb.longueur)}
      </td>
      <td className="cell-md">
        {plaqueOsb.longueur - (longueur.longueur % plaqueOsb.longueur)}
      </td>
      <td className="cell-md">
        {plaqueOsb.largeur - (longueur.largeurMax % plaqueOsb.largeur)}/
        {plaqueOsb.largeur - (longueur.largeurMin % plaqueOsb.largeur)}
      </td>
    </tr>
  );
}
