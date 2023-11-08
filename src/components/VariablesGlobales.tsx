import React from "react";
import { CLOUS_DATA } from "../data/clous.data";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { VIS_DATA } from "../data/vis.data";
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
          value={piece.plaqueOsbIndex}
          onChange={(e) =>
            setPiece({
              ...piece,
              plaqueOsbIndex: parseInt(e.target.value),
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
      <div>
        <label>Vis : </label>
        <select
          value={piece.visIndex}
          onChange={(e) =>
            setPiece({
              ...piece,
              visIndex: parseInt(e.target.value),
            })
          }
        >
          {VIS_DATA.map((vis, index) => (
            <option key={index} value={index}>
              {vis.nom} - L {vis.longueur} x l {vis.largeur} x par {vis.lot} -{" "}
              {vis.prix}€
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Clou : </label>
        <select
          value={piece.clouIndex}
          onChange={(e) =>
            setPiece({
              ...piece,
              clouIndex: parseInt(e.target.value),
            })
          }
        >
          {CLOUS_DATA.map((clou, index) => (
            <option key={index} value={index}>
              {clou.nom} - L {clou.longueur} x l {clou.largeur} x par {clou.lot}{" "}
              - {clou.prix}€
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
