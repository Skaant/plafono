import React, { useCallback, useMemo } from "react";
import { CLOUS_DATA } from "../data/clous.data";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { VIS_DATA } from "../data/vis.data";
import { getNbClousParLongueurs } from "../helpers/getNbClousParLongueurs";
import { getNbPlaquesOsbParLongueurs } from "../helpers/getNbPlaquesOsbParLongueurs";
import { getNbTassaux1VisParLongueurs } from "../helpers/getNbTassaux1VisParLongueurs";
import { getNbTassaux2VisParLongueurs } from "../helpers/getNbTassaux2VisParLongueurs";
import { getNbVisParLongueurs } from "../helpers/getNbVisParLongueurs";
import { getTotal } from "../helpers/getTotal";
import { Longueur } from "../types/Longueur";
import { Piece } from "../types/Piece";
import UneLongueur from "./UneLongueur";

export default function LongueursTable({
  piece,
  setPiece,
}: {
  piece: Piece;
  setPiece: (piece: Piece) => void;
}) {
  const plaqueOsb = useMemo(
    () => PLAQUES_OSB_DATA[piece.plaqueOsbIndex],
    [piece.plaqueOsbIndex]
  );
  const vis = useMemo(() => VIS_DATA[piece.visIndex], [piece.visIndex]);
  const clou = useMemo(() => CLOUS_DATA[piece.clouIndex], [piece.clouIndex]);
  const nbPlaquesOsbParLongueurs = useMemo(
    () => getNbPlaquesOsbParLongueurs(piece, plaqueOsb),
    [piece]
  );
  const nbPlaquesOsbTotal = useMemo(
    () => getTotal(nbPlaquesOsbParLongueurs),
    [nbPlaquesOsbParLongueurs]
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
    () => nbClousParLongueurs.reduce((acc, clous) => acc + clous, 0),
    [nbClousParLongueurs]
  );
  const updateLongueur = useCallback(
    (index: number, longueur: Longueur) => {
      const longueurs = [...piece.longueurs];
      longueurs[index] = longueur;
      setPiece({
        ...piece,
        longueurs,
      });
    },
    [piece]
  );
  return (
    <table id="longueurs-table">
      <thead>
        <tr>
          <th>°</th>
          <th>Longueur</th>
          <th>larg MAX</th>
          <th>larg MIN</th>
          <th>Δ</th>
          <th>Nb plaques OSB</th>
          <th>Chute OSB Long</th>
          <th>Chute OSB larg</th>
          <th>Nb tassaux 1 vis</th>
          <th>Nb tassaux 2 vis</th>
          <th>Nb vis</th>
          <th>Nb clous</th>
        </tr>
      </thead>
      <tbody>
        {piece.longueurs.map((longueur, index) => (
          <UneLongueur
            key={longueur.id}
            index={index}
            longueur={longueur}
            plaqueOsb={plaqueOsb}
            nbPlaquesOsb={nbPlaquesOsbParLongueurs[index]}
            nbTassaux1Vis={nbTassaux1VisParLongueurs[index]}
            nbTassaux2Vis={nbTassaux2VisParLongueurs[index]}
            nbVis={nbVisParLongueurs[index]}
            nbClous={nbClousParLongueurs[index]}
            updateLongueur={updateLongueur}
          />
        ))}
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="cell-md">
            {nbPlaquesOsbTotal} ={" "}
            {Math.round(nbPlaquesOsbTotal * plaqueOsb.prix)}€
          </td>
          <td></td>
          <td></td>
          <td className="cell-md">{nbTassaux1VisTotal}</td>
          <td className="cell-md">{nbTassaux2VisTotal}</td>
          <td className="cell-md">
            {nbVisTotal} = {(Math.ceil(nbVisTotal / vis.lot) + 1) * vis.prix}€
          </td>
          <td className="cell-md">
            {nbClousTotal} ={" "}
            {(Math.ceil(nbClousTotal / clou.lot) + 1) * clou.prix}€
          </td>
        </tr>
      </tbody>
    </table>
  );
}
