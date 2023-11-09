import { Piece } from "../types/Piece";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";

export function getNbPlaquesOsbParLongueurs(
  piece: Piece,
  plaqueOsb: PlaqueOsb
) {
  return piece.longueurs.map((longueur) =>
    Math.ceil(longueur.longueur / plaqueOsb.longueur)
  );
}
