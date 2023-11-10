import React, { useMemo } from "react";
import { getNbClousParLongueurs } from "../helpers/getNbClousParLongueurs";
import { getNbItemsParLongueur } from "../helpers/getNbItemsParLongueur";
import { getNbPlaquesOsbParLongueurs } from "../helpers/getNbPlaquesOsbParLongueurs";
import { getNbTassaux1VisParLongueurs } from "../helpers/getNbTassaux1VisParLongueurs";
import { getNbTassaux2VisParLongueurs } from "../helpers/getNbTassaux2VisParLongueurs";
import { getNbVisParLongueurs } from "../helpers/getNbVisParLongueurs";
import { getNombreDeLots } from "../helpers/getNombreDeLots";
import { getTotal } from "../helpers/getTotal";
import { Piece } from "../types/Piece";
import { LaineBois } from "../types/produits/LaineBois";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";
import { UIState } from "../types/ui/UIState";
import UneLongueur from "./UneLongueur";
import { Clou } from "../types/produits/Clou";
import { Vis } from "../types/produits/Vis";
import { Tasseau } from "../types/produits/Tasseau";
import { getTasseauxUneLongueur } from "../helpers/getTasseauxUneLongueur";
import { GetLongueurSectionsReturn } from "../helpers/getLongueurSections";

