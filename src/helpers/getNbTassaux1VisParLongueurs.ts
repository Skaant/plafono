import { Piece } from "../types/Piece";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";

export function getNbTassaux1VisParLongueurs(
  piece: Piece,
  nbPlaquesOsbParLongueurs: number[],
  plaqueOsb: PlaqueOsb
) {
  return piece.longueurs.map(
    (_, index) =>
      (2 +
        nbPlaquesOsbParLongueurs[index] *
          Math.ceil(plaqueOsb.longueur / piece.distanceEntreTassaux)) *
      2
  );
}
