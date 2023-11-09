import { Piece } from "../types/Piece";

export function getNbClousParLongueurs(
  piece: Piece,
  nbTassaux1VisParLongueurs: number[],
  nbTassaux2VisParLongueurs: number[]
) {
  return piece.longueurs.map(
    (_, index) =>
      2 * (nbTassaux1VisParLongueurs[index] + nbTassaux2VisParLongueurs[index])
  );
}
