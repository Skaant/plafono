import React, { useCallback, useMemo } from "react";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
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
  const nbPlaquesOsbTotal = useMemo(
    () =>
      piece.longueurs.reduce(
        (acc, longueur) =>
          acc +
          Math.ceil(
            longueur.longueur / PLAQUES_OSB_DATA[piece.plaqueOsb].longueur
          ),
        0
      ),
    [piece]
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
        </tr>
      </thead>
      <tbody>
        {piece.longueurs.map((longueur, index) => (
          <UneLongueur
            key={longueur.id}
            index={index}
            longueur={longueur}
            piece={piece}
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
            {Math.round(
              nbPlaquesOsbTotal * PLAQUES_OSB_DATA[piece.plaqueOsb].prix
            )}
            €
          </td>
        </tr>
      </tbody>
    </table>
  );
}
