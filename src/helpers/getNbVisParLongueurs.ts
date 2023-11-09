import { Piece } from "../types/Piece";

export function getNbVisParLongueurs(
  piece: Piece,
  nbTassaux1VisParLongueurs: number[],
  nbTassaux2VisParLongueurs: number[]
) {
  return piece.longueurs.map(
    (_, index) =>
      nbTassaux1VisParLongueurs[index] + nbTassaux2VisParLongueurs[index]
  );
}
