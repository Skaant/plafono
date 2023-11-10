import React, { useCallback } from "react";
import { Longueur } from "../types/Longueur";
import { LaineBois } from "../types/produits/LaineBois";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";
import { UIState } from "../types/ui/UIState";
import { getTasseauxUneLongueur } from "../helpers/getTasseauxUneLongueur";
import { Piece } from "../types/Piece";
import { Tasseau } from "../types/produits/Tasseau";

export default function UneLongueur({
  longueur,
  laineBois,
  nbLainesBois,
  plaqueOsb,
  nbPlaquesOsb,
  nbTassaux1Vis,
  tailleDesTasseaux1Vis,
  tasseau,
  nbTassaux2Vis,
  nbVis,
  nbClous,
  longueursTableUI,
}: {
  longueur: Longueur;
  laineBois: LaineBois;
  nbLainesBois: number;
  plaqueOsb: PlaqueOsb;
  nbPlaquesOsb: number;
  nbTassaux1Vis: number;
  tailleDesTasseaux1Vis: Piece["tailleDesTassaux1Vis"];
  tasseau: Tasseau;
  nbTassaux2Vis: number;
  nbVis: number;
  nbClous: number;
  longueursTableUI: UIState;
}) {
  return (
    <tr className="une-longueur">
      <td className="cell-numero">{longueur.id}</td>
      <td className="dimension">
        <span className="longueur">{longueur.longueur} cm</span>
        <br />x {longueur.largeurMax}...{longueur.largeurMin}
      </td>
      {longueursTableUI.lainesBois && (
        <>
          <td className="cell-md">{nbLainesBois}</td>
          {longueursTableUI.lainesBoisChutes && (
            <>
              <td className="cell-md">
                {laineBois.longueur - (longueur.longueur % laineBois.longueur)}
              </td>
              <td className="cell-md">
                {laineBois.largeur - (longueur.largeurMax % laineBois.largeur)}/
                {laineBois.largeur - (longueur.largeurMin % laineBois.largeur)}
              </td>
            </>
          )}
        </>
      )}
      {longueursTableUI.plaquesOsb && (
        <>
          <td className="cell-md">{nbPlaquesOsb}</td>
          {longueursTableUI.plaquesOsbChutes && (
            <>
              <td className="cell-md">
                {plaqueOsb.longueur - (longueur.longueur % plaqueOsb.longueur)}
              </td>
              <td className="cell-md">
                {plaqueOsb.largeur - (longueur.largeurMax % plaqueOsb.largeur)}/
                {plaqueOsb.largeur - (longueur.largeurMin % plaqueOsb.largeur)}
              </td>
            </>
          )}
        </>
      )}
      {longueursTableUI.tasseaux && (
        <>
          <td className="cell-md">{nbTassaux1Vis}</td>
          <td className="cell-md">{nbTassaux2Vis}</td>
          <td className="cell-md">
            {JSON.stringify(
              getTasseauxUneLongueur(
                nbTassaux1Vis,
                tailleDesTasseaux1Vis,
                tasseau
              )
            )}
          </td>
        </>
      )}
      {longueursTableUI.visEtClous && (
        <>
          <td className="cell-md">{nbVis}</td>
          <td className="cell-md">{nbClous}</td>
        </>
      )}
    </tr>
  );
}
