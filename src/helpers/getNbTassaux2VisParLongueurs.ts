import { Piece } from "../types/Piece";

export function getNbTassaux2VisParLongueurs(
  piece: Piece,
  nbPlaquesOsbParLongueurs: number[]
) {
  return piece.longueurs.map(
    (_, index) => (nbPlaquesOsbParLongueurs[index] - 1) * 2
  );
}
