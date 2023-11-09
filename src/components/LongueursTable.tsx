import React, { useMemo } from "react";
import { CLOUS_DATA } from "../data/clous.data";
import { LAINES_BOIS_DATA } from "../data/laines-bois.data";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { VIS_DATA } from "../data/vis.data";
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
import UneLongueur from "./UneLongueur";

export default function LongueursTable({
  piece,
  laineBois,
  plaqueOsb,
}: {
  piece: Piece;
  laineBois: LaineBois;
  plaqueOsb: PlaqueOsb;
}) {
  const vis = useMemo(() => VIS_DATA[piece.visIndex], [piece.visIndex]);
  const clou = useMemo(() => CLOUS_DATA[piece.clouIndex], [piece.clouIndex]);
  const nbLainesBoisParLongueurs = useMemo(
    () => getNbItemsParLongueur(piece, plaqueOsb),
    [piece]
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
    <table id="longueurs-table">
      <thead>
        <tr>
          <th>°</th>
          <th>Longueur</th>
          <th>largeur</th>
          <th>Nb laines bois</th>
          <th>Chute laine Long</th>
          <th>Chute laine larg</th>
          <th>Nb plaques OSB</th>
          <th>Chute OSB Long</th>
          <th>Chute OSB larg</th>
          <th>Nb tassaux 1 vis</th>
          <th>Nb tassaux 2 vis</th>
          <th>Nb vis</th>
          <th>Nb clous</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {piece.longueurs.map((longueur, index) => (
          <UneLongueur
            key={longueur.id}
            index={index}
            longueur={longueur}
            laineBois={laineBois}
            nbLainesBois={nbLainesBoisParLongueurs[index]}
            plaqueOsb={plaqueOsb}
            nbPlaquesOsb={nbPlaquesOsbParLongueurs[index]}
            nbTassaux1Vis={nbTassaux1VisParLongueurs[index]}
            nbTassaux2Vis={nbTassaux2VisParLongueurs[index]}
            nbVis={nbVisParLongueurs[index]}
            nbClous={nbClousParLongueurs[index]}
          />
        ))}
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td className="cell-md">
            {nbLotsLaineBois > 0 && laineBois.lot
              ? `(${nbLainesBoisTotal} => ${nbLotsLaineBois} lot(s) de ${laineBois.lot}) `
              : ""}
            <br />
            {nbLotsLaineBois * (laineBois.lot || 1)} = {prixLotsLaineBoisTotal}€
          </td>
          <td></td>
          <td></td>
          <td className="cell-md">
            {nbLotsPlaquesOsb > 0 && plaqueOsb.lot
              ? `(${nbPlaquesOsbTotal} => ${nbLotsPlaquesOsb} lot(s) de ${plaqueOsb.lot}) `
              : ""}
            <br />
            {nbLotsPlaquesOsb * (plaqueOsb.lot || 1)} ={" "}
            {prixLotsPlaquesOsbTotal}€
          </td>
          <td></td>
          <td></td>
          <td className="cell-md">{nbTassaux1VisTotal}</td>
          <td className="cell-md">{nbTassaux2VisTotal}</td>
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
          <td>
            {prixLotsLaineBoisTotal +
              prixLotsPlaquesOsbTotal +
              prixLotsVisTotal +
              prixLotsClousTotal}
            €
          </td>
        </tr>
      </tbody>
    </table>
  );
}