export default function LongueursTable({
  piece,
  laineBois,
  sectionsEtChutesLaineBois,
  plaqueOsb,
  sectionsEtChutesPlaquesOsb,
  tasseau,
  vis,
  clou,
  longueursTableUi,
  setLongueursTableUi,
}: {
  piece: Piece;
  laineBois: LaineBois;
  sectionsEtChutesLaineBois: GetLongueurSectionsReturn<LaineBois>[];
  plaqueOsb: PlaqueOsb;
  sectionsEtChutesPlaquesOsb: GetLongueurSectionsReturn<PlaqueOsb>[];
  tasseau: Tasseau;
  vis: Vis;
  clou: Clou;
  longueursTableUi: UIState;
  setLongueursTableUi: (longueursTableUi: UIState) => void;
}) {
  const nbLainesBoisParLongueurs = useMemo(
    () =>
      sectionsEtChutesLaineBois.map(
        (sectionsEtChutes) => sectionsEtChutes.sections.length
      ),
    [sectionsEtChutesLaineBois]
  );
  const nbLainesBoisTotal = useMemo(
    () => getTotal(nbLainesBoisParLongueurs),
    [nbLainesBoisParLongueurs]
  );
  const nbLotsLaineBois = useMemo(
    () => getNombreDeLots(nbLainesBoisTotal, laineBois.lot),
    [nbLainesBoisTotal, laineBois]
  );
  const prixLotsLaineBoisTotal = useMemo(
    () => nbLotsLaineBois * laineBois.prix,
    [nbLotsLaineBois, laineBois]
  );
  const nbPlaquesOsbParLongueurs = useMemo(
    () => getNbPlaquesOsbParLongueurs(piece, plaqueOsb),
    [piece]
  );
  const nbPlaquesOsbTotal = useMemo(
    () => getTotal(nbPlaquesOsbParLongueurs),
    [nbPlaquesOsbParLongueurs]
  );
  const nbLotsPlaquesOsb = useMemo(
    () => getNombreDeLots(nbPlaquesOsbTotal, plaqueOsb.lot),
    [nbPlaquesOsbTotal, plaqueOsb]
  );
  const prixLotsPlaquesOsbTotal = useMemo(
    () => nbLotsPlaquesOsb * plaqueOsb.prix,
    [nbLotsPlaquesOsb, plaqueOsb]
  );
  const nbTassaux1VisParLongueurs = useMemo(
    () =>
      getNbTassaux1VisParLongueurs(piece, nbPlaquesOsbParLongueurs, plaqueOsb),
    [piece]
  );
  const tasseaux1VisParLongueurs = useMemo(
    () =>
      piece.longueurs.map((longueur, index) =>
        getTasseauxUneLongueur(
          nbTassaux1VisParLongueurs[index],
          piece.tailleDesTassaux1Vis,
          tasseau
        )
      ),
    [piece]
  );
  const nbTassaux1VisTotal = useMemo(
    () => getTotal(nbTassaux1VisParLongueurs),
    [nbTassaux1VisParLongueurs]
  );
  const nbTassaux2VisParLongueurs = useMemo(
    () => getNbTassaux2VisParLongueurs(piece, nbPlaquesOsbParLongueurs),
    [piece]
  );
  const nbTassaux2VisTotal = useMemo(
    () => getTotal(nbTassaux2VisParLongueurs),
    [nbTassaux2VisParLongueurs]
  );
  const nbVisParLongueurs = useMemo(
    () =>
      getNbVisParLongueurs(
        piece,
        nbTassaux1VisParLongueurs,
        nbTassaux2VisParLongueurs
      ),
    [piece]
  );
  const nbVisTotal = useMemo(
    () => getTotal(nbVisParLongueurs),
    [nbVisParLongueurs]
  );
  const nbLotsVis = useMemo(
    () => getNombreDeLots(nbVisTotal, vis.lot),
    [nbVisTotal, vis]
  );
  const prixLotsVisTotal = useMemo(
    () => nbLotsVis * vis.prix,
    [nbLotsVis, vis]
  );
  const nbClousParLongueurs = useMemo(
    () =>
      getNbClousParLongueurs(
        piece,
        nbTassaux1VisParLongueurs,
        nbTassaux2VisParLongueurs
      ),
    [piece]
  );
  const nbClousTotal = useMemo(
    () => getTotal(nbClousParLongueurs),
    [nbClousParLongueurs]
  );
  const nbLotsClous = useMemo(
    () => getNombreDeLots(nbClousTotal, clou.lot),
    [nbClousTotal, clou]
  );
  const prixLotsClousTotal = useMemo(
    () => nbLotsClous * clou.prix,
    [nbLotsClous, clou]
  );
  return (
    <div id="longueurs-table--container">
      <table id="longueurs-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Dimension</th>
            {longueursTableUi.lainesBois && (
              <>
                <th>
                  Nb laines bois
                  <br />
                  <input
                    checked={longueursTableUi.lainesBoisChutes}
                    onChange={(e) =>
                      setLongueursTableUi({
                        ...longueursTableUi,
                        lainesBoisChutes: e.target.checked,
                      })
                    }
                    type="checkbox"
                  />{" "}
                  Chutes
                </th>
                {longueursTableUi.lainesBoisChutes && (
                  <>
                    <th>Chutes laine</th>
                  </>
                )}
              </>
            )}
            {longueursTableUi.plaquesOsb && (
              <>
                <th>
                  Nb plaques OSB
                  <br />
                  <input
                    checked={longueursTableUi.plaquesOsbChutes}
                    onChange={(e) =>
                      setLongueursTableUi({
                        ...longueursTableUi,
                        plaquesOsbChutes: e.target.checked,
                      })
                    }
                    type="checkbox"
                  />{" "}
                  Chutes
                </th>
                {longueursTableUi.plaquesOsbChutes && (
                  <>
                    <th>Chutes OSB</th>
                  </>
                )}
              </>
            )}
            {longueursTableUi.tasseaux && (
              <>
                <th>Nb tasseaux 1 vis</th>
                <th>Nb tasseaux 2 vis</th>
                <th>Tasseaux props</th>
              </>
            )}
            {longueursTableUi.visEtClous && (
              <>
                <th>Nb vis</th>
                <th>Nb clous</th>
              </>
            )}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {piece.longueurs.map((longueur, index) => (
            <UneLongueur
              key={longueur.id}
              longueur={longueur}
              laineBois={laineBois}
              sectionsLainesBois={sectionsEtChutesLaineBois[index].sections}
              chutesLainesBois={sectionsEtChutesLaineBois[index].reste}
              plaqueOsb={plaqueOsb}
              sectionsPlaquesOsb={sectionsEtChutesPlaquesOsb[index].sections}
              chutesPlaquesOsb={sectionsEtChutesPlaquesOsb[index].reste}
              nbTassaux1Vis={nbTassaux1VisParLongueurs[index]}
              tailleDesTasseaux1Vis={piece.tailleDesTassaux1Vis}
              tasseau={tasseau}
              nbTassaux2Vis={nbTassaux2VisParLongueurs[index]}
              nbVis={nbVisParLongueurs[index]}
              nbClous={nbClousParLongueurs[index]}
              longueursTableUI={longueursTableUi}
            />
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            {longueursTableUi.lainesBois && (
              <>
                <td className="cell-md">
                  {nbLotsLaineBois > 0 && laineBois.lot
                    ? `(${nbLainesBoisTotal} => ${nbLotsLaineBois} lot(s) de ${laineBois.lot}) `
                    : ""}
                  <br />
                  {nbLotsLaineBois * (laineBois.lot || 1)} ={" "}
                  {prixLotsLaineBoisTotal}€
                </td>
                {longueursTableUi.lainesBoisChutes && (
                  <>
                    <td></td>
                  </>
                )}
              </>
            )}
            {longueursTableUi.plaquesOsb && (
              <>
                <td className="cell-md">
                  {nbLotsPlaquesOsb > 0 && plaqueOsb.lot
                    ? `(${nbPlaquesOsbTotal} => ${nbLotsPlaquesOsb} lot(s) de ${plaqueOsb.lot}) `
                    : ""}
                  <br />
                  {nbLotsPlaquesOsb * (plaqueOsb.lot || 1)} ={" "}
                  {prixLotsPlaquesOsbTotal}€
                </td>
                {longueursTableUi.plaquesOsbChutes && (
                  <>
                    <td></td>
                    <td></td>
                  </>
                )}
              </>
            )}
            {longueursTableUi.tasseaux && (
              <>
                <td className="cell-md">{nbTassaux1VisTotal}</td>
                <td className="cell-md">{nbTassaux2VisTotal}</td>
              </>
            )}
            {longueursTableUi.visEtClous && (
              <>
                <td className="cell-md">
                  {nbLotsVis > 0 && vis.lot
                    ? `(${nbVisTotal} => ${nbLotsVis} lot(s) de ${vis.lot}) `
                    : ""}
                  <br />
                  {nbLotsVis * (vis.lot || 1)} = {prixLotsVisTotal}€
                </td>
                <td className="cell-md">
                  {nbLotsClous > 0 && clou.lot
                    ? `(${nbClousTotal} => ${nbLotsClous} lot(s) de ${clou.lot}) `
                    : ""}
                  <br />
                  {nbLotsClous * (clou.lot || 1)} = {prixLotsClousTotal}€
                </td>
              </>
            )}
            <td>
              {(
                prixLotsLaineBoisTotal +
                prixLotsPlaquesOsbTotal +
                prixLotsVisTotal +
                prixLotsClousTotal
              ).toFixed(2)}
              €
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
