import React from "react";
import { CLOUS_DATA } from "../data/clous.data";
import { LAINES_BOIS_DATA } from "../data/laines-bois.data";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { VIS_DATA } from "../data/vis.data";
import { Piece } from "../types/Piece";
import { Clou } from "../types/produits/Clou";
import { LaineBois } from "../types/produits/LaineBois";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";
import { Vis } from "../types/produits/Vis";
import { Tasseau } from "../types/produits/Tasseau";
import { TASSEAUX_DATA } from "../data/tasseaux.data";
import { UIState } from "../types/ui/UIState";

export default function VariablesGlobales({
  piece,
  setPiece,
  laineBois,
  plaqueOsb,
  vis,
  clou,
  tasseau,
  uIState,
  setUIState,
}: {
  piece: Piece;
  setPiece: (piece: Piece) => void;
  laineBois: LaineBois;
  plaqueOsb: PlaqueOsb;
  vis: Vis;
  clou: Clou;
  tasseau: Tasseau;
  uIState: UIState;
  setUIState: (uIState: UIState) => void;
}) {
  return (
    <div id="variables-globales">
      {uIState.lainesBois && (
        <>
          <div>
            <label>Laine de bois : </label>
            <select
              value={piece.laineBoisIndex}
              onChange={(e) =>
                setPiece({
                  ...piece,
                  laineBoisIndex: parseInt(e.target.value),
                })
              }
            >
              {LAINES_BOIS_DATA.map((laineBois, index) => (
                <option key={index} value={index}>
                  {laineBois.nom} - L {laineBois.longueur} x l{" "}
                  {laineBois.largeur} x Ep {laineBois.epaisseur} (R{" "}
                  {laineBois.resistanceThermique}) - {laineBois.prix}€
                </option>
              ))}
            </select>{" "}
            {laineBois.lien && (
              <a href={laineBois.lien} target="_blank">
                Voir
              </a>
            )}
          </div>
        </>
      )}
      {uIState.plaquesOsb && (
        <>
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
                  {plaqueOsb.nom} - L {plaqueOsb.longueur} x l{" "}
                  {plaqueOsb.largeur} x Ep {plaqueOsb.epaisseur} -{" "}
                  {plaqueOsb.prix}€
                </option>
              ))}
            </select>{" "}
            {plaqueOsb.lien && (
              <a href={plaqueOsb.lien} target="_blank">
                Voir
              </a>
            )}
          </div>
        </>
      )}
      {uIState.tasseaux && (
        <>
          <div id="variables-tassaux">
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
                  {distance} cm maximum
                </option>
              ))}
            </select>
            <label>Taille des tassaux 1 vis : </label>
            <input
              value={piece.tailleDesTassaux1Vis}
              onChange={(e) =>
                setPiece({
                  ...piece,
                  tailleDesTassaux1Vis: parseInt(e.target.value),
                })
              }
            />
            <label>Taille des tassaux 2 vis : </label>
            <input
              value={piece.tailleDesTassaux2Vis}
              onChange={(e) =>
                setPiece({
                  ...piece,
                  tailleDesTassaux2Vis: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label>Tasseau : </label>
            <select
              value={piece.tasseauIndex}
              onChange={(e) =>
                setPiece({
                  ...piece,
                  tasseauIndex: parseInt(e.target.value),
                })
              }
            >
              {TASSEAUX_DATA.map((tasseau, index) => (
                <option key={index} value={index}>
                  {tasseau.nom}- {tasseau.prix}€
                  {tasseau.lot
                    ? ` (${(tasseau.prix / tasseau.lot).toFixed(2)}€/u)`
                    : ""}
                </option>
              ))}
            </select>{" "}
            {tasseau.lien && (
              <a href={tasseau.lien} target="_blank">
                Voir
              </a>
            )}
          </div>
        </>
      )}
      {uIState.visEtClous && (
        <>
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
                  {vis.nom}- {vis.prix}€
                  {vis.lot ? ` (${(vis.prix / vis.lot).toFixed(2)}€/u)` : ""}
                </option>
              ))}
            </select>{" "}
            {vis.lien && (
              <a href={vis.lien} target="_blank">
                Voir
              </a>
            )}
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
                  {clou.nom}- {clou.prix}€
                  {clou.lot ? ` (${(clou.prix / clou.lot).toFixed(2)}€/u)` : ""}
                </option>
              ))}
            </select>{" "}
            {clou.lien && (
              <a href={clou.lien} target="_blank">
                Voir
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
}
