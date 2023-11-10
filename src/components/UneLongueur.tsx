import React from "react";
import { Longueur } from "../types/Longueur";
import { LaineBois } from "../types/produits/LaineBois";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";
import { UIState } from "../types/ui/UIState";
import { getTasseauxUneLongueur } from "../helpers/getTasseauxUneLongueur";
import { Piece } from "../types/Piece";
import { Tasseau } from "../types/produits/Tasseau";
import SectionProduit from "./sections/SectionProduit";
import { SectionChutesFixed } from "../types/SectionChutesFixed";

export default function UneLongueur({
  longueur,
  sectionsLainesBois,
  chutesLainesBois,
  sectionsPlaquesOsb,
  chutesPlaquesOsb,
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
  sectionsLainesBois: SectionChutesFixed<LaineBois>[];
  chutesLainesBois: SectionChutesFixed<LaineBois>[];
  plaqueOsb: PlaqueOsb;
  sectionsPlaquesOsb: SectionChutesFixed<PlaqueOsb>[];
  chutesPlaquesOsb: SectionChutesFixed<PlaqueOsb>[];
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
          <td>
            <div className="cell-sections">
              {sectionsLainesBois.map((section) => (
                <SectionProduit section={section} />
              ))}
            </div>
          </td>
          {longueursTableUI.lainesBoisChutes && (
            <>
              <td>
                <div className="cell-sections">
                  {chutesLainesBois.map((section) => (
                    <SectionProduit section={section} />
                  ))}
                </div>
              </td>
            </>
          )}
        </>
      )}
      {longueursTableUI.plaquesOsb && (
        <>
          <td>
            <div className="cell-sections">
              {sectionsPlaquesOsb.map((section) => (
                <SectionProduit section={section} />
              ))}
            </div>
          </td>
          {longueursTableUI.plaquesOsbChutes && (
            <>
              <td>
                <div className="cell-sections">
                  {chutesPlaquesOsb.map((section) => (
                    <SectionProduit section={section} />
                  ))}
                </div>
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
