import React from "react";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { Piece } from "../types/Piece";

export default function VariablesGlobales({
  piece,
  setPiece,
}: {
  piece: Piece;
  setPiece: (piece: Piece) => void;
}) {
  return (
    <div>
      <div>
        <label>Nombre de longueurs NBL : </label>
        {piece.nombreLongueurs}
      </div>
      <div>
        <label>Plaque OSB : </label>
        <select
          value={piece.plaqueOsb}
          onChange={(e) =>
            setPiece({
              ...piece,
              plaqueOsb: parseInt(e.target.value),
            })
          }
        >
          {PLAQUES_OSB_DATA.map((plaqueOsb, index) => (
            <option key={index} value={index}>
              {plaqueOsb.nom} - L {plaqueOsb.longueur} x l {plaqueOsb.largeur} x
              Ep {plaqueOsb.epaisseur} - {plaqueOsb.prix}€
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Distance entre tassaux : </label>
        <select
          value={piece.distanceEntreTassaux}
          onChange={(e) =>
            setPiece({
              ...piece,
              distanceEntreTassaux: parseInt(e.target.value),
            })
          }
        >
          {[15, 20, 30, 40, 50, 60, 75].map((distance, index) => (
            <option key={index} value={distance}>
              {distance}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
