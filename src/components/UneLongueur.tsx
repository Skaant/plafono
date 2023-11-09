import React, { useCallback } from "react";
import { Longueur } from "../types/Longueur";
import { LaineBois } from "../types/produits/LaineBois";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";

export default function UneLongueur({
  index,
  longueur,
  laineBois,
  nbLainesBois,
  plaqueOsb,
  nbPlaquesOsb,
  nbTassaux1Vis,
  nbTassaux2Vis,
  nbVis,
  nbClous,
}: {
  index: number;
  longueur: Longueur;
  laineBois: LaineBois;
  nbLainesBois: number;
  plaqueOsb: PlaqueOsb;
  nbPlaquesOsb: number;
  nbTassaux1Vis: number;
  nbTassaux2Vis: number;
  nbVis: number;
  nbClous: number;
}) {
  return (
    <tr className="une-longueur">
      <td>{longueur.id}</td>
      <td className="cell-md">{longueur.longueur}</td>
      <td className="cell-md">
        {longueur.largeurMax}..{longueur.largeurMin} (
        {longueur.largeurMax - longueur.largeurMin})
      </td>
      <td className="cell-md">{nbLainesBois}</td>
      <td className="cell-md">
        {laineBois.longueur - (longueur.longueur % laineBois.longueur)}
      </td>
      <td className="cell-md">
        {laineBois.largeur - (longueur.largeurMax % laineBois.largeur)}/
        {laineBois.largeur - (longueur.largeurMin % laineBois.largeur)}
      </td>
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
